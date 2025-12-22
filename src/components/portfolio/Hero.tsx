const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
          Hitakshi Arora
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6">
          Full-Stack & Android Developer
        </p>
        <p className="text-lg text-muted-foreground max-w-2xl mb-8">
          I build scalable applications and solve complex problems with clean, efficient code. 
          Currently seeking full-time opportunities in software development.
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href="https://linkedin.com/in/hitakshiarora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Project-Peter-Doma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:hitakshi@example.com"
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
