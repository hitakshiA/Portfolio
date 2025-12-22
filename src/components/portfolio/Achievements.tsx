const Achievements = () => {
  const achievements = [
    {
      title: "DomainFi Challenge Winner",
      metric: "$10,000 USDC",
      context: "Grand prize in blockchain development competition",
    },
    {
      title: "Research Publication",
      metric: "Cloud Computing",
      context: "Co-authored paper on privacy preservation techniques",
    },
    {
      title: "SBI Life Hack-AI-Thon",
      metric: "Top 16 of 7,500+",
      context: "National AI hackathon finalist, 2024",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-narrow">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-foreground mb-10">
          <span className="text-primary font-mono text-base font-normal">05.</span>
          Recognition
          <span className="flex-1 h-px bg-border ml-4" />
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div 
              key={item.title}
              className="p-5 border border-border rounded-md hover:border-primary/30 transition-colors"
            >
              <p className="text-primary font-mono text-sm mb-2">{item.metric}</p>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
