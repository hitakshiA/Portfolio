import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Achievements = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const achievements = [
    {
      title: "DomainFi Challenge Winner",
      highlight: "",
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
    <section id="achievements" className="py-24" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground hover:scale-105 transition-transform duration-300 inline-block">
            Achievements<span className="text-primary animate-pulse">.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-700 hover:-translate-y-1 group ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className={`text-4xl mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} style={{ transitionDelay: `${(index + 1) * 150 + 200}ms` }}>
                {achievement.icon}
              </div>
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
