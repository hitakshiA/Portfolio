const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-fade-in hover:scale-105 transition-transform duration-300 inline-block">
            Experience<span className="text-primary animate-pulse">.</span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-6" />
          
          <div className="space-y-8">
            {/* Experience 1 - NIC */}
            <div className="pl-8 md:pl-16 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary glow md:left-5" />
              
              <div className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      National Informatics Centre (NIC)
                    </h3>
                    <p className="text-primary font-medium">Data Engineering Intern</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                    June 2025 – August 2025
                  </span>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>
                      Engineered data pipelines handling <span className="text-foreground font-medium">4 TB/day</span>, 
                      ensuring reliable data flow across systems
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>
                      Reduced system downtime by <span className="text-foreground font-medium">35%</span> through 
                      proactive monitoring and optimization
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>
                      Improved ETL processing speed by <span className="text-foreground font-medium">45%</span> by 
                      refactoring legacy transformation scripts
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 - ISTE */}
            <div className="pl-8 md:pl-16 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-accent glow-accent md:left-5" />
              
              <div className="p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-accent">
                      Technical Team Lead
                    </h3>
                    <p className="text-foreground font-medium">ISTE Delhi NCR Campus</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                    Present
                  </span>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>
                      Leading a team of developers to build technical solutions and organize events
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>
                      Mentoring junior members on best practices in software development
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>
                      Coordinating technical workshops and hackathons for the campus community
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
