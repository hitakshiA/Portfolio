import projectPeterImg from "@/assets/project-peter.png";

const Projects = () => {
  const projects = [
    {
      title: "AASO",
      subtitle: "Automated Application Security Optimizer",
      date: "2024 - Present",
      tech: ["TypeScript", "VS Code API", "Node.js", "Snyk", "SonarQube", "Gemini AI"],
      description: "A Visual Studio Code extension that helps developers identify and fix security vulnerabilities in their code using multiple scanning tools including Snyk, SonarQube, and AI-powered analysis with Gemini. Features real-time vulnerability detection, detailed vulnerability reports, and seamless integration with VS Code's native UI.",
      features: [
        "Scan code for vulnerabilities using Snyk",
        "Perform code quality analysis with SonarQube",
        "AI-powered vulnerability analysis using Gemini",
        "Real-time vulnerability detection",
        "Detailed vulnerability reports"
      ],
      github: "https://github.com/hitakshiA/AASO_Extension",
      image: null,
    },
    {
      title: "BigBuddy",
      subtitle: "Connect. Learn. Grow.",
      date: "2024 - Present",
      tech: ["Java", "Android SDK", "XML", "Android Studio"],
      description: "A mentorship and guidance mobile application designed to bridge the gap between users and domain experts. It provides a holistic and accessible space for individuals to receive personalized support in areas such as mental health, career planning, and skill development through real-time interactions.",
      features: [
        "Expert Connections – Connect with counselors, professors, and industry professionals",
        "Holistic Guidance – Support for mental well-being, career growth, and personal development",
        "Live Sessions – One-on-one and group mentoring in real time",
        "Ratings & Reviews – User-driven feedback for transparency and trust",
        "Personalized Experience – Tailored guidance based on user needs"
      ],
      github: "https://github.com/hitakshiA/BIGBUDDY",
      image: null,
    },
    {
      title: "Project P.E.T.E.R.",
      subtitle: "Predictive Evaluation Tool for Ecosystem Research",
      date: "2024 - Present",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Prisma", "Vercel", "AI/ML"],
      description: "An AI-powered domain intelligence platform built for the Doma Protocol ecosystem. It provides the most comprehensive analysis of digital assets by combining traditional Web2 metrics with unique, high-alpha on-chain data. Features multi-agent AI system utilizing specialized AI agents to analyze domains in real-time across multiple vectors.",
      features: [
        "Multi-Agent AI System for real-time domain analysis",
        "On-Chain Intelligence via Doma Subgraph",
        "Live Market Research using Perplexity & xAI",
        "Web2 Authority Analysis with SE Ranking integration",
        "DomainApe Telegram bot for real-time alerts"
      ],
      github: "https://github.com/Project-Peter-Doma",
      liveUrl: "https://www.projectpeter.xyz",
      image: projectPeterImg,
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute left-0 top-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Highlighting my latest work: security innovation, mentorship platforms, and AI-powered solutions.
          </p>
        </div>
        
        {/* Projects List */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className="group"
            >
              {/* Project Header */}
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-2">
                  {project.title} – {project.subtitle}
                </h3>
                <p className="text-muted-foreground/60 font-mono text-sm">
                  {project.date}
                </p>
              </div>
              
              {/* Project Description */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-4xl">
                {project.description}
              </p>
              
              {/* Features List */}
              <div className="mb-6">
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className="flex items-start gap-2 text-muted-foreground/80"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-4 mb-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground text-sm font-medium rounded-md hover:border-primary hover:text-primary transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
              
              {/* Image Placeholder */}
              <div className="relative rounded-lg overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm group-hover:border-primary/30 transition-colors">
                <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-8 h-8 text-primary/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-muted-foreground/50 font-mono text-sm">
                        Project screenshot coming soon
                      </p>
                    </div>
                  )}
                </div>
                
                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/30 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/30 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/30 rounded-br-lg" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
