// src/components/FAQ.tsx
import { useRef, useState } from "react";
import { faqData } from "../components/data/faqData";

interface faqData {
  question: string;
  answer: string;
}

interface FAQProps {
  id:string
  items: faqData[];
  title?: string;
  description?: string;
  initialVisible?: number; // ✅ Nuevo: cuántas mostrar al inicio (default: 3)
}

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
