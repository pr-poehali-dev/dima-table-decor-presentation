const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Галерея", href: "#gallery" },
  { label: "О нас", href: "#about" },
  { label: "Прайс", href: "#prices" },
  { label: "Контакты", href: "#contacts" },
];

export default function Footer() {
  return (
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
  );
}
