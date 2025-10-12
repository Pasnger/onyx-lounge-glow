import { Instagram } from "lucide-react";

const Gallery = () => {
  const images = [
    { id: 1, alt: "Premium haircut showcase" },
    { id: 2, alt: "Beard grooming expertise" },
    { id: 3, alt: "Modern fade technique" },
    { id: 4, alt: "Classic styling" },
    { id: 5, alt: "Precision barbering" },
    { id: 6, alt: "Contemporary cuts" },
  ];

  return (
    <section id="gallery" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our <span className="text-sandstone gold-glow">Work</span>
          </h2>
          <div className="w-20 h-1 bg-sandstone shadow-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See the precision and style that defines Onyx Barber Lounge
          </p>
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <Instagram className="w-5 h-5 text-sandstone gold-glow" />
            <a
              href="https://www.instagram.com/onyx_barberlounge/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sandstone hover:text-neon-blue transition-all duration-300"
            >
              @onyx_barberlounge
            </a>
            <span>•</span>
            <a
              href="https://www.tiktok.com/@onyx_barberlounge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sandstone hover:text-neon-blue transition-all duration-300"
            >
              @onyx_barberlounge
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square bg-card rounded-lg overflow-hidden border-2 border-sandstone shadow-gold hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue"
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-2 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                  <Scissors className="w-8 h-8 text-sandstone group-hover:text-neon-blue transition-colors duration-300 mx-auto" />
                  <p className="text-xs text-muted-foreground">{image.alt}</p>
                </div>
              </div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Follow us on social media for daily inspiration and booking updates
          </p>
        </div>
      </div>
    </section>
  );
};

// Placeholder icon
const Scissors = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
    />
  </svg>
);

export default Gallery;
