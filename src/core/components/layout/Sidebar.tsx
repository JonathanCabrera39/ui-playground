// src/components/layout/Sidebar.tsx
import { useState, useEffect } from 'react';

interface SidebarProps {
  // ✅ Contenido del sidebar
  title?: string;
  links: { name: string; url: string; icon?: string }[];
  footerText?: string;

  // ✅ Estilos visuales
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  width?: string;

  // ✅ Comportamiento
  position?: 'left' | 'right';
  variant?: 'permanent' | 'temporary';
  openOnMobile?: boolean;
}

export default function Sidebar({
  title = 'Menú',
  links = [],
  footerText,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  borderColor = 'border-gray-200',
  width = 'w-64',
  position = 'left',
  variant = 'permanent',
  openOnMobile = false
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(variant === 'permanent');
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detectar si es móvil y ajustar estado
  useEffect(() => {
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 900;
      setIsMobile(mobile);

      // ✅ Si es desktop y es temporal, mantener abierto
      if (!mobile && variant === 'temporary') {
        setIsOpen(true);
      }
      // ✅ Si es móvil y openOnMobile es true, abrir
      if (mobile && openOnMobile) {
        setIsOpen(true);
      }
      // ✅ Si es móvil y es permanente, abrir por defecto
      if (mobile && variant === 'permanent') {
        setIsOpen(true);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [variant, openOnMobile]);

  // ✅ Determinar posición
  const positionClass = position === 'left' ? 'left-0' : 'right-0';

  // ✅ Función para abrir/cerrar
  const toggleSidebar = () => {
    if (variant === 'temporary') {
      setIsOpen(!isOpen);
    }
  };

  // ✅ Si es permanente en desktop, no se cierra
  const canToggle = variant === 'temporary' || isMobile;

  return (
    <>
      {/* ✅ Botón para abrir sidebar en móvil (si es temporal o móvil) */}
      {(canToggle) && (
        <button
          onClick={toggleSidebar}
          className="fixed top-16 z-40 p-2 bg-gray-800 text-white rounded-md shadow-lg md:hidden"
          style={{ [position === 'left' ? 'left' : 'right']: '1rem' }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      )}

      {/* ✅ Sidebar */}
      <aside
        className={`
          ${backgroundColor} 
          ${textColor} 
          ${borderColor} 
          ${width} 
          ${positionClass} 
          fixed top-16 h-[calc(100vh-4rem)] 
          z-30 
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : position === 'left' ? '-translate-x-full' : 'translate-x-full'}
          ${isMobile ? 'shadow-xl' : ''}
          ${variant === 'permanent' && !isMobile ? 'md:translate-x-0' : ''}
          border-r
          flex flex-col
        `}
      >
        {/* ✅ Título */}
        {title && (
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
          </div>
        )}

        {/* ✅ Enlaces */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className={`
                    flex items-center p-2 rounded-md hover:bg-opacity-10 hover:bg-gray-500 transition
                    ${textColor}
                  `}
                  onClick={() => {
                    if (isMobile && variant === 'temporary') {
                      setIsOpen(false); // Cerrar sidebar al hacer clic en móvil
                    }
                  }}
                >
                  {link.icon && (
                    <span className="mr-3">
                      <img src={link.icon} alt="" className="w-5 h-5" />
                    </span>
                  )}
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ✅ Pie de página */}
        {footerText && (
          <div className="p-4 border-t text-sm">
            <p>{footerText}</p>
          </div>
        )}
      </aside>

      {/* ✅ Overlay para móvil (si está abierto) */}
      {isOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}