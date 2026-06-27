import { Helmet } from "react-helmet-async";
import widescreenImg from "@/assets/hitakshi-widescreen.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-12">
      <Helmet>
        <title>Hitakshi Arora — AI Agent Engineer & Software Developer</title>
        <meta
          name="description"
          content="Portfolio of Hitakshi Arora — AI agent engineer and software developer shipping autonomous systems, multi-agent workflows, and production AI products."
        />
        <link rel="canonical" href="https://hitakshii.lovable.app/" />
        <meta property="og:title" content="Hitakshi Arora — AI Agent Engineer & Software Developer" />
        <meta
          property="og:description"
          content="Portfolio of Hitakshi Arora — AI agent engineer and software developer shipping autonomous systems and production AI products."
        />
        <meta property="og:url" content="https://hitakshii.lovable.app/" />
      </Helmet>
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
          Hitakshi Arora — AI Agent Engineer & Software Developer
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
