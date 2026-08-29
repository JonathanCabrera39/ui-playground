// src/pages/DoctorLanding.tsx
import { useState } from 'react';

export default function DoctorLanding() {
  const [reason, setReason] = useState("chequeo");
  // En DoctorLanding.tsx
const [selectedTime, setSelectedTime] = useState<string | null>(null);
const [isBooked, setIsBooked] = useState(false);

// Horarios predefinidos (podés hardcodearlos)
const timeSlots = [
  { time: "09:00", available: true },
  { time: "09:30", available: false },
  { time: "10:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: false },
  { time: "11:30", available: true },
];

const handleSelectTime = (time: string) => {
  if (!isBooked) {
    setSelectedTime(time);
  }
};

const handleConfirmBooking = () => {
  if (selectedTime) {
    setIsBooked(true);
    // Abre WhatsApp con el turno seleccionado
    window.open(
      `https://wa.me/tunumero?text=Hola,%20quisiera%20reservar%20el%20turno%20del%20${selectedTime}.`,
      '_blank'
    );
  }
};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-900">Dr. Alejandro Méndez</span>
            </div>
            <a
              href={`https://wa.me/tunumero?text=Hola,%20quisiera%20solicitar%20un%20turno%20para%20${reason}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              📲 Solicitar turno
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full bg-gradient-to-r from-blue-800 to-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Atención médica de calidad y confianza
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-blue-100">
            Consultorio especializado en cardiología y medicina general.  
            Turnos disponibles con enfoque en prevención y bienestar integral.
          </p>
          <div className="mt-10">
            <a
              href="https://wa.me/2665276622?text=Hola,%20quisiera%20solicitar%20un%20turno."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
            >
              🩺 Solicitar turno
            </a>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">Especialidades</h2>
            <p className="mt-4 text-gray-600">Atención personalizada en las siguientes áreas.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Cardiología", desc: "Evaluación, prevención y tratamiento de enfermedades cardiovasculares." },
              { title: "Medicina General", desc: "Chequeos, diagnóstico y seguimiento integral de la salud." },
              { title: "Prevención", desc: "Programas de prevención de riesgos y promoción de la salud." },
            ].map((spec, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <div className="text-blue-700 font-bold text-lg mb-2">{spec.title}</div>
                <p className="text-gray-600">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Información profesional */}
      <section className="w-full py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Información profesional</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Matrícula</h3>
              <p className="text-gray-600">MP 123456</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-gray-800 mb-2">Obras sociales</h3>
              <p className="text-gray-600">OSDE, Galeno, Swiss Medical, IOMA, PAMI</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
              <h3 className="font-bold text-gray-800 mb-2">Consultorio</h3>
              <p className="text-gray-600">Av. Córdoba 1234, CABA</p>
              <div className="mt-4 h-48 bg-gray-200 rounded overflow-hidden">
                {/* Placeholder para Google Maps */}
                <div className="h-full flex items-center justify-center text-gray-500">
                  Mapa de ubicación (Google Maps embed)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sistema de turnos */}
<section className="w-full py-16 bg-blue-50">
  <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Reservar turno</h2>
    
    {isBooked ? (
      <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
        ✅ ¡Turno reservado! Te contactaremos para confirmar.
      </div>
    ) : (
      <>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {timeSlots.map((slot) => (
            <button
              key={slot.time}
              onClick={() => handleSelectTime(slot.time)}
              disabled={!slot.available || isBooked}
              className={`py-3 rounded-lg font-medium transition ${
                slot.available
                  ? selectedTime === slot.time
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-50"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              {slot.time}
            </button>
          ))}
        </div>

        {selectedTime && (
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              ¿Confirmar turno a las <span className="font-bold">{selectedTime}</span>?
            </p>
            <button
              onClick={handleConfirmBooking}
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded-lg transition"
            >
              Confirmar turno
            </button>
          </div>
        )}
      </>
    )}
  </div>
</section>

      {/* Preguntas frecuentes */}
      <section className="w-full py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Preguntas frecuentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "¿Necesito derivación?", a: "No, podés solicitar turno directamente." },
              { q: "¿Aceptan prepaga?", a: "Sí, trabajamos con las principales obras sociales y prepagas." },
              { q: "¿Hay estacionamiento?", a: "Sí, hay estacionamiento en la cuadra." },
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-gray-800">{faq.q}</h3>
                <p className="text-gray-600 mt-1">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="w-full py-20 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">¿Listo para cuidar tu salud?</h2>
          <p className="mt-4 text-blue-200">Solicitá tu turno hoy.</p>

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
              <label className="block mb-2">Motivo de consulta</label>
              <select
                name="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              >
                <option value="chequeo">Chequeo de rutina</option>
                <option value="sintomas">Tengo síntomas</option>
                <option value="segunda-opinion">Segunda opinión</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Mensaje</label>
              <textarea
                name="message"
                rows={3}
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
                placeholder="Detallá tu consulta o síntomas"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 py-3 rounded font-bold transition"
            >
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      {/* WhatsApp flotante */}
      <a
        href={`https://wa.me/tunumero?text=Hola,%20quisiera%20solicitar%20un%20turno%20para%20${reason}.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Solicitar turno por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Dr. Alejandro Méndez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}