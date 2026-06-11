import prodigalLogoAsset from "@/assets/prodigal-logo.jpg.asset.json";
const prodigalLogo = prodigalLogoAsset.url;

const Experience = () => {
  const experiences = [
    {
      year: "Now",
      org: "Prodigal Tech",
      role: "Agent Engineer Intern",
      period: "Present",
      isPresent: true,
      logo: prodigalLogo,
      points: [
        "Building production AI agents at Prodigal (YC S18), an AI platform for consumer finance",
      ],
    },
    {
      year: "2025",
      org: "National Informatics Centre (NIC)",
      role: "Data Engineering Intern",
      period: "June 2025 – August 2025",
      isPresent: false,
      logo: null,
      points: [
        "Engineered data pipelines handling 4 TB/day, ensuring reliable data flow across systems",
        "Reduced system downtime by 35% through proactive monitoring and optimization",
        "Improved ETL processing speed by 45% by refactoring legacy transformation scripts",
      ],
    },
    {
      year: "2025",
      org: "ISTE Delhi NCR Campus",
      role: "Technical Team Lead",
      period: "Present",
      isPresent: false,
      logo: null,
      points: [
        "Leading a team of developers to build technical solutions and organize events",
        "Mentoring junior members on best practices in software development",
        "Coordinating technical workshops and hackathons for the campus community",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-card">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <p className="text-eyebrow font-display text-foreground mb-4">Experience</p>
        <h2 className="text-section font-display text-foreground mb-12 max-w-3xl">
          Where I've been working.
        </h2>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.org} className="surface-recessed p-8 md:p-10 grid md:grid-cols-[180px_1fr] gap-8 items-start">
              <div className="font-display text-[40px] md:text-[56px] font-bold tracking-tight leading-none text-foreground">
                {exp.year}
              </div>
              <div>
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-1">
                  <div>
                    <h3 className="text-[24px] font-semibold font-display text-foreground tracking-tight">
                      {exp.org}
                    </h3>
                    <p className="text-[17px] text-muted-foreground">{exp.role}</p>
                  </div>
                  <span className="text-[14px] text-muted-foreground">{exp.period}</span>
                </div>
                <ul className="space-y-2.5">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-[17px] text-muted-foreground leading-snug">
                      — {point}
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
