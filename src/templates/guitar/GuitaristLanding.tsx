// src/pages/GuitaristLanding.tsx
import { useState } from 'react';

export default function GuitaristLanding() {
  const [serviceType, setServiceType] = useState("clases");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-black/50 backdrop-blur-sm sticky top-0 z-50 border-b border-cyan-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-cyan-400">Subjona Guitar</span>
            </div>
            <a
              href={`https://wa.me/tunumero?text=Hola,%20quiero%20más%20info%20sobre%20${serviceType}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              🎸 Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-cyan-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Guitarra técnica, soul y metal desde el alma
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-cyan-100">
            Clases personalizadas, sesiones remotas y demos originales.  
            Más de 10 años afinando detalles y emociones.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#demos"
              className="bg-amber-500 hover:bg-amber-400 text-gray-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
            >
              🎵 Escuchar demos
            </a>
            <a
              href="#clases"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-lg text-lg transition"
            >
              📚 Ver clases
            </a>
          </div>
        </div>
      </section>

      {/* Demos */}
      <section id="demos" className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Demos y covers</h2>
            <p className="mt-4 text-gray-400">Grabaciones en vivo y estudio.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="h-48 flex items-center justify-center text-gray-500">
               <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zcx61btiw1k"
            ></iframe>
            </div>
            <p className="text-center mt-4 text-gray-300">"Neon Solos" – Técnica, tapping y armonías modales</p>
          </div>
        </div>
      </section>

      {/* Clases */}
      <section id="clases" className="w-full py-20 bg-black/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Clases online</h2>
            <p className="mt-4 text-gray-400">Personalizadas según tu nivel y estilo (metal, blues, rock, jazz).</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Clase individual", 
                price: "$25", 
                desc: "60 min • Enfoque en técnica, improvisación o armonía" 
              },
              { 
                title: "Pack de 5", 
                price: "$110", 
                desc: "Ahorra $15 • Ideal para progresar rápido" 
              },
              { 
                title: "Clase grupal", 
                price: "$15", 
                desc: "Jams en vivo • Máx. 4 alumnos" 
              },
            ].map((plan, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl border border-cyan-900/30">
                <div className="text-cyan-400 font-bold text-xl mb-2">{plan.title}</div>
                <div className="text-2xl font-bold my-2">{plan.price}</div>
                <p className="text-gray-400 mt-3">{plan.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Servicios profesionales</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Sesión remota</h3>
              <p className="text-gray-400">
                Grabo guitarras para tus producciones.  
                Entrega en WAV, stems separados, ilimitadas revisiones.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-3">Shows en vivo</h3>
              <p className="text-gray-400">
                Disponible para bandas, dúos o solista en eventos privados y pubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">¿Listo para tocar?</h2>
          <p className="mt-4 text-gray-400">Contactame para clases, sesiones o shows.</p>

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
              <label className="block mb-2 text-gray-300">Me interesa</label>
              <select
                name="service"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              >
                <option value="clases">Clases online</option>
                <option value="sesion">Sesión remota</option>
                <option value="show">Show en vivo</option>
                <option value="colaboracion">Colaboración</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-gray-300">Mensaje</label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="Estilo, nivel, proyecto, etc."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-cyan-700 hover:bg-cyan-600 py-3 rounded font-bold transition"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </section>

      {/* Redes */}
      <section className="w-full py-12 bg-black/50 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-400 mb-4">Seguí mis lecciones y jams</p>
          <div className="flex justify-center space-x-6">
            <a href="https://youtube.com/@subjona" className="text-gray-400 hover:text-white transition">YouTube</a>
            <a href="https://instagram.com/subjona" className="text-gray-400 hover:text-white transition">Instagram</a>
            <a href="https://soundcloud.com/subjona" className="text-gray-400 hover:text-white transition">SoundCloud</a>
          </div>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/tunumero?text=Hola,%20quiero%20más%20info%20sobre%20${serviceType}.`}
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
          <p>© {new Date().getFullYear()} Subjona Guitar – Técnica, soul y metal</p>
        </div>
      </footer>
    </div>
  );
}