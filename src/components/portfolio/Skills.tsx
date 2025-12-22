const Skills = () => {
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
    <section id="skills" className="py-24 relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in hover:scale-105 transition-transform duration-300 inline-block">
            Skills<span className="text-primary animate-pulse">.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div 
              key={category.title} 
              className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors group"
            >
              <h3 className={`text-lg font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-md font-mono"
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
