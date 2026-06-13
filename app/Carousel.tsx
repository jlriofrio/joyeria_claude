"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "@/app/context/LanguageContext";

const slideMedia = [
  { image: "/joyas/images/Anillos/Anillo.jpeg" },
  { image: "/joyas/images/Cadena/Cadena.png" },
  { image: "/joyas/images/Argollas/Argollas.png" },
  { image: "/joyas/images/Pulseras/Pulsera.jpeg" },
];

export default function Carousel() {
  const t = useTranslations();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const slides = slideMedia.map((media, i) => ({
    ...media,
    ...t.hero.slides[i],
  }));

  const goTo = useCallback(
    (index: number) => {
      if (animating || index === current) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating, current]
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length),
    [current, goTo, slides.length]
  );

  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo, slides.length]
  );

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta < 0) next();
    else prev();
  };

  return (
    <div
      className="relative h-svh overflow-hidden bg-obsidian select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >

      {/* SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ transitionDuration: "800ms" }}
        >
          {/* Imagen de fondo con efecto Ken Burns */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: i === current ? "scale(1.04)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/55 to-obsidian/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* CONTENIDO */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-20 flex items-center transition-all duration-700 ${
            i === current
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16 w-full">
            <p className="text-gold text-[10px] sm:text-xs tracking-[5px] sm:tracking-[6px] uppercase mb-4 sm:mb-5 font-sans">
              — {slide.eyebrow}
            </p>

            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-6 sm:mb-7 whitespace-pre-line">
              {slide.title}
            </h2>

            <div className="w-12 sm:w-16 h-px bg-gold mb-6 sm:mb-7" />

            <p className="text-white/65 text-sm sm:text-base md:text-lg max-w-sm mb-8 sm:mb-10 font-sans leading-relaxed">
              {slide.subtitle}
            </p>

            <Link
              href="/catalogo"
              className="inline-block bg-gold text-obsidian px-8 sm:px-10 py-3.5 sm:py-4 text-[11px] sm:text-xs tracking-[3px] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
            >
              {t.hero.catalogButton}
            </Link>
          </div>
        </div>
      ))}

      {/* FLECHAS (solo tablet/desktop; en móvil se navega deslizando) */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/25 text-white/60 items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
        aria-label={t.hero.previous}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/25 text-white/60 items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
        aria-label={t.hero.next}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 py-2 ${
              i === current ? "w-8" : "w-3"
            }`}
            aria-label={`${t.hero.goToSlide} ${i + 1}`}
          >
            <span
              className={`block h-[2px] w-full ${
                i === current ? "bg-gold" : "bg-white/35 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* CONTADOR */}
      <div className="absolute bottom-8 sm:bottom-10 right-5 sm:right-6 z-20 text-white/35 text-[10px] tracking-[4px] font-sans">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* INDICADOR SCROLL */}
      <div className="absolute bottom-10 left-6 z-20 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
        <span
          className="text-white/35 text-[9px] tracking-[4px] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          {t.hero.scroll}
        </span>
      </div>
    </div>
  );
}
