"use client";

import Image from "next/image";
import { useTranslations } from "@/app/context/LanguageContext";

type ProductCardProps = {
    nombre: string;
    categoria: string;
    imagen: string;
  };
  
  export default function ProductCard({
    nombre,
  categoria,
  imagen,
}: ProductCardProps) {
    const t = useTranslations();
    const categoryName =
      t.catalog.categories[categoria as keyof typeof t.catalog.categories] ??
      categoria;

    return (
      <div className="bg-white border border-[#efe7d8] shadow-[0_18px_45px_rgba(32,24,14,0.08)] overflow-hidden transition duration-300 hover:-translate-y-1">
        
        {/* IMAGEN */}
        <Image
          src={imagen}
          alt={nombre}
          width={600}
          height={400}
          className="w-full h-72 object-cover"
        />
  
        {/* INFO */}
        <div className="p-5">
  
          <span className="text-xs text-gold font-semibold uppercase tracking-[0.22em]">
            {categoryName}
          </span>
  
          <h3 className="font-display text-2xl font-normal mt-2 mb-4">
            {nombre}
          </h3>
  
          <button className="premium-button px-5 py-2">
            {t.productCard.quote}
          </button>
  
        </div>
      </div>
    );
  }
