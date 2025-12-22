import projectPeterImg from "@/assets/project-peter.png";
import { ExternalLink, Github, Code2, Sparkles } from "lucide-react";

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
    <section id="projects" className="py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in hover:scale-105 transition-transform duration-300 inline-block">
            Projects<span className="text-primary animate-pulse">.</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore a selection of my recent work, showcasing my skills in full stack development.
          </p>
        </div>
        
        {/* Projects List */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-primary/50 hidden md:block" />
          
          <div className="space-y-20">
            {projects.map((project, index) => (
              <article 
                key={project.title}
                className="relative group"
              >
                {/* Project number indicator */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20 hidden md:flex">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                {/* Card container */}
                <div className="relative p-6 md:p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 group-hover:-translate-y-1">
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl transition-colors group-hover:border-primary/60" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-accent/30 rounded-tr-2xl transition-colors group-hover:border-accent/60" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-accent/30 rounded-bl-2xl transition-colors group-hover:border-accent/60" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-2xl transition-colors group-hover:border-primary/60" />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                    {/* Image */}
                    <div className="relative">
                      <div className="rounded-xl overflow-hidden bg-card border border-border shadow-2xl group-hover:shadow-primary/10 transition-shadow duration-500 transform group-hover:scale-[1.02] transition-transform">
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={`${project.title} screenshot`}
                            className="w-full h-auto object-cover"
                          />
                        ) : (
                          <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted relative overflow-hidden">
                            {/* Animated grid pattern */}
                            <div className="absolute inset-0 opacity-20">
                              <div className="absolute inset-0" style={{
                                backgroundImage: 'linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)',
                                backgroundSize: '20px 20px'
                              }} />
                            </div>
                            <div className="text-center p-8 relative z-10">
                              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                <Code2 className="w-10 h-10 text-primary/50 group-hover:text-primary transition-colors" />
                              </div>
                              <p className="text-muted-foreground/70 font-mono text-sm">
                                Screenshot coming soon
                              </p>
                            </div>
                          </div>
                        )}
                        
                        {/* Image overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Floating decorative elements */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary animate-pulse" />
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-transparent rounded-full" />
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span 
                            key={t} 
                            className="px-4 py-1.5 border border-border/50 text-foreground/80 text-sm rounded-full bg-secondary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      {/* Description */}
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Links */}
                      <div className="flex gap-4 pt-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                            Live Link
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
                        >
                          <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                          Code Link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Separator line between projects */}
                {index < projects.length - 1 && (
                  <div className="flex items-center justify-center mt-12">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                    <div className="w-2 h-2 rounded-full bg-primary/30 mx-4" />
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
