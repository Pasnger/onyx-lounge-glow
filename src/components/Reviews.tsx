import { Star } from "lucide-react";
import { useScrollReveal, getRevealClass } from "@/hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Reviews = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal({
    threshold: 0.3,
  });

  const { ref: carouselRef, isVisible: carouselVisible } = useScrollReveal({
    threshold: 0.1,
  });

  // Review schema for rich snippets
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Onyx Barber Lounge",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "8",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Aidan Caputo",
      text: "One of the best barber shops i've ever been to, all barbers make u feel right at home. Best haircut i've ever gotten. MUST TRY PLACE!",
      time: "a week ago",
      isNew: true,
    },
    {
      id: 2,
      name: "Sam 90",
      text: "Went today for the first time with my 20-month old boy. Excellent service from Harrison , he was calm and patient even though my little one wasn't! He took his time and handled everything so professionally. We'll definitely be back. Thanks, Harrison!",
      time: "2 weeks ago",
      isNew: true,
    },
    {
      id: 3,
      name: "BLZ_Pezza",
      text: "Really good experience couldn't complain at all! They listed to exactly what I wanted and the haircut turned out the exact same way. Barbers were great, would definitely recommend",
      time: "3 months ago",
      isNew: false,
    },
    {
      id: 4,
      name: "Kamal Dhillon",
      text: "Excellent service and attention to detail. The barber was professional, friendly, and really took the time to make sure the cut was exactly how I wanted. Clean shop, great atmosphere definitely a 5-star experience. Highly recommend!",
      time: "2 months ago",
      isNew: false,
    },
    {
      id: 5,
      name: "Luca Artone",
      text: "The atmosphere here is unbeatable. The barbers are not only incredibly skilled but also genuinely great people. The service is top-tier—without a doubt, this is the best barber shop I've ever been to. Highly recommended.",
      time: "3 months ago",
      isNew: false,
    },
    {
      id: 6,
      name: "Saad Alam",
      text: "Went today and honestly had such a good experience. Harrison did an awesome job, he took his time, didn't rush at all, and kept checking in to make sure I was happy with everything. You can tell he actually cares about what he's doing.",
      time: "3 weeks ago",
      isNew: true,
    },
    {
      id: 7,
      name: "Hisham Najjar",
      text: "Been getting my hair cut from Dylan for years. Now he has opened up this business it's great. Doesn't matter what barber you get on the day. They are all 100% quality. Highly recommend",
      time: "3 months ago",
      isNew: false,
    },
    {
      id: 8,
      name: "Barzi Siyani",
      text: "Amazing experience at onyx barber danny is a very talented barber ever haircut turns out perfect and just makes you feel comfortable in his chair. The shop as a whole is top tier 🙌🙌",
      time: "a week ago",
      isNew: true,
    },
  ];

  return (
    <section className="py-20 px-4 section-gradient relative overflow-hidden">
      {/* Review Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-sandstone rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-blue rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={getRevealClass(headerVisible, "fade-scale")}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold text-muted-foreground tracking-wider uppercase">
                Google Reviews
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              What Our <span className="text-sandstone gold-glow">Clients</span> Say
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-sandstone text-sandstone gold-glow"
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">({reviews.length} reviews)</span>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-sandstone to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className={getRevealClass(carouselVisible, "fade-up")}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={review.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <div className={`concrete-texture rounded-lg p-6 border-2 border-sandstone/30 hover:border-neon-blue transition-all duration-300 shadow-soft-dark hover:shadow-soft h-full flex flex-col group ${getRevealClass(carouselVisible, "fade-up")}`} style={{ transitionDelay: `${index * 100}ms` }}>
                      {/* Header with Stars and Badge */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-sandstone text-sandstone gold-glow"
                            />
                          ))}
                        </div>
                        {review.isNew && (
                          <span className="text-xs font-semibold px-2 py-1 bg-sandstone/20 text-sandstone rounded-full">
                            New
                          </span>
                        )}
                      </div>

                      {/* Review Text */}
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                        "{review.text}"
                      </p>

                      {/* Footer with Name and Time */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <p className="font-semibold text-foreground">
                          {review.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {review.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-concrete-texture border-sandstone/30 hover:border-neon-blue hover:bg-neon-blue/10" />
            <CarouselNext className="hidden md:flex -right-12 bg-concrete-texture border-sandstone/30 hover:border-neon-blue hover:bg-neon-blue/10" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJTditHEDbsGoR36_5TbWVjwc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-sandstone/10 border-2 border-sandstone text-sandstone font-semibold rounded-lg hover:bg-sandstone hover:text-background transition-all duration-300 shadow-gold hover:shadow-neon-blue gold-glow hover:scale-105"
          >
            View All Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
