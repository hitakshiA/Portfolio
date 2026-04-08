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
      <footer className="py-6 text-center border-t-2 border-foreground">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Designed & Built by <span className="highlight font-bold">Hitakshi Arora</span> — 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
