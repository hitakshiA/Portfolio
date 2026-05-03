import { useEffect, useRef, useState } from "react";
import DailyIframe, { DailyCall, DailyParticipant } from "@daily-co/daily-js";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  open: boolean;
  onClose: () => void;
}

type Stage = "creating" | "haircheck" | "live" | "error";
type NetQuality = "idle" | "testing" | "good" | "warning" | "bad" | "failed";

const ChatModal = ({ open, onClose }: Props) => {
  const [stage, setStage] = useState<Stage>("creating");
  const [error, setError] = useState<string | null>(null);
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);
  const [netQuality, setNetQuality] = useState<NetQuality>("idle");
  const [replicaJoined, setReplicaJoined] = useState(false);
  const [camOn, setCamOn] = useState(true);
  const [micOn, setMicOn] = useState(true);

  const callRef = useRef<DailyCall | null>(null);
  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const replicaVideoRef = useRef<HTMLVideoElement | null>(null);
  const replicaAudioRef = useRef<HTMLAudioElement | null>(null);

  // ---------- Lifecycle: create conversation + call object ----------
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setStage("creating");
    setError(null);
    setConversationUrl(null);
    setReplicaJoined(false);
    setNetQuality("idle");

    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("tavus-create-conversation", { body: {} });
        if (cancelled) return;
        if (error) throw error;
        if (!data?.conversation_url) throw new Error("No conversation_url returned");

        const url: string = data.conversation_url;
        setConversationUrl(url);

        // Build call object
        const call = DailyIframe.createCallObject({
          subscribeToTracksAutomatically: true,
        });
        callRef.current = call;

        attachCallListeners(call);

        // Pre-auth + start camera for hair check preview
        await call.startCamera();

        // Pre-join the room in background so the replica can connect while user previews devices
        call.join({ url }).catch((e) => {
          console.warn("[ChatModal] background join failed:", e);
        });

        if (cancelled) return;
        setStage("haircheck");

        // Run network quality test in parallel
        runNetworkTest(call);
      } catch (e: any) {
        if (cancelled) return;
        setError(e?.message || "Failed to start conversation");
        setStage("error");
      }
    })();

    return () => {
      cancelled = true;
      teardown();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // ---------- Escape + scroll lock ----------
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // ---------- Helpers ----------
  const attachCallListeners = (call: DailyCall) => {
    call.on("participant-joined", (ev) => {
      const p = ev?.participant;
      if (!p) return;
      // Any non-local participant in a 1:1 Tavus call is the replica
      if (!p.local) {
        setReplicaJoined(true);
        bindReplicaTracks(p);
      }
    });

    call.on("participant-updated", (ev) => {
      const p = ev?.participant;
      if (!p) return;
      if (p.local) {
        bindLocalVideo(p);
      } else {
        bindReplicaTracks(p);
      }
    });

    call.on("left-meeting", () => {
      // user left or call ended
    });

    call.on("error", (e: any) => {
      console.error("[Daily error]", e);
      setError(e?.errorMsg || "Video call error");
      setStage("error");
    });
  };

  const bindLocalVideo = (p: DailyParticipant) => {
    const track = p.tracks?.video?.persistentTrack;
    const el = localVideoRef.current;
    if (!el) return;
    if (track) {
      const stream = new MediaStream([track]);
      if (el.srcObject !== stream) el.srcObject = stream;
    } else {
      el.srcObject = null;
    }
  };

  const bindReplicaTracks = (p: DailyParticipant) => {
    const vTrack = p.tracks?.video?.persistentTrack;
    const aTrack = p.tracks?.audio?.persistentTrack;
    const v = replicaVideoRef.current;
    const a = replicaAudioRef.current;
    if (v) {
      if (vTrack) {
        const s = new MediaStream([vTrack]);
        if (v.srcObject !== s) v.srcObject = s;
      } else v.srcObject = null;
    }
    if (a) {
      if (aTrack) {
        const s = new MediaStream([aTrack]);
        if (a.srcObject !== s) a.srcObject = s;
      } else a.srcObject = null;
    }
  };

  const runNetworkTest = async (call: DailyCall) => {
    try {
      setNetQuality("testing");
      // testCallQuality runs up to ~30s; we don't await before showing UI
      const res: any = await (call as any).testCallQuality?.();
      const r = res?.result as string | undefined;
      if (r === "good") setNetQuality("good");
      else if (r === "warning") setNetQuality("warning");
      else if (r === "bad") setNetQuality("bad");
      else setNetQuality("failed");
    } catch (e) {
      console.warn("[ChatModal] network test failed", e);
      setNetQuality("failed");
    }
  };

  const toggleCam = async () => {
    const c = callRef.current;
    if (!c) return;
    const next = !camOn;
    setCamOn(next);
    await c.setLocalVideo(next);
  };

  const toggleMic = async () => {
    const c = callRef.current;
    if (!c) return;
    const next = !micOn;
    setMicOn(next);
    await c.setLocalAudio(next);
  };

  const enterCall = () => {
    // Re-bind replica tracks in the live view refs after stage change
    setStage("live");
    requestAnimationFrame(() => {
      const c = callRef.current;
      if (!c) return;
      const ps = c.participants();
      Object.values(ps).forEach((p) => {
        if (p.local) bindLocalVideo(p);
        else bindReplicaTracks(p);
      });
    });
  };

  const teardown = () => {
    const c = callRef.current;
    callRef.current = null;
    if (c) {
      try {
        c.leave();
      } catch {}
      try {
        c.destroy();
      } catch {}
    }
    if (localVideoRef.current) localVideoRef.current.srcObject = null;
    if (replicaVideoRef.current) replicaVideoRef.current.srcObject = null;
    if (replicaAudioRef.current) replicaAudioRef.current.srcObject = null;
  };

  const handleClose = () => {
    teardown();
    onClose();
  };

  if (!open) return null;

  // ---------- UI ----------
  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-background brutalist-border flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-foreground px-4 py-3">
          <div className="font-mono text-xs sm:text-sm uppercase tracking-wider truncate">
            <span className="text-muted-foreground">~/</span>
            <span className="font-bold">chat-with-hitakshi.live</span>
            <span className="text-muted-foreground"> — {stage}</span>
            <span className="animate-pulse">_</span>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close chat"
            className="font-mono text-xs uppercase px-3 py-1.5 brutalist-border hover:bg-primary hover:text-primary-foreground transition-colors shrink-0"
          >
            [ ESC ✕ ]
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 relative bg-foreground/5 overflow-hidden">
          {stage === "creating" && <CreatingView />}

          {stage === "error" && <ErrorView error={error} onClose={handleClose} />}

          {stage === "haircheck" && (
            <HairCheckView
              localVideoRef={localVideoRef}
              camOn={camOn}
              micOn={micOn}
              toggleCam={toggleCam}
              toggleMic={toggleMic}
              netQuality={netQuality}
              replicaJoined={replicaJoined}
              onJoin={enterCall}
            />
          )}

          {stage === "live" && (
            <LiveView
              replicaVideoRef={replicaVideoRef}
              replicaAudioRef={replicaAudioRef}
              localVideoRef={localVideoRef}
              camOn={camOn}
              micOn={micOn}
              toggleCam={toggleCam}
              toggleMic={toggleMic}
              onLeave={handleClose}
            />
          )}
        </div>

        {/* Footer */}
        <div className="border-t-2 border-foreground px-4 py-2 font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider flex items-center justify-end">
          <span className="hidden sm:inline">grant camera + mic to begin</span>
        </div>
      </div>
    </div>
  );
};

/* =================== Subviews =================== */

const CreatingView = () => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 font-mono text-xs sm:text-sm">
    <div className="uppercase tracking-widest text-muted-foreground">
      &gt; spinning up replica<span className="animate-pulse">_</span>
    </div>
    <pre className="text-[10px] sm:text-xs leading-tight text-foreground/60 select-none">
{`  ┌─────────────┐
  │  ◉  ◉  ◉   │
  │             │
  │   ▰▰▰▰▰▰   │
  └─────────────┘`}
    </pre>
  </div>
);

const ErrorView = ({ error, onClose }: { error: string | null; onClose: () => void }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 font-mono text-xs sm:text-sm text-center">
    <div className="uppercase tracking-widest font-bold">[ ERROR ]</div>
    <div className="text-muted-foreground max-w-md break-words">{error}</div>
    <button
      onClick={onClose}
      className="mt-2 px-4 py-2 brutalist-border hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
    >
      Close
    </button>
  </div>
);

const NetBadge = ({ q }: { q: NetQuality }) => {
  const map: Record<NetQuality, { label: string; cls: string }> = {
    idle: { label: "NET: —", cls: "text-muted-foreground" },
    testing: { label: "NET: TESTING…", cls: "text-muted-foreground" },
    good: { label: "NET: GOOD ✓", cls: "bg-primary text-primary-foreground px-2" },
    warning: { label: "NET: WARNING ⚠", cls: "bg-yellow-300 text-black px-2" },
    bad: { label: "NET: POOR ✕", cls: "bg-red-500 text-white px-2" },
    failed: { label: "NET: TEST FAILED", cls: "text-muted-foreground" },
  };
  const v = map[q];
  return <span className={`font-mono text-[10px] sm:text-xs uppercase tracking-wider brutalist-border py-1 ${v.cls}`}>{v.label}</span>;
};

const HairCheckView = ({
  localVideoRef,
  camOn,
  micOn,
  toggleCam,
  toggleMic,
  netQuality,
  replicaJoined,
  onJoin,
}: {
  localVideoRef: React.RefObject<HTMLVideoElement>;
  camOn: boolean;
  micOn: boolean;
  toggleCam: () => void;
  toggleMic: () => void;
  netQuality: NetQuality;
  replicaJoined: boolean;
  onJoin: () => void;
}) => {
  return (
    <div className="absolute inset-0 flex flex-col gap-4 p-4 sm:p-6 overflow-y-auto">
      <div className="flex flex-col gap-3 flex-1 min-h-[240px]">
        <div className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground">&gt; device_preview.cam</div>
        <div className="relative flex-1 brutalist-border bg-black overflow-hidden min-h-[220px]">
          {camOn ? (
            <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover [transform:scaleX(-1)]" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase text-white/60">
              [ CAMERA OFF ]
            </div>
          )}
          <div className="absolute top-2 left-2 font-mono text-[10px] uppercase tracking-wider bg-black/70 text-white px-2 py-1">
            ● YOU
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={toggleCam}
            className={`flex-1 font-mono text-xs uppercase tracking-wider px-3 py-2 brutalist-border transition-colors ${
              camOn ? "hover:bg-primary hover:text-primary-foreground" : "bg-foreground text-background"
            }`}
          >
            {camOn ? "CAM ON" : "CAM OFF"}
          </button>
          <button
            onClick={toggleMic}
            className={`flex-1 font-mono text-xs uppercase tracking-wider px-3 py-2 brutalist-border transition-colors ${
              micOn ? "hover:bg-primary hover:text-primary-foreground" : "bg-foreground text-background"
            }`}
          >
            {micOn ? "MIC ON" : "MIC OFF"}
          </button>
        </div>
      </div>

      <button
        onClick={onJoin}
        disabled={!replicaJoined}
        className="w-full font-mono text-sm uppercase tracking-widest px-4 py-4 bg-primary text-primary-foreground brutalist-border hover:bg-foreground hover:text-background transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-primary disabled:hover:text-primary-foreground"
      >
        {replicaJoined ? "[ JOIN CONVERSATION >> ]" : "[ CONNECTING… ]"}
      </button>
    </div>
  );
};

const StatusRow = ({
  label,
  ok,
  pending,
  warn,
  pendingText,
  okText,
  warnText,
}: {
  label: string;
  ok: boolean;
  pending: boolean;
  warn?: boolean;
  pendingText: string;
  okText: string;
  warnText?: string;
}) => (
  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider">
    <span>{label}</span>
    <span
      className={
        ok
          ? "text-foreground font-bold"
          : warn
          ? "text-foreground font-bold"
          : "text-muted-foreground animate-pulse"
      }
    >
      {ok ? okText : warn ? warnText : pendingText}
    </span>
  </div>
);

const LiveView = ({
  replicaVideoRef,
  replicaAudioRef,
  localVideoRef,
  camOn,
  micOn,
  toggleCam,
  toggleMic,
  onLeave,
}: {
  replicaVideoRef: React.RefObject<HTMLVideoElement>;
  replicaAudioRef: React.RefObject<HTMLAudioElement>;
  localVideoRef: React.RefObject<HTMLVideoElement>;
  camOn: boolean;
  micOn: boolean;
  toggleCam: () => void;
  toggleMic: () => void;
  onLeave: () => void;
}) => (
  <div className="absolute inset-0 bg-black">
    <video ref={replicaVideoRef} autoPlay playsInline className="w-full h-full object-cover" />
    <audio ref={replicaAudioRef} autoPlay />

    {/* Local PiP */}
    <div className="absolute top-3 right-3 w-28 h-40 sm:w-40 sm:h-56 brutalist-border bg-black overflow-hidden">
      {camOn ? (
        <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover [transform:scaleX(-1)]" />
      ) : (
        <div className="w-full h-full flex items-center justify-center font-mono text-[10px] uppercase text-white/60">CAM OFF</div>
      )}
    </div>

    {/* Controls */}
    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
      <button
        onClick={toggleMic}
        className={`font-mono text-xs uppercase tracking-wider px-4 py-3 brutalist-border ${
          micOn ? "bg-background text-foreground hover:bg-primary hover:text-primary-foreground" : "bg-foreground text-background"
        } transition-colors`}
      >
        {micOn ? "MIC ON" : "MIC OFF"}
      </button>
      <button
        onClick={toggleCam}
        className={`font-mono text-xs uppercase tracking-wider px-4 py-3 brutalist-border ${
          camOn ? "bg-background text-foreground hover:bg-primary hover:text-primary-foreground" : "bg-foreground text-background"
        } transition-colors`}
      >
        {camOn ? "CAM ON" : "CAM OFF"}
      </button>
      <button
        onClick={onLeave}
        className="font-mono text-xs uppercase tracking-wider px-4 py-3 brutalist-border bg-red-500 text-white hover:bg-red-600 transition-colors"
      >
        [ LEAVE ✕ ]
      </button>
    </div>
  </div>
);

export default ChatModal;
