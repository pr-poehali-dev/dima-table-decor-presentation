import Icon from "@/components/ui/icon";

export default function AboutSection() {
  return (
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
  );
}
