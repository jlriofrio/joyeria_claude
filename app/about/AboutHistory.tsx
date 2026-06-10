"use client";

import { useTranslations } from "@/app/context/LanguageContext";

export function AboutHistory() {
  const t = useTranslations();

  return (
    <>
      {t.about.paragraphs.map((paragraph, i) => (
        <p key={i} className="text-graphite leading-8 mb-6 text-lg font-sans">
          {paragraph}
        </p>
      ))}
    </>
  );
}
