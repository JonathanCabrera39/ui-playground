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
  id?:string;
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
const DEFAULT_BRAND_id = "footer"
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
youtube: (
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  ),
  linkedin: (
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  ),
  instagram: (
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.7-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  ),
  whatsapp: (
    <path d="M11.977 0C5.362 0 0 5.36 0 11.976c0 2.647.86 5.129 2.33 7.2L.788 24l4.982-1.528A11.928 11.928 0 0011.977 24c6.613 0 11.975-5.36 11.975-11.976S18.59 0 11.977 0zm7.14 17.202c-.302.853-1.745 1.631-2.42 1.764-.675.132-1.554.218-4.364-.943-3.38-1.398-5.556-4.836-5.72-5.056-.164-.22-1.368-1.821-1.368-3.473 0-1.652.861-2.463 1.173-2.793.313-.331.677-.413.902-.413.226 0 .452.003.645.011.208.009.489-.078.765.586.276.664.94 2.302 1.025 2.476.084.175.14.378.028.6-.112.22-.168.358-.337.551-.168.193-.35.419-.497.554-.163.149-.335.312-.142.645.192.332.86 1.42 1.844 2.298 1.272 1.135 2.348 1.488 2.68 1.64.331.15.524.124.721-.102.197-.226.843-1.002 1.07-1.346.225-.344.45-.286.75-.175.3.111 1.897.893 2.221 1.056.323.164.538.246.617.382.08.136.08 1.042-.222 1.895z" />
  ),
    twitter: (
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
  id = DEFAULT_BRAND_id,
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
    <footer id={id} className={`${containerClassName}`} style={containerStyle}>
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
                subjona@ejemplo.com
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
