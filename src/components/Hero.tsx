import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-sunset.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="OBI outdoor venue at sunset" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-background/95" />
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.2),_transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-on-scroll visible">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="block text-gradient">Where Celebrations,</span>
          <span className="block text-primary-foreground">Nature & Community Come Together</span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Escape from the noise and reconnect with nature at Bengaluru's favourite outdoor venue for events, picnics, and family experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="gradient-sunset text-primary-foreground hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] text-lg px-8 py-6 group"
          >
            Plan an Event
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
