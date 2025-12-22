import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "National Informatics Centre (NIC)",
      role: "Data Engineering Intern",
      date: "June 2025 – August 2025",
      color: "primary",
      points: [
        { text: "Engineered data pipelines handling", highlight: "4 TB/day", suffix: ", ensuring reliable data flow across systems" },
        { text: "Reduced system downtime by", highlight: "35%", suffix: " through proactive monitoring and optimization" },
        { text: "Improved ETL processing speed by", highlight: "45%", suffix: " by refactoring legacy transformation scripts" },
      ],
    },
    {
      company: "ISTE Delhi NCR Campus",
      role: "Technical Team Lead",
      date: "Present",
      color: "accent",
      points: [
        { text: "Leading a team of developers to build technical solutions and organize events" },
        { text: "Mentoring junior members on best practices in software development" },
        { text: "Coordinating technical workshops and hackathons for the campus community" },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block">
            Experience<span className="text-primary">.</span>
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-px bg-border md:left-6"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ originY: 0 }}
          />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company}
                className="pl-8 md:pl-16 relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute left-0 top-2 w-3 h-3 rounded-full md:left-5 ${exp.color === 'primary' ? 'bg-primary' : 'bg-accent'}`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3, type: "spring" }}
                  whileHover={{ scale: 1.5 }}
                />
                
                <motion.div 
                  className={`p-6 bg-card rounded-lg border border-border transition-colors ${exp.color === 'primary' ? 'hover:border-primary/30' : 'hover:border-accent/30'}`}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.3)"
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-semibold ${exp.color === 'accent' ? 'text-accent' : 'text-foreground'}`}>
                        {exp.color === 'accent' ? exp.role : exp.company}
                      </h3>
                      <p className={`font-medium ${exp.color === 'primary' ? 'text-primary' : 'text-foreground'}`}>
                        {exp.color === 'accent' ? exp.company : exp.role}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono mt-2 md:mt-0">
                      {exp.date}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 text-muted-foreground">
                    {exp.points.map((point, i) => (
                      <motion.li 
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 + 0.4 }}
                      >
                        <span className={`mt-1.5 ${exp.color === 'primary' ? 'text-primary' : 'text-accent'}`}>▹</span>
                        <span>
                          {point.text}
                          {point.highlight && (
                            <span className="text-foreground font-medium"> {point.highlight}</span>
                          )}
                          {point.suffix}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
