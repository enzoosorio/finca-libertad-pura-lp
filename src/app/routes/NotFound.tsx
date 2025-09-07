import { Link } from "react-router"

export const NotFound = () => {
  return (
    <main className="min-h-screen py-10 bg-gradient-to-br from-green-50 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        
        {/* Número 404 grande */}
        <div className="mb-8">
          <h1 className="text-9xl md:text-[12rem] font-body font-bold text-black/80 leading-none">
            404
          </h1>
        </div>

        {/* Contenido principal */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-body font-semibold text-black/60">
            ¡Ups! Te has perdido en la finca
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 font-roboto font-light leading-relaxed max-w-lg mx-auto">
            Parece que la página que buscas se fue a explorar los senderos de la finca. 
            No te preocupes, te ayudamos a encontrar el camino de regreso.
          </p>
        </div>
        <div className="py-4"></div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 font-roboto justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-3 font-roboto font-light  text-black border border-black/20 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Volver al inicio
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center cursor-pointer px-8 py-3 font-roboto font-light bg-gray-800 text-white  rounded-lg border border-black/50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          > 
            Página anterior
          </button>
        </div>

      </div>
    </main>
  )
}

export default NotFound
