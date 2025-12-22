const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-mono">
            Available for opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          Hitakshi<br />
          <span className="text-gradient">Arora</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
          Full-Stack & Android Developer
        </p>
        
        <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
          Building scalable applications with clean, efficient code. 
          Passionate about solving complex problems and creating impactful products.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <a
            href="https://linkedin.com/in/hitakshiaroraa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hitakshiA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:hitakshi220@gmail.com"
            className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-accent/50 text-accent font-medium rounded-lg hover:bg-accent/10 transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
