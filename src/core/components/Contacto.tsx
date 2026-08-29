import { useState } from "react";

export default function Contacto() {
  const [goal, setGoal] = useState("perder-peso");
  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">¿Listo para transformarte?</h2>
        <p className="mt-4 text-amber-200">Empezá hoy mismo.</p>

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
            <label className="block mb-2">Objetivo principal</label>
            <select
              name="goal"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
            >
              <option value="perder-peso">Perder peso</option>
              <option value="ganar-masa">Ganar masa muscular</option>
              <option value="tonificar">Tonificar</option>
              <option value="rendimiento">Rendimiento deportivo</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Mensaje</label>
            <textarea
              name="message"
              rows={3}
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white"
              placeholder="¿En qué puedo ayudarte a transformarte?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 py-3 rounded font-bold transition"
          >
            Enviar consulta
          </button>
        </form>
      </div>
    </section>
  );
}
