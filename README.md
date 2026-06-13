# Aydee Orfebre

Sitio web corporativo desarrollado para la exhibición, promoción y cotización de joyería artesanal y bisutería elaborada de forma personalizada.

---

# Objetivo del proyecto

Aydee Orfebre busca ofrecer una experiencia digital elegante y sencilla que permita a los visitantes:

- Conocer la historia y trayectoria de la marca.
- Explorar colecciones de joyería artesanal.
- Explorar colecciones de bisutería.
- Solicitar cotizaciones personalizadas.
- Contactar directamente por WhatsApp.
- Navegar en español e inglés.

---

# Tecnologías utilizadas

## Frontend

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Hosting y despliegue

- Vercel

## Servicios externos

- Resend (envío de formularios de contacto)
- WhatsApp (contacto directo con clientes)

---

# Funcionalidades implementadas

## Página de inicio

### Hero Carousel

Muestra imágenes destacadas de productos y mensajes promocionales.

Características:

- Navegación manual.
- Textos dinámicos en español e inglés.
- Diseño responsive.
- Optimización de imágenes mediante Next.js.

### Sección de valor de marca

Presenta los principales diferenciales:

- Diseños personalizados.
- Oro y plata.
- Elaboración artesanal.
- Atención personalizada.

### Testimonios

Muestra opiniones destacadas de clientes.

Actualmente:

- Configuración manual.
- Diseño tipo tarjeta premium.
- Preparado para futura integración con testimonios reales.

---

# Catálogo

El catálogo se genera dinámicamente a partir de carpetas almacenadas dentro de:

```plaintext
public/joyas/images
```

## Colección Orfebrería

Categorías actuales:

- Anillos
- Aretes
- Argollas
- Cadena
- Candongas
- Pulseras

## Colección Bisutería

Categorías actuales:

- Collares
- Pulseras
- Aretes
- Sets
- Accesorios

Cada categoría:

- Genera automáticamente su tarjeta.
- Obtiene una imagen representativa desde la carpeta correspondiente.
- Redirecciona a una galería propia.

---

# Página de categoría

Cada categoría muestra:

- Galería de imágenes.
- Visualización optimizada.
- Botón de cotización.

Las imágenes son detectadas automáticamente desde el sistema de archivos.

---

# Página Acerca de Nosotros

Presenta:

- Historia de la marca.
- Trayectoria profesional.
- Experiencia acumulada en el sector joyero.
- Enfoque artesanal y personalizado.

---

# Página de Contacto

Incluye:

## Formulario de contacto

Permite enviar:

- Nombre
- Correo electrónico
- Mensaje

Los mensajes son enviados mediante Resend.

## WhatsApp

Acceso directo para atención inmediata.

---

# Sistema multiidioma

Idiomas soportados:

- Español
- Inglés

La traducción se administra desde:

```plaintext
app/lib/translations.ts
```

Características:

- Cambio dinámico de idioma.
- Persistencia mediante localStorage.
- Traducciones centralizadas.

---

# Arquitectura del proyecto

```plaintext
app/
│
├── about/
├── catalogo/
├── contact/
├── api/
│   └── contact/
│
├── context/
│   └── LanguageContext.tsx
│
├── lib/
│   ├── catalog.ts
│   └── translations.ts
│
├── Navbar.tsx
├── Carousel.tsx
├── Footer.tsx
├── WhatsAppButton.tsx
└── page.tsx

components/
└── ProductCard.tsx

public/
└── joyas/
    └── images/
```

---

# Funcionalidades activas

- Catálogo dinámico
- Multiidioma ES/EN
- WhatsApp
- Formulario de contacto
- Testimonios
- Responsive Design
- Separación Orfebrería / Bisutería
- Despliegue automático en Vercel

---

# Funcionalidades pendientes

- Integración completa de Instagram
- Lightbox para imágenes de productos
- Testimonios administrables
- SEO avanzado
- Analytics
- Cotización automática por producto
- Panel administrativo

---

# Flujo de navegación

```plaintext
Inicio
│
├── Catálogo
│   ├── Orfebrería
│   └── Bisutería
│
├── Acerca de Nosotros
│
├── Contacto
│
└── WhatsApp
```

---

# Mantenimiento del catálogo

Para agregar una nueva categoría:

1. Crear una carpeta dentro de:

```plaintext
public/joyas/images
```

2. Agregar imágenes.

3. Reiniciar el servidor de desarrollo.

La categoría será detectada automáticamente por el sistema.

---

# Autor

Desarrollado por:

Jose Luis Riofrio

Proyecto desarrollado para Aydee Orfebre.
