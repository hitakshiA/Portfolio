import hitakshiPhoto from "@/assets/hitakshi-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 relative">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 py-20">
          {/* Large name */}
          <div className="flex-1">
            <h1 className="text-7xl md:text-[9rem] lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.85] mb-8">
              <span className="block">HITA</span>
              <span className="block">
                <span className="highlight">KSHI</span>
              </span>
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

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-48 h-60 md:w-64 md:h-80 overflow-hidden brutalist-border">
              <img src={hitakshiPhoto} alt="Hitakshi Arora" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Horizontal rule */}
        <div className="border-t-2 border-foreground" />
      </div>
    </section>
  );
};

export default Hero;
