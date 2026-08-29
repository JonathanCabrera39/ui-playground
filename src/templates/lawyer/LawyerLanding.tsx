// src/pages/LawyerLanding.tsx
import { useState } from 'react';

export default function LawyerLanding() {
  const [consultationType, setConsultationType] = useState("asesoria");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Dra. Sofía Ramírez</span>
            </div>
            <a
              href={`https://wa.me/tunumero?text=Estimado,%20requiero%20una%20consulta%20de%20tipo%20${consultationType}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-black text-white px-4 py-2 rounded-lg font-medium transition"
            >
              📞 Consultar
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-gray-800 to-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Defensa legal con ética y experiencia
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300">
            Asesoramiento jurídico personalizado en derecho laboral, civil y familiar.  
            Confidencialidad, transparencia y compromiso con tus derechos.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/tunumero?text=Estimado,%20requiero%20una%20consulta%20jur%C3%ADdica."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition"
            >
              📝 Solicitar consulta
            </a>
          </div>
        </div>
      </section>

      {/* Áreas de práctica */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Áreas de práctica</h2>
            <p className="mt-4 text-gray-600">Especialización en las siguientes ramas del derecho.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Derecho Laboral", desc: "Despidos, indemnizaciones, acoso laboral, contratos." },
              { title: "Derecho Civil", desc: "Contratos, daños, propiedad, responsabilidad civil." },
              { title: "Derecho de Familia", desc: "Divorcios, custodia, alimentos, mediación." },
              { title: "Asesoría Empresarial", desc: "Constitución de sociedades, contratos comerciales." },
            ].map((area, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <div className="text-gray-900 font-bold text-lg mb-2">{area.title}</div>
                <p className="text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiencia y credenciales */}
      <section className="w-full py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Experiencia y credenciales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Experiencia</h3>
              <p>+8 años litigando en tribunales nacionales</p>
              <p>+120 casos resueltos con éxito</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Formación</h3>
              <p>Abogada – Universidad de Buenos Aires (UBA)</p>
              <p>Matrícula Nº 87654</p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">¿Por qué elegirme?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Confidencialidad", desc: "Toda consulta es estrictamente confidencial." },
              { title: "Ética profesional", desc: "Actuamos con integridad y transparencia absoluta." },
              { title: "Resultados", desc: "Comprometidos con la mejor defensa de tus intereses." },
            ].map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-gray-900 font-bold mb-2">{value.title}</div>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">¿Necesita asesoramiento legal?</h2>
          <p className="mt-4 text-gray-300">Escriba para una consulta inicial sin compromiso.</p>

          <form
            action="https://formspree.io/f/TU_FORM_ID"
            method="POST"
            className="mt-8 space-y-4 text-left"
          >
            <div>
              <label className="block mb-2">Nombre completo</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block mb-2">Tipo de consulta</label>
              <select
                name="type"
                value={consultationType}
                onChange={(e) => setConsultationType(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              >
                <option value="asesoria">Asesoría general</option>
                <option value="defensa">Necesito defensa</option>
                <option value="contrato">Revisión de contrato</option>
                <option value="otro">Otro asunto</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Mensaje</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="Describa brevemente su situación legal"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-black py-3 rounded font-bold transition"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/tunumero?text=Estimado,%20requiero%20una%20consulta%20de%20tipo%20${consultationType}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Consultar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="w-full bg-black text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Dra. Sofía Ramírez – Abogada Matrícula Nº 87654</p>
        </div>
      </footer>
    </div>
  );
}