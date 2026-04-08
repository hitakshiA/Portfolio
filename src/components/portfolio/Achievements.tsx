const Achievements = () => {
  const achievements = [
    {
      title: "DomainFi Challenge Winner",
      highlight: "Grand Prize",
      description: "Won the grand prize in the DomainFi development challenge",
      icon: "🏆",
    },
    {
      title: "Research Publication",
      highlight: "Cloud Computing",
      description: "Co-authored research paper on privacy preservation techniques in cloud computing",
      icon: "📄",
    },
    {
      title: "SBI Life Hack-AI-Thon 2024",
      highlight: "Top 16 / 7,500+",
      description: "Reached the finals in the national AI hackathon competition",
      icon: "🚀",
    },
  ];

  return (
    <section id="achievements" className="py-16 border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading mb-12">
          ACHIEVEMENTS<span className="highlight">.md</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div 
              key={achievement.title}
              className="brutalist-border p-6 hover:bg-primary transition-colors duration-200 group cursor-default"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-1 uppercase tracking-tight">
                {achievement.title}
              </h3>
              <p className="text-xs font-mono text-muted-foreground group-hover:text-foreground/60 uppercase tracking-wider mb-3">{achievement.highlight}</p>
              <p className="text-sm text-muted-foreground group-hover:text-foreground/70">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
