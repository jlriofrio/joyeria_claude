"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/joyas/images/Anillos/Anillo.jpeg",
    eyebrow: "Colección exclusiva",
    title: "Arte en\noro puro",
    subtitle: "Cada anillo es una promesa de elegancia y eternidad",
    cta: { label: "Ver anillos", href: "/catalogo/anillos" },
  },
  {
    image: "/joyas/images/Cadena/Cadena.jpeg",
    eyebrow: "Tradición artesanal",
    title: "Cadenas de\ncarácter",
    subtitle: "Diseños únicos elaborados a mano con precisión milimétrica",
    cta: { label: "Ver cadenas", href: "/catalogo/cadena" },
  },
  {
    image: "/joyas/images/Argollas/Argollas.jpeg",
    eyebrow: "Desde 1987",
    title: "Legado de\nperfección",
    subtitle: "Más de 35 años creando piezas que trascienden el tiempo",
    cta: { label: "Ver argollas", href: "/catalogo/argollas" },
  },
  {
    image: "/joyas/images/Pulseras/Pulsera.jpeg",
    eyebrow: "Joyas personalizadas",
    title: "Tu estilo,\nnuestra pasión",
    subtitle: "Hacemos realidad la joya que siempre imaginaste",
    cta: { label: "Ver pulseras", href: "/catalogo/pulseras" },
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

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
    [current, goTo]
  );

  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length),
    [current, goTo]
  );

  useEffect(() => {
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="relative h-screen overflow-hidden bg-obsidian select-none">

      {/* SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-800 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ transitionDuration: "800ms" }}
        >
          {/* Imagen de fondo */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url('${slide.image}')`,
              transform: i === current ? "scale(1.04)" : "scale(1)",
              transition: "transform 8s ease-out",
            }}
          />
          {/* Gradiente izquierda → derecha */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/55 to-obsidian/20" />
          {/* Gradiente abajo */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* CONTENIDO — cada slide es absolutamente posicionado para evitar saltos de layout */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-20 flex items-center transition-all duration-700 ${
            i === current
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
            {/* Eyebrow */}
            <p className="text-gold text-xs tracking-[6px] uppercase mb-5 font-sans">
              — {slide.eyebrow}
            </p>

            {/* Título principal */}
            <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-7 whitespace-pre-line">
              {slide.title}
            </h2>

            {/* Línea dorada */}
            <div className="w-16 h-px bg-gold mb-7" />

            {/* Subtítulo */}
            <p className="text-white/65 text-base md:text-lg max-w-sm mb-10 font-sans leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={slide.cta.href}
                className="bg-gold text-obsidian px-8 py-3.5 text-xs tracking-[3px] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
              >
                {slide.cta.label}
              </Link>
              <Link
                href="/catalogo"
                className="border border-white/35 text-white/75 px-8 py-3.5 text-xs tracking-[3px] uppercase hover:border-gold hover:text-gold transition-all duration-300"
              >
                Ver todo
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* FLECHA IZQUIERDA */}
      <button
        onClick={prev}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/25 text-white/60 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
        aria-label="Anterior"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* FLECHA DERECHA */}
      <button
        onClick={next}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/25 text-white/60 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300 backdrop-blur-sm"
        aria-label="Siguiente"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* INDICADORES */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-8 h-[2px] bg-gold"
                : "w-2 h-[2px] bg-white/35 hover:bg-white/60"
            }`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>

      {/* CONTADOR */}
      <div className="absolute bottom-10 right-6 z-20 text-white/35 text-[10px] tracking-[4px] font-sans">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      {/* INDICADOR SCROLL */}
      <div className="absolute bottom-10 left-6 z-20 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-gradient-to-b from-white/35 to-transparent" />
        <span
          className="text-white/35 text-[9px] tracking-[4px] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
      </div>
    </div>
  );
}
