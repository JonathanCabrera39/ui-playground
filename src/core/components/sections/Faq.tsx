// src/components/sections/FAQ.tsx
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  backgroundColor?: string;
  textColor?: string;
  itemBackgroundColor?: string;
  itemTextColor?: string;
}

export default function Faq({
  title = "Preguntas Frecuentes",
  subtitle = "Todo lo que necesitas saber",
  faqs = [],
  backgroundColor = "bg-black",
  textColor = "text-white",
  itemBackgroundColor = "bg-gray-800",
  itemTextColor = "text-white",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`${backgroundColor} ${textColor} py-16`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Título y subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-300">{subtitle}</p>
        </div>

        {/* ✅ Lista de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${itemBackgroundColor} rounded-lg overflow-hidden`}
            >
              <button
                className={`w-full flex justify-between items-center p-6 text-left ${itemTextColor} hover:bg-opacity-80 transition`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-700">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
