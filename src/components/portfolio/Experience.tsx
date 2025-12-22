import { Separator } from "@/components/ui/separator";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-foreground mb-8">Experience</h2>
        <Separator className="mb-8" />
        <div>
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
            <h3 className="text-lg font-medium text-foreground">
              National Informatics Centre (NIC)
            </h3>
            <span className="text-sm text-muted-foreground">
              June 2025 – August 2025
            </span>
          </div>
          <p className="text-muted-foreground mb-4">Data Engineering Intern</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              Engineered data pipelines handling 4 TB/day, ensuring reliable data flow across systems
            </li>
            <li>
              Reduced system downtime by 35% through proactive monitoring and optimization
            </li>
            <li>
              Improved ETL processing speed by 45% by refactoring legacy transformation scripts
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
