import { Component } from "react";
import AnimatedSection from "../components/sections/AnimatedSection";


export class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <AnimatedSection delay={2.5}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Transforma tu cuerpo. Todos los
            derechos reservados.
          </p>
        </div>
      </AnimatedSection>
    );
  }
}

export default Footer;
