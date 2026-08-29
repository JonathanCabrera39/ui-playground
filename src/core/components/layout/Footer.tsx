import React from "react";

export interface SocialLink {
  name: string;
  url: string;
  icon:
    | "github"
    | "linkedin"
    | "instagram"
    | "whatsapp"
    | "twitter"
    | "youtube"; // Tipado estricto para los iconos
}

export interface FooterLink {
  label: string;
  url: string;
}

interface FooterProps {
  // Contenido

  brandName: string;
  brandDescription?: string;
  authorName: string;
  authorLink: string;
  copyrightText?: string;
  quickLinks?: FooterLink[];
  socialLinks?: SocialLink[];

  // Estilos generales del contenedor
  containerClassName?: string;
  containerStyle?: React.CSSProperties;
}

// Valores por defecto profesionales
const DEFAULT_BRAND_NAME = "Subzero Dev";
const DEFAULT_BRAND_DESCRIPTION =
  "Desarrollo web de alto rendimiento, seguro y optimizado para convertir visitantes en clientes.";
const DEFAULT_AUTHOR_NAME = "Subzero";
const DEFAULT_AUTHOR_LINK = "https://tu-dominio.com";
const DEFAULT_COPYRIGHT_TEXT = `© ${new Date().getFullYear()} ${DEFAULT_BRAND_NAME}. Todos los derechos reservados.`;

const DEFAULT_QUICK_LINKS: FooterLink[] = [
  { label: "Inicio", url: "/" },
  { label: "Servicios", url: "/#servicios" },
  { label: "Portafolio", url: "/#portafolio" },
  { label: "Contacto", url: "/#contacto" },
];

const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tu-usuario",
    icon: "linkedin",
  },
  { name: "GitHub", url: "https://github.com/tu-usuario", icon: "github" },
  {
    name: "WhatsApp",
    url: "https://wa.me/123456789?text=Hola,%20vengo%20de%20tu%20Landing%20Page",
    icon: "whatsapp",
  },
];

// Componente interno para renderizar iconos SVG sin dependencias externas
const SocialIcon = ({
  icon,
  className,
}: {
  icon: SocialLink["icon"];
  className?: string;
}) => {
  const icons = {
    github: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    ),
    linkedin: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    ),
    instagram: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
    whatsapp: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
    twitter: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
    youtube: (
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    ),
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={className}
    >
      {icons[icon]}
    </svg>
  );
};

export default function Footer({
  brandName = DEFAULT_BRAND_NAME,
  brandDescription = DEFAULT_BRAND_DESCRIPTION,
  authorName = DEFAULT_AUTHOR_NAME,
  authorLink = DEFAULT_AUTHOR_LINK,
  copyrightText = DEFAULT_COPYRIGHT_TEXT,
  quickLinks = DEFAULT_QUICK_LINKS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  containerClassName = "bg-gray-950 text-gray-400 border-t border-gray-800",
  containerStyle,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${containerClassName}`} style={containerStyle}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* COLUMNA 1: Marca y Descripción */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-tight">
              {brandName}
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              {brandDescription}
            </p>
          </div>

          {/* COLUMNA 2: Enlaces Rápidos (Excelente para SEO y UX) */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: Contacto y Redes Sociales */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Conectemos
            </h4>
            <p className="text-sm mb-4">
              ¿Tienes un proyecto en mente? <br />
              <a
                href="mailto:tu-email@ejemplo.com"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                tu-email@ejemplo.com
              </a>
            </p>

            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visitar ${link.name}`}
                    className="p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-indigo-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1"
                  >
                    <SocialIcon icon={link.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* LÍNEA DIVISORIA INFERIOR */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            {copyrightText.replace(
              "${new Date().getFullYear()}",
              currentYear.toString(),
            )}
          </p>

          <p className="text-xs text-gray-500 flex items-center gap-1">
            Diseñado y desarrollado con 💜 por{" "}
            <a
              href={authorLink}
              className="font-medium text-gray-300 hover:text-indigo-400 transition-colors"
            >
              {authorName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
