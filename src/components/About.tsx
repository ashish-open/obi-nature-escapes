import { Leaf, Users, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const titleAnimation = useScrollAnimation();
  const cardsAnimation = useScrollAnimation();
  const highlights = [
    {
      icon: Leaf,
      title: "Beautiful Green Spaces",
      description: "13 acres of lush, nature-connected venues"
    },
    {
      icon: Users,
      title: "Family & Kids-Friendly",
      description: "Safe, engaging activities for all ages"
    },
    {
      icon: Sparkles,
      title: "Customizable Events",
      description: "Tailored packages for your perfect day"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref}
          className={`max-w-4xl mx-auto text-center mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gradient">
            More Than a Venue
          </h2>
          <h3 className="text-2xl md:text-3xl text-secondary font-bold mb-8">
            A Nature-Connected Community
          </h3>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            OBI is a 13-acre outdoor farm space designed for families, teams, and communities.
            From birthday parties and corporate events to picnics, afterschool programs and weekend activities — 
            we host experiences that bring people closer to nature and to each other.
          </p>
        </div>

        <div 
          ref={cardsAnimation.ref}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`group bg-card rounded-2xl p-8 shadow-[var(--shadow-subtle)] transition-all duration-500 hover-lift hover-glow animate-scale-in stagger-${index + 1} ${cardsAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="w-16 h-16 rounded-full gradient-sunset flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h4 className="font-display text-xl font-bold mb-3 text-foreground">
                {highlight.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
