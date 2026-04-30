import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ChatModal = ({ open, onClose }: Props) => {
  const [url, setUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setError(null);
    setUrl(null);
    setLoading(true);

    (async () => {
      try {
        const { data, error } = await supabase.functions.invoke("tavus-create-conversation", {
          body: {},
        });
        if (cancelled) return;
        if (error) throw error;
        if (!data?.conversation_url) throw new Error("No conversation_url returned");
        setUrl(data.conversation_url);
      } catch (e: any) {
        if (!cancelled) setError(e?.message || "Failed to start conversation");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] sm:h-[85vh] bg-background brutalist-border flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b-2 border-foreground px-4 py-3">
          <div className="font-mono text-xs sm:text-sm uppercase tracking-wider">
            <span className="text-muted-foreground">~/</span>
            <span className="font-bold">chat-with-hitakshi.live</span>
            <span className="animate-pulse">_</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close chat"
            className="font-mono text-xs uppercase px-3 py-1.5 brutalist-border hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            [ ESC ✕ ]
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 relative bg-foreground/5">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 font-mono text-xs sm:text-sm">
              <div className="uppercase tracking-widest text-muted-foreground">
                &gt; initializing video stream
                <span className="animate-pulse">_</span>
              </div>
              <pre className="text-[10px] sm:text-xs leading-tight text-foreground/60 select-none">
{`  ┌─────────────┐
  │  ◉  ◉  ◉   │
  │             │
  │   ▰▰▰▰▰▰   │
  └─────────────┘`}
              </pre>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 font-mono text-xs sm:text-sm text-center">
              <div className="uppercase tracking-widest">[ ERROR ]</div>
              <div className="text-muted-foreground max-w-md break-words">{error}</div>
              <button
                onClick={onClose}
                className="mt-2 px-4 py-2 brutalist-border hover:bg-primary hover:text-primary-foreground transition-colors uppercase"
              >
                Close
              </button>
            </div>
          )}

          {url && !error && (
            <iframe
              src={url}
              allow="camera; microphone; fullscreen; display-capture; autoplay"
              className="w-full h-full border-0"
              title="Chat with Hitakshi"
            />
          )}
        </div>

        {/* Footer */}
        <div className="border-t-2 border-foreground px-4 py-2 font-mono text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider flex items-center justify-between">
          <span>&gt; powered by tavus cvi</span>
          <span className="hidden sm:inline">grant camera + mic access to begin</span>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
