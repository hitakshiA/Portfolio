const Experience = () => {
  const experiences = [
    {
      company: "National Informatics Centre",
      role: "Data Engineering Intern",
      period: "Jun – Aug 2025",
      achievements: [
        "Built data pipelines processing 4 TB/day with reliable throughput across distributed systems",
        "Reduced system downtime by 35% through proactive monitoring and automated alerting",
        "Improved ETL processing speed by 45% by refactoring legacy transformation scripts",
      ],
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
          <span className="text-primary font-mono text-base font-normal">03.</span>
          Experience
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="group">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground font-mono shrink-0">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-3 pl-4 border-l-2 border-border">
                {exp.achievements.map((achievement, i) => (
                  <li 
                    key={i} 
                    className="text-muted-foreground leading-relaxed pl-4 relative before:absolute before:left-[-9px] before:top-[10px] before:w-2 before:h-2 before:bg-secondary before:rounded-full"
                  >
                    {achievement}
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

export default Experience;
