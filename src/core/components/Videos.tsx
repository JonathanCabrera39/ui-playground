

export default function Videos() {

    return (
      <section className="w-full py-16 bg-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              ¿Cómo trabajamos?
            </h2>
            <div className="bg-white rounded-xl shadow-md aspect-video flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zcx61btiw1k"
              ></iframe>
            </div>
            <p className="mt-4 text-gray-600">
              Mirá cómo guiamos a nuestros clientes paso a paso.
            </p>
          </div>
        </section>
    )
  }


