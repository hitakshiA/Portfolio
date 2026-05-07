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
    <nav className="fixed top-0 left-0 right-0 z-50 frosted border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between">
        <a href="#" className="text-[14px] font-semibold tracking-tight text-foreground">
          Hitakshi Arora
        </a>
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[12px] text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:hitakshi220@gmail.com"
          className="bg-primary text-primary-foreground rounded-full px-3.5 py-1 text-[12px] font-normal hover:opacity-90 transition-opacity"
        >
          Hire
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
