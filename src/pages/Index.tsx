import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Offerings from "@/components/Offerings";
import EventSpaces from "@/components/EventSpaces";
import Packages from "@/components/Packages";
import Afterschool from "@/components/Afterschool";
import VirtualTour from "@/components/VirtualTour";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <Offerings />
      <section id="spaces">
        <EventSpaces />
      </section>
      <Packages />
      <Afterschool />
      <VirtualTour />
      <section id="gallery">
        <Gallery />
      </section>
      <Testimonials />
      <Location />
      <section id="contact">
        <EnquiryForm />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
