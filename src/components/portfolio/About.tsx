import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-12" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground hover:scale-105 transition-transform duration-300 inline-block">
            About Me<span className="text-primary animate-pulse">.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`border-gradient p-6 relative z-10 h-full transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
              <p>
                I'm a Computer Science undergraduate specializing in <span className="text-foreground">Data Science</span> at 
                SRM Institute of Science and Technology.
              </p>
              <p>
                I enjoy building products that solve real problems — from mobile applications 
                to developer tools. I'm passionate about writing <span className="text-primary">clean, maintainable code</span>.
              </p>
              <p>
                Currently seeking <span className="text-accent">full-time opportunities</span> where 
                I can contribute to impactful projects.
              </p>
            </div>
          </div>
          
          <div className={`border-gradient p-6 relative z-10 h-full transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-foreground font-medium">Currently Learning</span>
              </div>
              <p className="text-muted-foreground text-lg pl-6">
                System Design, Advanced DSA, Cloud Architecture
              </p>
              
              <div className="flex items-center gap-3 pt-4">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <span className="text-foreground font-medium">Education</span>
              </div>
              <p className="text-muted-foreground text-lg pl-6">
                B.Tech in Computer Science (Data Science)<br />
                SRM Institute of Science and Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
