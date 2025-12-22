import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      color: "primary",
      skills: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C++"],
    },
    {
      title: "Mobile",
      color: "accent",
      skills: ["Android Development", "XML", "Jetpack Compose"],
    },
    {
      title: "Backend",
      color: "primary",
      skills: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Tools & Core",
      color: "accent",
      skills: ["Git", "GitHub", "Google Cloud", "DSA", "DBMS", "OOP"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="skills" className="py-24 relative">
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block">
            Skills<span className="text-primary">.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title} 
              className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors group"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.3)",
                y: -5
              }}
            >
              <h3 className={`text-lg font-semibold mb-4 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 bg-secondary text-foreground text-sm rounded-md font-mono"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i + 0.3 }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "hsl(var(--primary) / 0.2)",
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
