import Icon from "@/components/ui/icon";
import { GALLERY_IMAGES } from "@/components/GallerySection";

interface LightboxProps {
  lightboxIndex: number;
  setLightboxIndex: (i: number) => void;
  closeLightbox: () => void;
}

export default function Lightbox({ lightboxIndex, setLightboxIndex, closeLightbox }: LightboxProps) {
  const prevImage = () => {
    setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const nextImage = () => {
    setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center" onClick={closeLightbox}>
      <button className="absolute top-6 right-6 w-12 h-12 rounded-full glass-card-strong flex items-center justify-center hover:scale-110 transition-transform z-10" onClick={closeLightbox}>
        <Icon name="X" size={22} />
      </button>

      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card-strong flex items-center justify-center hover:scale-110 transition-transform z-10"
        onClick={(e) => { e.stopPropagation(); prevImage(); }}
      >
        <Icon name="ChevronLeft" size={24} />
      </button>

      <div className="max-w-4xl max-h-[85vh] mx-16 animate-scale-in" onClick={(e) => e.stopPropagation()}>
        <img
          src={GALLERY_IMAGES[lightboxIndex].src}
          alt={GALLERY_IMAGES[lightboxIndex].title}
          className="w-full h-full object-contain rounded-2xl"
        />
        <p className="text-center text-white/70 mt-4 font-semibold">
          {GALLERY_IMAGES[lightboxIndex].title}
        </p>
      </div>

      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-card-strong flex items-center justify-center hover:scale-110 transition-transform z-10"
        onClick={(e) => { e.stopPropagation(); nextImage(); }}
      >
        <Icon name="ChevronRight" size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {GALLERY_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
            className={`rounded-full transition-all duration-300 ${i === lightboxIndex ? "w-6 h-2 bg-[#FF00C8]" : "w-2 h-2 bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}
