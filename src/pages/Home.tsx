import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import RoomsSection from "../components/RoomsSection";
import ServiceSection from "../components/AmenitiesSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Rooms Section */}
      <RoomsSection />

      {/* Amenities Section */}
      <ServiceSection />

      {/* Gallery Section */}
      <GallerySection  limit={8} showViewFullButton={true} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;
