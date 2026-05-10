import Icon from "@/components/ui/icon";

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: "https://cdn.poehali.dev/projects/a2a62663-8d63-44cf-b372-5a720273d17e/files/b8a33ca0-c5a0-4d62-8960-d730ca10c210.jpg",
    title: "Цветочные инсталляции",
    category: "Флористика",
  },
  {
    id: 2,
    src: "https://cdn.poehali.dev/projects/a2a62663-8d63-44cf-b372-5a720273d17e/files/0da0b96d-ae47-4453-b26b-59215725c668.jpg",
    title: "День рождения",
    category: "Праздник",
  },
  {
    id: 3,
    src: "https://cdn.poehali.dev/projects/a2a62663-8d63-44cf-b372-5a720273d17e/files/b07e42dc-7e6a-4a3c-a7a7-3e1894590680.jpg",
    title: "Свадебная арка",
    category: "Свадьба",
  },
  {
    id: 4,
    src: "https://cdn.poehali.dev/projects/a2a62663-8d63-44cf-b372-5a720273d17e/files/7afc864f-b61e-4186-836a-62357488f401.jpg",
    title: "Шаровая инсталляция",
    category: "Декор",
  },
];

interface GallerySectionProps {
  activeSlide: number;
  setActiveSlide: (i: number) => void;
  openLightbox: (i: number) => void;
}

export default function GallerySection({ activeSlide, setActiveSlide, openLightbox }: GallerySectionProps) {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF00C8] to-transparent" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#FF00C8] font-caveat text-2xl mb-2">наши работы</span>
          <h2 className="font-black text-4xl md:text-5xl">
            <span className="gradient-text">Галерея</span>
          </h2>
        </div>

        <div className="relative mb-8 rounded-3xl overflow-hidden neon-glow-pink max-w-3xl mx-auto aspect-[16/10]">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.id}
              className={`absolute inset-0 transition-opacity duration-700 ${i === activeSlide ? "opacity-100" : "opacity-0"}`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover cursor-pointer" onClick={() => openLightbox(i)} />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-[#FF00C8] text-xs font-bold uppercase tracking-widest">{img.category}</span>
                <h3 className="text-white font-bold text-xl">{img.title}</h3>
              </div>
              <button onClick={() => openLightbox(i)} className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform">
                <Icon name="Expand" size={18} />
              </button>
            </div>
          ))}

          <button
            onClick={() => setActiveSlide((activeSlide - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card-strong flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          <button
            onClick={() => setActiveSlide((activeSlide + 1) % GALLERY_IMAGES.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card-strong flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3 max-w-3xl mx-auto">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={img.id}
              onClick={() => { setActiveSlide(i); openLightbox(i); }}
              className={`relative rounded-xl overflow-hidden aspect-square cursor-pointer transition-all duration-300 hover:scale-105 ${
                i === activeSlide ? "neon-glow-pink ring-2 ring-[#FF00C8]" : "opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
