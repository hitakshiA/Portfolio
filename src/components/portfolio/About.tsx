const About = () => {
  return (
    <section id="about" className="py-16 border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading mb-12">
          README<span className="highlight">.md</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a Computer Science undergraduate specializing in <span className="font-semibold text-foreground">Data Science</span> at 
              SRM Institute of Science and Technology.
            </p>
            <p>
              I enjoy building products that solve real problems — from mobile applications 
              to developer tools. I'm passionate about writing <span className="highlight font-semibold">clean, maintainable code</span>.
            </p>
            <p>
              Currently seeking <span className="font-semibold text-foreground">full-time opportunities</span> where 
              I can contribute to impactful projects.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="brutalist-border p-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Currently Learning</h3>
              <p className="text-foreground font-medium">
                System Design, Advanced DSA, Cloud Architecture
              </p>
            </div>
            
            <div className="brutalist-border p-6">
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Education</h3>
              <p className="text-foreground font-medium">
                B.Tech in Computer Science (Data Science)
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                SRM Institute of Science and Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
