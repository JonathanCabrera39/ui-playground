// src/components/FAQ.tsx
import { useRef, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  id:string
  items: FAQItem[];
  title?: string;
  description?: string;
  initialVisible?: number; // ✅ Nuevo: cuántas mostrar al inicio (default: 3)
}
export const faqData = [
  {
    question: "¿Cuánto tiempo tarda el desarrollo?",
    answer:
      "Depende de la complejidad, pero una landing page suele estar lista en 1-2 semanas.",
  },
  {
    question: "¿Incluye diseño responsive?",
    answer:
      "Sí, todos los diseños se adaptan perfectamente a móviles, tablets y escritorio.",
  },
  {
    question:
      "¿Cómo veo los mensajes que me envían desde el formulario de contacto?",
    answer:
      "Utilizamos Formspree, un sistema seguro que recibe los mensajes y te los reenvía. 💡 Instrucción: 1) Ingresa a formsspre.io con tu cuenta. 2) Selecciona el proyecto 'PetCare'. 3) Ve a la pestaña 'Submissions' para ver todos los mensajes. Te recomendamos activar las notificaciones por email en la configuración del formulario para no perder ninguna cita.",
  },
  {
    question:
      "¿Cómo funciona el botón flotante de WhatsApp y puedo cambiar el número?",
    answer:
      "El botón abre un chat directo con la clínica sin que el cliente tenga que guardar el número. 💡 Instrucción: El número está configurado en el código de la web. Si en el futuro cambias el número de la clínica, solo debes avisarnos y lo actualizaremos en el componente en menos de 24 horas, o podemos enseñarte a hacerlo si adquieres el Plan Estándar con panel de administración.",
  },
  {
    question: "¿El formulario de contacto recibe spam o mensajes basura?",
    answer:
      "No. Formspree incluye protección anti-spam (reCAPTCHA invisible) de forma nativa. 💡 Instrucción: No necesitas configurar nada extra. El sistema filtra automáticamente los bots, por lo que solo recibirás mensajes reales de dueños de mascotas en tu bandeja de entrada o en el dashboard de Formspree.",
  },
  {
    question:
      "¿Puedo modificar los textos, precios o preguntas frecuentes yo mismo?",
    answer:
      "En este Plan Básico, la web es estática y de alto rendimiento. 💡 Instrucción: Para cambios de texto, envíanos un mensaje con el nuevo texto y lo publicamos el mismo día. Si deseas tener un panel de control para editar todo tú mismo sin depender de nosotros, te recomendamos actualizar al Plan Estándar o Premium.",
  },
  {
    question: "¿Qué pasa si necesito cambiar el dominio o hacer mantenimiento?",
    answer:
      "La web está alojada en Vercel, lo que garantiza un 99.9% de tiempo en línea y actualizaciones instantáneas. 💡 Instrucción: Toda la gestión de dominio y certificados de seguridad (HTTPS) ya está incluida. Si necesitas pausar la web por mantenimiento, nos avisas y lo gestionamos desde el panel de Vercel sin costo adicional.",
  },
];
export default function FAQ({
  id,
  items = [],
  title = "Preguntas frecuentes",
  description,
  initialVisible = 2, // ✅ Por defecto muestra 3 preguntas
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false); // ✅ Controla si mostrar todas
  const questionsContainerRef = useRef<HTMLDivElement>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowAll = () => {
        if (showAll) {
      // ✅ Si vamos a "Ver menos", esperamos un tick y scrolleamos al contenedor
      setTimeout(() => {
        questionsContainerRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 50);
    }
    setShowAll(!showAll);
  };

  // ✅ Determina qué preguntas mostrar
  const visibleItems = showAll ? items : items.slice(0, initialVisible);
  const hasMore = items.length > initialVisible;
  return (
    <section id={id} className="w-full py-20 bg-black/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          {description && (
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-4 scroll-mt-24" ref={questionsContainerRef}>
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-750 transition-colors"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-white font-medium">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-300 border-t border-gray-700 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ BOTÓN VER MÁS / VER MENOS */}
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={toggleShowAll}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg border border-gray-700 transition-colors"
            >
              {showAll
                ? `Ver menos preguntas`
                : `Ver más preguntas (${items.length - initialVisible} más)`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
