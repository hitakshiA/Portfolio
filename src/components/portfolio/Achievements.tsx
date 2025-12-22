const Achievements = () => {
  const achievements = [
    {
      title: "DomainFi Challenge Winner",
      highlight: "$10,000 USDC",
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
    <section id="achievements" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-sm">05</span>
          <h2 className="text-3xl font-bold text-foreground">Achievements</h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement) => (
            <div 
              key={achievement.title}
              className="p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                {achievement.title}
              </h3>
              <p className="text-accent font-mono text-sm mb-3">{achievement.highlight}</p>
              <p className="text-muted-foreground text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
