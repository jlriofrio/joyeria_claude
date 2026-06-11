"use client";

import { useTranslations } from "@/app/context/LanguageContext";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
  : null;

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-obsidian border-t border-white/5">

      {/* Línea dorada superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-14 sm:pt-16 pb-10 text-center">

        {/* MARCA */}
        <div className="mb-8">
          <span className="font-heading text-4xl text-gold font-light tracking-[5px] leading-none block">
            Aydee
          </span>
          <span className="text-[9px] tracking-[8px] uppercase text-gold/55 mt-1 block">
            Orfebre
          </span>
        </div>

        <div className="w-10 h-px bg-gold/40 mx-auto mb-10" />

        {/* CONTACTO */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 mb-10 font-sans">

          {/* Ubicación */}
          <div className="flex items-center gap-2 text-white/55 text-sm">
            <svg className="text-gold/60 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t.footer.location}
          </div>

          {/* Email */}
          <a
            href="mailto:info@aydeeorfebre.com"
            className="flex items-center gap-2 text-white/55 text-sm hover:text-gold transition-colors duration-300"
          >
            <svg className="text-gold/60 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 6L2 7" />
            </svg>
            info@aydeeorfebre.com
          </a>

          {/* Horario */}
          <div className="flex items-center gap-2 text-white/55 text-sm">
            <svg className="text-gold/60 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {t.contact.scheduleValue}
          </div>
        </div>

        {/* REDES */}
        <div className="flex justify-center gap-3 mb-12">
          <a
            href="https://www.instagram.com/aydeeorfebre/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
            aria-label="Instagram"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
              aria-label="WhatsApp"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 2.93h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14.09 15.91l.51-.51a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          )}
        </div>

        {/* PIE */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs font-sans">{t.footer.rights}</p>
          <p className="text-white/15 text-xs font-sans">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
