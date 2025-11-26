import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-10 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-gradient">OBI</h3>
            <p className="text-background/80 leading-relaxed text-sm sm:text-base">
              Where city ends and nature begins. Your outdoor venue for celebrations, connections, and memories.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2 sm:gap-3 text-background/80 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-background/80 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>hello@obi.com</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 text-background/80 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>Off Sarjapur Road, Bengaluru</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Follow Us</h4>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 sm:pt-8 text-center text-background/60 text-sm">
          <p>&copy; {new Date().getFullYear()} OBI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
