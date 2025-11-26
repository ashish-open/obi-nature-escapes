import { Button } from "@/components/ui/button";
import celebrationImage from "@/assets/celebration-garden.jpg";
import pavilionImage from "@/assets/green-pavilion.jpg";
import picnicImage from "@/assets/picnic-lawns.jpg";
import trailsImage from "@/assets/nature-trails.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const EventSpaces = () => {
  const titleAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const spaces = [
    {
      title: "Celebration Garden",
      description: "Open lawn ideal for birthdays, engagements, intimate events.",
      image: celebrationImage
    },
    {
      title: "Green Pavilion",
      description: "Semi-covered space perfect for workshops, meetups & gatherings.",
      image: pavilionImage
    },
    {
      title: "Picnic Lawns & Play Zones",
      description: "Relaxation spaces with shade, seating, farm views & kids' play.",
      image: picnicImage
    },
    {
      title: "Nature Trails & Activity Areas",
      description: "Perfect for photoshoots, nature walks and family outings.",
      image: trailsImage
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient">
            Spaces to Celebrate, Work & Play
          </h2>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12"
        >
          {spaces.map((space, index) => (
            <div
              key={index}
              className={`group bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-subtle)] transition-all duration-700 hover-lift cursor-pointer ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'} stagger-${(index % 4) + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={space.image} 
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {space.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {space.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="gradient-sunset hover:scale-105 transition-all duration-300">
            View All Spaces
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventSpaces;
