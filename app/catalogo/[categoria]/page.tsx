import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import WhatsAppButton from "@/app/WhatsAppButton";
import CategoryContent from "@/app/catalogo/[categoria]/CategoryContent";
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

  return (
    <main className="bg-ivory">
      <Navbar />
      <CategoryContent category={category} images={images} />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
