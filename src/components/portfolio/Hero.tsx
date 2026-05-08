import { useEffect, useRef, useState } from "react";
import widescreenImg from "@/assets/hitakshi-widescreen.png";
import portfolioVideo from "@/assets/hitakshi-portfolio.webm";
import ChatModal from "./ChatModal";

const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (hovering && videoReady) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [hovering, videoReady]);

  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-6 text-center w-full">
        <div className="flex flex-wrap justify-center gap-3 text-[14px] mb-6">
          <a href="https://linkedin.com/in/hitakshiaroraa" target="_blank" rel="noopener noreferrer" className="text-[hsl(211,100%,40%)] hover:underline">LinkedIn</a>
          <span className="text-muted-foreground">·</span>
          <a href="https://github.com/hitakshiA" target="_blank" rel="noopener noreferrer" className="text-[hsl(211,100%,40%)] hover:underline">GitHub</a>
          <span className="text-muted-foreground">·</span>
          <a href="mailto:hitakshi220@gmail.com" className="text-[hsl(211,100%,40%)] hover:underline">Email</a>
          <span className="text-muted-foreground">·</span>
          <a href="/resume" className="text-[hsl(211,100%,40%)] hover:underline">Resume</a>
        </div>
        <h1 className="text-display font-display text-foreground mb-5">
          Hitakshi Arora
        </h1>
        <p className="text-sub text-muted-foreground max-w-2xl mx-auto mb-10">
          Full-Stack & Android developer building scalable, considered products.
          Currently open to full-time opportunities.
        </p>

        <div className="mx-auto w-full max-w-[900px]">
          <div
            className="surface-card overflow-hidden aspect-[16/9] relative group cursor-pointer"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <img
              src={widescreenImg}
              alt="Hitakshi Arora"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                hovering && videoReady ? "opacity-0" : "opacity-100"
              }`}
            />
            <video
              ref={videoRef}
              src={portfolioVideo}
              muted
              loop
              playsInline
              preload="auto"
              onCanPlayThrough={() => setVideoReady(true)}
              className={`absolute inset-0 w-full h-full object-cover scale-110 transition-opacity duration-500 ${
                hovering && videoReady ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Hover meeting UI overlay */}
            <div
              className={`absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-300 ${
                hovering ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-full bg-black/55 backdrop-blur-md">
                <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white" aria-hidden>
                  {/* mic */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </span>
                <span className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white" aria-hidden>
                  {/* camera */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); setChatOpen(true); }}
                  className="px-5 h-10 rounded-full bg-[hsl(211,100%,45%)] text-white text-[14px] font-medium hover:bg-[hsl(211,100%,40%)] transition-colors"
                >
                  Chat with me
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
    </section>
  );
};

export default Hero;
