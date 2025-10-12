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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/70 via-onyx/50 to-onyx"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
          <span className="text-foreground">Sharp Style.</span>
          <br />
          <span className="text-amber gold-glow">Confident Cuts.</span>
        </h1>
        <p className="text-xl md:text-2xl text-beige mb-12 animate-slide-up font-light">
          Experience precision grooming in a space built for modern men.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-amber text-onyx hover:bg-amber/90 hover:shadow-gold transition-all duration-300 font-semibold text-lg px-8 py-6"
          >
            Book a Cut
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            size="lg"
            variant="outline"
            className="border-2 border-amber text-amber hover:bg-amber hover:text-onyx transition-all duration-300 font-semibold text-lg px-8 py-6"
          >
            Explore the Lounge
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-amber animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
