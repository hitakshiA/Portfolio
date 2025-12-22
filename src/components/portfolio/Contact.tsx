const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-primary font-mono text-sm mb-4">06. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm currently looking for full-time opportunities in software development. 
            Whether you have a role that might be a fit or just want to connect, 
            I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:hitakshi220@gmail.com"
              className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
            >
              Say Hello
            </a>
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto px-8 py-3 border border-border text-foreground font-medium rounded-md hover:bg-secondary transition-colors"
            >
              Download Resume
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm">
            <a
              href="https://github.com/hitakshiA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hitakshiaroraa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hitakshi220@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
