import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const EnquiryForm = () => {
  const titleAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation<HTMLFormElement>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div 
            ref={titleAnimation.ref}
            className={`text-center mb-12 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient">
              Plan Your Event with Us
            </h2>
            <p className="text-lg text-muted-foreground">
              Fill out the form below and our team will reach out to you shortly.
            </p>
          </div>

          <form 
            ref={formAnimation.ref}
            onSubmit={handleSubmit}
            className={`bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-warm)] transition-all duration-700 hover-lift animate-scale-in ${formAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="name" className="text-foreground mb-2 block font-semibold">
                  Name *
                </Label>
                <Input 
                  id="name" 
                  name="name"
                  required 
                  placeholder="Your full name"
                  className="border-2 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground mb-2 block font-semibold">
                  Phone *
                </Label>
                <Input 
                  id="phone" 
                  name="phone"
                  type="tel" 
                  required 
                  placeholder="+91 98765 43210"
                  className="border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="email" className="text-foreground mb-2 block font-semibold">
                Email *
              </Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                required 
                placeholder="your.email@example.com"
                className="border-2 focus:border-primary transition-colors"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="eventType" className="text-foreground mb-2 block font-semibold">
                  Event Type *
                </Label>
                <Select name="eventType" required>
                  <SelectTrigger className="border-2 focus:border-primary transition-colors">
                    <SelectValue placeholder="Select event type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birthday">Birthday Party</SelectItem>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="picnic">Picnic / Day Out</SelectItem>
                    <SelectItem value="wedding">Wedding / Engagement</SelectItem>
                    <SelectItem value="workshop">Workshop / Seminar</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="eventDate" className="text-foreground mb-2 block font-semibold">
                  Event Date
                </Label>
                <Input 
                  id="eventDate" 
                  name="eventDate"
                  type="date" 
                  className="border-2 focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="mb-8">
              <Label htmlFor="message" className="text-foreground mb-2 block font-semibold">
                Message
              </Label>
              <Textarea 
                id="message" 
                name="message"
                placeholder="Tell us about your event..."
                rows={5}
                className="border-2 focus:border-primary transition-colors resize-none"
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full gradient-sunset hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Enquiry"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;
