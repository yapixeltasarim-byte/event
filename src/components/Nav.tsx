const links = [
  { href: "#anasayfa", label: "Ana Sayfa" },
  { href: "#program", label: "Program" },
  { href: "#konum", label: "Konum" },
  { href: "#hava", label: "Hava Durumu" },
  { href: "#anilar", label: "Anı Albümü" },
  { href: "#kayit", label: "Katılım" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur text-cream border-b border-gold/20">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#anasayfa" className="font-heading text-sm sm:text-base tracking-wide">
          Ege Cruise Turu
        </a>
        <nav className="hidden sm:flex gap-6 text-xs tracking-wide uppercase">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold-light transition">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
