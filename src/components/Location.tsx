import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Location = () => {
  const titleAnimation = useScrollAnimation();
  const mapAnimation = useScrollAnimation();
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div 
            ref={titleAnimation.ref}
            className={`text-center mb-12 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              <span className="text-gradient">Location</span>
              <span className="text-foreground"> — OBI, Off Sarjapur Road</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Easily accessible from Sarjapur, Dommasandra, Varthur, HSR, and Electronic City.
            </p>
          </div>

          <div 
            ref={mapAnimation.ref}
            className={`bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-warm)] transition-all duration-700 hover-lift animate-scale-in ${mapAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Map Placeholder */}
            <div className="relative h-96 bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">Map will be integrated here</p>
              </div>
            </div>
            
            <div className="p-8 text-center">
              <Button 
                size="lg" 
                className="gradient-sunset hover:scale-105 transition-all duration-300"
              >
                <Navigation className="mr-2" />
                Open in Maps
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
