import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Packages = () => {
  const titleAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const packages = [
    {
      title: "Event Packages",
      subtitle: "Perfect for birthdays, engagements, family events and corporate gatherings.",
      features: [
        "Venue space",
        "Seating & basic setup",
        "Parking",
        "Event coordinator support"
      ],
      cta: "See Event Details",
      accent: "primary"
    },
    {
      title: "Picnic & Day-Out Packages",
      subtitle: "Designed for families, couples and friend groups.",
      features: [
        "Access to picnic lawns",
        "Play zones",
        "Nature activities",
        "Starting at: ₹999"
      ],
      cta: "Book a Picnic Visit",
      accent: "secondary"
    },
    {
      title: "Kids' & Family Experiences",
      subtitle: "Workshops, weekend activities, farm exploration & creative sessions.",
      features: [
        "Hands-on activities",
        "Creative workshops",
        "Nature exploration",
        "Age-appropriate programs"
      ],
      cta: "Explore Activities",
      accent: "accent"
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
            Event Packages & Experiences
          </h2>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`border-2 hover:border-primary transition-all duration-700 hover-lift hover-glow cursor-pointer animate-scale-in stagger-${index + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
            >
              <CardContent className="p-8">
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {pkg.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {pkg.subtitle}
                </p>

                <div className="mb-8 space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {pkg.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
