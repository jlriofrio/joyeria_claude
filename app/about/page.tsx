"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import Reveal from "@/app/Reveal";
import { AboutHistory } from "@/app/about/AboutHistory";
import { useTranslations } from "@/app/context/LanguageContext";

export default function AboutPage() {
  const t = useTranslations();

  return (
    <main className="bg-ivory">
      <Navbar />

      {/* HERO CINEMATOGRÁFICO */}
      <section className="relative h-[60vh] sm:h-[75vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1920&auto=format&fit=crop"
          alt="Orfebrería artesanal"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/45 to-obsidian/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/40 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 pb-14 sm:pb-20 w-full">
          <span className="text-gold text-xs tracking-[6px] uppercase font-sans block mb-4 sm:mb-5">
            — {t.about.heroEyebrow}
          </span>
          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-white leading-[0.92]">
            {t.about.heroTitleLine1}<br />
            <em className="not-italic text-gold">{t.about.heroTitleAccent}</em>
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </section>

      {/* HISTORIA PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Texto */}
          <Reveal>
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">
              {t.about.whoEyebrow}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-light mt-4 mb-8 leading-tight text-obsidian">
              {t.about.whoTitleLine1}<br />
              {t.about.whoTitleLine2}{" "}
              <em className="not-italic text-gold">{t.about.whoTitleAccent}</em>
            </h2>
            <AboutHistory />
          </Reveal>

          {/* Imagen con badge */}
          <Reveal delay={150} className="relative h-[380px] sm:h-[480px] md:h-[580px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
              alt="Proceso artesanal en el taller"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
            <div className="absolute top-6 left-6 bg-ivory/95 backdrop-blur-sm p-5 sm:p-6 border-b-2 border-gold">
              <p className="font-heading text-4xl sm:text-5xl text-gold font-light leading-none">1987</p>
              <p className="text-obsidian text-xs tracking-[3px] uppercase mt-1 font-sans">
                {t.about.foundedLabel}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-obsidian py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">

          <Reveal className="text-center mb-12 sm:mb-16">
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">
              {t.about.timelineEyebrow}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-white mt-3">
              {t.about.timelineTitle}{" "}
              <em className="not-italic text-gold">{t.about.timelineTitleAccent}</em>
            </h2>
          </Reveal>

          <div className="relative">
            {/* Línea horizontal (solo desktop) */}
            <div className="absolute top-7 left-0 right-0 h-px bg-gold/15 hidden md:block" />

            <div className="grid md:grid-cols-3 gap-10 sm:gap-12">
              {t.about.milestones.map((m, i) => (
                <Reveal key={i} delay={i * 120} className="relative text-center">
                  <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mx-auto mb-7 relative bg-obsidian">
                    <span className="font-heading text-gold text-sm font-light tracking-wider">
                      {m.year}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-3 font-light">{m.title}</h3>
                  <div className="w-6 h-px bg-gold mx-auto mb-5" />
                  <p className="text-white/55 leading-relaxed text-sm font-sans max-w-xs mx-auto">{m.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-16 sm:py-24 px-5 sm:px-6 bg-cream">
        <div className="max-w-7xl mx-auto">

          <Reveal className="text-center mb-12 sm:mb-16">
            <span className="text-gold-dark text-xs tracking-[6px] uppercase font-sans">
              {t.about.valuesEyebrow}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-light mt-3 text-obsidian">
              {t.about.valuesTitle}{" "}
              <em className="not-italic text-gold-dark">{t.about.valuesTitleAccent}</em>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {t.about.values.map((v, i) => (
              <Reveal
                key={i}
                delay={i * 100}
                className="bg-ivory p-7 sm:p-8 border-t-2 border-gold/40 hover:border-gold transition-colors duration-300 group"
              >
                <h3 className="font-heading text-2xl sm:text-3xl font-light mb-5 text-obsidian group-hover:text-gold transition-colors duration-300">
                  {v.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-6" />
                <p className="text-graphite leading-relaxed font-sans text-sm sm:text-base">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CITA INSPIRACIONAL */}
      <section className="py-20 sm:py-28 px-5 sm:px-6 bg-obsidian relative overflow-hidden">
        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <Reveal className="max-w-3xl mx-auto text-center relative">
          <div className="font-heading text-7xl sm:text-8xl text-gold/25 leading-none mb-2 select-none">
            &ldquo;
          </div>
          <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl font-light text-white/90 italic leading-relaxed -mt-6">
            {t.about.quote}
          </blockquote>
          <div className="w-10 h-px bg-gold mx-auto mt-10 mb-5" />
          <cite className="text-gold text-xs tracking-[5px] uppercase not-italic font-sans">
            {t.about.quoteAuthor}
          </cite>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-ivory text-center">
        <span className="text-gold text-xs tracking-[6px] uppercase font-sans">
          {t.about.ctaEyebrow}
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light mt-4 mb-8 text-obsidian">
          {t.about.ctaTitleLine1}<br />
          {t.about.ctaTitleLine2}{" "}
          <em className="not-italic text-gold">{t.about.ctaTitleAccent}</em>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-obsidian text-ivory px-8 sm:px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-graphite transition-colors duration-300"
          >
            {t.about.ctaContact}
          </Link>
          <Link
            href="/catalogo"
            className="border border-obsidian text-obsidian px-8 sm:px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-obsidian hover:text-ivory transition-all duration-300"
          >
            {t.about.ctaCatalog}
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
