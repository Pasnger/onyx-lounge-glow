import { Scissors, Sparkles, User, Baby, Users, Info } from "lucide-react";
import { useScrollReveal, getRevealClass } from "@/hooks/useScrollReveal";

const Services = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.3 });
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
    <section id="services" className="py-24 bg-concrete-medium relative">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center mb-16 ${getRevealClass(headerVisible, "fade-scale")}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Our <span className="text-sandstone gold-glow">Services</span>
          </h2>
          <div className="w-20 h-1 bg-sandstone shadow-gold mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium grooming services designed for the modern gentleman
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-card rounded-lg p-8 border-2 border-sandstone/40 hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue shadow-soft`}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-sandstone/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-all duration-300 shadow-gold group-hover:shadow-neon-blue">
                  <Icon className="w-8 h-8 text-sandstone group-hover:text-neon-blue transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
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
