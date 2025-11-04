import { Scissors, Sparkles, User, Baby, Users, Info } from "lucide-react";
import { useScrollReveal, getRevealClass } from "@/hooks/useScrollReveal";

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ 
    threshold: 0.3
  });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ 
    threshold: 0.1
  });

  // Structured data for services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "Service",
        "name": "Haircut",
        "description": "Precision cuts tailored to your style and face shape",
        "provider": {
          "@type": "HairSalon",
          "name": "Onyx Barber Lounge"
        },
        "offers": {
          "@type": "Offer",
          "price": "50",
          "priceCurrency": "AUD"
        }
      },
      {
        "@type": "Service",
        "name": "Haircut & Beard",
        "description": "Complete grooming experience for a sharp, polished look",
        "provider": {
          "@type": "HairSalon",
          "name": "Onyx Barber Lounge"
        },
        "offers": {
          "@type": "Offer",
          "price": "70",
          "priceCurrency": "AUD"
        }
      },
      {
        "@type": "Service",
        "name": "Beard Trimming",
        "description": "Expert beard trimming and shaping",
        "provider": {
          "@type": "HairSalon",
          "name": "Onyx Barber Lounge"
        },
        "offers": {
          "@type": "Offer",
          "price": "25",
          "priceCurrency": "AUD"
        }
      },
      {
        "@type": "Service",
        "name": "Kids Haircut",
        "description": "Gentle and patient haircuts for children 12 and under",
        "provider": {
          "@type": "HairSalon",
          "name": "Onyx Barber Lounge"
        },
        "offers": {
          "@type": "Offer",
          "price": "40",
          "priceCurrency": "AUD"
        }
      },
      {
        "@type": "Service",
        "name": "Seniors Haircut",
        "description": "Special pricing for senior clients 60 and above",
        "provider": {
          "@type": "HairSalon",
          "name": "Onyx Barber Lounge"
        },
        "offers": {
          "@type": "Offer",
          "price": "35",
          "priceCurrency": "AUD"
        }
      }
    ]
  };
  
  const services = [
    {
      icon: Scissors,
      title: "Haircut",
      price: "$50",
      description: "Precision cuts tailored to your style and face shape",
    },
    {
      icon: Sparkles,
      title: "Haircut & Beard",
      price: "$70",
      description: "Complete grooming experience for a sharp, polished look",
    },
    {
      icon: User,
      title: "Beard",
      price: "$25",
      description: "Expert beard trimming and shaping",
    },
    {
      icon: Baby,
      title: "Kids Haircut",
      price: "$40",
      description: "Gentle and patient haircuts for children",
    },
    {
      icon: Users,
      title: "Seniors Haircut",
      price: "$35",
      description: "Special pricing for senior clients",
    },
    {
      icon: Info,
      title: "Age Requirements",
      price: "",
      description: "Kids pricing applies to children 12 and under. Seniors pricing available for guests 60 and above. Special rates apply to any haircut service.",
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-concrete-medium relative">
      {/* Service Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-12 md:mb-16 ${getRevealClass(headerVisible, "fade-scale")}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-foreground">
            Our <span className="text-sandstone gold-glow">Services</span>
          </h2>
          <div className="w-20 h-1 bg-sandstone shadow-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium grooming services designed for the modern gentleman
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-card rounded-lg p-6 md:p-8 border-2 border-sandstone/40 hover:border-neon-blue transition-all duration-300 shadow-gold hover:shadow-neon-blue ${getRevealClass(cardsVisible, "fade-up")}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-sandstone/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-all duration-300 shadow-gold group-hover:shadow-neon-blue">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-sandstone group-hover:text-neon-blue transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                {service.price && (
                  <p className="text-3xl font-bold text-sandstone gold-glow group-hover:text-neon-blue group-hover:neon-glow-subtle mb-4 transition-all duration-300">
                    {service.price}
                  </p>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-sandstone/30 rounded-tr-lg group-hover:border-neon-blue transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Walk-ins welcome • Bookings recommended
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
