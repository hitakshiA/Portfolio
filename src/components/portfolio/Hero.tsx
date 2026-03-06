import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import hitakshiPhoto from "@/assets/hitakshi-photo.jpeg";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="min-h-[80vh] flex items-center justify-center pt-16 relative overflow-hidden">
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className={`max-w-5xl mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center gap-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Text content */}
        <div className="flex-1">
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-gradient">Hey, I'm Hitakshi Arora</span>
          </h1>
          
          <p className={`text-xl md:text-2xl text-muted-foreground mb-4 font-medium transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Full-Stack & Android Developer
          </p>
          
          <p className={`text-lg text-muted-foreground max-w-xl mb-6 leading-relaxed transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Building scalable applications with clean, efficient code. 
            Passionate about solving complex problems and creating impactful products.
          </p>
          
          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-[400ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="https://linkedin.com/in/hitakshiaroraa" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/hitakshiA" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-colors">GitHub</a>
            <a href="mailto:hitakshi220@gmail.com" className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-colors">Email</a>
            <a href="/resume.pdf" download className="px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-colors flex items-center gap-2">Resume <span>↓</span></a>
          </div>
        </div>

        {/* Photo */}
        <div className={`flex-shrink-0 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="w-56 h-56 md:w-72 md:h-72 overflow-hidden border-4 border-primary/20 shadow-2xl" style={{ borderRadius: '50% 50% 0 0 / 60% 60% 0 0' }}>
            <img src={hitakshiPhoto} alt="Hitakshi Arora" className="w-full h-[130%] object-cover object-top shadow-sm rounded-none border-0 border-none" />
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;