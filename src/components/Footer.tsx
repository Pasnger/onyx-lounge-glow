import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-charcoal border-t border-amber/20">
      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-b from-onyx to-charcoal">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Step into <span className="text-amber">Style</span>.
            <br />
            Step into <span className="text-amber">Onyx</span>.
          </h2>
          <p className="text-xl text-beige mb-8 max-w-2xl mx-auto">
            Book your next cut and experience precision grooming in South Australia's premier barber lounge
          </p>
          <Button
            size="lg"
            className="bg-amber text-onyx hover:bg-amber/90 hover:shadow-gold transition-all duration-300 font-semibold text-lg px-12 py-6"
          >
            Book Your Next Cut
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                <span className="text-foreground">ONYX</span>{" "}
                <span className="text-amber">BARBER</span>
              </h3>
              <p className="text-beige">
                Premium grooming for the modern man.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-amber">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block text-beige hover:text-amber transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block text-beige hover:text-amber transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="block text-beige hover:text-amber transition-colors"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("location")}
                  className="block text-beige hover:text-amber transition-colors"
                >
                  Location
                </button>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="font-heading font-semibold mb-4 text-amber">Connect With Us</h4>
              <div className="space-y-3">
                <p className="text-beige">
                  Shop 1/723-725 Lower North East Rd
                  <br />
                  Paradise SA 5075
                </p>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://www.instagram.com/onyx_barberlounge/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-amber/10 hover:bg-amber hover:text-onyx rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.tiktok.com/@onyx_barberlounge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-amber/10 hover:bg-amber hover:text-onyx rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-gold"
                  >
                    <TikTokIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-amber/20 text-center text-beige">
            <p>© 2025 Onyx Barber Lounge. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// TikTok Icon Component
const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default Footer;
