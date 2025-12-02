import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect which section is in view on home page
      if (location.pathname === "/") {
        const sections = ["about", "spaces", "gallery", "contact"];
        const scrollPosition = window.scrollY + 150; // Offset for header
        
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
        
        // If at top, set home as active
        if (window.scrollY < 100) {
          setActiveSection("home");
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavClick = (item: { label: string; id: string; path?: string }) => {
    if (item.path) {
      // Navigate to a different page
      setIsMobileMenuOpen(false);
      return;
    }
    // Scroll to section on home page
    scrollToSection(item.id);
  };

  const isActive = (item: { label: string; id: string; path?: string }) => {
    if (item.path) {
      // For pages with paths, check if current pathname matches
      if (item.path === "/" && location.pathname === "/") {
        return activeSection === "home" || activeSection === "";
      }
      return location.pathname === item.path;
    }
    // For sections, check if we're on home page and section is active
    if (location.pathname === "/") {
      const hash = window.location.hash.slice(1);
      return activeSection === item.id || hash === item.id;
    }
    return false;
  };

  const navItems = [
    { label: "Home", id: "home", path: "/" },
    { label: "About us", id: "about", path: "/about" },
    { label: "Spaces", id: "spaces", path: "/spaces" },
    { label: "Gallery", id: "gallery", path: "/gallery" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen ? "bg-black" : (isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent")
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="font-display text-2xl font-black text-primary cursor-pointer">
            Obi Space
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const active = isActive(item);
              const baseClasses = "transition-all duration-300 font-medium relative";
              const activeClasses = active 
                ? "text-primary font-semibold" 
                : "text-foreground hover:text-primary";
              
              return item.path ? (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary rounded-full" />
                  )}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Button
            onClick={() => {
              if (location.pathname !== '/') {
                window.location.href = '/#contact';
              } else {
                scrollToSection("contact");
              }
            }}
            className="hidden md:flex"
            size="default"
          >
            Contact Us
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-6 animate-fade-in bg-black">
            {navItems.map((item) => {
              const active = isActive(item);
              const baseClasses = "block w-full text-left py-3 transition-all duration-300 font-medium";
              const activeClasses = active 
                ? "text-primary font-semibold bg-primary/10 border-l-4 border-primary pl-3" 
                : "text-foreground hover:text-primary hover:bg-primary/5";
              
              return item.path ? (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item)}
                  className={`${baseClasses} ${activeClasses}`}
                >
                  {item.label}
                </button>
              );
            })}
            <Button
              onClick={() => {
                if (location.pathname !== '/') {
                  window.location.href = '/#contact';
                } else {
                  scrollToSection("contact");
                }
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4"
              size="default"
            >
              Contact Us
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
