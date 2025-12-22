const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">01</span>
          <h2 className="text-3xl font-bold text-foreground">About Me</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science undergraduate specializing in <span className="text-foreground">Data Science</span> at 
              SRM Institute of Science and Technology. My curiosity drives me to explore 
              the intersection of software development and data engineering.
            </p>
            <p>
              I enjoy building products that solve real problems — from mobile applications 
              that connect students with mentors to developer tools that automate security checks. 
              I'm passionate about writing <span className="text-primary">clean, maintainable code</span> and 
              learning new technologies.
            </p>
            <p>
              Currently seeking <span className="text-accent">full-time opportunities</span> where 
              I can contribute to impactful projects and grow as a developer.
            </p>
          </div>
          
          <div className="relative">
            <div className="border-gradient p-6 relative z-10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-foreground font-medium">Currently Learning</span>
                </div>
                <p className="text-muted-foreground text-sm pl-6">
                  System Design, Advanced DSA, Cloud Architecture
                </p>
                
                <div className="flex items-center gap-3 pt-4">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-foreground font-medium">Education</span>
                </div>
                <p className="text-muted-foreground text-sm pl-6">
                  B.Tech in Computer Science (Data Science)<br />
                  SRM Institute of Science and Technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
