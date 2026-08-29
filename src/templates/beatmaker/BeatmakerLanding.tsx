// src/pages/BeatmakerLanding.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../../core/components/sections/AnimatedSection";
import ScrollSection from "../../core/components/sections/ScrollSection";
import LoadingScreen from "../../core/components/ui/LoadingScreen";
import FAQ from "../../core/components/FAQ";
import ScrollToTop from "../../core/components/ui/ScrollToTop";

export default function BeatmakerLanding() {
  const [selectedBeat, setSelectedBeat] = useState("dark-fire");
  const [playingBeat, setPlayingBeat] = useState<string | null>(null);
  const [intensity, setIntensity] = useState(180); // 100 = valor por defecto (tu /100)
  const [showControls, setShowControls] = useState(false);
  const [bpm, setBpm] = useState(140);
  const [beatBPMs, setBeatBPMs] = useState<Record<string, number>>({
    "dark-fire": 140,
    "shadow-war": 132,
  });

  const BPMSelector = ({
    value,
    onChange,
  }: {
    value: number;
    onChange: (v: number) => void;
  }) => {
    return (
      <div className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-gray-300 font-medium">BPM</label>
          <span className="text-amber-400 font-bold text-lg">{value}</span>
        </div>

        <div className="relative">
          <input
            type="range"
            min="60"
            max="220"
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            style={{
              background: `linear-gradient(to right, #e11d48 0%, #e11d48 ${
                (value - 60) / 1.6
              }%, #374151 ${(value - 60) / 1.6}%, #374151 100%)`,
            }}
          />

          {/* Marcas de referencia */}
          <div className="flex justify-between text-xs text-gray-500 mt-1 px-1">
            <span>60 (Lento)</span>
            <span>100 (Trip-hop)</span>
            <span>140 (Trap)</span>
            <span>180 (Drum & Bass)</span>
            <span>220 (Speedcore)</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <AnimatedSection delay={4.8}>
        <ScrollToTop />
      </AnimatedSection>

      <LoadingScreen />
      <div className="min-h-screen bg-gray-900 text-gray-100">
        {/* Navbar */}

        <AnimatedSection delay={1.8}>
          <nav className="w-full bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-rose-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                  <span className="text-xl font-bold text-rose-400">
                    Subjona Beats
                  </span>
                </div>
                <a
                  href={`https://buy.stripe.com/test_8x29AV6VO7Qg0wxf557Re00`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-700 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                  🎧 Comprar beat
                </a>
              </div>
            </div>
          </nav>
        </AnimatedSection>

        {/* Hero */}
        <AnimatedSection delay={2.5}>
          <section className="w-full bg-gradient-to-r from-rose-800 to-red-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                Beats de metal y trap con alma oscura
              </h1>
              <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-rose-100">
                Producción 100% original, stems incluidos, licencias claras.
                Perfectos para rapear, lanzamientos o contenido en redes.
              </p>
              <div className="mt-10">
                <a
                  href="#beats"
                  className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
                >
                  🔊 Escuchar beats
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Beats */}

        <ScrollSection delay={0.2}>
          <section id="beats" className="w-full py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-white">
                  Catálogo de beats
                </h2>
                <p className="mt-4 text-gray-400">
                  Todos los beats incluyen WAV, MP3 y stems (bajos, cuerdas,
                  percusión).
                </p>
              </div>
              <div className="text-center mb-6">
                <button
                  onClick={() => setShowControls(!showControls)}
                  className="text-gray-500 hover:text-rose-400 text-sm flex items-center gap-1 mx-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Ajustar intensidad 3D
                </button>

                {showControls && (
                  <div className="mt-4 max-w-md mx-auto bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 text-sm">Suave</span>
                      <span className="text-gray-300 text-sm">Intenso</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="200"
                      value={intensity}
                      onChange={(e) => setIntensity(Number(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                    />
                    <div className="text-center mt-2">
                      <span className="text-amber-400 font-mono">
                        {intensity}
                      </span>
                      <span className="text-gray-500 text-xs ml-1">/200</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
                {[
                  {
                    id: "dark-fire",
                    title: "Dark Fire",
                    bpm: "140 BPM",
                    key: "C Minor",
                    preview: "https://soundcloud.com/...",
                    leaseBasic: "$20",
                    leasePremium: "$50",
                    exclusive: "$200",
                    linkBasic:
                      "https://buy.stripe.com/test_8x29AV6VO7Qg0wxf557Re00",
                    linkPremium: "https://buy.stripe.com/def456", // ← reemplazá con tu link real
                    linkExclusive: "https://buy.stripe.com/ghi789",
                  },
                  {
                    id: "shadow-war",
                    title: "Shadow War",
                    bpm: "132 BPM",
                    key: "F# Minor",
                    preview: "https://soundcloud.com/...",
                    leaseBasic: "$20",
                    leasePremium: "$50",
                    exclusive: "$200",
                  },
                ].map((beat) => (
                  <div
                    key={beat.id}
                    className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 transition-all duration-300"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;
                      const rotateY = ((x - centerX) * 2) / intensity; // *2 para mantener rango natural
                      const rotateX = ((centerY - y) * 2) / intensity;
                      e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                      e.currentTarget.style.boxShadow = `0 15px 35px rgba(239, 68, 68, ${
                        Math.abs(rotateY) / 50 + 0.1
                      })`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 25px rgba(0, 0, 0, 0.3)";
                    }}
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {beat.title}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {beat.bpm} • {beat.key}
                          </p>
                        </div>
                        <button
                          onClick={() => setSelectedBeat(beat.id)}
                          className="text-rose-500 hover:text-rose-400"
                        >
                          ❤️
                        </button>
                      </div>

                      {/* Reproductor placeholder */}
                      {/* En lugar del placeholder */}
                      <div className="mt-4 flex-2 justify-around ">
                        <button
                          onClick={() =>
                            setPlayingBeat(
                              playingBeat === beat.id ? null : beat.id,
                            )
                          }
                          className="mt-4 bg-rose-700 hover:bg-rose-600 text-white sm:px-4 py-2 rounded-full"
                        >
                          {playingBeat === beat.id
                            ? "⏸️ Pausar"
                            : "▶️ Escuchar"}
                        </button>
                        <div className="flex justify-center space-x-1  mt-0 h-0 items-end">
                          {[...Array(20)].map((_, i) => (
                            <motion.div
                              key={beat.id}
                              className="w-1 sm:w-1.5 bg-rose-500 rounded-full"
                              animate={
                                playingBeat === beat.id
                                  ? { height: [3, Math.random() * 25 + 38, 27] }
                                  : { height: 4 }
                              }
                              transition={{
                                repeat: playingBeat === beat.id ? Infinity : 0,
                                duration: 60 / (beatBPMs[beat.id] || 140), // ← ¡la onda late al ritmo del BPM!
                                repeatDelay: 0.05,
                                delay: i * ((0.02 / beatBPMs[beat.id]) * 140),
                              }}
                            />
                          ))}
                        </div>
                        <BPMSelector
                          value={beatBPMs[beat.id] || 140}
                          onChange={(newBpm) =>
                            setBeatBPMs((prev) => ({
                              ...prev,
                              [beat.id]: newBpm,
                            }))
                          }
                        />
                        <p className="text-center mt-2 text-gray-400">
                          Dark Fire – 1:24
                        </p>
                      </div>

                      {/* Licencias */}
                      <div className="mt-6 space-y-3">
                        <div className="flex justify-between text-sm">
                          <span>Lease Básica</span>
                          <span className="text-amber-400">
                            {beat.leaseBasic}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Lease Premium</span>
                          <span className="text-cyan-400">
                            {beat.leasePremium}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Exclusiva</span>
                          <span className="text-purple-400">
                            {beat.exclusive}
                          </span>
                        </div>
                      </div>

                      <a
                        href={beat.linkBasic}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-amber-600 hover:bg-amber-500 py-2 rounded font-medium"
                      >
                        🎧 Lease Básica – {beat.leaseBasic}
                      </a>
                      <a
                        href={beat.linkPremium}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-cyan-600 hover:bg-cyan-500 py-2 rounded font-medium"
                      >
                        🎧 Lease Premium – {beat.leasePremium}
                      </a>
                      <a
                        href={beat.linkExclusive}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-purple-600 hover:bg-purple-500 py-2 rounded font-medium"
                      >
                        🎧 Exclusiva – {beat.exclusive}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollSection>

        {/* Por qué mis beats */}
        <ScrollSection delay={0.2}>
          <section className="w-full py-20 bg-black/30">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                ¿Por qué elegir mis beats?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Stems incluidos",
                    desc: "Recibís todas las pistas separadas para editar.",
                  },
                  {
                    title: "Derechos claros",
                    desc: "Licencia en PDF con términos legales simples.",
                  },
                  {
                    title: "Calidad 24-bit",
                    desc: "Mezcla y masterización profesional.",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-6">
                    <div className="text-amber-400 font-bold mb-2">
                      {item.title}
                    </div>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollSection>

        {/* FAQ */}
        <ScrollSection delay={0.2}>
          <FAQ
            id="faq"
            title="¿Tienes dudas sobre los beats?"
            description="Respuestas claras, sin tecnicismos."
            items={[
              {
                question: "¿Qué incluye la Lease Básica?",
                answer:
                  "WAV 24-bit + MP3 320kbps. Ideal para redes y demos. No incluye stems.",
              },
              {
                question: "¿Puedo usar el beat en YouTube o Spotify?",
                answer:
                  "Sí, con Lease Premium o Exclusiva. La Básica solo permite uso no monetizado.",
              },
              {
                question: "¿Los beats son 100% originales?",
                answer:
                  "Sí. Producción propia, sin samples protegidos. Licencia clara en PDF.",
              },
              {
                question: "¿Qué pasa si quiero stems después?",
                answer:
                  "Podés actualizar a Lease Premium pagando la diferencia. Escríbeme por WhatsApp.",
              },
            ]}
          />
        </ScrollSection>

        {/* Contacto */}
        <ScrollSection delay={0.2}>
          <section className="w-full py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white">
                ¿Querés un beat personalizado?
              </h2>
              <p className="mt-4 text-gray-400">
                Hago producciones a medida según tu estilo y flow.
              </p>

              <form
                action="https://formspree.io/f/TU_FORM_ID"
                method="POST"
                className="mt-8 space-y-4 text-left"
              >
                <div>
                  <label className="block mb-2 text-gray-300">
                    Tu nombre / Artista
                  </label>
                  <input
                    type="text"
                    name="artist"
                    required
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-300">
                    Estilo deseado
                  </label>
                  <input
                    type="text"
                    name="style"
                    placeholder="Ej: Metal trap, oscuro, épico"
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                  />
                  <div>
                    <BPMSelector value={bpm} onChange={setBpm} />
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-gray-300">Mensaje</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                    placeholder="Referencias, BPM, mood, etc."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-rose-700 hover:bg-rose-600 py-3 rounded font-bold transition"
                >
                  Solicitar producción
                </button>
              </form>
            </div>
          </section>
        </ScrollSection>

        {/* WhatsApp flotante */}
        <a
          href={`https://wa.me/tunumero?text=Hola,%20quiero%20comprar%20la%20licencia%20de%20${selectedBeat}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition"
          aria-label="Comprar beat por WhatsApp"
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
        <footer className="w-full bg-black text-gray-500 py-8">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>
              © {new Date().getFullYear()} Subjona Beats – Producción 100%
              original
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
