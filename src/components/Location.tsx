import { MapPin, Clock } from "lucide-react";
import { useScrollReveal, getRevealClass } from "@/hooks/useScrollReveal";

const Location = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: hoursRef, isVisible: hoursVisible } = useScrollReveal({ threshold: 0.3 });
  const hours = [
    { day: "Monday", time: "9-5" },
    { day: "Tuesday", time: "9-5" },
    { day: "Wednesday", time: "9-5" },
    { day: "Thursday", time: "9-7" },
    { day: "Friday", time: "9-7" },
    { day: "Saturday", time: "9-4" },
    { day: "Sunday", time: "CLOSED" },
  ];

  return (
    <section id="location" className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={headerRef} className={`text-center mb-12 md:mb-16 ${getRevealClass(headerVisible, "fade-scale")}`}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
            Visit <span className="text-sandstone gold-glow">Us</span>
          </h2>
          <div className="w-20 h-1 bg-sandstone shadow-gold mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Map */}
          <div ref={mapRef} className={`md:flex md:flex-col md:h-full ${getRevealClass(mapVisible, "slide-left")}`}>
            <div className="md:flex md:flex-col md:flex-1 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sandstone gold-glow mt-1 flex-shrink-0 hover:text-neon-blue hover:neon-glow-subtle transition-all duration-300" />
                <div>
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">Location</h3>
                  <p className="text-muted-foreground">
                    Shop 1/723-725 Lower North East Rd
                    <br />
                    Paradise SA 5075
                  </p>
                </div>
              </div>
              
              {/* Google Map Embed */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+1%2F723-725+Lower+North+East+Rd+Paradise+SA+5075"
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-video rounded-lg overflow-hidden border-2 border-sandstone hover:border-neon-blue shadow-gold hover:shadow-neon-blue transition-all duration-300 relative group cursor-pointer"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.8635244679795!2d138.6726!3d-34.8736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0ce86e4a1d84d%3A0x1234567890abcdef!2s723-725%20Lower%20North%20East%20Rd%2C%20Paradise%20SA%205075!5e0!3m2!1sen!2sau!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: 'none' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Onyx Barber Lounge Location"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-center justify-center">
                  <span className="text-white font-semibold bg-sandstone/90 px-4 py-2 rounded-lg">Open in Google Maps</span>
                </div>
              </a>
            </div>

            <div className="mt-6 md:mt-auto p-4 md:p-6 bg-card rounded-lg border-2 border-sandstone shadow-gold hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300">
              <p className="text-sandstone gold-glow font-semibold text-base md:text-lg text-center">
                Prefer to call?
              </p>
              <p className="text-muted-foreground text-center mt-2 text-sm md:text-base">
                <a 
                  href="tel:0419861501" 
                  className="hover:text-neon-blue hover:neon-glow-subtle transition-all duration-300"
                >
                  0419 861 501
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div ref={hoursRef} className={`space-y-6 md:flex md:flex-col md:h-full ${getRevealClass(hoursVisible, "slide-right")}`}>
            <div className="flex items-start md:items-stretch md:flex-1 gap-4 h-full">
              <Clock className="w-6 h-6 text-sandstone gold-glow mt-1 flex-shrink-0 hover:text-neon-blue hover:neon-glow-subtle transition-all duration-300" />
              <div className="flex-1 flex flex-col min-h-full">
                <h3 className="text-xl font-heading font-bold mb-6 text-foreground">Opening Hours</h3>
                
                <div className="space-y-3 max-w-md mx-auto md:mx-0 md:max-w-none">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className="flex justify-between items-center py-3 border-b border-sandstone/30 hover:border-neon-blue transition-all duration-300"
                    >
                      <span className="text-muted-foreground font-medium">{item.day}</span>
                      <span
                        className={`font-bold ${
                          item.time === "CLOSED" ? "text-muted-foreground" : "text-sandstone gold-glow"
                        }`}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 md:mt-auto p-4 md:p-6 bg-card rounded-lg border-2 border-sandstone shadow-gold hover:border-neon-blue hover:shadow-neon-blue transition-all duration-300 max-w-md mx-auto md:mx-0 md:max-w-none">
                  <p className="text-sandstone gold-glow font-semibold text-base md:text-lg text-center">
                    Walk-ins Welcome
                  </p>
                  <p className="text-muted-foreground text-center mt-2 text-sm md:text-base">
                    Bookings recommended for guaranteed service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
