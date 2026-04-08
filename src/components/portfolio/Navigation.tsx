const Navigation = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-2 border-foreground">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-black uppercase tracking-tighter font-mono">
            HITAKSHI<span className="highlight">.</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          <span className="text-xs font-mono text-muted-foreground hidden md:block">2026</span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
