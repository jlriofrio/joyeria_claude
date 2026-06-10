import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import CatalogContent from "@/app/catalogo/CatalogContent";
import { getCatalogCategories } from "@/app/lib/catalog";

export default function CatalogoPage() {
  const categories = getCatalogCategories();

  return (
    <main className="bg-ivory">
      <Navbar />
      <CatalogContent categories={categories} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
