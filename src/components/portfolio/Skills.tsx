const Skills = () => {
  const skillCategories = [
    { title: "Languages", skills: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C++"] },
    { title: "Mobile", skills: ["Android Development", "XML", "Jetpack Compose"] },
    { title: "Backend", skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"] },
    { title: "Tools & Core", skills: ["Git", "GitHub", "Google Cloud", "DSA", "DBMS", "OOP"] },
  ];

  return (
    <section id="skills" className="bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <p className="text-eyebrow font-display text-foreground mb-4">Skills</p>
        <h2 className="text-section font-display text-foreground mb-12 max-w-3xl">
          The tools I reach for.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category) => (
            <div key={category.title} className="surface-card p-7">
              <p className="text-caption uppercase tracking-wider text-muted-foreground mb-5">
                {category.title}
              </p>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="text-[17px] text-foreground">
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
