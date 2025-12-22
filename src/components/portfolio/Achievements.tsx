import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="achievements" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block">
            Achievements<span className="text-primary">.</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.title}
              className="p-6 bg-card rounded-lg border border-border hover:border-accent/30 transition-all duration-300 group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px -20px rgba(0,0,0,0.4)"
              }}
            >
              {/* Glow effect on hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {achievement.icon}
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors relative z-10">
                {achievement.title}
              </h3>
              <motion.p 
                className="text-accent font-mono text-sm mb-3 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {achievement.highlight}
              </motion.p>
              <p className="text-muted-foreground text-sm relative z-10">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
