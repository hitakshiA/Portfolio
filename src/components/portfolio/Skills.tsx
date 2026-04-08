const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C++"],
    },
    {
      title: "Mobile",
      skills: ["Android Development", "XML", "Jetpack Compose"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Core",
      skills: ["Git", "GitHub", "Google Cloud", "DSA", "DBMS", "OOP"],
    },
  ];

  return (
    <section id="skills" className="py-16 border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading mb-12">
          SKILLS<span className="highlight">.md</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4 pb-2 border-b-2 border-foreground">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="font-mono text-sm text-foreground py-1 hover:bg-primary hover:pl-2 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </div>
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
