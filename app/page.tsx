import Navbar from "@/app/Navbar";
import Carousel from "@/app/Carousel";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import { HomeFeaturesSection, HomeTestimonialsSection } from "@/app/HomeFeatures";

export default function Home() {
  return (
    <main className="bg-ivory">
      <Navbar />

      {/* HERO: carrusel con CTA al catálogo */}
      <Carousel />

      {/* SELLOS DE MARCA */}
      <HomeFeaturesSection />

      {/* TESTIMONIOS */}
      <HomeTestimonialsSection />

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
