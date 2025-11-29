import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { supabase } from "@/integrations/supabase/client";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import "react-day-picker/dist/style.css";

const EnquiryForm = () => {
  const titleAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation<HTMLFormElement>();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState<Date | undefined>(undefined);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const eventDate = formData.get("eventDate") as string;
    
    try {
      const { error } = await supabase.from("space_enquiries").insert({
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
        email: formData.get("email") as string,
        event_type: eventType,
        event_date: eventDate || new Date().toISOString().split('T')[0],
        message: formData.get("message") as string || null,
      });

      if (error) throw error;

      toast({
        title: "Enquiry Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      
      (e.target as HTMLFormElement).reset();
      setEventType("");
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div 
            ref={titleAnimation.ref}
            className={`text-center mb-8 sm:mb-12 animate-on-scroll ${titleAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-gradient px-2">
              Plan Your Event with Us
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Fill out the form below and our team will reach out to you shortly.
            </p>
          </div>

          <form 
            ref={formAnimation.ref}
            onSubmit={handleSubmit}
            className={`bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-[var(--shadow-warm)] transition-all duration-700 hover-lift animate-scale-in ${formAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
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

            <div className="mb-4 sm:mb-6">
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

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <Label htmlFor="eventType" className="text-foreground mb-2 block font-semibold">
                  Event Type *
                </Label>
                <Select name="eventType" required value={eventType} onValueChange={setEventType}>
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
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="flex h-10 w-full min-w-0 items-center justify-between rounded-md border-2 border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    >
                      <span className="text-left truncate">
                        {eventDate ? format(eventDate, "yyyy-MM-dd") : "Select date"}
                      </span>
                      <CalendarIcon className="h-4 w-4 opacity-50" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent side="bottom" sideOffset={8} align="center" avoidCollisions={false} className="p-0 bg-popover text-popover-foreground w-[20rem] sm:w-[22rem] max-w-[90vw] overflow-hidden shadow-md rounded-xl">
                    <DayPicker
                      className="p-2 text-sm"
                      mode="single"
                      selected={eventDate}
                      onSelect={(date) => { setEventDate(date ?? undefined); setDatePickerOpen(false); }}
                      showOutsideDays
                      numberOfMonths={1}
                      disabled={{ before: new Date() }}
                      fromMonth={new Date()}
                      classNames={{
                        caption: 'px-3 py-2 text-base font-semibold',
                        nav_button: 'h-8 w-8 rounded-md hover:bg-primary/20 text-primary',
                        head_row: 'grid grid-cols-7 px-3 text-xs text-muted-foreground',
                        row: 'grid grid-cols-7 px-3',
                        day: 'w-9 h-9 inline-flex items-center justify-center rounded-md text-sm hover:bg-primary/20 hover:text-primary',
                        day_selected: 'bg-primary text-primary-foreground hover:bg-primary',
                        day_today: 'border border-primary',
                        day_outside: 'opacity-40',
                      }}
                    />
                  </PopoverContent>
                </Popover>
                <input type="hidden" id="eventDate" name="eventDate" value={eventDate ? format(eventDate, "yyyy-MM-dd") : ""} />
              </div>
            </div>

            <div className="mb-6 sm:mb-8">
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
