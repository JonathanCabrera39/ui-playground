import { Component } from "react";

export class Testimonios extends Component {
  static propTypes = {};

  render() {
    return (
      <section className="w-full py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Resultados reales
            </h2>
            <p className="mt-4 text-gray-600">
              Historias de quienes transformaron su cuerpo y su vida.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                name: "Lucía M.",
                result: "Perdí 14 kg en 4 meses",
                text: "Nunca creí que podría, pero con el plan nutricional y el apoyo diario, lo logré.",
              },
              {
                name: "Martín R.",
                result: "Gané 8 kg de masa muscular",
                text: "El seguimiento personalizado hizo la diferencia. ¡Altamente recomendado!",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500"
              >
                <p className="text-gray-700 italic">"{t.text}"</p>
                <p className="mt-3 font-medium text-gray-800">
                  {t.name} • {t.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonios;
