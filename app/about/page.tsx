import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import { AboutHistory } from "@/app/about/AboutHistory";

const milestones = [
  {
    year: "1987",
    title: "Los comienzos",
    desc: "Un matrimonio de orfebres caleños funda el taller, elaborando joyas para reconocidas joyerías de Cali con pasión y precisión artesanal.",
  },
  {
    year: "2000s",
    title: "Crecimiento",
    desc: "La calidad artesanal y el voz a voz nos permitieron expandir el catálogo y comenzar a recibir pedidos completamente personalizados.",
  },
  {
    year: "Hoy",
    title: "Tradición viva",
    desc: "Con más de 35 años creando joyas únicas en oro y plata, fieles a nuestra esencia artesanal y al amor por el detalle.",
  },
];

const values = [
  {
    title: "Artesanía",
    desc: "Cada pieza es trabajada a mano, con herramientas tradicionales y técnicas depuradas durante décadas de oficio.",
  },
  {
    title: "Personalización",
    desc: "Creamos joyas a medida que reflejan tu personalidad, tus deseos y tus momentos más significativos.",
  },
  {
    title: "Confianza",
    desc: "Más de 35 años de relaciones honestas con nuestros clientes son nuestro mayor certificado de calidad.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-ivory">
      <Navbar />

      {/* HERO CINEMATOGRÁFICO */}
      <section className="relative h-[75vh] flex items-end overflow-hidden">
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

        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <span className="text-gold text-xs tracking-[6px] uppercase font-sans block mb-5">
            — Nuestra Historia
          </span>
          <h1 className="font-heading text-7xl md:text-8xl lg:text-9xl font-light text-white leading-[0.92]">
            Tradición<br />
            <em className="not-italic text-gold">familiar</em>
          </h1>
        </div>

        {/* Línea dorada decorativa */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </section>

      {/* HISTORIA PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">Quiénes somos</span>
            <h2 className="font-heading text-5xl font-light mt-4 mb-8 leading-tight text-obsidian">
              Arte hecho a mano<br />
              desde <em className="not-italic text-gold">Cali, Colombia</em>
            </h2>
            <AboutHistory />
          </div>

          {/* Imagen con badge */}
          <div className="relative h-[580px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop"
              alt="Proceso artesanal en el taller"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-obsidian/10" />
            <div className="absolute top-6 left-6 bg-ivory/95 backdrop-blur-sm p-6 border-b-2 border-gold">
              <p className="font-heading text-5xl text-gold font-light leading-none">1987</p>
              <p className="text-obsidian text-xs tracking-[3px] uppercase mt-1 font-sans">
                Año de fundación
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-obsidian py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">Cronología</span>
            <h2 className="font-heading text-5xl font-light text-white mt-3">
              Nuestra <em className="not-italic text-gold">trayectoria</em>
            </h2>
          </div>

          <div className="relative">
            {/* Línea horizontal (solo desktop) */}
            <div className="absolute top-7 left-0 right-0 h-px bg-gold/15 hidden md:block" />

            <div className="grid md:grid-cols-3 gap-12">
              {milestones.map((m, i) => (
                <div key={i} className="relative text-center">
                  {/* Nodo */}
                  <div className="w-14 h-14 border border-gold/40 flex items-center justify-center mx-auto mb-7 relative bg-obsidian">
                    <span className="font-heading text-gold text-sm font-light tracking-wider">
                      {m.year}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl text-white mb-3 font-light">{m.title}</h3>
                  <div className="w-6 h-px bg-gold mx-auto mb-5" />
                  <p className="text-white/55 leading-relaxed text-sm font-sans">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-gold-dark text-xs tracking-[6px] uppercase font-sans">Nuestros valores</span>
            <h2 className="font-heading text-5xl font-light mt-3 text-obsidian">
              Lo que nos <em className="not-italic text-gold-dark">define</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-ivory p-8 border-t-2 border-gold/40 hover:border-gold transition-colors duration-300 group"
              >
                <h3 className="font-heading text-3xl font-light mb-5 text-obsidian group-hover:text-gold transition-colors duration-300">
                  {v.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-6" />
                <p className="text-graphite leading-relaxed font-sans">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITA INSPIRACIONAL */}
      <section className="py-28 px-6 bg-obsidian relative overflow-hidden">
        {/* Decoración */}
        <div className="absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="max-w-3xl mx-auto text-center relative">
          <div className="font-heading text-8xl text-gold/25 leading-none mb-2 select-none">
            "
          </div>
          <blockquote className="font-heading text-3xl md:text-4xl font-light text-white/90 italic leading-relaxed -mt-6">
            La joyería no es solo metal y piedras. Es emoción hecha tangible, tiempo hecho eterno.
          </blockquote>
          <div className="w-10 h-px bg-gold mx-auto mt-10 mb-5" />
          <cite className="text-gold text-xs tracking-[5px] uppercase not-italic font-sans">
            Aydee Orfebre — Cali, Colombia
          </cite>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-ivory text-center">
        <span className="text-gold text-xs tracking-[6px] uppercase font-sans">¿Listo para crear?</span>
        <h2 className="font-heading text-4xl md:text-5xl font-light mt-4 mb-8 text-obsidian">
          Cuéntanos tu idea,<br />
          la <em className="not-italic text-gold">hacemos realidad</em>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-obsidian text-ivory px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-graphite transition-colors duration-300"
          >
            Contactarnos
          </Link>
          <Link
            href="/catalogo"
            className="border border-obsidian text-obsidian px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-obsidian hover:text-ivory transition-all duration-300"
          >
            Ver catálogo
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
