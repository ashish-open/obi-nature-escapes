import { Button } from "@/components/ui/button";
import { Palette, Activity, Users, Sparkles, Music, Camera } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ProgramCard = ({ program }: { program: any }) => {
  const cardAnimation = useScrollAnimation<HTMLDivElement>();
  return (
    <div
      ref={cardAnimation.ref}
      className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-[var(--shadow-subtle)] border-2 border-primary/20 animate-on-scroll ${cardAnimation.isVisible ? 'visible' : ''}`}
      style={{
        backgroundImage: `url(${program.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      <div className="relative z-10 p-6 sm:p-8 min-h-[16rem] sm:min-h-[18rem] md:min-h-[20rem] flex flex-col justify-end">
        <div className="w-14 h-14 rounded-full gradient-sunset flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <program.icon className="w-7 h-7 text-primary-foreground" />
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-bold mb-3 text-white drop-shadow-lg">
          {program.title}
        </h3>
        <p className="text-white/90 mb-4 leading-relaxed drop-shadow-md">
          {program.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {program.ageGroups.map((age: string, idx: number) => (
            <span key={idx} className="text-xs sm:text-sm px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30">
              {age}
            </span>
          ))}
        </div>
        <Button 
          variant="outline" 
          className="w-full border-2 border-white/50 text-white hover:bg-white hover:text-primary transition-all duration-300 backdrop-blur-sm"
          style={{ transform: 'translateZ(0)', willChange: 'auto' }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

const ArtMovementPrograms = () => {
  const titleAnimation = useScrollAnimation();

  const programs = [
    {
      icon: Palette,
      title: "Art Workshops",
      description: "Painting, pottery, clay modeling, and creative expression sessions for all ages.",
      ageGroups: ["Kids (5-12)", "Teens (13-17)", "Adults (18+)"],
      bgImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1280&h=320&fit=crop&q=80"
    },
    {
      icon: Activity,
      title: "Movement & Fitness",
      description: "Yoga, dance, outdoor fitness, and wellness programs in nature.",
      ageGroups: ["Kids (7-12)", "Teens (13-17)", "Adults (18+)"],
      bgImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1280&h=320&fit=crop&q=80"
    },
    {
      icon: Music,
      title: "Music & Performance",
      description: "Music lessons, drum circles, and performance arts workshops.",
      ageGroups: ["Kids (6-12)", "Teens (13-17)", "Adults (18+)"],
      bgImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1280&h=320&fit=crop&q=80"
    },
    {
      icon: Camera,
      title: "Creative Photography",
      description: "Nature photography, storytelling through images, and visual arts.",
      ageGroups: ["Teens (13-17)", "Adults (18+)"],
      bgImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1280&h=320&fit=crop&q=80"
    },
    {
      icon: Sparkles,
      title: "Mixed Media Art",
      description: "Combining various art forms, crafts, and creative techniques.",
      ageGroups: ["Kids (8-12)", "Teens (13-17)", "Adults (18+)"],
      bgImage: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1280&h=320&fit=crop&q=80"
    },
    {
      icon: Users,
      title: "Community Art Projects",
      description: "Collaborative art sessions bringing families and communities together.",
      ageGroups: ["All Ages"],
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&h=320&fit=crop&q=80"
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
            Art & Movement Programs for Adults & Kids
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Discover your creative side and stay active with our diverse range of art and movement programs designed for all ages.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} />
            ))}
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Button 
            size="lg" 
            className="gradient-sunset hover:scale-105 transition-all duration-300 text-base px-10"
          >
            View All Programs & Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtMovementPrograms;

