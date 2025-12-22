const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">06</span>
          <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="max-w-2xl">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I'm currently looking for <span className="text-foreground">full-time opportunities</span> in 
            software development. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="mailto:hitakshi220@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity glow"
            >
              Say Hello →
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-colors"
            >
              Download Resume
            </a>
          </div>
          
          <div className="flex flex-wrap gap-8 text-muted-foreground">
            <a
              href="https://linkedin.com/in/hitakshiaroraa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/hitakshiA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:hitakshi220@gmail.com"
              className="hover:text-primary transition-colors"
            >
              hitakshi220@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
