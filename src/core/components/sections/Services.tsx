// src/components/sections/Services.tsx
export interface Service {
  title: string;
  description: string;
  icon?: string; // URL del icono opcional
}

interface ServicesProps {
  id?: string;
  title?: string;
  subtitle?: string;
  services: Service[]; // Ahora es obligatorio pasar los servicios
  backgroundColor?: string;
  textColor?: string;
  titleBackgroundColor?: string; // Nueva prop para el fondo del título
  cardBackgroundColor?: string;
  cardTextColor?: string;
  cardClass?: string; // Nueva prop para clases personalizadas de las tarjetas
  titleClass?: string; // Nueva prop para clases personalizadas del título/subtítulo
  containerClass?: string; // Nueva prop para clases personalizadas del contenedor principal
  gridClass?: string;    // Nueva prop para clases personalizadas de la grilla
}

// No hay presets definidos aquí, el componente es genérico
// Los presets se pueden manejar en los componentes específicos si se desea

export default function Services({
  id,
  title = "Nuestros Servicios", // Valor por defecto genérico
  subtitle = "Servicios profesionales al más alto nivel", // Valor por defecto genérico
  services = [], // Ahora es obligatorio
  backgroundColor = "bg-gray-900", // Valor por defecto genérico
  textColor = "text-white", // Valor por defecto genérico
  titleBackgroundColor = "bg-gray-800", // Valor por defecto genérico
  cardBackgroundColor = "bg-gray-800", // Valor por defecto genérico
  cardTextColor = "text-white", // Valor por defecto genérico
  cardClass = "rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow", // Valor por defecto genérico
  titleClass = "text-center mb-12", // Valor por defecto genérico
  containerClass = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", // Valor por defecto genérico
  gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", // Valor por defecto genérico
}: ServicesProps) {

  // No hay lógica de preset aquí, solo se usan las props pasadas
  // o los valores por defecto

  return (
    <section id={id} className={`${backgroundColor} ${textColor} py-16`}>
      <div className={containerClass}>
        {/* Título y subtítulo */}
        <div className={`${titleBackgroundColor} ${textColor} ${titleClass}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl">{subtitle}</p>
        </div>

        {/* Tarjetas de servicios */}
        <div className={gridClass}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                ${cardClass}
                ${cardBackgroundColor ? cardBackgroundColor : ""}
                ${cardTextColor ? cardTextColor : ""}
              `}
            >
              {service.icon && (
                <div className="text-4xl mb-4">
                  {/* Mostrar icono como imagen si es una URL, como texto si no */}
                  {service.icon.startsWith('http') || service.icon.startsWith('/') ? (
                    <img src={service.icon} alt={service.title} className="w-12 h-12 inline-block" />
                  ) : (
                    service.icon
                  )}
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}