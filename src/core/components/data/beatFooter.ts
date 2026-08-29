// src/data/subjonaFooter.ts
import { SocialLink } from '../layout/Footer'; // Ajusta la ruta

// Define los datos específicos para el footer de subjona
export const subjonaAuthorName = 'Subjona';
export const subjonaAuthorLink = '#inicio'; // O el enlace que uses
export const subjonaCopyrightText = `© ${new Date().getFullYear()} — Landing pages, beats y juegos 2D.`;

// src/core/components/data/beatFooter.ts
export const subjonaSocialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://instagram.com/beatmaker", icon: "instagram" },
  { name: "SoundCloud", url: "https://soundcloud.com/beatmaker", icon: "youtube" }, 
  { name: "YouTube", url: "https://youtube.com/beatmaker", icon: "youtube" },
];