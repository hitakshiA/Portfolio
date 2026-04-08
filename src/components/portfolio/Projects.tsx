import { useState } from "react";
import projectPeterImg from "@/assets/project-peter.png";
import aasoScreenshot from "@/assets/aaso-screenshot.png";
import bigbuddyLogin from "@/assets/bigbuddy-login.png";
import bigbuddySearch from "@/assets/bigbuddy-search.png";
import bigbuddySchedule from "@/assets/bigbuddy-schedule.png";
import bigbuddyReviews from "@/assets/bigbuddy-reviews.png";
import { ExternalLink, Github } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

const Projects = () => {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const projects = [
    {
      title: "AASO",
      tech: ["TypeScript", "VS Code API", "Node.js", "Snyk", "SonarQube"],
      description: "AASO (Automated Application Security Optimizer) is a Visual Studio Code extension that helps developers identify and fix security vulnerabilities in their code using multiple scanning tools including Snyk, SonarQube, and AI-powered analysis with Gemini.",
      github: "https://github.com/hitakshiA/AASO_Extension",
      liveUrl: null,
      image: aasoScreenshot,
    },
    {
      title: "BigBuddy",
      tech: ["Java", "Android SDK", "XML", "Android Studio"],
      description: "A mentorship and guidance mobile application designed to bridge the gap between users and domain experts. Provides personalized support in mental health, career planning, and skill development.",
      github: "https://github.com/hitakshiA/BIGBUDDY",
      liveUrl: null,
      image: bigbuddyLogin,
      images: [bigbuddyLogin, bigbuddySearch, bigbuddySchedule, bigbuddyReviews],
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
    <section id="projects" className="py-16 border-b-2 border-foreground">
      <ImageLightbox
        src={lightboxImage?.src || ""}
        alt={lightboxImage?.alt || ""}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading mb-16">
          MY <span className="highlight">WORK</span>
        </h2>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <article key={project.title} className="group">
              <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                {/* Image */}
                <div 
                  className={`brutalist-border overflow-hidden cursor-pointer bg-card ${index % 2 === 1 ? 'md:order-2' : ''}`}
                  onClick={() => project.image && setLightboxImage({ src: project.image, alt: project.title })}
                >
                  {project.images && project.images.length > 1 ? (
                    <div className="flex">
                      {project.images.map((img, imgIndex) => (
                        <div 
                          key={imgIndex}
                          className="flex-1 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxImage({ src: img, alt: `${project.title} ${imgIndex + 1}` });
                          }}
                        >
                          <img 
                            src={img} 
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-64 object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  ) : project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-80 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  ) : null}
                </div>
                
                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">0{index + 1}</span>
                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs font-mono uppercase tracking-wider brutalist-border">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-3 pt-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-wider brutalist-border hover:bg-foreground hover:text-background transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider brutalist-border hover:bg-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Source
                    </a>
                  </div>
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
