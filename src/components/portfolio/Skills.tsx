import { Separator } from "@/components/ui/separator";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C++"],
    },
    {
      title: "Mobile",
      skills: ["Android Development", "XML"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PostgreSQL"],
    },
    {
      title: "Tools & Core",
      skills: ["Git", "GitHub", "Google Cloud", "DSA", "DBMS", "OOP"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Skills</h2>
        <Separator className="mb-8" />
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium text-foreground mb-2">
                {category.title}
              </h3>
              <p className="text-muted-foreground">
                {category.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
