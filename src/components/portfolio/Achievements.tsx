import { Separator } from "@/components/ui/separator";

const Achievements = () => {
  const achievements = [
    {
      title: "DomainFi Challenge Winner",
      description: "Won $10,000 USDC in the DomainFi development challenge",
    },
    {
      title: "Research Publication",
      description:
        "Co-authored research paper on privacy preservation techniques in cloud computing",
    },
    {
      title: "SBI Life Hack-AI-Thon 2024 Finalist",
      description: "Reached Top 16 out of 7,500+ participants in the national AI hackathon",
    },
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Achievements</h2>
        <Separator className="mb-8" />
        <div className="space-y-6">
          {achievements.map((achievement) => (
            <div key={achievement.title}>
              <h3 className="text-base font-medium text-foreground mb-1">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
