import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[hsl(var(--background)/0.9)] backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <button
            onClick={() => scrollToSection("about")}
            className="text-2xl font-heading font-bold tracking-tight group"
            aria-label="Onyx Barber Lounge - back to top"
          >
            <span
              className="
                text-white transition-all duration-300
                drop-shadow-[0_0_4px_hsl(var(--neon-blue)/.25)]
                group-hover:text-[hsl(var(--neon-blue))]
                group-hover:drop-shadow-[0_0_14px_hsl(var(--neon-blue)/.9)]
              "
            >
              Onyx Barber Lounge
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "gallery", label: "Gallery" },
              { id: "location", label: "Location" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/90 hover:text-[hsl(var(--neon-blue))] transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button asChild>
              <a href="https://onyxlounge.booksy.com/a/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 space-y-4 animate-fade-in">
            {[
              { id: "about", label: "About" },
              { id: "services", label: "Services" },
              { id: "gallery", label: "Gallery" },
              { id: "location", label: "Location" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground/90 hover:text-[hsl(var(--neon-blue))] transition-colors font-medium py-2"
              >
                {item.label}
              </button>
            ))}
            <Button asChild className="w-full">
              <a href="https://onyxlounge.booksy.com/a/" target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
