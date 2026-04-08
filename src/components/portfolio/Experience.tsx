const Experience = () => {
  const experiences = [
    {
      year: "2025",
      org: "National Informatics Centre (NIC)",
      role: "Data Engineering Intern",
      period: "June 2025 – August 2025",
      points: [
        "Engineered data pipelines handling 4 TB/day, ensuring reliable data flow across systems",
        "Reduced system downtime by 35% through proactive monitoring and optimization",
        "Improved ETL processing speed by 45% by refactoring legacy transformation scripts",
      ],
    },
    {
      year: "NOW",
      org: "ISTE Delhi NCR Campus",
      role: "Technical Team Lead",
      period: "Present",
      points: [
        "Leading a team of developers to build technical solutions and organize events",
        "Mentoring junior members on best practices in software development",
        "Coordinating technical workshops and hackathons for the campus community",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading mb-16">
          EXPERIENCE<span className="highlight">.md</span>
        </h2>
        
        <div className="space-y-16">
          {experiences.map((exp) => (
            <div key={exp.org} className="grid md:grid-cols-[200px_1fr] gap-8">
              {/* Large year */}
              <div>
                <span className="text-6xl md:text-8xl font-black tracking-tighter leading-none">
                  {exp.year}
                </span>
              </div>
              
              {/* Details */}
              <div className="brutalist-border p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.org}
                    </h3>
                    <p className="text-sm font-mono text-muted-foreground">{exp.role}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-foreground font-bold mt-0.5">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
