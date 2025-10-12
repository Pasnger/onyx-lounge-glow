import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero-overlay)" }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button onClick={() => scrollToSection("contact")} size="lg">
            Book a Cut
          </Button>
          <Button onClick={() => scrollToSection("about")} size="lg" variant="outline">
            Explore the Lounge
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-neon-blue neon-glow-subtle animate-bounce hover:scale-110 transition-transform"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
