import { Scissors, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Haircut",
      price: "$50",
      description: "Precision cuts tailored to your style and face shape",
    },
    {
      icon: Sparkles,
      title: "Hair & Beard",
      price: "$70",
      description: "Complete grooming experience for a sharp, polished look",
    },
  ];

  return (
    <section id="services" className="py-24 bg-onyx relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Our <span className="text-sandstone gold-glow">Services</span>
          </h2>
          <div className="w-20 h-1 bg-neon-blue shadow-neon-blue mx-auto mb-6"></div>
          <p className="text-lg text-concrete-light max-w-2xl mx-auto">
            Premium grooming services designed for the modern gentleman
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative concrete-texture rounded-lg p-8 border-2 border-sandstone/20 hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue shadow-inner-dark"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-sandstone/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-neon-blue/20 transition-colors">
                  <Icon className="w-8 h-8 text-sandstone group-hover:text-neon-blue transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-3xl font-bold text-sandstone gold-glow mb-4">
                  {service.price}
                </p>
                <p className="text-concrete-light leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-neon-blue/30 rounded-tr-lg group-hover:border-neon-blue/60 transition-colors"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-sandstone gold-glow font-semibold">
            Senior & Kids Discounts Apply
          </p>
          <p className="text-concrete-light mt-2">
            Walk-ins welcome • Bookings recommended
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
