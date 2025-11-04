import { Instagram } from "lucide-react";
import { useScrollReveal, getRevealClass } from "@/hooks/useScrollReveal";
import haircut1 from "@/assets/haircut-1.jpg";
import haircut2 from "@/assets/haircut-2.jpg";
import haircut3 from "@/assets/haircut-3.jpg";
import haircut4 from "@/assets/haircut-4.jpg";
import haircut5 from "@/assets/haircut-5.jpg";
import haircut6 from "@/assets/haircut-6.jpg";

const Gallery = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.1 });
  const images = [
    { id: 1, src: haircut1, alt: "Premium men's haircut by Onyx Barber Lounge Paradise SA - modern fade styling" },
    { id: 2, src: haircut2, alt: "Professional beard grooming and trimming service Paradise South Australia" },
    { id: 3, src: haircut3, alt: "Contemporary fade haircut technique at Onyx Barber Lounge Paradise" },
    { id: 4, src: haircut4, alt: "Classic men's haircut and styling by skilled barber Paradise SA" },
    { id: 5, src: haircut5, alt: "Precision barbering and grooming services Paradise South Australia" },
    { id: 6, src: haircut6, alt: "Modern men's hairstyle by Onyx Barber Lounge Lower North East Road Paradise" },
  ];

  return (
    <section id="gallery" className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-16 ${getRevealClass(headerVisible, "fade-scale")}`}>
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

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, idx) => (
            <div
              key={image.id}
              className={`group relative aspect-square bg-card rounded-lg overflow-hidden border-2 border-sandstone shadow-gold hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue ${getRevealClass(gridVisible, "fade-scale")}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
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

export default Gallery;
