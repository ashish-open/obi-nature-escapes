import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const VirtualTour = () => {
  const animation = useScrollAnimation();
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={animation.ref}
          className={`max-w-4xl mx-auto text-center animate-scale-in ${animation.isVisible ? 'visible' : ''}`}
        >
          <div className="w-20 h-20 rounded-full gradient-sunset flex items-center justify-center mx-auto mb-8 animate-float">
            <Video className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gradient">
            Explore OBI in 360°
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Take a virtual walk through our event spaces, picnic lawns and activity areas.
          </p>

          <Button 
            size="lg" 
            className="gradient-sunset hover:scale-105 transition-all duration-300 shadow-[var(--shadow-warm)]"
          >
            Start Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
