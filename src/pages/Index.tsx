import Navigation from "@/components/portfolio/Navigation";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-mono">
            Designed & Built by <span className="text-primary">Hitakshi Arora</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
