import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Navbar";
import Carousel from "@/app/Carousel";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import { HomeFeaturesSection, HomeTestimonialsSection } from "@/app/HomeFeatures";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
  : null;

const featuredCategories = [
  {
    name: "Anillos",
    slug: "anillos",
    image: "/joyas/images/Anillos/Anillo.jpeg",
    description: "Diseños únicos en oro y plata",
  },
  {
    name: "Cadenas",
    slug: "cadena",
    image: "/joyas/images/Cadena/Cadena.jpeg",
    description: "Elaboradas artesanalmente",
  },
  {
    name: "Aretes",
    slug: "aretes",
    image: "/joyas/images/Aretes/Pulseras_aretes.jpeg",
    description: "Elegancia en cada detalle",
  },
];

const values = [
  {
    symbol: "I",
    title: "Tradición",
    desc: "Más de 35 años de arte familiar transmitido de generación en generación desde Cali, Colombia.",
  },
  {
    symbol: "II",
    title: "Calidad",
    desc: "Utilizamos solo los mejores materiales: oro 18K, plata 950 y piedras preciosas seleccionadas.",
  },
  {
    symbol: "III",
    title: "Exclusividad",
    desc: "Cada pieza es única, creada especialmente para ti con amor y dedicación artesanal.",
  },
];

export default function Home() {
  return (
    <main className="bg-ivory">
      <Navbar />

      {/* HERO */}
      <Carousel />

      {/* CARACTERÍSTICAS */}
      <HomeFeaturesSection />

      {/* COLECCIONES DESTACADAS */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">Colecciones</span>
            <h2 className="font-heading text-5xl md:text-6xl font-light mt-3 text-obsidian">
              Nuestras <em className="not-italic text-gold">joyas</em>
            </h2>
            <div className="w-10 h-px bg-gold mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/catalogo/${cat.slug}`}
                className="group relative h-[480px] overflow-hidden bg-charcoal block"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/15 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-gold text-[10px] tracking-[5px] uppercase mb-2 font-sans">
                    {cat.description}
                  </p>
                  <h3 className="font-heading text-4xl font-light text-white">{cat.name}</h3>
                  <div className="w-6 h-px bg-gold mt-4 group-hover:w-14 transition-all duration-500" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/catalogo"
              className="inline-block border border-obsidian text-obsidian text-xs tracking-[4px] uppercase px-10 py-3.5 hover:bg-obsidian hover:text-ivory transition-all duration-300"
            >
              Ver catálogo completo
            </Link>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA / VALORES */}
      <section className="bg-obsidian py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">Por qué elegirnos</span>
            <h2 className="font-heading text-5xl md:text-6xl font-light text-white mt-3">
              Nuestra <em className="not-italic text-gold">esencia</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {values.map((v, i) => (
              <div key={i} className="text-center group">
                <div className="w-14 h-14 border border-gold/25 flex items-center justify-center mx-auto mb-7 group-hover:border-gold/60 transition-colors duration-300">
                  <span className="font-heading text-gold text-sm tracking-[3px] font-light">
                    {v.symbol}
                  </span>
                </div>
                <h3 className="font-heading text-3xl text-white font-light mb-4 tracking-wider">
                  {v.title}
                </h3>
                <div className="w-6 h-px bg-gold mx-auto mb-5" />
                <p className="text-white/55 leading-relaxed text-sm font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <HomeTestimonialsSection />

      {/* HISTORIA TEASER */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>
              <span className="text-gold-dark text-xs tracking-[6px] uppercase font-sans">Nuestra historia</span>
              <h2 className="font-heading text-5xl md:text-6xl font-light mt-3 leading-tight text-obsidian">
                Familia de<br />
                <em className="not-italic text-gold-dark">orfebres</em><br />
                desde 1987
              </h2>
              <div className="w-10 h-px bg-gold-dark mt-6 mb-8" />
              <p className="text-graphite leading-relaxed text-lg mb-8 font-sans">
                Nacimos de la pasión de un matrimonio de orfebres caleños que dedicó su vida al arte de la joyería. Hoy, con más de 35 años de trayectoria, seguimos elaborando cada pieza con el mismo amor y detalle del primer día.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 text-xs tracking-[4px] uppercase text-gold-dark hover:gap-5 transition-all duration-300 group"
              >
                Conoce nuestra historia
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
            </div>

            {/* Imagen */}
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop"
                alt="Taller de orfebrería artesanal"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-obsidian/10" />
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-obsidian/90 backdrop-blur-sm p-5 border-l-2 border-gold">
                <p className="font-heading text-5xl text-gold font-light leading-none">35+</p>
                <p className="text-white/65 text-xs tracking-[3px] uppercase mt-1 font-sans">
                  años de experiencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-32 px-6 overflow-hidden bg-obsidian">
        {/* Imagen de fondo tenue */}
        <div className="absolute inset-0 opacity-8">
          <Image
            src="/joyas/images/Anillos/Anillo_1.jpeg"
            alt=""
            fill
            className="object-cover"
            aria-hidden
          />
        </div>
        {/* Gradiente sobre imagen */}
        <div className="absolute inset-0 bg-obsidian/80" />

        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-gold text-xs tracking-[6px] uppercase font-sans">Cotización gratuita</span>
          <h2 className="font-heading text-5xl md:text-6xl font-light text-white mt-4 mb-5 leading-tight">
            ¿Lista para tu<br />
            <em className="not-italic text-gold">joya perfecta?</em>
          </h2>
          <div className="w-10 h-px bg-gold mx-auto mb-8" />
          <p className="text-white/55 text-lg mb-10 leading-relaxed font-sans">
            Cuéntanos tu idea y la hacemos realidad. Diseñamos joyas personalizadas en oro y plata con la calidad artesanal que mereces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gold text-obsidian px-10 py-4 text-xs tracking-[4px] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
            >
              Cotizar ahora
            </Link>
            {whatsappHref && (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white/80 px-10 py-4 text-xs tracking-[4px] uppercase hover:border-gold hover:text-gold transition-all duration-300"
              >
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
