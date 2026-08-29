import { Component } from "react";
import AnimatedSection from "../components/sections/AnimatedSection";

export class Hero extends Component {
  static propTypes = {};

  render() {
    return (
      <AnimatedSection delay={2.5}>
        <section className="w-full bg-gradient-to-r from-amber-700 to-orange-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Tu cuerpo puede más de lo que crees
            </h1>
            <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-amber-100">
              Entrenamiento personalizado, planes nutricionales y acompañamiento
              24/7. ¡Transformá tu vida en 12 semanas!
            </p>
            <div className="mt-10">
              <a
                href="https://wa.me/tunumero?text=Hola,%20quiero%20empezar%20mi%20transformación."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-amber-900 font-bold py-3 px-8 rounded-lg text-lg shadow-lg transition transform hover:scale-105"
              >
                💪 Empezar mi transformación
              </a>
            </div>
          </div>
        </section>
      </AnimatedSection>
    );
  }
}

export default Hero;
