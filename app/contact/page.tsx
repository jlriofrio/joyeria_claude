import Image from "next/image";
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import ContactForm from "@/app/contact/ContactForm";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`
  : null;

const contactInfo = [
  {
    title: "Ubicación",
    content: "Cali, Colombia",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "WhatsApp",
    content: whatsappNumber ? `+${whatsappNumber}` : "Disponible por solicitud",
    href: whatsappHref ?? undefined,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 2.93h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91A16 16 0 0 0 14.09 15.91l.51-.51a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Horario",
    content: "Lun – Vie: 9am – 6pm · Sáb: 9am – 2pm",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="bg-ivory">
      <Navbar />

      {/* HERO */}
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1920&auto=format&fit=crop"
          alt="Taller de joyería"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/50 to-obsidian/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/35 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pb-18 w-full">
          <span className="text-gold text-xs tracking-[6px] uppercase font-sans block mb-5">
            — Estamos para ti
          </span>
          <h1 className="font-heading text-7xl md:text-8xl font-light text-white leading-[0.92]">
            Contáctanos
          </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* COLUMNA IZQUIERDA: Info */}
          <div className="md:col-span-2">
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">Información</span>
            <h2 className="font-heading text-4xl font-light mt-3 mb-6 text-obsidian">
              Hablemos
            </h2>
            <div className="w-8 h-px bg-gold mb-8" />
            <p className="text-graphite leading-relaxed mb-10 font-sans text-sm">
              Si tienes alguna pregunta, deseas cotizar una joya o simplemente quieres conocernos, estamos aquí. Escríbenos o llámanos.
            </p>

            {/* Datos de contacto */}
            <div className="space-y-7">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 border border-gold/30 flex items-center justify-center shrink-0 text-gold group-hover:border-gold/60 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[4px] uppercase text-graphite mb-1 font-sans">
                      {info.title}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-obsidian hover:text-gold transition-colors duration-300 text-sm font-sans"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-obsidian text-sm font-sans">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociales */}
            <div className="mt-10">
              <p className="text-[10px] tracking-[4px] uppercase text-graphite mb-4 font-sans">
                Síguenos
              </p>
              <div className="flex gap-3">
                {[
                  {
                    label: "Instagram",
                    href: "https://www.instagram.com/aydeeorfebre/",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    ),
                  },
                  {
                    label: "Facebook",
                    href: "#",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    ),
                  },
                  {
                    label: "TikTok",
                    href: "#",
                    icon: (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-graphite/25 flex items-center justify-center text-graphite hover:border-gold hover:text-gold transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="md:col-span-3">
            <span className="text-gold text-xs tracking-[6px] uppercase font-sans">Formulario</span>
            <h2 className="font-heading text-4xl font-light mt-3 mb-8 text-obsidian">
              Cuéntanos tu idea
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA */}
      <section className="bg-obsidian py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold text-xs tracking-[6px] uppercase font-sans">Atención inmediata</span>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-white mt-4 mb-4">
            ¿Prefieres WhatsApp?
          </h2>
          <div className="w-8 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/55 mb-10 font-sans text-sm leading-relaxed">
            Escríbenos directamente para recibir asesoría personalizada y cotizaciones en tiempo real.
          </p>

          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-4 text-xs tracking-[4px] uppercase hover:bg-green-500 transition-colors duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar por WhatsApp
            </a>
          ) : (
            <p className="text-white/50 font-sans text-sm">
              Déjanos tus datos en el formulario y te contactaremos pronto.
            </p>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
