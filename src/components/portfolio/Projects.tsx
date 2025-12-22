import projectPeterImg from "@/assets/project-peter.png";

const Projects = () => {
  const projects = [
    {
      title: "AASO",
      tech: ["TypeScript", "VS Code API", "Node.js", "Snyk", "SonarQube"],
      description: "A Visual Studio Code extension that helps developers identify and fix security vulnerabilities in their code using multiple scanning tools including Snyk, SonarQube, and AI-powered analysis with Gemini.",
      github: "https://github.com/hitakshiA/AASO_Extension",
      liveUrl: null,
      image: null,
    },
    {
      title: "BigBuddy",
      tech: ["Java", "Android SDK", "XML", "Android Studio"],
      description: "A mentorship and guidance mobile application designed to bridge the gap between users and domain experts. Provides personalized support in mental health, career planning, and skill development.",
      github: "https://github.com/hitakshiA/BIGBUDDY",
      liveUrl: null,
      image: null,
    },
    {
      title: "Project P.E.T.E.R.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma", "AI/ML"],
      description: "An AI-powered domain intelligence platform built for the Doma Protocol ecosystem. Provides comprehensive analysis of digital assets by combining traditional Web2 metrics with unique on-chain data.",
      github: "https://github.com/Project-Peter-Doma",
      liveUrl: "https://www.projectpeter.xyz",
      image: projectPeterImg,
    },
  ];

  return (
    <section id="projects" className="py-12 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in hover:scale-105 transition-transform duration-300 inline-block">
            Projects<span className="text-primary animate-pulse">.</span>
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore a selection of my recent work, showcasing my skills in full stack development.
          </p>
        </div>
        
        {/* Projects List */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-lg overflow-hidden bg-card border border-border shadow-lg">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-auto object-cover"
                    />
                  ) : (
                    <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-muted-foreground/50 font-mono text-sm">
                          Screenshot coming soon
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-4 py-1.5 border border-border text-foreground text-sm rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Links */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Live Link
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Code Link
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
