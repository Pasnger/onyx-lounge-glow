const About = () => {
  return (
    <section id="about" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sandstone/5 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Welcome to <span className="text-amber">Onyx</span>
            </h2>
            <div className="w-20 h-1 bg-amber"></div>
            <p className="text-lg text-beige leading-relaxed">
              At Onyx Barber Lounge, we believe grooming is more than just a haircut—it's an experience. 
              Our space is crafted for the modern man who values precision, style, and atmosphere.
            </p>
            <p className="text-lg text-beige leading-relaxed">
              With matte black ceilings, warm ambient lighting, and sand-textured walls accented with 
              subtle gold touches, every detail reflects our commitment to excellence. Step into a lounge 
              where craftsmanship meets culture, and leave with confidence in every cut.
            </p>
            <p className="text-lg text-amber font-semibold">
              Walk-ins welcome. Style-focused men preferred.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-charcoal to-onyx rounded-lg overflow-hidden shadow-soft border border-amber/20">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-amber/10 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-beige">Video about Onyx story and vision will be displayed here</p>
                </div>
              </div>
            </div>
            {/* Decorative Gold Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber/30 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
