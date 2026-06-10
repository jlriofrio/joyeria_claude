import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import { getCatalogCategories } from "@/app/lib/catalog";

export default function CatalogoPage() {
  const categories = getCatalogCategories();

  return (
    <main className="bg-ivory">
      <Navbar />

      {/* HEADER */}
      <section className="bg-obsidian pt-36 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <span className="text-gold text-xs tracking-[6px] uppercase font-sans">
          Aydee Orfebre
        </span>
        <h1 className="font-heading text-6xl md:text-7xl font-light text-white mt-3 mb-3">
          Nuestro <em className="not-italic text-gold">Catálogo</em>
        </h1>
        <div className="w-10 h-px bg-gold mx-auto mt-6 mb-6" />
        <p className="text-white/55 text-lg max-w-xl mx-auto font-sans">
          Cada pieza es elaborada artesanalmente con la mayor dedicación y los mejores materiales.
        </p>
      </section>

      {/* GRILLA DE CATEGORÍAS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/catalogo/${cat.slug}`}
              className="group relative h-[460px] overflow-hidden bg-charcoal block"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/88 via-obsidian/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-gold text-[10px] tracking-[5px] uppercase mb-2 font-sans">
                  Colección artesanal
                </p>
                <h2 className="font-heading text-4xl font-light text-white">
                  {cat.name}
                </h2>
                <div className="flex items-center gap-2 mt-5 text-white/50 text-[10px] tracking-[3px] uppercase font-sans group-hover:text-gold transition-colors duration-300">
                  <span>Ver colección</span>
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
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-obsidian py-16 px-6 text-center relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <h2 className="font-heading text-4xl font-light text-white mb-4">
          ¿No encuentras lo que buscas?
        </h2>
        <p className="text-white/50 mb-8 font-sans text-sm">
          Diseñamos tu joya a medida, sin límites.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-gold text-obsidian px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-gold-light transition-colors duration-300"
        >
          Solicitar diseño personalizado
        </Link>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
