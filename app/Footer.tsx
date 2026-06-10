import Link from "next/link";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
  : null;

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/catalogo", label: "Catálogo" },
  { href: "/about", label: "Nosotros" },
  { href: "/contact", label: "Contacto" },
];

const categories = [
  { href: "/catalogo/anillos", label: "Anillos" },
  { href: "/catalogo/cadena", label: "Cadenas" },
  { href: "/catalogo/aretes", label: "Aretes" },
  { href: "/catalogo/argollas", label: "Argollas" },
  { href: "/catalogo/pulseras", label: "Pulseras" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/5">

      {/* Línea dorada superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-14">

          {/* MARCA */}
          <div className="md:col-span-4">
            <div className="mb-5">
              <span className="font-heading text-4xl text-gold font-light tracking-[5px] leading-none block">
                Aydee
              </span>
              <span className="text-[9px] tracking-[8px] uppercase text-gold/55 mt-0.5 block">
                Orfebre
              </span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs font-sans mb-7">
              Joyería artesanal en Cali, Colombia. Más de 35 años creando piezas únicas en oro y plata con pasión y tradición familiar.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/aydeeorfebre/",
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: "Facebook",
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                },
                {
                  label: "TikTok",
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  href: whatsappHref ?? undefined,
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 2.93h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14.09 15.91l.51-.51a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
              ].map((s) =>
                s.href ? (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 hover:border-gold hover:text-gold transition-all duration-300"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ) : (
                  <a
                    key={s.label}
                    href="#"
                    className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 hover:border-gold hover:text-gold transition-all duration-300"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                )
              )}
            </div>
          </div>

          {/* NAVEGACIÓN */}
          <div className="md:col-span-2">
            <h4 className="text-[10px] tracking-[4px] uppercase text-gold mb-6 font-sans">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/45 text-sm hover:text-gold transition-colors duration-300 font-sans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORÍAS */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[4px] uppercase text-gold mb-6 font-sans">
              Colecciones
            </h4>
            <ul className="space-y-3">
              {categories.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/45 text-sm hover:text-gold transition-colors duration-300 font-sans"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div className="md:col-span-3">
            <h4 className="text-[10px] tracking-[4px] uppercase text-gold mb-6 font-sans">
              Contacto
            </h4>
            <ul className="space-y-4 font-sans">
              <li className="flex items-start gap-2">
                <svg className="text-gold/60 shrink-0 mt-0.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-white/45 text-sm">Cali, Colombia</span>
              </li>
              <li>
                <a
                  href="https://wa.me/57XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/45 text-sm hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@aydeeorfebre.com"
                  className="text-white/45 text-sm hover:text-gold transition-colors"
                >
                  info@aydeeorfebre.com
                </a>
              </li>
              <li className="pt-1">
                <p className="text-[10px] tracking-[3px] uppercase text-white/25 mb-1">Horario</p>
                <p className="text-white/45 text-sm">Lun – Vie: 9am – 6pm</p>
                <p className="text-white/45 text-sm">Sábados: 9am – 2pm</p>
              </li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs font-sans">
            © 2026 Aydee Orfebre. Todos los derechos reservados.
          </p>
          <p className="text-white/15 text-xs font-sans">
            Diseñado con pasión · Cali, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
