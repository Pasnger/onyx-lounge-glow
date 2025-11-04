import { useState, useEffect } from "react";
import { useScrollReveal, getRevealClass } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

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
    <section className="py-12 md:py-20 bg-concrete relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-sandstone/5 via-transparent to-sandstone/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 md:mb-16 ${getRevealClass(headerVisible, "fade-up")}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">Step Inside </span>
            <span className="bg-gradient-to-r from-sandstone via-neon-gold to-sandstone bg-clip-text text-transparent">The Lounge</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A premium space designed for the modern gentleman. Experience luxury grooming in an atmosphere of sophistication and style.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className={`max-w-7xl mx-auto px-16 ${getRevealClass(carouselVisible, "fade-scale")}`}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              slidesToScroll: 1,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => {
                const isActive = index === activeIndex;
                return (
                  <CarouselItem key={image.id} className="pl-4 basis-[85%] md:basis-3/4 lg:basis-2/3">
                    <div className={`p-2 transition-all duration-700 ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-80 md:scale-90 md:opacity-70'}`}>
                      <div className={`relative overflow-hidden rounded-lg border-2 transition-all duration-700 group ${isActive ? 'border-sandstone/50 shadow-2xl shadow-neon-gold/20' : 'border-sandstone/20 shadow-lg'}`}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover transition-all duration-700 group-hover:scale-105"
                          loading={index < 3 ? "eager" : "lazy"}
                          decoding="async"
                          width="800"
                          height="550"
                          style={{ willChange: isActive ? 'transform' : 'auto' }}
                        />
                        {/* Premium glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className={`absolute inset-0 ring-2 rounded-lg transition-all duration-700 ${isActive ? 'ring-neon-gold/30' : 'ring-transparent'} group-hover:ring-neon-gold/50`} />
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="-left-12 md:-left-16 bg-background/90 hover:bg-sandstone/30 border-sandstone/50 hover:border-neon-gold hover:shadow-lg hover:shadow-neon-gold/20 transition-all" />
            <CarouselNext className="-right-12 md:-right-16 bg-background/90 hover:bg-sandstone/30 border-sandstone/50 hover:border-neon-gold hover:shadow-lg hover:shadow-neon-gold/20 transition-all" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Lounge;
