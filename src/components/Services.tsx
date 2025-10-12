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
            Our <span className="text-amber">Services</span>
          </h2>
          <div className="w-20 h-1 bg-amber mx-auto mb-6"></div>
          <p className="text-lg text-beige max-w-2xl mx-auto">
            Premium grooming services designed for the modern gentleman
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-charcoal rounded-lg p-8 border-2 border-amber/20 hover:border-amber transition-all duration-300 hover:shadow-gold"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-amber/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber/20 transition-colors">
                  <Icon className="w-8 h-8 text-amber" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-3xl font-bold text-amber mb-4">
                  {service.price}
                </p>
                <p className="text-beige leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-amber/30 rounded-tr-lg"></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-amber font-semibold">
            Senior & Kids Discounts Apply
          </p>
          <p className="text-beige mt-2">
            Walk-ins welcome • Bookings recommended
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
