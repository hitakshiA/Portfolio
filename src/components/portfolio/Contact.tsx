const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading mb-12">
          CON<span className="highlight">TACT</span>
        </h2>
        
        <div className="max-w-2xl">
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I'm currently looking for <span className="font-semibold text-foreground">full-time opportunities</span> in 
            software development. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you.
          </p>
          
          <div className="flex flex-wrap gap-4 font-mono text-xs">
            <a
              href="mailto:hitakshi220@gmail.com"
              className="px-6 py-3 bg-primary text-primary-foreground brutalist-border uppercase tracking-wider hover:bg-foreground hover:text-background transition-colors font-bold"
            >
              Say Hello →
            </a>
            <a
              href="/resume"
              className="px-6 py-3 brutalist-border uppercase tracking-wider hover:bg-primary transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
