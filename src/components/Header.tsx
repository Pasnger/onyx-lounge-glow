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
        isScrolled ? "dark bg-onyx/95 backdrop-blur-md shadow-soft-dark" : "bg-concrete/80 backdrop-blur-sm"
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
            <span className="text-sandstone gold-glow group-hover:text-neon-blue group-hover:neon-glow-subtle transition-all duration-300">
              Onyx Barber Lounge
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sandstone hover:text-neon-blue transition-all duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sandstone hover:text-neon-blue transition-all duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sandstone hover:text-neon-blue transition-all duration-300 font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="text-sandstone hover:text-neon-blue transition-all duration-300 font-medium"
            >
              Location
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-sandstone hover:bg-neon-blue shadow-gold hover:shadow-neon-blue">Book Now</Button>
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
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-sandstone hover:text-neon-blue transition-all duration-300 font-medium py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left text-sandstone hover:text-neon-blue transition-all duration-300 font-medium py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left text-sandstone hover:text-neon-blue transition-all duration-300 font-medium py-2"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("location")}
              className="block w-full text-left text-sandstone hover:text-neon-blue transition-all duration-300 font-medium py-2"
            >
              Location
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-sandstone hover:bg-neon-blue shadow-gold hover:shadow-neon-blue">
              Book Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
