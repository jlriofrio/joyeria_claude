import Link from "next/link";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import { getCategoryBySlug, getCategoryImages } from "@/app/lib/catalog";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ categoria: string }>;
};

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;

  const category = getCategoryBySlug(categoria);
  if (!category) notFound();

  const images = getCategoryImages(category.name);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
    : null;

  return (
    <main className="bg-ivory">
      <Navbar />

      {/* HEADER */}
      <section className="bg-obsidian pt-36 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

        {/* Breadcrumb */}
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-gold/55 text-[10px] tracking-[4px] uppercase hover:text-gold transition-colors duration-300 mb-6 font-sans"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Catálogo
        </Link>

        <h1 className="font-heading text-6xl md:text-7xl font-light text-white block">
          <em className="not-italic text-gold">{category.name}</em>
        </h1>
        <div className="w-10 h-px bg-gold mx-auto mt-6 mb-4" />
        <p className="text-white/45 text-sm font-sans tracking-wider">
          {images.length} pieza{images.length !== 1 ? "s" : ""} artesanal
          {images.length !== 1 ? "es" : ""}
        </p>
      </section>

      {/* GALERÍA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <a
              key={image.name}
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-[380px] overflow-hidden bg-charcoal block"
            >
              <img
                src={image.src}
                alt={`${category.name} — pieza ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/70 text-white text-[10px] tracking-[4px] uppercase px-5 py-2.5 font-sans">
                  Ver imagen
                </div>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 bg-obsidian/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white/80 text-[10px] font-sans">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-16 px-6 text-center">
        <span className="text-gold-dark text-xs tracking-[6px] uppercase font-sans">¿Te gustó alguna pieza?</span>
        <h2 className="font-heading text-4xl font-light mt-3 mb-4 text-obsidian">
          Cotiza con nosotros
        </h2>
        <p className="text-graphite mb-8 font-sans text-sm">
          Escríbenos y te asesoramos. También podemos personalizar cualquier diseño.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-obsidian text-ivory px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-graphite transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar por WhatsApp
            </a>
          ) : null}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-obsidian text-obsidian px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-obsidian hover:text-ivory transition-all duration-300"
          >
            Formulario de contacto
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
