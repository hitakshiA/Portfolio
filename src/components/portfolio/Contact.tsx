const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in hover:scale-105 transition-transform duration-300 inline-block">
            Get In Touch<span className="text-primary animate-pulse">.</span>
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I'm currently looking for <span className="text-foreground">full-time opportunities</span> in 
            software development. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:hitakshi220@gmail.com"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity glow"
            >
              Say Hello →
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg hover:border-muted-foreground/50 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
