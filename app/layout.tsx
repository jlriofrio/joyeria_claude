import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { LanguageProvider } from "@/app/context/LanguageContext";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aydee Orfebre | Joyería Artesanal en Cali, Colombia",
  description:
    "Joyería artesanal en Cali, Colombia con más de 35 años de tradición familiar. Anillos, aretes, argollas, cadenas y pulseras elaborados a mano en oro y plata. Diseños personalizados.",
  keywords:
    "joyería artesanal, orfebre Cali, Colombia, joyas en oro, joyas en plata, anillos personalizados, aretes artesanales, pulseras, argollas, Aydee Orfebre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
