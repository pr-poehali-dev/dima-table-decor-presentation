import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
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
  );
}
