// src/pages/SingerLanding.tsx
import { useState } from "react";
//import { YouTubeSection } from "../../hooks/YouTubeSection";

export default function SingerLanding() {
  const [eventType, setEventType] = useState("show");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-indigo-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-indigo-400">Subjona</span>
            </div>
            <a
              href={`https://wa.me/tunumero?text=Hola,%20me%20interesa%20contratar%20a%20Subjona%20para%20un%20evento%20de%20tipo%20${eventType}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              🎤 Contratar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-indigo-800 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Voz, metal y emociones en cada nota
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-indigo-100">
            Cantante con estilo único, fusionando metal, rock y melodía.
            Disponible para shows en vivo, festivales y colaboraciones.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#music"
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
            >
              🎶 Escuchar música
            </a>
            <a
              href="#shows"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-lg text-lg transition"
            >
              📅 Próximos shows
            </a>
          </div>
        </div>
      </section>

      {/* Música */}
      <section id="music" className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Mi música</h2>
            <p className="mt-4 text-gray-400">
              Escuchá mis últimos lanzamientos.
            </p>
          </div>

          {/* Reproductor placeholder */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="h-48 flex items-center justify-center text-gray-500">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zcx61btiw1k"
              ></iframe>
            </div>
            <p className="text-center mt-4 text-gray-300">
              EP: "Crimson Soul" – Ya disponible en todas las plataformas
            </p>
          </div>
        </div>
      </section>

    

      {/* Próximos shows */}
      <section id="shows" className="w-full py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Próximos shows</h2>
            <p className="mt-4 text-gray-400">No te pierdas en vivo</p>
          </div>
          <div className="space-y-6">
            {[
              {
                date: "15 Nov 2025",
                venue: "Teatro Flores",
                city: "Buenos Aires",
                status: "Tickets a la venta",
              },
              {
                date: "22 Nov 2025",
                venue: "Festival Metal Córdoba",
                city: "Córdoba",
                status: "Próximamente",
              },
            ].map((show, i) => (
              <div
                key={i}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center"
              >
                <div>
                  <div className="text-amber-400 font-bold">{show.date}</div>
                  <div className="text-white mt-1">{show.venue}</div>
                  <div className="text-gray-400">{show.city}</div>
                </div>
                <span className="mt-4 md:mt-0 text-gray-300">
                  {show.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contrataciones */}
      <section className="w-full py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            ¿Querés contratarme?
          </h2>
          <p className="mt-4 text-gray-400">
            Disponible para festivales, eventos privados y colaboraciones.
          </p>

          <form
            action="https://formspree.io/f/TU_FORM_ID"
            method="POST"
            className="mt-8 space-y-4 text-left"
          >
            <div>
              <label className="block mb-2 text-gray-300">
                Nombre del evento / Booker
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-300">Tipo de evento</label>
              <select
                name="type"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              >
                <option value="show">Show en vivo</option>
                <option value="festival">Festival</option>
                <option value="privado">Evento privado</option>
                <option value="colaboracion">Colaboración</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-gray-300">Mensaje</label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="Fecha, lugar, presupuesto estimado, etc."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-700 hover:bg-indigo-600 py-3 rounded font-bold transition"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      {/* Redes */}
      <section className="w-full py-12 bg-black/50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400 mb-4">Seguí mi viaje musical</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://instagram.com/subjona"
              className="text-gray-400 hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="https://tiktok.com/@subjona"
              className="text-gray-400 hover:text-white transition"
            >
              TikTok
            </a>
            <a
              href="https://youtube.com/@subjona"
              className="text-gray-400 hover:text-white transition"
            >
              YouTube
            </a>
            <a
              href="https://spotify.com/artist/..."
              className="text-gray-400 hover:text-white transition"
            >
              Spotify
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/tunumero?text=Hola,%20me%20interesa%20contratar%20a%20Subjona%20para%20un%20evento%20de%20tipo%20${eventType}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Contratar por WhatsApp"
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
          <p>© {new Date().getFullYear()} Subjona – Cantante y compositora</p>
        </div>
      </footer>
    </div>
  );
}
