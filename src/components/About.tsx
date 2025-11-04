import { useEffect, useRef, useState } from "react";
import { useScrollReveal, getRevealClass } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({ threshold: 0.3 });
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(videoElement);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-12 md:py-20 section-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sandstone/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className={`space-y-6 ${getRevealClass(textVisible, "slide-left")}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Welcome to <span className="text-sandstone gold-glow">Onyx</span>
            </h2>
            <div className="w-20 h-1 bg-sandstone shadow-gold"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Onyx Barber Lounge, we believe grooming is more than just a haircut—it's an experience. 
              Our space is crafted for the modern man who values precision, style, and atmosphere.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With matte concrete textures, warm ambient lighting, and the signature electric blue ONYX glow, 
              every detail reflects our commitment to excellence. Step into a lounge where craftsmanship 
              meets culture, and leave with confidence in every cut.
            </p>
            <p className="text-lg text-sandstone font-semibold gold-glow">
              Walk-ins welcome. Style-focused men preferred.
            </p>
          </div>

          {/* Image Placeholder */}
          <div ref={imageRef} className={`relative mirror-glow ${getRevealClass(imageVisible, "slide-right")}`}>
            <div className="concrete-texture rounded-lg overflow-hidden shadow-soft-dark border-2 border-sandstone/30 hover:border-neon-blue transition-all duration-300">
              <video 
                ref={videoRef}
                className="w-full h-auto"
                controls
                preload={shouldLoadVideo ? "metadata" : "none"}
              >
                {shouldLoadVideo && <source src="/onyx-about.mp4" type="video/mp4" />}
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Decorative Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-sandstone/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
