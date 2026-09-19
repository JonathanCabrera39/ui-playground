// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react'; // ✅ 1. Agregamos useEffect

interface NavbarProps {
  logo?: string;
  logoAlt?: string;
  logoWidth?: string;
  logoHeight?: string;
  position?:string;
  links: { name: string; url: string }[];
  ctaText?: string;
  ctaLink?: string;
  ctaVariant?: 'primary' | 'secondary';
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  shadow?: boolean;
  mobileMenuColor?: string;
}

export default function Navbar({
  logo = "/logo.png",
  logoAlt = "Logo",
  logoWidth = "w-10",
  logoHeight = "h-10",
  position = "items-center",
  links = [],
  ctaText,
  ctaLink,
  ctaVariant = 'primary',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  borderColor = 'border-gray-200',
  shadow = true,
  mobileMenuColor = 'text-gray-600'
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // ✅ 2. Estados para controlar la visibilidad y la posición del scroll
   const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50; // ✅ "Cierta cantidad de px" (ajusta este valor si quieres más/menos sensibilidad)
     // const scrollThresholdUp = 20; // ✅ "Cierta cantidad de px" (ajusta este valor si quieres más/menos sensibilidad)

      // 1. Si estamos en el tope de la página, siempre visible
      if (currentScrollY < 100) {
        setIsVisible(true);
      } 
      // 2. Si bajamos MÁS del umbral respecto a la última posición -> Ocultar
      else if (currentScrollY > lastScrollY ) {
        setIsVisible(false);
      } 
      // 3. Si subimos MÁS del umbral respecto a la última posición -> Mostrar
      else if (currentScrollY < lastScrollY - scrollThreshold) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const ctaStyles = ctaVariant === 'primary' 
    ? 'bg-blue-600 text-white hover:bg-blue-700' 
    : 'bg-gray-100 text-gray-900 hover:bg-gray-200';

  return (
    <nav 
      className={`
        /* ✅ 4. Posición fija y animación suave */
        fixed top-0 left-0 right-0 w-full z-50
        transition-transform duration-300 ease-in-out
        
        /* ✅ 5. Lógica de mostrar/ocultar */
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        
        /* Estilos base */
        ${backgroundColor} 
        ${textColor} 
        ${borderColor} 
        ${shadow ? 'shadow-md' : ''}
        
        /* ✅ Opcional pero recomendado: efecto vidrio al hacer scroll */
        backdrop-blur-sm bg-opacity-90
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between p-2 h-16">
          {/* ✅ Logo */}
          <div className="flex-shrink-0 flex rounded-tl-full rounded-br-full rounded-tr-none rounded-bl-none">
            <img 
              className={`${logoWidth} ${logoHeight} ${position}`} 
              src={logo} 
              alt={logoAlt} 
            />
          </div>

          {/* ✅ Links de escritorio */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-sm font-medium hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ✅ CTA en escritorio */}
          {ctaText && ctaLink && (
            <div className="hidden md:flex items-center">
              <a
                href={ctaLink}
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${ctaStyles}`}
              >
                {ctaText}
              </a>
            </div>
          )}

          {/* ✅ Botón de menú móvil */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${mobileMenuColor} hover:text-blue-400 focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="pt-4 pb-6 px-4 flex flex-wrap justify-center gap-x-2 gap-y-3">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-base font-medium text-gray-600 hover:text-blue-500 px-3 py-1.5 rounded-lg transition"
              >
                {link.name}
              </a>
            ))}
            {ctaText && ctaLink && (
              <a
                href={ctaLink}
                className={`mt-2 block w-full text-center px-4 py-2 rounded-md text-base font-medium transition ${ctaStyles}`}
              >
                {ctaText}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}