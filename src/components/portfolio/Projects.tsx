const Projects = () => {
  const projects = [
    {
      title: "AASO",
      subtitle: "Automated Application Security Optimizer",
      tech: ["TypeScript", "VS Code API", "Node.js"],
      description: "VS Code extension that automatically detects security vulnerabilities in codebases. Scans for SQL injection, XSS, and insecure dependencies with actionable remediation suggestions.",
      github: "https://github.com/Project-Peter-Doma/AASO",
      featured: true,
    },
    {
      title: "BigBuddy",
      subtitle: "Student Mentor Connection Platform",
      tech: ["Kotlin", "Android SDK", "Firebase"],
      description: "Android application connecting students with senior mentors for academic guidance. Features real-time messaging, mentor matching, and session scheduling.",
      github: "https://github.com/Project-Peter-Doma/BigBuddy",
      featured: true,
    },
    {
      title: "Project Peter Doma",
      subtitle: "Development Portfolio",
      tech: ["Full-Stack", "Open Source"],
      description: "A collection of development projects showcasing various technologies including web applications, mobile apps, and developer tools.",
      github: "https://github.com/Project-Peter-Doma",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">04</span>
          <h2 className="text-3xl font-bold text-foreground">Projects</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`group p-6 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                project.featured 
                  ? 'bg-card border-primary/20 hover:border-primary/50 hover:glow' 
                  : 'bg-card/50 border-border hover:border-accent/30'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-mono rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{project.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-primary/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-md hover:border-primary hover:text-primary transition-colors"
                >
                  View Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
