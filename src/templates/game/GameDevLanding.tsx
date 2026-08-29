// src/pages/GameDevLanding.tsx
import { useState } from 'react';
import { YouTubeSection } from '../../core/hooks/YouTubeSection';
import UrbanRitualDocument from './UrbanRitualDocument';

export default function GameDevLanding() {
  const [projectType, setProjectType] = useState("colaboracion");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-purple-400">Subjona Games</span>
            </div>
            <a
              href={`https://wa.me/tunumero?text=Hola,%20quería%20contactarte%20sobre%20una%20${projectType}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              📩 Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-purple-800 to-fuchsia-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Juegos 2D hechos con pasión y pixel art
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-purple-100">
            Desarrollo indie, cartas, peleas y juegos de tablero.  
            Cada proyecto es una nueva aventura.
          </p>
          <div className="mt-10">
            <a
              href="#juegos"
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
            >
              🎮 Ver juegos
            </a>
          </div>
        </div>
      </section>

      {/* Juegos */}
      <section id="juegos" className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Mis proyectos</h2>
            <p className="mt-4 text-gray-400">Juegos 2D hechos desde cero con amor por los detalles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Pixel Clash",
                genre: "Juego de pelea 2D",
                status: "Demo disponible",
                image: "bg-gradient-to-r from-amber-900 to-orange-800",
                link: "https://itch.io/demo1"
              },
              {
                title: "Card Realm",
                genre: "Juego de cartas coleccionables",
                status: "En desarrollo",
                image: "bg-gradient-to-r from-emerald-900 to-teal-800",
                link: "#"
              },
            ].map((game, i) => (
              <div key={i} className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
                <div className={`h-48 ${game.image} flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{game.title}</span>
                </div>
                <div className="p-6">
                  <span className="text-purple-400 text-sm">{game.genre}</span>
                  <p className="text-gray-300 mt-2">{game.status}</p>
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    {game.status.includes("Demo") ? "➡️ Jugar demo" : "🔜 Próximamente"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/*api*/}
      <YouTubeSection/>
      <UrbanRitualDocument/>
      {/* Sobre mí */}
      <section className="w-full py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Sobre mi enfoque</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Pixel Art", desc: "Gráficos hechos a mano, con amor por la estética retro." },
              { title: "Gameplay sólido", desc: "Mecánicas simples pero adictivas." },
              { title: "Code limpio", desc: "Desarrollado en Godot, Unity o puro JavaScript." },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className="text-cyan-400 font-bold mb-2">{item.title}</div>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">¿Querés colaborar o dar feedback?</h2>
          <p className="mt-4 text-gray-400">Estoy abierto a ideas, prensa, testers y más.</p>

          <form
            action="https://formspree.io/f/TU_FORM_ID"
            method="POST"
            className="mt-8 space-y-4 text-left"
          >
            <div>
              <label className="block mb-2 text-gray-300">Tu nombre</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-300">Tipo de contacto</label>
              <select
                name="type"
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              >
                <option value="colaboracion">Colaboración</option>
                <option value="feedback">Feedback de juego</option>
                <option value="prensa">Prensa / Medios</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-gray-300">Mensaje</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="Cuéntame tu idea o impresión"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-600 py-3 rounded font-bold transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Redes */}
      <section className="w-full py-12 bg-black/50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400 mb-4">Seguí mis avances</p>
          <div className="flex justify-center space-x-6">
            <a href="https://twitter.com/subjona" className="text-gray-400 hover:text-white transition">𝕏</a>
            <a href="https://itch.io/subjona" className="text-gray-400 hover:text-white transition">Itch.io</a>
            <a href="https://discord.gg/..." className="text-gray-400 hover:text-white transition">Discord</a>
          </div>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/tunumero?text=Hola,%20quería%20contactarte%20sobre%20una%20${projectType}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-500 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Subjona Games – Hecho con ❤️ y pixel art</p>
        </div>
      </footer>
    </div>
  );
}