import Icon from "@/components/ui/icon";

export default function ContactsSection() {
  return (
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
  );
}
