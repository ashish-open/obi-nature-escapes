import { Button } from "@/components/ui/button";
import { PartyPopper, Coffee, Building2, GraduationCap, Trees } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Offerings = () => {
  const titleAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const offerings = [
    {
      icon: PartyPopper,
      title: "Outdoor Event Spaces",
      description: "Perfect for celebrations of all kinds"
    },
    {
      icon: Coffee,
      title: "Picnic & Day-Out Packages",
      description: "Relaxing escapes for families and friends"
    },
    {
      icon: Building2,
      title: "Corporate Offsites",
      description: "Team-building in natural surroundings"
    },
    {
      icon: GraduationCap,
      title: "Kids' Programs",
      description: "Afterschool & weekend learning experiences"
    },
    {
      icon: Trees,
      title: "Nature Activities",
      description: "Farm trails, play areas & open lawns"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient">
            Experiences for Every Occasion
          </h2>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12"
        >
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl p-6 text-center transition-all duration-500 group hover-lift cursor-pointer animate-scale-in stagger-${(index % 6) + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <offering.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                {offering.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {offering.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Explore Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
