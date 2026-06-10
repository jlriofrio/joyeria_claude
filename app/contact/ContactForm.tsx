"use client";

import { useState } from "react";
import { useTranslations } from "@/app/context/LanguageContext";

type FormState = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const t = useTranslations();
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const set = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          mensaje: form.message,
          telefono: form.phone,
          interes: form.interest,
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", interest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 border border-gold flex items-center justify-center mb-6">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gold"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading text-3xl text-obsidian mb-3 font-light">
          ¡Mensaje enviado!
        </h3>
        <p className="text-graphite font-sans text-sm">
          {t.contact.sent}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-xs tracking-[3px] uppercase text-gold hover:text-gold-dark transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full border border-graphite/25 bg-transparent px-5 py-4 focus:outline-none focus:border-gold transition-colors duration-300 text-obsidian placeholder:text-graphite/45 text-sm font-sans";
  const labelClass =
    "block text-[10px] tracking-[4px] uppercase text-graphite mb-2 font-sans";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>{t.contact.namePlaceholder}</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            className={fieldClass}
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label className={labelClass}>Teléfono</label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            className={fieldClass}
            placeholder="+57 300 000 0000"
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.contact.emailPlaceholder}</label>
        <input
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          className={fieldClass}
          placeholder="tu@correo.com"
        />
      </div>

      <div>
        <label className={labelClass}>¿Qué te interesa?</label>
        <div className="relative">
          <select
            value={form.interest}
            onChange={set("interest")}
            className={`${fieldClass} appearance-none pr-10 bg-ivory cursor-pointer`}
          >
            <option value="">Selecciona una opción</option>
            <option value="anillos">Anillos</option>
            <option value="cadenas">Cadenas y dijes</option>
            <option value="aretes">Aretes</option>
            <option value="argollas">Argollas</option>
            <option value="pulseras">Pulseras</option>
            <option value="personalizado">Diseño personalizado</option>
            <option value="otro">Otro</option>
          </select>
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 text-graphite/50 pointer-events-none"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      <div>
        <label className={labelClass}>{t.contact.messagePlaceholder}</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          className={`${fieldClass} resize-none`}
          placeholder="Cuéntanos tu idea o consulta..."
        />
      </div>

      {status === "error" && (
        <div className="border-l-2 border-red-600 bg-red-50 px-4 py-3 text-sm text-red-900 font-sans">
          {t.contact.error}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-obsidian text-ivory py-4 text-xs tracking-[4px] uppercase hover:bg-graphite transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? t.contact.sending : t.contact.submit}
      </button>
    </form>
  );
}
