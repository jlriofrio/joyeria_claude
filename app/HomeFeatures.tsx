"use client";

import { useTranslations } from "@/app/context/LanguageContext";

const featureIcons = [
  // Diamond / custom design
  <svg key="design" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 22 9 18 21 6 21 2 9 12 2" />
    <line x1="12" y1="2" x2="12" y2="21" />
    <line x1="2" y1="9" x2="22" y2="9" />
    <line x1="6" y1="21" x2="12" y2="9" />
    <line x1="18" y1="21" x2="12" y2="9" />
  </svg>,
  // Circle gem
  <svg key="gold" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12l3 3 5-5" />
  </svg>,
  // Hammer / artisan
  <svg key="craft" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>,
  // Person / service
  <svg key="service" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>,
];

export function HomeFeaturesSection() {
  const t = useTranslations();
  const features = [t.home.feature1, t.home.feature2, t.home.feature3, t.home.feature4];

  return (
    <section className="bg-ivory py-20 px-6 border-b border-obsidian/8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {features.map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 border border-gold/30 flex items-center justify-center mb-5 text-gold group-hover:border-gold transition-colors duration-300 group-hover:bg-gold/5">
                {featureIcons[i]}
              </div>
              <p className="text-obsidian text-xs tracking-[3px] uppercase font-sans">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeTestimonialsSection() {
  const t = useTranslations();

  const testimonials = [
    { text: t.home.testimonial1, author: t.home.testimonial1Author },
    { text: t.home.testimonial2, author: t.home.testimonial2Author },
    { text: t.home.testimonial3, author: t.home.testimonial3Author },
  ];

  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-gold-dark text-xs tracking-[6px] uppercase font-sans">
            {t.home.testimonialsTitle}
          </span>
          <div className="w-10 h-px bg-gold-dark mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-ivory p-8 border-t-2 border-gold/30 hover:border-gold transition-colors duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-heading text-xl font-light text-obsidian leading-relaxed italic mb-6">
                "{item.text}"
              </blockquote>

              <cite className="not-italic text-[10px] tracking-[4px] uppercase text-graphite font-sans">
                — {item.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
