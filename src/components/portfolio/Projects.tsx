import { Separator } from "@/components/ui/separator";

const Projects = () => {
  const projects = [
    {
      title: "AASO – Automated Application Security Optimizer",
      tech: "TypeScript, VS Code API, Node.js",
      description: [
        "VS Code extension that automatically detects security vulnerabilities in codebases",
        "Scans for common security issues like SQL injection, XSS, and insecure dependencies",
        "Provides actionable remediation suggestions directly in the editor",
      ],
      github: "https://github.com/Project-Peter-Doma/AASO",
    },
    {
      title: "BigBuddy",
      tech: "Kotlin, Android SDK, Firebase",
      description: [
        "Android application connecting students with senior mentors for academic guidance",
        "Features real-time messaging, mentor matching, and session scheduling",
        "Built with clean architecture principles and MVVM pattern",
      ],
      github: "https://github.com/Project-Peter-Doma/BigBuddy",
    },
    {
      title: "Project Peter Doma",
      tech: "Full-Stack Development",
      description: [
        "A collection of development projects showcasing various technologies",
        "Includes web applications, mobile apps, and developer tools",
        "Open source contributions available on GitHub",
      ],
      github: "https://github.com/Project-Peter-Doma",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Projects</h2>
        <Separator className="mb-8" />
        <div className="space-y-10">
          {projects.map((project) => (
            <div key={project.title}>
              <h3 className="text-lg font-medium text-foreground mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{project.tech}</p>
              <ul className="space-y-1 text-muted-foreground mb-3">
                {project.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
