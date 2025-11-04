import { useScrollReveal, getRevealClass } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import lounge1 from "@/assets/lounge-1.jpg";
import lounge2 from "@/assets/lounge-2.jpg";
import lounge3 from "@/assets/lounge-3.jpg";
import lounge4 from "@/assets/lounge-4.jpg";
import lounge5 from "@/assets/lounge-5.jpg";
import lounge6 from "@/assets/lounge-6.jpg";
import lounge7 from "@/assets/lounge-7.jpg";

const Lounge = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: carouselRef, isVisible: carouselVisible } = useScrollReveal({ threshold: 0.2 });

  const images = [
    { id: 1, src: lounge1, alt: "Onyx Barber Lounge interior with elegant arched mirrors and premium barber chairs" },
    { id: 2, src: lounge2, alt: "Full view of the modern barbershop space with luxury styling stations" },
    { id: 3, src: lounge3, alt: "Professional barber providing expert haircut service to client" },
    { id: 4, src: lounge4, alt: "Barbers working with clients in the stylish lounge atmosphere" },
    { id: 5, src: lounge5, alt: "Comfortable waiting area featuring plush chesterfield sofa" },
    { id: 6, src: lounge6, alt: "Onyx Barber Lounge branding with signature teddy bear mascot" },
    { id: 7, src: lounge7, alt: "Illuminated Onyx neon sign showcasing premium brand identity" },
  ];

  return (
    <section className="py-20 bg-concrete relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sandstone/5 via-transparent to-sandstone/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 ${getRevealClass(headerVisible, "fade-up")}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sandstone via-neon-gold to-sandstone bg-clip-text text-transparent">
            Step Inside The Lounge
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A premium space designed for the modern gentleman. Experience luxury grooming in an atmosphere of sophistication and style.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className={`max-w-5xl mx-auto ${getRevealClass(carouselVisible, "fade-scale")}`}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image) => (
                <CarouselItem key={image.id}>
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-lg border-2 border-sandstone/20 hover:border-neon-blue/50 transition-all duration-300 shadow-lg hover:shadow-neon-gold/20">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 hover:bg-sandstone/20 border-sandstone/50 hover:border-neon-gold" />
            <CarouselNext className="right-4 bg-background/80 hover:bg-sandstone/20 border-sandstone/50 hover:border-neon-gold" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Lounge;
