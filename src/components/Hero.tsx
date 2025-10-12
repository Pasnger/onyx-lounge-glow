import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[70vh] flex items-center">
      {/* Concrete background (inherits from App) + subtle vignette to mimic shop lighting */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(100% 60% at 50% 0%, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.0) 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative z-10 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight text-foreground">
            Sharp Style. <span className="text-[hsl(var(--primary))]">Confident Cuts.</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-foreground/80">
            Precision grooming in a lounge built for modern men — inspired by concrete textures, warm ambient lighting,
            and the signature ONYX neon glow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button className="btn-primary-onyx">Book a Cut</Button>
            <Button variant="outline" className="btn-outline-onyx">
              View Services
            </Button>
          </div>

          {/* Optional: small visual cue in gold → blue on hover */}
          <div className="mt-10 h-[2px] w-32 bg-[hsl(var(--primary))] transition-colors duration-300 hover:bg-[hsl(var(--neon-blue))]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
