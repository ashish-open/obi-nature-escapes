import { Button } from "@/components/ui/button";
import heroImage from "@/assets/obi-hero.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="OBI Space - Modern lakeside event venue in Bengaluru" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-on-scroll visible">
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          <span className="block text-gradient">Where Celebrations,</span>
          <span className="block text-primary-foreground">Nature & Community Come Together</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
          Escape from the noise and reconnect with nature at Bengaluru's favourite outdoor venue for events, picnics, and family experiences.
        </p>

        <div className="flex justify-center items-center px-4">
          <a 
            href="https://wa.me/918129195388?text=Hi%2C%20Looking%20forward%20to%20explore%20the%20Obi%20Space"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              className="gradient-sunset text-primary-foreground hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 group w-full sm:w-auto"
            >
              Plan an Event
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
        </div>
      </div>

      {/* Bottom Fade for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
