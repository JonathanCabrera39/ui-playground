// src/data/subjonaFooter.ts
import { SocialLink } from '../layout/Footer'; // Ajusta la ruta

// Define los datos específicos para el footer de subjona
export const subjonaAuthorName = 'Subjona';
export const subjonaAuthorLink = '#inicio'; // O el enlace que uses
export const subjonaCopyrightText = `© ${new Date().getFullYear()} — Landing pages, beats y juegos 2D.`;

export const subjonaSocialLinks: SocialLink[] = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/593999999999?text=¡Hola!%20Estoy%20interesado%20en%20tus%20servicios.',
  },
  // {
  //   name: 'Instagram',
  //   url: 'https://instagram.com/subjona',
  // },
  // {
  //   name: 'Twitter', // Asegúrate de que el link sea correcto si lo usas
  //   url: 'https://twitter.com/subjona',
  // }
];