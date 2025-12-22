const About = () => {
  const highlights = [
    "Data pipelines at scale (4 TB/day)",
    "Security automation tools",
    "Android & full-stack development",
    "Research publication in cloud computing",
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
          <span className="text-primary font-mono text-base font-normal">01.</span>
          About
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>
        
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5">
            <p className="text-muted-foreground leading-relaxed">
              I'm a software engineer who thrives on solving complex problems with clean, 
              maintainable code. My focus is building systems that scale—whether that's 
              data pipelines processing terabytes daily or mobile apps connecting students 
              with mentors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently completing my B.Tech in Computer Science (Data Science) at 
              SRM Institute of Science and Technology. I've worked on production systems 
              at the National Informatics Centre and shipped projects that have won 
              recognition in national competitions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I care about code quality, user experience, and building things that matter.
            </p>
          </div>
          
          <div className="md:col-span-2">
            <div className="p-5 bg-secondary/50 rounded-md border border-border">
              <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                Highlights
              </h3>
              <ul className="space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
