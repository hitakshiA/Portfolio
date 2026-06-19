import widescreenImg from "@/assets/hitakshi-widescreen.png";

const Hero = () => {
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
        <h1 className="text-display font-display text-foreground mb-8">
          Hitakshi Arora
        </h1>

        <div className="mx-auto w-full max-w-[1100px]">
          <div className="surface-card overflow-hidden aspect-[16/9] relative">
            <img
              src={widescreenImg}
              alt="Hitakshi Arora"
              className="absolute inset-0 w-full h-full object-cover scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
