const Skills = () => {
  const skills = {
    "Core": ["Java", "Kotlin", "Python", "TypeScript", "C++"],
    "Mobile": ["Android SDK", "Jetpack Compose", "XML"],
    "Backend": ["Node.js", "Express", "PostgreSQL"],
    "Tools": ["Git", "Google Cloud", "VS Code API"],
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
          <span className="text-primary font-mono text-base font-normal">02.</span>
          Skills
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground font-mono">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
