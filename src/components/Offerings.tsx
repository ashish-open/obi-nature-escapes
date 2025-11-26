import { Button } from "@/components/ui/button";
import { PartyPopper, Coffee, Building2, GraduationCap, Trees } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Offerings = () => {
  const titleAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const offerings = [
    {
      icon: PartyPopper,
      title: "Birthday Parties & Celebrations",
      description: "Beautiful outdoor setups for birthdays, milestones, and intimate gatherings."
    },
    {
      icon: Coffee,
      title: "Family & Friends Day-Outs",
      description: "Picnics, nature walks, open lawns, and relaxing slow-day experiences."
    },
    {
      icon: Building2,
      title: "Team Offsites & Workspaces",
      description: "Calm, nature-backed spaces for collaboration, strategy sessions, and deep work."
    },
    {
      icon: Trees,
      title: "Farm & Nature Activities",
      description: "Trail walks, hands-on farm experiences, green play zones, and open exploration."
    },
    {
      icon: GraduationCap,
      title: "After-School Movement Programs",
      description: "Engaging physical, creative, and nature-based activities for children & youth."
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-12 sm:mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient px-2">
            Experiences for Every Occasion
          </h2>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto mb-8 sm:mb-12"
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
