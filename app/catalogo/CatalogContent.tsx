"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/Reveal";
import { useTranslations } from "@/app/context/LanguageContext";
import type { CatalogCategory } from "@/app/lib/catalog";

type CatalogContentProps = {
  categories: CatalogCategory[];
};

export default function CatalogContent({ categories }: CatalogContentProps) {
  const t = useTranslations();

  const orfebreria = categories.filter(
    (categoria) => !categoria.name.startsWith("Bisuteria_")
  );
  const bisuteria = categories.filter((categoria) =>
    categoria.name.startsWith("Bisuteria_")
  );

  const displayName = (folderName: string) => {
    const raw = folderName.replace("Bisuteria_", "");
    const key = raw.charAt(0).toUpperCase() + raw.slice(1);
    return t.catalog.categories[key as keyof typeof t.catalog.categories] ?? raw;
  };

  const renderGrid = (items: CatalogCategory[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((cat, i) => (
        <Reveal key={cat.slug} delay={(i % 3) * 100}>
          <Link
            href={`/catalogo/${cat.slug}`}
            className="group relative h-[340px] sm:h-[400px] lg:h-[460px] overflow-hidden bg-charcoal block"
          >
            <Image
              src={cat.image}
              alt={displayName(cat.name)}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-obsidian/15 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
              <p className="text-gold text-[10px] tracking-[5px] uppercase mb-2 font-sans">
                {t.catalog.collectionLabel}
              </p>
              <h3 className="font-heading text-3xl sm:text-4xl font-light text-white">
                {displayName(cat.name)}
              </h3>
              <div className="flex items-center gap-2 mt-4 sm:mt-5 text-white/50 text-[10px] tracking-[3px] uppercase font-sans group-hover:text-gold transition-colors duration-300">
                <span>{t.catalog.viewCollection}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );

  return (
    <>
      {/* HEADER */}
      <section className="bg-obsidian pt-32 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <span className="text-gold text-xs tracking-[6px] uppercase font-sans">
          {t.catalog.brand}
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-light text-white mt-3 mb-3">
          {t.catalog.title}{" "}
          <em className="not-italic text-gold">{t.catalog.titleAccent}</em>
        </h1>
        <div className="w-10 h-px bg-gold mx-auto mt-6 mb-6" />
        <p className="text-white/55 text-base sm:text-lg max-w-xl mx-auto font-sans">
          {t.catalog.description}
        </p>
      </section>

      {/* ORFEBRERÍA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-14 sm:py-20">
        <Reveal className="text-center mb-10 sm:mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl font-light text-obsidian">
            {t.catalog.orfebreriaTitle}
          </h2>
          <div className="w-8 h-px bg-gold mx-auto mt-4 mb-4" />
          <p className="text-graphite/80 font-sans text-sm sm:text-base max-w-xl mx-auto">
            {t.catalog.orfebreriaDescription}
          </p>
        </Reveal>
        {renderGrid(orfebreria)}
      </section>

      {/* BISUTERÍA */}
      {bisuteria.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-14 sm:pb-20">
          <Reveal className="text-center mb-10 sm:mb-12">
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-obsidian">
              {t.catalog.bisuteriaTitle}
            </h2>
            <div className="w-8 h-px bg-gold mx-auto mt-4 mb-4" />
            <p className="text-graphite/80 font-sans text-sm sm:text-base max-w-xl mx-auto">
              {t.catalog.bisuteriaDescription}
            </p>
          </Reveal>
          {renderGrid(bisuteria)}
        </section>
      )}

      {/* CTA */}
      <section className="bg-obsidian py-14 sm:py-16 px-5 sm:px-6 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <h2 className="font-heading text-3xl sm:text-4xl font-light text-white mb-4">
          {t.catalog.notFoundTitle}
        </h2>
        <p className="text-white/50 mb-8 font-sans text-sm">
          {t.catalog.notFoundText}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold text-obsidian px-8 sm:px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-gold-light transition-colors duration-300"
        >
          {t.catalog.requestCustom}
        </Link>
      </section>
    </>
  );
}
