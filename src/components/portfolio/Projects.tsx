const Projects = () => {
  const featuredProjects = [
    {
      title: "AASO",
      tagline: "Automated Application Security Optimizer",
      problem: "Developers ship vulnerable code because manual security reviews are slow and inconsistent.",
      solution: "VS Code extension that automatically detects SQL injection, XSS, and insecure dependencies with one-click remediation.",
      impact: "Used by development teams to catch vulnerabilities before they reach production.",
      tech: ["TypeScript", "VS Code API", "Node.js", "AST Parsing"],
      github: "https://github.com/hitakshiA/AASO",
    },
    {
      title: "BigBuddy",
      tagline: "Student Mentor Connection Platform",
      problem: "Junior students struggle to find relevant senior mentors for academic and career guidance.",
      solution: "Android app with smart matching algorithm, real-time messaging, and session scheduling.",
      impact: "Facilitates meaningful mentorship connections within educational institutions.",
      tech: ["Kotlin", "Android SDK", "Firebase", "Material Design"],
      github: "https://github.com/hitakshiA/BigBuddy",
    },
  ];

  const otherProjects = [
    {
      title: "Project Peter Doma",
      description: "Collection of open-source development projects spanning web and mobile applications.",
      tech: ["Full-Stack", "Open Source"],
      github: "https://github.com/hitakshiA",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
          <span className="text-primary font-mono text-base font-normal">04.</span>
          Projects
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>
        
        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <article 
              key={project.title} 
              className="p-6 md:p-8 bg-card rounded-md border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-primary font-mono text-xs mb-2">Featured Project</p>
                  <h3 className="text-xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.tagline}</p>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-sm px-4 py-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground rounded-md transition-colors"
                >
                  View Code →
                </a>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Problem</span>
                  <p className="text-muted-foreground mt-1">{project.problem}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Solution</span>
                  <p className="text-muted-foreground mt-1">{project.solution}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Impact</span>
                  <p className="text-muted-foreground mt-1">{project.impact}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        
        {/* Other Projects */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-6">Other Notable Work</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-card rounded-md border border-border hover:border-primary/30 transition-colors group"
              >
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
