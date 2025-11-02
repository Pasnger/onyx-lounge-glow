import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-5xl mx-auto flex flex-col items-center justify-center">
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up">
          <Button
            asChild
            size="lg"
            className="bg-sandstone hover:bg-neon-blue shadow-gold hover:shadow-neon-blue"
          >
            <a href="https://onyxlounge.booksy.com/a/" target="_blank" rel="noopener noreferrer">
              Book a Cut
            </a>
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            size="lg"
            variant="outline"
            className="border-sandstone text-sandstone hover:border-neon-blue hover:text-neon-blue hover:bg-neon-blue/10"
          >
            Explore the Lounge
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-sandstone gold-glow hover:text-neon-blue hover:neon-glow-subtle animate-bounce hover:scale-110 transition-all duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
