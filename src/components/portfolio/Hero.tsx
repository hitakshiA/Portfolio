import { useState } from "react";
import hitakshiPhoto from "@/assets/hitakshi-photo.jpeg";
import ChatModal from "./ChatModal";

const Hero = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <p className="text-eyebrow font-display text-foreground mb-3">Hitakshi Arora</p>
        <h1 className="text-display font-display text-foreground mb-5">
          Software, crafted<br />with intent.
        </h1>
        <p className="text-sub text-muted-foreground max-w-2xl mx-auto mb-8">
          Full-Stack & Android developer building scalable, considered products.
          Currently open to full-time opportunities.
        </p>
        <div className="flex items-center justify-center gap-5 mb-16">
          <button onClick={() => setChatOpen(true)} className="btn-azure">
            Chat with me
          </button>
          <a href="#projects" className="btn-ghost">
            See the work &rsaquo;
          </a>
        </div>

        <div className="mx-auto w-full max-w-[640px]">
          <div className="surface-card overflow-hidden aspect-[4/5] sm:aspect-[16/10]">
            <img
              src={hitakshiPhoto}
              alt="Hitakshi Arora"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3 text-[14px]">
          <a href="https://linkedin.com/in/hitakshiaroraa" target="_blank" rel="noopener noreferrer" className="text-[hsl(211,100%,40%)] hover:underline">LinkedIn</a>
          <span className="text-muted-foreground">·</span>
          <a href="https://github.com/hitakshiA" target="_blank" rel="noopener noreferrer" className="text-[hsl(211,100%,40%)] hover:underline">GitHub</a>
          <span className="text-muted-foreground">·</span>
          <a href="mailto:hitakshi220@gmail.com" className="text-[hsl(211,100%,40%)] hover:underline">Email</a>
          <span className="text-muted-foreground">·</span>
          <a href="/resume" className="text-[hsl(211,100%,40%)] hover:underline">Resume</a>
        </div>
      </div>
      <ChatModal open={chatOpen} onClose={() => setChatOpen(false)} />
    </section>
  );
};

export default Hero;
