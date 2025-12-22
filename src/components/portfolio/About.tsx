import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground inline-block">
            About Me<span className="text-primary">.</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6 text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a Computer Science undergraduate specializing in <span className="text-foreground">Data Science</span> at 
              SRM Institute of Science and Technology. My curiosity drives me to explore 
              the intersection of software development and data engineering.
            </p>
            <p>
              I enjoy building products that solve real problems — from mobile applications 
              that connect students with mentors to developer tools that automate security checks. 
              I'm passionate about writing <span className="text-primary">clean, maintainable code</span> and 
              learning new technologies.
            </p>
            <p>
              Currently seeking <span className="text-accent">full-time opportunities</span> where 
              I can contribute to impactful projects and grow as a developer.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Animated green border */}
            <motion.div
              className="absolute -inset-[2px] rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary opacity-75"
              animate={{
                background: [
                  "linear-gradient(0deg, hsl(150 80% 50%), hsl(150 80% 50% / 0.3), hsl(150 80% 50%))",
                  "linear-gradient(90deg, hsl(150 80% 50%), hsl(150 80% 50% / 0.3), hsl(150 80% 50%))",
                  "linear-gradient(180deg, hsl(150 80% 50%), hsl(150 80% 50% / 0.3), hsl(150 80% 50%))",
                  "linear-gradient(270deg, hsl(150 80% 50%), hsl(150 80% 50% / 0.3), hsl(150 80% 50%))",
                  "linear-gradient(360deg, hsl(150 80% 50%), hsl(150 80% 50% / 0.3), hsl(150 80% 50%))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <motion.div 
              className="relative p-6 bg-card rounded-lg z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-foreground font-medium">Currently Learning</span>
                </motion.div>
                <p className="text-muted-foreground text-sm pl-6">
                  System Design, Advanced DSA, Cloud Architecture
                </p>
                
                <motion.div 
                  className="flex items-center gap-3 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-accent"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                  <span className="text-foreground font-medium">Education</span>
                </motion.div>
                <p className="text-muted-foreground text-sm pl-6">
                  B.Tech in Computer Science (Data Science)<br />
                  SRM Institute of Science and Technology
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
