import prodigalLogoAsset from "@/assets/prodigal-logo.png.asset.json";
import nicLogoAsset from "@/assets/nic-logo.png.asset.json";
const prodigalLogo = prodigalLogoAsset.url;
const nicLogo = nicLogoAsset.url;

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
        "Shipping voice AI agents end-to-end — prompt engineering, evals, and tight iteration loops against real call data",
        "Building NLP + LLM pipelines for entity recognition, blending pattern-based rules with model-driven extraction",
        "Designing internal tools that cut manual work and streamline how the team ships agents",
        "Partnering on customer onboarding across Prodigal's product suite, turning early feedback into product improvements",
      ],
    },
    {
      year: "2025",
      org: "National Informatics Centre (NIC)",
      role: "Data Engineering Intern",
      period: "June 2025 – August 2025",
      isPresent: false,
      logo: nicLogo,
      points: [
        "Engineered data pipelines handling 4 TB/day, ensuring reliable data flow across systems",
        "Reduced system downtime by 35% through proactive monitoring and optimization",
        "Improved ETL processing speed by 45% by refactoring legacy transformation scripts",
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
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-1">
                  <div className="flex items-start gap-4">
                    {exp.logo && (
                      <img
                        src={exp.logo}
                        alt={`${exp.org} logo`}
                        className="w-12 h-12 rounded-xl object-cover shrink-0"
                      />
                    )}
                    <div>
                      <h3 className="text-[24px] font-semibold font-display text-foreground tracking-tight flex items-center gap-2 flex-wrap">
                        {exp.org}
                        {exp.org === "Prodigal Tech" && (
                          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-muted-foreground">
                            <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-[3px] bg-[#FF6600] text-white font-bold text-[12px] leading-none font-sans">Y</span>
                            YC S18
                          </span>
                        )}
                      </h3>
                      <p className="text-[17px] text-muted-foreground">{exp.role}</p>
                    </div>
                  </div>
                  {exp.isPresent ? (
                    <span className="self-start px-3 py-1 rounded-full bg-background text-[13px] font-medium text-[hsl(211,100%,40%)]">
                      Present
                    </span>
                  ) : (
                    <span className="text-[14px] text-muted-foreground">{exp.period}</span>
                  )}
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
