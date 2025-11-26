import { Button } from "@/components/ui/button";
import afterschoolImage from "@/assets/afterschool.jpg";
import { Heart, Palette, Users, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Afterschool = () => {
  const contentAnimation = useScrollAnimation();
  const imageAnimation = useScrollAnimation();
  const highlights = [
    { icon: Heart, text: "Outdoor fitness" },
    { icon: Palette, text: "Creative workshops" },
    { icon: Users, text: "Skill-building & teamwork" },
    { icon: Calendar, text: "Weekly sessions" }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
          <div 
            ref={contentAnimation.ref}
            className={`animate-slide-left ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-2">
              <span className="text-gradient">Afterschool Collective</span>
              <span className="block text-foreground mt-2">Ages 7–17</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-2">
              A hands-on, nature-based program helping kids build confidence, creativity and well-being through outdoor activities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-[var(--shadow-subtle)] hover:shadow-[var(--shadow-warm)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="font-semibold text-foreground">{highlight.text}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="gradient-sunset hover:scale-105 transition-all duration-300">
              Know More
            </Button>
          </div>

          <div 
            ref={imageAnimation.ref}
            className={`relative animate-slide-right ${imageAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="absolute inset-0 gradient-sunset rounded-3xl blur-3xl opacity-20" />
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-warm)]">
              <img 
                src={afterschoolImage} 
                alt="Kids afterschool program activities"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Afterschool;
