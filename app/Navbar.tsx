"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage, useTranslations } from "@/app/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/catalogo", label: t.nav.catalog },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const solidBg = !isHome || scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          solidBg
            ? "bg-obsidian/95 backdrop-blur-md shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="group flex flex-col items-start leading-none select-none">
            <span className="font-heading text-2xl font-semibold tracking-[5px] text-gold transition-colors duration-300 group-hover:text-gold-light">
              Aydee
            </span>
            <span className="text-[9px] tracking-[7px] uppercase text-gold/65 group-hover:text-gold/90 transition-colors duration-300">
              Orfebre
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative text-xs tracking-[3px] uppercase transition-colors duration-300 group pb-1 ${
                  pathname === href
                    ? "text-gold"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aydeeorfebre/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/65 hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-white/15 p-0.5">
              <button
                onClick={() => setLanguage("es")}
                className={`px-2.5 py-1 text-[10px] tracking-[2px] font-sans transition-all duration-200 ${
                  language === "es"
                    ? "bg-gold text-obsidian"
                    : "text-white/55 hover:text-white"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 text-[10px] tracking-[2px] font-sans transition-all duration-200 ${
                  language === "en"
                    ? "bg-gold text-obsidian"
                    : "text-white/55 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/contact"
              className="border border-gold/60 text-gold text-xs tracking-[3px] uppercase px-5 py-2.5 hover:bg-gold hover:text-obsidian hover:border-gold transition-all duration-300"
            >
              {t.productCard.quote}
            </Link>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col justify-center gap-[5px] p-2 z-60"
            aria-label={mobileOpen ? "Cerrar menú" : t.nav.openMenu}
          >
            <span
              className={`block w-6 h-[1.5px] bg-gold origin-center transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-gold origin-center transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-obsidian flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <nav className="flex flex-col items-center gap-10">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`font-heading text-5xl font-light tracking-[6px] transition-colors duration-300 ${
                pathname === href ? "text-gold" : "text-white/80 hover:text-gold"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 border border-gold/50 text-gold font-heading text-2xl tracking-[5px] px-10 py-3 hover:bg-gold hover:text-obsidian transition-all duration-300"
          >
            {t.productCard.quote}
          </Link>

          {/* Language switcher mobile */}
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={() => setLanguage("es")}
              className={`px-4 py-2 text-xs tracking-[3px] uppercase font-sans border transition-all duration-200 ${
                language === "es"
                  ? "bg-gold text-obsidian border-gold"
                  : "text-white/55 border-white/20 hover:text-white"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 text-xs tracking-[3px] uppercase font-sans border transition-all duration-200 ${
                language === "en"
                  ? "bg-gold text-obsidian border-gold"
                  : "text-white/55 border-white/20 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          {/* Instagram mobile */}
          <a
            href="https://www.instagram.com/aydeeorfebre/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/50 hover:text-gold transition-colors duration-300 text-xs tracking-[4px] uppercase"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Instagram
          </a>
        </nav>

        <div className="absolute bottom-12 flex items-center gap-3 text-gold/30 text-[10px] tracking-[4px] uppercase">
          <div className="w-8 h-px bg-gold/30" />
          Cali, Colombia
          <div className="w-8 h-px bg-gold/30" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </div>
    </>
  );
}
