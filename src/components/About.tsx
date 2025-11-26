import { Sparkles, Laptop, Gift, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const About = () => {
  const titleAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const highlights = [{
    icon: Sparkles,
    description: "Celebrate in beautifully designed outdoor spaces"
  }, {
    icon: Laptop,
    description: "Work, relax & create in nature"
  }, {
    icon: Gift,
    description: "Perfect for birthdays, offsites & getaways"
  }, {
    icon: MapPin,
    description: "A peaceful 13-acre escape, minutes from the city"
  }];
  return <section className="py-16 sm:py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div ref={titleAnimation.ref} className={`max-w-4xl mx-auto text-center mb-12 sm:mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gradient px-2">
            An Outdoor Experience Crafted for Events, Work & Leisure
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
            OBI is a 13-acre outdoor farm space designed for families, teams, and communities.
            From birthday parties and corporate events to picnics, afterschool programs and weekend activities — 
            we host experiences that bring people closer to nature and to each other.
          </p>
        </div>

        <div ref={cardsAnimation.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {highlights.map((highlight, index) => <div key={index} className={`group bg-card rounded-2xl p-6 shadow-[var(--shadow-subtle)] transition-all duration-500 hover-lift hover-glow animate-scale-in stagger-${index + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}>
              <div className="w-14 h-14 rounded-full gradient-sunset flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <highlight.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default About;