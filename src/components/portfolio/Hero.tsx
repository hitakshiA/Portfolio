const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container-narrow py-20 md:py-32">
        <p className="text-primary font-mono text-sm tracking-wide mb-6">
          Hi, I'm
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
          Hitakshi Arora
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-muted-foreground mb-8">
          I build reliable software.
        </h2>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
          Full-stack and Android developer specializing in scalable applications, 
          data pipelines, and developer tools. Currently seeking full-time opportunities.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
        
        <div className="flex items-center gap-6 mt-16 pt-8 border-t border-border">
          <a
            href="https://github.com/hitakshiA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors link-underline text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hitakshiaroraa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors link-underline text-sm font-medium"
          >
            LinkedIn
          </a>
          <a
            href="mailto:hitakshi220@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors link-underline text-sm font-medium"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-muted-foreground hover:text-foreground transition-colors link-underline text-sm font-medium"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
