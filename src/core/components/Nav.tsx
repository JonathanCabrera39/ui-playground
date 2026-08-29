import AnimatedSection from "../components/sections/AnimatedSection";
import icon from "../../image/icon-coach.png";

export default function Nav() {
  const goal = "perder-peso";

  return (
    <AnimatedSection delay={2.5}>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-xl font-bold text-amber-800">
                <img className="w-20" src={icon} alt="coach" />
              </span>
            </div>
            <a
              href={`https://wa.me/tunumero?text=Hola,%20quiero%20empezar%20mi%20transformación.%20Mi%20objetivo%20es%20${goal}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              📲 Empezar hoy
            </a>
          </div>
        </div>
      </nav>
    </AnimatedSection>
  );
}
