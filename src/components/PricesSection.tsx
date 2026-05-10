import Icon from "@/components/ui/icon";

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

export default function PricesSection() {
  return (
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
  );
}
