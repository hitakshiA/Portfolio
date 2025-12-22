import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-narrow">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-lg font-bold text-foreground tracking-tight">
            HA
          </a>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-primary font-mono text-xs mr-1">0{index + 1}.</span>
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
            >
              Resume
            </a>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
        
        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  <span className="text-primary font-mono text-xs mr-2">0{index + 1}.</span>
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download
                className="w-fit text-sm px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors mt-2"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
