import celebrationImage from "@/assets/celebration-garden.jpg";
import picnicImage from "@/assets/picnic-lawns.jpg";
import afterschoolImage from "@/assets/afterschool.jpg";
import trailsImage from "@/assets/nature-trails.jpg";
import pavilionImage from "@/assets/green-pavilion.jpg";
import heroImage from "@/assets/hero-sunset.jpg";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Gallery = () => {
  const titleAnimation = useScrollAnimation();
  const gridAnimation = useScrollAnimation();
  const images = [
    { src: celebrationImage, alt: "Event setup at OBI", span: "md:col-span-2" },
    { src: picnicImage, alt: "Picnic scene at OBI", span: "" },
    { src: afterschoolImage, alt: "Kids play activities", span: "" },
    { src: trailsImage, alt: "Nature landscape", span: "md:col-span-2" },
    { src: pavilionImage, alt: "Green Pavilion", span: "" },
    { src: heroImage, alt: "Family day-out", span: "" },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient">
            A Glimpse of OBI
          </h2>
        </div>

        <div 
          ref={gridAnimation.ref}
          className="grid md:grid-cols-3 gap-4 max-w-7xl mx-auto"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl shadow-[var(--shadow-subtle)] transition-all duration-700 h-64 cursor-pointer hover-lift ${image.span} animate-scale-in stagger-${(index % 6) + 1} ${gridAnimation.isVisible ? 'visible' : ''}`}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
