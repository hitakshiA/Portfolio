import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const skillCategories = [
    {
      title: "Languages",
      color: "primary",
      skills: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C++"],
    },
    {
      title: "Mobile",
      color: "accent",
      skills: ["Android Development", "XML", "Jetpack Compose"],
    },
    {
      title: "Backend",
      color: "primary",
      skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Core",
      color: "accent",
      skills: ["Git", "GitHub", "Google Cloud", "DSA", "DBMS", "OOP"],
    },
  ];

  return (
    <section id="skills" className="py-12 relative" ref={ref as React.RefObject<HTMLElement>}>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground hover:scale-105 transition-transform duration-300 inline-block">
            Skills<span className="text-primary animate-pulse">.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className={`p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-700 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 bg-secondary text-foreground text-sm rounded-md font-mono transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                    style={{ transitionDelay: `${(index + 1) * 100 + skillIndex * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
