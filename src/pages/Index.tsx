import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import GallerySection, { GALLERY_IMAGES } from "@/components/GallerySection";
import Lightbox from "@/components/Lightbox";
import AboutSection from "@/components/AboutSection";
import PricesSection from "@/components/PricesSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

export default function Index() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="min-h-screen bg-[#0A0010] text-white font-montserrat overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <GallerySection
        activeSlide={activeSlide}
        setActiveSlide={setActiveSlide}
        openLightbox={openLightbox}
      />
      {lightboxIndex !== null && (
        <Lightbox
          lightboxIndex={lightboxIndex}
          setLightboxIndex={setLightboxIndex}
          closeLightbox={closeLightbox}
        />
      )}
      <AboutSection />
      <PricesSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}
