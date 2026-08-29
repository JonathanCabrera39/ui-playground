import { Component } from "react";

export class Planes extends Component {
  static propTypes = {};

  render() {
    return (
      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800">
              Planes de entrenamiento
            </h2>
            <p className="mt-4 text-gray-600">
              Elegí el que mejor se adapte a tus metas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Básico",
                price: "$49/mes",
                features: [
                  "3 sesiones semanales",
                  "Plan nutricional básico",
                  "Soporte por WhatsApp",
                ],
              },
              {
                title: "Premium",
                price: "$79/mes",
                features: [
                  "5 sesiones semanales",
                  "Plan nutricional personalizado",
                  "Check-in semanal",
                  "Acceso a comunidad",
                ],
              },
              {
                title: "Personalizado",
                price: "Consultar",
                features: [
                  "Sesiones ilimitadas",
                  "Nutrición 1:1",
                  "Análisis corporal",
                  "Acompañamiento 24/7",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                className="bg-amber-50 p-6 rounded-xl border border-amber-100"
              >
                <div className="font-bold text-xl text-amber-800">
                  {plan.title}
                </div>
                <div className="text-2xl font-bold my-2">{plan.price}</div>
                <ul className="space-y-2 mt-4">
                  {plan.features.map((f, j) => (
                    <li key={j} className="text-gray-600">
                      ✓ {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Planes;
