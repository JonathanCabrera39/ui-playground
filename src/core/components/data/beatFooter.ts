// src/data/subjonaFooter.ts
import { SocialLink } from '../layout/Footer'; // Ajusta la ruta

// Define los datos específicos para el footer de subjona
export const subjonaAuthorName = 'Subjona';
export const subjonaAuthorLink = '#inicio'; // O el enlace que uses
export const subjonaCopyrightText = `© ${new Date().getFullYear()} — Landing pages, beats y juegos 2D.`;

export const subjonaSocialLinks: SocialLink[] = [
   {
            name: "Instagram",
            url: "https://instagram.com/beatmaker",
            icon: "/icons/instagram.svg",
          },
          {
            name: "SoundCloud",
            url: "https://soundcloud.com/beatmaker",
            icon: "/icons/soundcloud.svg",
          },
          {
            name: "YouTube",
            url: "https://youtube.com/beatmaker",
            icon: "/icons/youtube.svg",
          },
        
];