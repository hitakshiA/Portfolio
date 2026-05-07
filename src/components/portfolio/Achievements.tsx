const Achievements = () => {
  const achievements = [
    {
      title: "DomainFi Challenge",
      highlight: "Grand Prize",
      description: "Won the grand prize in the DomainFi development challenge.",
    },
    {
      title: "Research Publication",
      highlight: "Cloud Computing",
      description: "Co-authored a research paper on privacy preservation techniques in cloud computing.",
    },
    {
      title: "SBI Life Hack-AI-Thon",
      highlight: "Top 16 of 7,500+",
      description: "Reached the finals of the national AI hackathon competition.",
    },
  ];

  return (
    <section id="achievements" className="bg-card">
      <div className="max-w-[1200px] mx-auto px-6 py-24 md:py-32">
        <p className="text-eyebrow font-display text-foreground mb-4">Achievements</p>
        <h2 className="text-section font-display text-foreground mb-12 max-w-3xl">
          Recognition along the way.
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {achievements.map((a) => (
            <div key={a.title} className="surface-recessed p-8">
              <p className="text-caption uppercase tracking-wider text-[hsl(211,100%,40%)] mb-3">{a.highlight}</p>
              <h3 className="font-display text-[24px] font-semibold tracking-tight text-foreground mb-3">
                {a.title}
              </h3>
              <p className="text-[17px] text-muted-foreground leading-snug">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
