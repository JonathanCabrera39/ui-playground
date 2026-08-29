const UrbanRitualDocument = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-900 to-black text-gray-200 font-sans">
      <header className="mb-10 text-center border-b border-red-900 pb-6">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-2 tracking-wide">
          URBAN RITUAL
        </h1>
        <p className="text-xl text-violet-400 mb-1">Juego de Cartas Metalero 2D</p>
        <p className="text-sm text-gray-500">Versión 1.0 • Documento de Diseño</p>
      </header>

      {/* 🔷 1. Visión General */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 1. Visión General
        </h2>
        <div className="space-y-3">
          <p>
            <strong className="text-violet-300">Nombre provisional:</strong> Urban Ritual (alternativas: Ashen Grid, Soulforge, Infernal City)
          </p>
          <p>
            <strong className="text-violet-300">Género:</strong> Juego de cartas estratégico 2D, por turnos, con destrucción de entorno.
          </p>
          <p>
            <strong className="text-violet-300">Estética:</strong> Metal progresivo oscuro + ciudad post-industrial colapsada.
          </p>
          <p>
            <strong className="text-violet-300">Público objetivo:</strong> Fans de Yu-Gi-Oh!, Slay the Spire, Magic: The Gathering, y jugadores indie que valoran narrativa, arte y sonido integrado.
          </p>
          <p>
            <strong className="text-violet-300">Propuesta única:</strong> No se juega con “vida”, sino con integridad de la ciudad. Las fuentes energéticas (Alma/Fuego) definen tu estilo de juego y sinergizan con tu música original.
          </p>
        </div>
      </section>

      {/* 🔷 2. Tablero y Zonas */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 2. Tablero y Zonas
        </h2>
        <pre className="bg-gray-900 p-4 rounded-lg text-sm mb-4 font-mono text-gray-300 overflow-x-auto">
          [ Fuente de ALMA ] — [ ZONA DEFENSA (2 casillas) ] — [ CIUDAD CENTRAL (5 sectores) ] — [ ZONA ATAQUE (2 casillas) ] — [ Fuente de FUEGO ]
        </pre>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-violet-900/50">
                <th className="border border-gray-600 px-4 py-2 text-left">Nombre</th>
                <th className="border border-gray-600 px-4 py-2 text-left">Función</th>
                <th className="border border-gray-600 px-4 py-2 text-left">Estética</th>
                <th className="border border-gray-600 px-4 py-2 text-left">Mecánica</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-700/50">
                <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Fuente de ALMA</td>
                <td className="border border-gray-600 px-4 py-2">Genera +1 Esencia de Vida por turno</td>
                <td className="border border-gray-600 px-4 py-2">Luz tenue, partículas doradas, coros suaves</td>
                <td className="border border-gray-600 px-4 py-2">Solo cartas con Esencia de Vida reciben sinergias</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Fuente de FUEGO</td>
                <td className="border border-gray-600 px-4 py-2">Genera +1 Esencia de Caos por turno</td>
                <td className="border border-gray-600 px-4 py-2">Llamas, humo negro, distorsión</td>
                <td className="border border-gray-600 px-4 py-2">Solo cartas con Esencia de Caos reciben sinergias</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Zona DEFENSA</td>
                <td className="border border-gray-600 px-4 py-2">2 casillas por jugador</td>
                <td className="border border-gray-600 px-4 py-2">Zona defensiva</td>
                <td className="border border-gray-600 px-4 py-2">Solo Defensores/Soporte; no reciben daño directo</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Zona ATAQUE</td>
                <td className="border border-gray-600 px-4 py-2">2 casillas por jugador</td>
                <td className="border border-gray-600 px-4 py-2">Zona ofensiva</td>
                <td className="border border-gray-600 px-4 py-2">Solo Asesinos/Destructores; desde aquí se ataca</td>
              </tr>
              <tr className="hover:bg-gray-700/50">
                <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Ciudad Central</td>
                <td className="border border-gray-600 px-4 py-2">5 sectores neutros</td>
                <td className="border border-gray-600 px-4 py-2">Torre, Puente, Fábrica, Plaza, Biblioteca</td>
                <td className="border border-gray-600 px-4 py-2">Objetivo: destruir los 5 sectores del enemigo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 🔷 3. Sistema de Recursos y Turnos */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 3. Sistema de Recursos y Turnos
        </h2>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Flujo de turno (dura ~45–60 segundos)</h3>
          <ol className="list-decimal pl-6 space-y-2 border-l-2 border-red-700 pl-4">
            <li><strong className="text-red-400">Generación:</strong> Cada fuente otorga +1 recurso: Alma o Caos (máx. 5 acumulables)</li>
            <li><strong className="text-red-400">Robo:</strong> Robás 1 carta (máx. 7 en mano)</li>
            <li><strong className="text-red-400">Fase principal:</strong> Hasta 2 acciones (invocar, jugar magia, mover personaje, activar campo)</li>
            <li><strong className="text-red-400">Combate:</strong> Personajes en ATAQUE pueden atacar sectores o duelos directos</li>
            <li><strong className="text-red-400">Final:</strong> Resuelve efectos de fin de turno; música cambia según fuente activa</li>
          </ol>
        </div>
      </section>

      {/* 🔷 4. Cartas de PERSONAJE */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 4. Cartas de PERSONAJE
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Atributos</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-violet-900/50">
                  <th className="border border-gray-600 px-4 py-2 text-left">Atributo</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Rango</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Función</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">tipo</td>
                  <td className="border border-gray-600 px-4 py-2">Defensor / Soporte / Asesino / Destructor</td>
                  <td className="border border-gray-600 px-4 py-2">Define zona permitida y sinergias</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">costo_alma</td>
                  <td className="border border-gray-600 px-4 py-2">0–3</td>
                  <td className="border border-gray-600 px-4 py-2">Recursos de Alma necesarios para invocar</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">costo_fuego</td>
                  <td className="border border-gray-600 px-4 py-2">0–3</td>
                  <td className="border border-gray-600 px-4 py-2">Recursos de Fuego necesarios para invocar</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">vida</td>
                  <td className="border border-gray-600 px-4 py-2">2–6</td>
                  <td className="border border-gray-600 px-4 py-2">Puntos de daño que soporta</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">ataque</td>
                  <td className="border border-gray-600 px-4 py-2">0–4</td>
                  <td className="border border-gray-600 px-4 py-2">Daño infligido al atacar sectores</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">rareza</td>
                  <td className="border border-gray-600 px-4 py-2">Común / Rara / Épica</td>
                  <td className="border border-gray-600 px-4 py-2">Para colección y balance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Ejemplos de personajes (200 cartas planificadas)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-violet-900/50">
                  <th className="border border-gray-600 px-4 py-2 text-left">Nombre</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Tipo</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Costo</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Vida</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Ataque</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Efecto único</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Forjador de Cenizas</td>
                  <td className="border border-gray-600 px-4 py-2">Defensor</td>
                  <td className="border border-gray-600 px-4 py-2">Alma x2</td>
                  <td className="border border-gray-600 px-4 py-2">4</td>
                  <td className="border border-gray-600 px-4 py-2">1</td>
                  <td className="border border-gray-600 px-4 py-2">Al invocar, repara 1 punto de un sector aliado</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Vigilante del Vacío</td>
                  <td className="border border-gray-600 px-4 py-2">Soporte</td>
                  <td className="border border-gray-600 px-4 py-2">Alma x1</td>
                  <td className="border border-gray-600 px-4 py-2">3</td>
                  <td className="border border-gray-600 px-4 py-2">0</td>
                  <td className="border border-gray-600 px-4 py-2">Cada turno, roba 1 carta si hay sectores destruidos</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Ángel Caído</td>
                  <td className="border border-gray-600 px-4 py-2">Asesino</td>
                  <td className="border border-gray-600 px-4 py-2">Alma x1 + Fuego x1</td>
                  <td className="border border-gray-600 px-4 py-2">3</td>
                  <td className="border border-gray-600 px-4 py-2">3</td>
                  <td className="border border-gray-600 px-4 py-2">Puede atacar sectores y personajes enemigos</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Engendro de Escoria</td>
                  <td className="border border-gray-600 px-4 py-2">Destructor</td>
                  <td className="border border-gray-600 px-4 py-2">Fuego x2</td>
                  <td className="border border-gray-600 px-4 py-2">2</td>
                  <td className="border border-gray-600 px-4 py-2">4</td>
                  <td className="border border-gray-600 px-4 py-2">Al morir, destruye 1 punto de un sector aliado</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Coloso de Hormigón</td>
                  <td className="border border-gray-600 px-4 py-2">Destructor</td>
                  <td className="border border-gray-600 px-4 py-2">Alma x2 + Fuego x1</td>
                  <td className="border border-gray-600 px-4 py-2">6</td>
                  <td className="border border-gray-600 px-4 py-2">2</td>
                  <td className="border border-gray-600 px-4 py-2">Al atacar, destruye 1 punto de dos sectores</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔷 5. Cartas de MAGIA */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 5. Cartas de MAGIA
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Tipos de magia</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-violet-900/50">
                  <th className="border border-gray-600 px-4 py-2 text-left">Tipo</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Duración</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Costo típico</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Instantánea</td>
                  <td className="border border-gray-600 px-4 py-2">1 acción</td>
                  <td className="border border-gray-600 px-4 py-2">1–3 recursos</td>
                  <td className="border border-gray-600 px-4 py-2">Renacer del Acero (repara 2 puntos de sector aliado)</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Campo</td>
                  <td className="border border-gray-600 px-4 py-2">Mientras esté en mesa</td>
                  <td className="border border-gray-600 px-4 py-2">2–4 recursos</td>
                  <td className="border border-gray-600 px-4 py-2">Niebla de Cenizas (Defensores ganan +1 vida y protección)</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Ritual</td>
                  <td className="border border-gray-600 px-4 py-2">Consumo + efecto épico</td>
                  <td className="border border-gray-600 px-4 py-2">4+ recursos</td>
                  <td className="border border-gray-600 px-4 py-2">Sacrificio del Coloso (destruí 2 personajes → destruí 3 puntos de sectores)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Ejemplos de magias (120 planificadas)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-violet-900/50">
                  <th className="border border-gray-600 px-4 py-2 text-left">Nombre</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Tipo</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Costo</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Objetivo</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Efecto</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Renacer del Acero</td>
                  <td className="border border-gray-600 px-4 py-2">Instantánea</td>
                  <td className="border border-gray-600 px-4 py-2">Alma x2</td>
                  <td className="border border-gray-600 px-4 py-2">Sector aliado</td>
                  <td className="border border-gray-600 px-4 py-2">Repara 2 puntos de integridad</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Niebla de Cenizas</td>
                  <td className="border border-gray-600 px-4 py-2">Campo</td>
                  <td className="border border-gray-600 px-4 py-2">Alma x1 + Fuego x1</td>
                  <td className="border border-gray-600 px-4 py-2">Zona DEFENSA</td>
                  <td className="border border-gray-600 px-4 py-2">Defensores ganan +1 vida y no pueden ser atacados</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Trampa de Vigas</td>
                  <td className="border border-gray-600 px-4 py-2">Campo</td>
                  <td className="border border-gray-600 px-4 py-2">Fuego x1</td>
                  <td className="border border-gray-600 px-4 py-2">Zona ATAQUE</td>
                  <td className="border border-gray-600 px-4 py-2">Al atacar, el personaje enemigo recibe 1 daño</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Sacrificio del Coloso</td>
                  <td className="border border-gray-600 px-4 py-2">Ritual</td>
                  <td className="border border-gray-600 px-4 py-2">Alma x2 + Fuego x2</td>
                  <td className="border border-gray-600 px-4 py-2">—</td>
                  <td className="border border-gray-600 px-4 py-2">Destruí 2 personajes tuyos → destruí 3 puntos de sectores enemigos</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Canto del Muro</td>
                  <td className="border border-gray-600 px-4 py-2">Instantánea</td>
                  <td className="border border-gray-600 px-4 py-2">Alma x1</td>
                  <td className="border border-gray-600 px-4 py-2">—</td>
                  <td className="border border-gray-600 px-4 py-2">Bloquea todos los ataques este turno</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Fuego Purificador</td>
                  <td className="border border-gray-600 px-4 py-2">Instantánea</td>
                  <td className="border border-gray-600 px-4 py-2">Fuego x2</td>
                  <td className="border border-gray-600 px-4 py-2">Todos los sectores</td>
                  <td className="border border-gray-600 px-4 py-2">Destruye 1 punto de todos los sectores (aliados y enemigos)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔷 6. Animaciones y Efectos Visuales */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 6. Animaciones y Efectos Visuales
        </h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Tipos de animaciones (20 planificadas para v1.0)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-violet-900/50">
                  <th className="border border-gray-600 px-4 py-2 text-left">Tipo</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Cantidad</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Tamaño estimado</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Ejemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Invocación</td>
                  <td className="border border-gray-600 px-4 py-2">4 (1 por tipo de personaje)</td>
                  <td className="border border-gray-600 px-4 py-2">8 MB</td>
                  <td className="border border-gray-600 px-4 py-2">Forjador emerge de cenizas</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Ataque</td>
                  <td className="border border-gray-600 px-4 py-2">4 (1 por tipo)</td>
                  <td className="border border-gray-600 px-4 py-2">10 MB</td>
                  <td className="border border-gray-600 px-4 py-2">Engendro golpea con cadena</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Destrucción de sector</td>
                  <td className="border border-gray-600 px-4 py-2">5 (1 por sector)</td>
                  <td className="border border-gray-600 px-4 py-2">15 MB</td>
                  <td className="border border-gray-600 px-4 py-2">Torre se derrumba en 3 fases</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Efectos épicos</td>
                  <td className="border border-gray-600 px-4 py-2">7 (magias rituales)</td>
                  <td className="border border-gray-600 px-4 py-2">21 MB</td>
                  <td className="border border-gray-600 px-4 py-2">Sacrificio del Coloso: explosión + colapso</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Efectos premium (12 para v1.0)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-violet-900/50">
                  <th className="border border-gray-600 px-4 py-2 text-left">Nombre</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Descripción</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Tamaño</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Cenizas de Acero</td>
                  <td className="border border-gray-600 px-4 py-2">Explosión negra con partículas metálicas</td>
                  <td className="border border-gray-600 px-4 py-2">2.5 MB</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Grito del Abismo</td>
                  <td className="border border-gray-600 px-4 py-2">Ondas sonoras visibles + grietas en pantalla</td>
                  <td className="border border-gray-600 px-4 py-2">2 MB</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Ritual de Fusión</td>
                  <td className="border border-gray-600 px-4 py-2">Dos cartas giran y se funden con shader de distorsión</td>
                  <td className="border border-gray-600 px-4 py-2">3 MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔷 7. Implementación en Godot */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 7. Implementación en Godot
        </h2>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Stack técnico recomendado</h3>
          <ul className="list-disc pl-6 space-y-2 border-l-2 border-red-700 pl-4">
            <li><strong className="text-red-400">Motor:</strong> Godot 4.3 (versión estable, open source, 60 MB)</li>
            <li><strong className="text-red-400">Lenguaje:</strong> GDScript (similar a Python/JS)</li>
            <li><strong className="text-red-400">Exportación:</strong> Web (HTML5 + WebAssembly), Windows, Linux, macOS, Android</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3 mt-4 text-violet-300">Roadmap de desarrollo (con 1.5h/día)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-violet-900/50">
                  <th className="border border-gray-600 px-4 py-2 text-left">Fase</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Duración</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Entregable</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Prototipo básico</td>
                  <td className="border border-gray-600 px-4 py-2">2 semanas</td>
                  <td className="border border-gray-600 px-4 py-2">Tablero, turnos, 10 cartas jugables</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Alpha jugable</td>
                  <td className="border border-gray-600 px-4 py-2">4 semanas</td>
                  <td className="border border-gray-600 px-4 py-2">50 cartas, animaciones básicas, IA simple</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Beta pública</td>
                  <td className="border border-gray-600 px-4 py-2">6 semanas</td>
                  <td className="border border-gray-600 px-4 py-2">200 cartas, Web demo, sonido completo</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">v1.0 lanzamiento</td>
                  <td className="border border-gray-600 px-4 py-2">8 semanas</td>
                  <td className="border border-gray-600 px-4 py-2">itch.io + landing integrada</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 🔷 8. Integración con tu ecosistema creativo */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 8. Integración con tu ecosistema creativo
        </h2>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Web (tu landing)</h3>
          <p>
            Embebés el juego en WebAssembly:
          </p>
          <p>
            <em className="text-violet-300">“¿Te gustó? Descargá la versión completa (200 cartas)”</em> <br /> 
            → link a itch.io.
          </p>
          <h3 className="text-xl font-semibold mb-3 mt-4 text-violet-300">Música</h3>
          <ul className="list-disc pl-6 space-y-2 border-l-2 border-red-700 pl-4">
            <li><strong className="text-red-400">OST dinámico:</strong> Fuente de ALMA activa → tema “Cenizas de Acero (Versión Limpia)”</li>
            <li><strong className="text-red-400">OST dinámico:</strong> Fuente de FUEGO activa → “Cenizas de Acero (Growl Mix)”</li>
            <li><strong className="text-red-400">SFX con tu voz:</strong> Invocación de Defensor: “El acero resiste…” (voz limpia)</li>
            <li><strong className="text-red-400">SFX con tu voz:</strong> Invocación de Destructor: “¡ARDE!” (shriek)</li>
          </ul>
        </div>
      </section>

      {/* 🔷 9. Expansión: Parte 2 (v1.5) */}
      <section className="mb-10 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-red-500 flex items-center">
          <span className="mr-2">🔷</span> 9. Expansión: Parte 2 (v1.5)
        </h2>
        <div>
          <h3 className="text-xl font-semibold mb-3 text-violet-300">Fuentes modulares</h3>
          <p className="mb-3">
            En lugar de solo Alma/Fuego, los jugadores eligen <strong className="text-red-400">2 de 6 fuentes</strong>:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-violet-900/50">
                  <th className="border border-gray-600 px-4 py-2 text-left">Fuente</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Recurso</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Estética sonora</th>
                  <th className="border border-gray-600 px-4 py-2 text-left">Sinergia única</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Alma</td>
                  <td className="border border-gray-600 px-4 py-2">Vida</td>
                  <td className="border border-gray-600 px-4 py-2">Coros, cuerdas</td>
                  <td className="border border-gray-600 px-4 py-2">Reparación, control</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Fuego</td>
                  <td className="border border-gray-600 px-4 py-2">Caos</td>
                  <td className="border border-gray-600 px-4 py-2">Distorsión, blast</td>
                  <td className="border border-gray-600 px-4 py-2">Destrucción, riesgo</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Electricidad</td>
                  <td className="border border-gray-600 px-4 py-2">Carga</td>
                  <td className="border border-gray-600 px-4 py-2">Synth, glitches</td>
                  <td className="border border-gray-600 px-4 py-2">Robo, velocidad</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Metal</td>
                  <td className="border border-gray-600 px-4 py-2">Forja</td>
                  <td className="border border-gray-600 px-4 py-2">Riffs técnicos</td>
                  <td className="border border-gray-600 px-4 py-2">Equipamiento, mejora</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Oscuridad</td>
                  <td className="border border-gray-600 px-4 py-2">Sombra</td>
                  <td className="border border-gray-600 px-4 py-2">Bajo drone</td>
                  <td className="border border-gray-600 px-4 py-2">Manipulación, trampas</td>
                </tr>
                <tr className="hover:bg-gray-700/50">
                  <td className="border border-gray-600 px-4 py-2 font-medium text-red-400">Naturaleza</td>
                  <td className="border border-gray-600 px-4 py-2">Raíz</td>
                  <td className="border border-gray-600 px-4 py-2">Flautas, ambient</td>
                  <td className="border border-gray-600 px-4 py-2">Regeneración, evasión</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-xl font-semibold mb-3 mt-4 text-violet-300">Contenido adicional (+250 MB)</h3>
          <ul className="list-disc pl-6 space-y-2 border-l-2 border-red-700 pl-4">
            <li>+100 cartas (300 total)</li>
            <li>+15 animaciones (35 total)</li>
            <li>+8 efectos épicos (20 total)</li>
            <li>+3 tracks musicales</li>
            <li>Modo historia (5 misiones)</li>
            <li>IA con 3 niveles</li>
          </ul>
        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        <p>Documento de Diseño de “Urban Ritual” — v1.0</p>
      </footer>
    </div>
  );
};

export default UrbanRitualDocument;