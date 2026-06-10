"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Navbar";
import Carousel from "@/app/Carousel";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import Reveal from "@/app/Reveal";
import { HomeFeaturesSection, HomeTestimonialsSection } from "@/app/HomeFeatures";
import { useTranslations } from "@/app/context/LanguageContext";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
  : null;

const featuredMedia = [
  { slug: "anillos", image: "/joyas/images/Anillos/Anillo.jpeg" },
  { slug: "cadena", image: "/joyas/images/Cadena/Cadena.jpeg" },
  { slug: "aretes", image: "/joyas/images/Aretes/Pulseras_aretes.jpeg" },
];

const valueSymbols = ["I", "II", "III"];

export default function Home() {
  const t = useTranslations();

  const featuredCategories = featuredMedia.map((media, i) => ({
    ...media,
    ...t.home.featuredCategories[i],
  }));

  return (
    <main className="bg-ivory">
      <Navbar />

      {/* HERO */}
      <Carousel />

      {/* CARACTERÍSTICAS */}
      <HomeFeaturesSection />

      {/* COLECCIONES DESTACADAS */}
      <section className="bg-ivory py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">

          <Reveal className="text-center mb-12 sm:mb-16">
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">
              {t.home.collectionsEyebrow}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light mt-3 text-obsidian">
              {t.home.collectionsTitle}{" "}
              <em className="not-italic text-gold">{t.home.collectionsTitleAccent}</em>
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mt-6" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredCategories.map((cat, i) => (
              <Reveal key={cat.slug} delay={i * 100}>
                <Link
                  href={`/catalogo/${cat.slug}`}
                  className="group relative h-[340px] sm:h-[420px] md:h-[480px] overflow-hidden bg-charcoal block"
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/15 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <p className="text-gold text-[10px] tracking-[5px] uppercase mb-2 font-sans">
                      {cat.description}
                    </p>
                    <h3 className="font-heading text-3xl sm:text-4xl font-light text-white">{cat.name}</h3>
                    <div className="w-6 h-px bg-gold mt-4 group-hover:w-14 transition-all duration-500" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/catalogo"
              className="inline-block border border-obsidian text-obsidian text-xs tracking-[4px] uppercase px-8 sm:px-10 py-3.5 hover:bg-obsidian hover:text-ivory transition-all duration-300"
            >
              {t.home.viewFullCatalog}
            </Link>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA / VALORES */}
      <section className="bg-obsidian py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">

          <Reveal className="text-center mb-12 sm:mb-16">
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">
              {t.home.valuesEyebrow}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white mt-3">
              {t.home.valuesTitle}{" "}
              <em className="not-italic text-gold">{t.home.valuesTitleAccent}</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 md:gap-8">
            {t.home.values.map((v, i) => (
              <Reveal key={i} delay={i * 120} className="text-center group">
                <div className="w-14 h-14 border border-gold/25 flex items-center justify-center mx-auto mb-7 group-hover:border-gold/60 transition-colors duration-300">
                  <span className="font-heading text-gold text-sm tracking-[3px] font-light">
                    {valueSymbols[i]}
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-white font-light mb-4 tracking-wider">
                  {v.title}
                </h3>
                <div className="w-6 h-px bg-gold mx-auto mb-5" />
                <p className="text-white/55 leading-relaxed text-sm font-sans max-w-xs mx-auto">{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <HomeTestimonialsSection />

      {/* HISTORIA TEASER */}
      <section className="bg-cream py-16 sm:py-24 px-5 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Texto */}
            <Reveal>
              <span className="text-gold-dark text-xs tracking-[6px] uppercase font-sans">
                {t.home.historyEyebrow}
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light mt-3 leading-tight text-obsidian">
                {t.home.historyTitleLine1}<br />
                <em className="not-italic text-gold-dark">{t.home.historyTitleAccent}</em><br />
                {t.home.historyTitleLine2}
              </h2>
              <div className="w-10 h-px bg-gold-dark mt-6 mb-8" />
              <p className="text-graphite leading-relaxed text-base sm:text-lg mb-8 font-sans">
                {t.home.historyText}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs tracking-[4px] uppercase text-gold-dark hover:gap-5 transition-all duration-300 group"
              >
                {t.home.historyLink}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>

            {/* Imagen */}
            <Reveal delay={150} className="relative h-[340px] sm:h-[420px] md:h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"
                alt="Taller de orfebrería artesanal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-obsidian/10" />
              <div className="absolute bottom-6 left-6 bg-obsidian/90 backdrop-blur-sm p-4 sm:p-5 border-l-2 border-gold">
                <p className="font-heading text-4xl sm:text-5xl text-gold font-light leading-none">35+</p>
                <p className="text-white/65 text-xs tracking-[3px] uppercase mt-1 font-sans">
                  {t.home.yearsBadge}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-20 sm:py-32 px-5 sm:px-6 overflow-hidden bg-obsidian">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/joyas/images/Anillos/Anillo_1.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
        </div>
        <div className="absolute inset-0 bg-obsidian/80" />

        <Reveal className="relative max-w-2xl mx-auto text-center">
          <span className="text-gold text-xs tracking-[6px] uppercase font-sans">
            {t.home.ctaEyebrow}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-light text-white mt-4 mb-5 leading-tight">
            {t.home.ctaTitleLine1}<br />
            <em className="not-italic text-gold">{t.home.ctaTitleAccent}</em>
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mb-8" />
          <p className="text-white/55 text-base sm:text-lg mb-10 leading-relaxed font-sans">
            {t.home.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-obsidian px-10 py-4 text-xs tracking-[4px] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
            >
              {t.home.ctaButton}
            </Link>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white/80 px-10 py-4 text-xs tracking-[4px] uppercase hover:border-gold hover:text-gold transition-all duration-300"
              >
                {t.whatsapp}
              </a>
            )}
          </div>
        </Reveal>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
