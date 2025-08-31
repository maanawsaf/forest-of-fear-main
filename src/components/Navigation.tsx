import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import foreverForestLogo from "@/assets/forever-forest-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Experiences", href: "#experiences" },
    { label: "What's New", href: "#whats-new" },
    { label: "Tickets", href: "#tickets" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-dark' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Professional Logo Section */}
          <div className="flex items-center gap-4">
            <img 
              src={foreverForestLogo} 
              alt="Forever Forest" 
              className="h-12 w-auto hover-float"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-metal text-fire">Forever Forest</h1>
              <p className="text-xs text-accent font-didot">Halloween Experience 2025</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-didot text-sm spooky-link transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Professional CTA Section */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground font-didot">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
              <span>Now Open</span>
            </div>
            
            <Button variant="blood" size="lg" className="hidden sm:flex">
              Book Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}>
          <div className="glass-effect rounded-2xl p-6 mt-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-foreground/80 hover:text-primary font-didot py-2 spooky-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="blood" className="w-full">
                  Book Your Experience
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;