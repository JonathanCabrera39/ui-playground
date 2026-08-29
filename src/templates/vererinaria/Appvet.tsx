// src/landing-vet/AppVet.tsx
import { useState } from 'react';

export default function AppVet() {
  const [petType, setPetType] = useState("perro");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-emerald-800">Clínica Patitas</span>
            </div>
            <a
              href="https://wa.me/tunumero?text=¡Hola!%20Quisiera%20agendar%20una%20consulta%20para%20mi%20{petType}."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              📲 Agendar consulta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-emerald-700 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Cuidamos a tu familia de cuatro patas
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-emerald-100">
            Atención veterinaria de calidad, con cariño y profesionalismo. Porque ellos también son familia.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/tunumero?text=¡Hola!%20Quisiera%20agendar%20una%20consulta%20para%20mi%20mascota."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 hover:bg-amber-500 text-emerald-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
            >
              🐾 Agendar ahora
            </a>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Nuestros servicios</h2>
            <p className="mt-4 text-gray-600">Cuidado integral para tu mascota en cada etapa de su vida.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Vacunación", desc: "Calendario completo para cachorros y adultos." },
              { title: "Cirugía", desc: "Esterilización, castración y procedimientos mayores." },
              { title: "Emergencias", desc: "Atención 24/7 para situaciones críticas." },
            ].map((service, i) => (
              <div key={i} className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                <div className="text-emerald-600 font-bold text-lg mb-2">{service.title}</div>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="w-full py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Horarios de atención</h2>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {[
              { day: "Lunes - Viernes", hours: "8:00 - 20:00" },
              { day: "Sábados", hours: "9:00 - 15:00" },
              { day: "Domingos", hours: "Emergencias" },
              { day: "Feriados", hours: "Emergencias" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-medium text-gray-800">{item.day}</div>
                <div className="text-emerald-600">{item.hours}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Dueños felices</h2>
            <p className="mt-4 text-gray-600">Lo que dicen quienes confiaron en nosotros.</p>
          </div>
          <div className="space-y-6">
            {[
              { name: "María G.", pet: "Luna (gata)", text: "¡Salvó a mi gata de una intoxicación! Atención rápida y muy humana." },
              { name: "Carlos R.", pet: "Bruno (perro)", text: "El mejor veterinario que tuvo Bruno. Siempre atento y profesional." },
            ].map((t, i) => (
              <div key={i} className="bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500">
                <p className="text-gray-700 italic">"{t.text}"</p>
                <p className="mt-3 font-medium text-gray-800">{t.name} • {t.pet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">¿Listo para cuidar a tu mascota?</h2>
          <p className="mt-4 text-emerald-200">Agendá una consulta hoy.</p>

          <form
            action="https://formspree.io/f/TU_FORM_ID"
            method="POST"
            className="mt-8 space-y-4 text-left"
          >
            <div>
              <label className="block mb-2">Tu nombre</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block mb-2">Tipo de mascota</label>
              <select
                name="pet"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              >
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="ave">Ave</option>
                <option value="roedor">Roedor</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Mensaje</label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded font-bold transition"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/tunumero?text=¡Hola!%20Quisiera%20agendar%20una%20consulta%20para%20mi%20${petType}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Agendar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Clínica Patitas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}