import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const GALLERY_IMAGES = [
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

const PRICES = [
  {
    name: "Старт",
    price: "от 15 000 ₽",
    color: "from-pink-500 to-purple-600",
    glow: "rgba(236,72,153,0.4)",
    features: ["Цветочная композиция", "До 30 гостей", "Консультация", "Монтаж и демонтаж"],
    popular: false,
  },
  {
    name: "Премиум",
    price: "от 45 000 ₽",
    color: "from-purple-500 to-cyan-500",
    glow: "rgba(120,0,255,0.6)",
    features: ["Полное оформление зала", "До 100 гостей", "Авторская концепция", "Фотозона в подарок", "Монтаж и демонтаж"],
    popular: true,
  },
  {
    name: "Люкс",
    price: "от 120 000 ₽",
    color: "from-cyan-400 to-yellow-400",
    glow: "rgba(0,245,255,0.4)",
    features: ["Эксклюзивный дизайн", "Неограниченно гостей", "3D-визуализация", "Премиум материалы", "Личный декоратор", "Монтаж и демонтаж"],
    popular: false,
  },
];

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Галерея", href: "#gallery" },
  { label: "О нас", href: "#about" },
  { label: "Прайс", href: "#prices" },
  { label: "Контакты", href: "#contacts" },
];

export default function Index() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
  };

  return (
    <div className="min-h-screen bg-[#0A0010] text-white font-montserrat overflow-x-hidden">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-card-strong py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#hero" className="font-caveat text-2xl font-bold">
            <span className="gradient-text">✨ ДЕКО</span>
            <span className="text-white">СТУДИЯ</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/70 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF00C8] to-[#7800FF] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contacts"
              className="px-5 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#FF00C8] to-[#7800FF] neon-glow-pink hover:scale-105 transition-transform"
            >
              Заказать
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={28} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden glass-card-strong mt-2 mx-4 rounded-2xl p-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#FF00C8] opacity-20 blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7800FF] opacity-25 blur-[100px] animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#00F5FF] opacity-10 blur-[80px] animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,0,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,200,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 text-center relative z-10 pt-24">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FF00C8]/20 border border-[#FF00C8]/40 text-[#FF00C8] mb-6">
              ✨ Студия праздничного декора
            </span>
          </div>

          <h1 className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <span className="gradient-text">Делаем</span>
            <br />
            <span className="text-white">праздник </span>
            <span className="font-caveat gradient-text-warm text-6xl md:text-8xl lg:text-9xl">
              незабываемым
            </span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.35s", opacity: 0 }}>
            Флористика, шаровые инсталляции, свадебные арки и авторский декор — воплощаем самые яркие идеи в реальность
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
            <a
              href="#gallery"
              className="group px-8 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-[#FF00C8] to-[#7800FF] neon-glow-pink hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Смотреть работы
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contacts"
              className="px-8 py-4 rounded-full font-bold text-lg text-white glass-card border border-white/20 hover:border-[#FF00C8]/50 hover:scale-105 transition-all duration-300"
            >
              Рассчитать стоимость
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mt-16 animate-slide-up" style={{ animationDelay: "0.65s", opacity: 0 }}>
            {[
              { value: "500+", label: "Мероприятий" },
              { value: "7 лет", label: "Опыта" },
              { value: "100%", label: "Довольных клиентов" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-black text-2xl md:text-3xl gradient-text">{s.value}</div>
                <div className="text-white/50 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 text-xs">
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </div>
      </section>

      {/* GALLERY */}
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
              onClick={() => setActiveSlide((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass-card-strong flex items-center justify-center hover:scale-110 transition-transform"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={() => setActiveSlide((prev) => (prev + 1) % GALLERY_IMAGES.length)}
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

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
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
      )}

      {/* ABOUT */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7800FF] to-transparent" />
        <div className="absolute -right-40 top-20 w-80 h-80 rounded-full bg-[#7800FF] opacity-15 blur-[120px]" />

        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-[#7800FF] font-caveat text-2xl mb-2">о нас</span>
              <h2 className="font-black text-4xl md:text-5xl mb-6">
                Мы создаём <span className="gradient-text">магию</span> из цветов и света
              </h2>
              <p className="text-white/60 text-lg mb-6 leading-relaxed">
                Студия праздничного декора — это команда влюблённых в своё дело дизайнеров и флористов. Мы оформляем свадьбы, дни рождения, корпоративы и частные вечеринки по всей России.
              </p>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Наш подход — авторский дизайн под каждого клиента. Никаких шаблонов. Только уникальные концепции, которые поразят ваших гостей.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Flower2", label: "Флористика", desc: "Живые и искусственные" },
                  { icon: "Sparkles", label: "Шары", desc: "Инсталляции любой сложности" },
                  { icon: "Heart", label: "Свадьбы", desc: "Арки, столы, фотозоны" },
                  { icon: "Star", label: "Корпоративы", desc: "Под ключ для бизнеса" },
                ].map((item) => (
                  <div key={item.label} className="gradient-border glass-card p-4">
                    <Icon name={item.icon as "Star"} size={24} className="text-[#FF00C8] mb-2" />
                    <div className="font-bold text-sm">{item.label}</div>
                    <div className="text-white/50 text-xs mt-0.5">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] neon-glow-purple">
                <img
                  src="https://cdn.poehali.dev/projects/a2a62663-8d63-44cf-b372-5a720273d17e/files/b07e42dc-7e6a-4a3c-a7a7-3e1894590680.jpg"
                  alt="О студии"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0010]/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -left-6 glass-card-strong rounded-2xl p-4 neon-glow-pink animate-float">
                <div className="font-black text-3xl gradient-text">500+</div>
                <div className="text-white/70 text-sm">мероприятий</div>
              </div>
              <div className="absolute -top-6 -right-6 glass-card-strong rounded-2xl p-4 neon-glow-cyan animate-float" style={{ animationDelay: "2s" }}>
                <div className="font-black text-3xl text-[#00F5FF]">7 лет</div>
                <div className="text-white/70 text-sm">на рынке</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent" />
        <div className="absolute left-0 top-1/3 w-64 h-64 rounded-full bg-[#FF00C8] opacity-10 blur-[100px]" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-block text-[#00F5FF] font-caveat text-2xl mb-2">прозрачные цены</span>
            <h2 className="font-black text-4xl md:text-5xl">
              <span className="gradient-text">Прайс-лист</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICES.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-6 transition-all duration-300 hover:scale-[1.03] ${plan.popular ? "glass-card-strong" : "glass-card"}`}
                style={plan.popular ? { boxShadow: `0 0 40px ${plan.glow}` } : {}}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest bg-gradient-to-r from-[#FF00C8] to-[#7800FF] text-white whitespace-nowrap">
                    ✨ Популярный
                  </div>
                )}

                <div className={`inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} items-center justify-center mb-4`}>
                  <Icon name="Sparkles" size={22} className="text-white" />
                </div>

                <h3 className="font-black text-2xl mb-1">{plan.name}</h3>
                <div className={`font-black text-3xl mb-6 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  {plan.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/80 text-sm">
                      <Icon name="Check" size={16} className="text-[#FF00C8] flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#FF00C8] to-[#7800FF] text-white neon-glow-pink"
                      : "glass-card border border-white/20 text-white hover:border-[#FF00C8]/50"
                  }`}
                >
                  Заказать
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-white/40 text-sm mt-8">
            Итоговая стоимость зависит от масштаба и сложности оформления. Свяжитесь с нами для точного расчёта.
          </p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF00C8] to-transparent" />
        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-[#FF00C8] opacity-10 blur-[150px]" />

        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-14">
            <span className="inline-block text-[#FFE000] font-caveat text-2xl mb-2">свяжитесь с нами</span>
            <h2 className="font-black text-4xl md:text-5xl">
              <span className="gradient-text">Контакты</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Опишите ваше мероприятие, и мы бесплатно разработаем концепцию декора
            </p>
          </div>

          <div className="gradient-border glass-card-strong rounded-3xl p-8">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-white/60 mb-2 block font-semibold">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Как вас зовут?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF00C8]/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-white/60 mb-2 block font-semibold">Телефон или мессенджер</label>
                <input
                  type="text"
                  placeholder="+7 (999) 000-00-00"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF00C8]/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-white/60 mb-2 block font-semibold">Тип мероприятия</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#FF00C8]/50 transition-colors appearance-none">
                  <option value="" className="bg-[#1A0030]">Выберите тип</option>
                  <option value="wedding" className="bg-[#1A0030]">Свадьба</option>
                  <option value="birthday" className="bg-[#1A0030]">День рождения</option>
                  <option value="corporate" className="bg-[#1A0030]">Корпоратив</option>
                  <option value="other" className="bg-[#1A0030]">Другое</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-white/60 mb-2 block font-semibold">Ваши пожелания</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о вашем мероприятии — дата, количество гостей, пожелания..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF00C8]/50 transition-colors resize-none"
                />
              </div>

              <button className="w-full py-4 rounded-full font-black text-lg text-white bg-gradient-to-r from-[#FF00C8] via-[#7800FF] to-[#00F5FF] neon-glow-pink hover:scale-[1.02] transition-all duration-300 animate-pulse-glow">
                Отправить заявку ✨
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (999) 000-00-00" },
              { icon: "MessageCircle", label: "Telegram", value: "@dekostudio" },
              { icon: "Instagram", label: "Instagram", value: "@deko.studio" },
            ].map((c) => (
              <div key={c.label} className="glass-card rounded-2xl p-4 text-center hover:scale-105 transition-transform cursor-pointer">
                <Icon name={c.icon as "Phone"} size={20} className="text-[#FF00C8] mx-auto mb-2" />
                <div className="text-white/50 text-xs">{c.label}</div>
                <div className="text-white text-xs font-semibold mt-0.5 break-all">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#hero" className="font-caveat text-xl font-bold">
            <span className="gradient-text">✨ ДЕКО</span>
            <span className="text-white">СТУДИЯ</span>
          </a>
          <p className="text-white/30 text-sm">© 2024 Студия праздничного декора. Все права защищены.</p>
          <div className="flex gap-4">
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <a key={item.href} href={item.href} className="text-white/40 hover:text-white text-sm transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
