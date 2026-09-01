// src/pages/GymLanding.tsx
import { useState } from "react";
import LoadingScreenGym from "./LoadingScreenGym";
import AnimatedSection from "../..//core/components/sections/AnimatedSection";
import icon from "/image/icon-coach.png";
import Contacto from "../../core/components/Contacto";
import Testimonios from "../../core/components/Testimonios";
import Videos from "../../core/components/Videos";
import Planes from "../../core/components/Planes";
import Hero from "../../core/components/Hero";
//import Nav from "../../components/Nav";
import Footer from "../../core/components/Footer";

export default function GymLanding() {
  const [goal] = useState("perder-peso");
  // Estado
  const [pesoActual, setPesoActual] = useState(0);
  const [pesoMeta, setPesoMeta] = useState(0);
  const [frecuencia, setFrecuencia] = useState<"3" | "5">("3");

  // Cálculos mejorados
  const delta = pesoActual - pesoMeta;
  const weeks = Math.max(1, Math.ceil(delta / 0.75)); // mín 1 semana
  const weeksGanancia = Math.max(1, Math.ceil((pesoMeta - pesoActual) / 0.35)); // ganancia más lenta

  return (
    <>
      <LoadingScreenGym />

      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <AnimatedSection delay={2.5}>
          <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-amber-800">
                    <img className="w-20" src={icon} alt="coach" />
                  </span>
                </div>
                <a
                  href={`https://wa.me/tunumero?text=Hola,%20quiero%20empezar%20mi%20transformación.%20Mi%20objetivo%20es%20${goal}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                  📲 Empezar hoy
                </a>
              </div>
            </div>
          </nav>
        </AnimatedSection>

        {/* Hero */}
        <Hero />

        {/* Calculadora interactiva */}
        <section className="w-full py-16 bg-gradient-to-r from-amber-900/10 to-orange-900/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-orange-500">
                ¿En cuánto tiempo llegarás a tu meta?
              </h2>
              <p className="mt-2 text-gray-800">
                Calculá tu progreso realista (sin promesas vacías).
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-900/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Peso actual (kg)
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="200"
                    value={pesoActual || ""}
                    onChange={(e) => setPesoActual(Number(e.target.value) || 0)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="Ej: 90"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Peso meta (kg)
                  </label>
                  <input
                    type="number"
                    min="30"
                    max="200"
                    value={pesoMeta || ""}
                    onChange={(e) => setPesoMeta(Number(e.target.value) || 0)}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                    placeholder="Ej: 75"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Entrenamiento
                  </label>
                  <select
                    value={frecuencia}
                    onChange={(e) => setFrecuencia(e.target.value as "3" | "5")}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white"
                  >
                    <option value="3">3 días/semana</option>
                    <option value="5">5 días/semana</option>
                  </select>
                </div>
              </div>

              {/* Resultado + mensaje educativo */}
            </div>

            {/* Resultado + mensaje educativo */}
            {pesoActual > 0 && pesoMeta > 0 && pesoActual !== pesoMeta && (
              <div className="space-y-4">
                {/* Tarjeta de resultado */}
                <div
                  className={`text-center rounded-xl p-4 transition-colors ${
                    pesoActual > pesoMeta
                      ? "bg-emerald-500/10 border border-emerald-500/30"
                      : "bg-cyan-500/10 border border-cyan-500/30"
                  }`}
                >
                  <div className="text-2xl font-bold flex items-center justify-center gap-2">
                    {pesoActual > pesoMeta ? (
                      <>
                        🎯 Tu meta:{" "}
                        <span className="text-emerald-400">
                          {weeks} semanas
                        </span>
                      </>
                    ) : (
                      <>
                        💪 Progreso:{" "}
                        <span className="text-cyan-400">
                          {weeksGanancia} semanas
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Mensaje educativo PRINCIPAL (siempre visible) */}
                <div className="text-gray-200 text-sm bg-gray-900/30 p-3 rounded-lg">
                  ⚖️ <strong>No más días ≠ mejores resultados.</strong>
                  Con 3 días/semana bien estructurados, podés bajar a un ritmo
                  similar que con 5 y con menos riesgo de lesión. La constancia
                  la intensidad.
                </div>

                {/* ⚠️ Advertencia SOLO si seleccionó 5 días */}
                {frecuencia === "5" && (
                  <div className="text-amber-600 text-sm bg-amber-500/10 border border-amber-500/30 p-3 rounded-lg">
                    ⚠️{" "}
                    <strong>
                      5 días/semana aumenta el riesgo de sobreentrenamiento.
                    </strong>
                    Recomendamos empezar con 3 días y escalar gradualmente según
                    tu progreso.
                  </div>
                )}

                {/* CTA (solo si pérdida realista) */}
                {pesoActual > pesoMeta && (
                  <div className="text-center mt-4">
                    <a
                      href={`https://wa.me/tunumero?text=Hola,%20mi%20peso%20actual%20es%20${pesoActual}kg%20y%20meta%20${pesoMeta}kg.%20Quiero%20el%20plan%20Ignición.`}
                      className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-gray-900 font-bold py-3 px-6 rounded-lg transition"
                    >
                      🚀 Empezar mi plan de {weeks} semanas
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Planes */}
        <Planes />

        {/* Video */}
        <Videos />

        {/* Testimonios */}
        <Testimonios />

        {/* Contacto */}
        <Contacto />

        {/* WhatsApp flotante */}
        <a
          href={`https://wa.me/tunumero?text=Hola,%20quiero%20empezar%20mi%20transformación.%20Mi%20objetivo%20es%20${goal}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
          aria-label="Consultar por WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
