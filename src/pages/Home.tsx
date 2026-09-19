import Footer from "../core/components/layout/Footer";
import Navbar from "../core/components/layout/Navbar";
import WhatsAppButton from "../core/components/ui/WhatsAppButton";
import logo from "/image/subjona.png";
export default function Home() {
  const templates = [
    {
      slug: "vet",
      title: "Veterinaria PetCare",
      description:
        "Landing informativa con formulario de contacto y mapa integrado",
      tags: ["React", "Formspree", "Google Maps"],
      gradient: "from-emerald-900 to-teal-800",
      icon: "🐾",
    },
    {
      slug: "gym",
      title: "Gimnasio Pro",
      description:
        "UI energética con calculadora de membresías y animaciones dinámicas",
      tags: ["React", "Tailwind", "Calculadora"],
      gradient: "from-orange-900 to-amber-800",
      image: "/image/icon-coach.png",
    },
    {
      slug: "doctor",
      title: "Clínica Médica",
      description:
        "Diseño sobrio con sistema de turnos y formulario de reserva",
      tags: ["React", "Formularios", "UX"],
      gradient: "from-blue-900 to-blue-800",
      icon: "🩺",
    },
    {
      slug: "lawyer",
      title: "Estudio Jurídico",
      description:
        "Tipografía serif, máxima profesionalidad y diseño minimalista",
      tags: ["React", "Minimalista", "Serif"],
      gradient: "from-gray-900 to-zinc-800",
      icon: "💼",
    },
    {
      slug: "gamedev",
      title: "Game Developer",
      description: "Portfolio inmersivo para desarrolladores de videojuegos",
      tags: ["React", "Gaming", "Portfolio"],
      gradient: "from-purple-900 to-fuchsia-800",
      icon: "🎮",
    },
    {
      slug: "baet",
      title: "Beatmaker Studio",
      description:
        "Landing para productores musicales con reproductor de audio",
      tags: ["React", "Audio", "Música"],
      gradient: "from-rose-900 to-red-800",
      image: "/image/icon-beat.png",
    },
    {
      slug: "singer",
      title: "Cantante Profesional",
      description: "Diseño artístico con galería de shows y próximos eventos",
      tags: ["React", "Eventos", "Galería"],
      gradient: "from-indigo-900 to-purple-800",
      icon: "🎤",
    },
    {
      slug: "guitar",
      title: "Guitarrista",
      description: "Portfolio para músicos con sección de clases y videos",
      tags: ["React", "Educación", "Video"],
      gradient: "from-cyan-900 to-blue-800",
      icon: "🎸",
    },
    {
      slug: "urban-ritual",
      title: "Urban Ritual",
      description: "Documento interactivo con experiencia visual inmersiva",
      tags: ["React", "Documento", "Interactivo"],
      icon: "🕹",
    },
  ];
  // 1. Definimos los enlaces para la galería principal
  const homeLinks = [
    { name: "Plantillas", url: "/#plantillas" },
    { name: "Sobre mí", url: "https://subjona.com" }, // Link externo a tu portafolio real
    { name: "Contacto", url: "mailto:tuemail@subjona.com" },
  ];
  return (
    <>
      <div className="relative w-full bg-gray-50 py-12">
        {/* ✅ 2. Llamamos al Navbar con sus variantes personalizadas */}

        <Navbar
          logo={logo}
          logoAlt="Subjona Logo"
          links={homeLinks}
          ctaText="Ver Portafolio Real"
          ctaLink="https://subjona.com"
          ctaVariant="primary"
          backgroundColor="bg-white/90" // Efecto vidrio
          textColor="text-gray-900"
          borderColor="border-gray-200"
          shadow={true}
          mobileMenuColor="text-gray-700"
        />
        <div className="container mx-auto pt-8 px-4">
          <h1 className="text-4xl font-bold text-center mb-4">
            Catálogo de Plantillas
          </h1>

          <p className="text-center  text-gray-600 mb-12">
            Diseños listos para usar. Base funcional garantizada + módulos
            opcionales a tu medida.
            {/* LINK AL FAQ (Sutil pero claro) */}
            <a
              href="#faq" // O la ruta real de tu FAQ, ej: /faq
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>¿Cómo funciona la personalización?</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <a
                key={template.slug}
                href={`/${template.slug}`}
                className="block group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  <div
                    className={`h-48 bg-gradient-to-br ${template.gradient ? template.gradient : " from-blue-400 to-purple-500 "} `}
                  />

                  <div className="p-4">
                    <div className="flex gap-2 justify-between">
                      <h3 className="text-xl mt-4 font-bold group-hover:text-blue-600">
                        {template.title}
                      </h3>
                      {template.image ? (
                        <img
                          src={template.image}
                          alt={template.title}
                          className="w-14"
                        />
                      ) : (
                        <p className="text-2xl mt-3">{template.icon}</p>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2">{template.description}</p>
                    <div className="flex gap-2 mt-4">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <section
            id="faq"
            className="py-16 px-4 bg-white border-t border-gray-100"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
                Preguntas Frecuentes sobre las Plantillas
              </h2>

              <div className="space-y-4">
                {/* Pregunta 1 */}
                <details className="group bg-gray-50 p-5 rounded-lg cursor-pointer border border-gray-200">
                  <summary className="font-semibold text-gray-900 flex justify-between items-center">
                    ¿Qué incluye exactamente la "Base funcional garantizada"?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    Todas las plantillas se entregan con diseño 100% responsive,
                    formulario de contacto funcional (vía email/WhatsApp),
                    optimización de velocidad (SEO) y código limpio en
                    React/TypeScript.
                  </p>
                </details>

                {/* Pregunta 2 */}
                <details className="group bg-gray-50 p-5 rounded-lg cursor-pointer border border-gray-200">
                  <summary className="font-semibold text-gray-900 flex justify-between items-center">
                    ¿Qué son los "módulos opcionales a medida"?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    Son funcionalidades avanzadas que no vienen en la base para
                    mantener el precio accesible, pero que nuestra arquitectura
                    permite agregar fácilmente. Ejemplos: calculadoras de
                    precios, sistemas de turnos, pasarelas de pago o integración
                    con CRMs.
                  </p>
                </details>

                {/* Pregunta 3 */}
                <details className="group bg-gray-50 p-5 rounded-lg cursor-pointer border border-gray-200">
                  <summary className="font-semibold text-gray-900 flex justify-between items-center">
                    ¿Puedo comprar la plantilla y modificarla yo mismo?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    Sí. Al entregarte el código fuente limpio y documentado,
                    tienes total libertad. Sin embargo, si necesitas implementar
                    los módulos avanzados, puedo hacerlo directamente por ti
                    como servicio adicional.
                  </p>
                </details>
              </div>
            </div>
          </section>
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">
                De Plantilla a Negocio Real
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Tiempos */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    ⏱️ Tiempos de Entrega
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex justify-between border-b pb-2">
                      <span>Plantilla Base</span>
                      <span className="font-semibold text-blue-600">
                        3-5 días
                      </span>
                    </li>
                    <li className="flex justify-between border-b pb-2">
                      <span>Con Personalización</span>
                      <span className="font-semibold text-blue-600">
                        7-10 días
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span>Desarrollo a Medida</span>
                      <span className="font-semibold text-blue-600">
                        14-21 días
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Módulos */}
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    🔌 Módulos Escalables
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    ¿Necesitas más que una landing? Integramos estas
                    funcionalidades bajo demanda:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Pasarelas de Pago (Mercado Pago)</li>
                    <li>✅ Sistemas de Turnos y Reservas</li>
                    <li>✅ Integración con CRM y WhatsApp API</li>
                    <li>✅ Dashboards de usuario</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
        <WhatsAppButton phoneNumber="542665276622" stopAtId="footer" />
      </div>

      <Footer
        id="footer"
        brandName="Subjona Dev"
        brandDescription="Transformo ideas en experiencias web rápidas, seguras y optimizadas para vender."
        authorName="Subjona"
        authorLink="https://subjona.com"
        quickLinks={[
          { label: "Inicio", url: "/" },
          { label: "Servicios Web", url: "http://localhost:5173/#servicios" },
          { label: "Mi Portafolio", url: "http://localhost:5173/#proximamente" },
        ]}
        socialLinks={[
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/jonathancabrera-subjona/",
            icon: "linkedin",
          },
          {
            name: "GitHub",
            url: "https://github.com/JonathanCabrera39",
            icon: "github",
          },
          {
            name: "instagram",
            url: "https://www.instagram.com/subjona.dev/",
            icon: "instagram",
          },
          {
            name: "youtube",
            url: "https://www.youtube.com/@subjona0836",
            icon: "youtube",
          },
        ]}
      />
    </>
  );
}
