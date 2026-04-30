import { useEffect, useState } from "react";
import hitakshiPhoto from "@/assets/hitakshi-photo.jpeg";
import ChatModal from "./ChatModal";

const FINAL_TEXT = "[ CHAT WITH ME >> ]";

const Hero = () => {
  const [hovered, setHovered] = useState(false);
  const [displayed, setDisplayed] = useState("");
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    if (!hovered) {
      setDisplayed("");
      return;
    }
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(FINAL_TEXT.slice(0, i));
      if (i >= FINAL_TEXT.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [hovered]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 relative">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-8">
          {/* Left: photo */}
          <div className="flex-shrink-0">
            <div
              className="relative w-72 h-[22rem] md:w-96 md:h-[30rem] overflow-hidden brutalist-border group"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <img src={hitakshiPhoto} alt="Hitakshi Arora" className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
              <button
                type="button"
                onClick={() => setChatOpen(true)}
                aria-label="Chat with Hitakshi"
                className="absolute bottom-3 right-3 px-3 py-2 bg-primary text-primary-foreground brutalist-border font-mono text-xs uppercase tracking-wider opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 whitespace-pre hover:bg-foreground hover:text-background md:opacity-0 max-md:opacity-100 max-md:translate-y-0"
              >
                {displayed || FINAL_TEXT}<span className="animate-pulse">_</span>
              </button>
            </div>
          </div>

          {/* Right: name + bio + links */}
          <div className="flex-1">
            <h1 className="text-5xl md:text-[5rem] lg:text-[7rem] xl:text-[9rem] font-black uppercase tracking-tighter leading-[0.85] mb-6">
              <span className="highlight">HITAKSHI</span>
              <br />
              ARORA
            </h1>

            <p className="text-sm md:text-base font-mono text-muted-foreground max-w-md leading-relaxed mb-6">
              Full-Stack & Android Developer — Building scalable applications with clean, efficient code. 
              Passionate about solving complex problems and creating impactful products.
            </p>

            <div className="flex flex-wrap gap-3 font-mono text-xs">
              <a href="https://linkedin.com/in/hitakshiaroraa" target="_blank" rel="noopener noreferrer" className="px-4 py-2 brutalist-border hover:bg-primary transition-colors uppercase tracking-wider">LinkedIn</a>
              <a href="https://github.com/hitakshiA" target="_blank" rel="noopener noreferrer" className="px-4 py-2 brutalist-border hover:bg-primary transition-colors uppercase tracking-wider">GitHub</a>
              <a href="mailto:hitakshi220@gmail.com" className="px-4 py-2 brutalist-border hover:bg-primary transition-colors uppercase tracking-wider">Email</a>
              <a href="/resume" className="px-4 py-2 bg-primary text-primary-foreground brutalist-border uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors">Resume ↗</a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-foreground" />
      </div>
    </section>
  );
};

export default Hero;
