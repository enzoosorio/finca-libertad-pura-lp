import { InputForm } from "../reusable/InputForm"

export const SectionForm = () => {

    const handleMouseEnter = () => {
        const blackContainer = document.querySelector('.black-div')
        blackContainer?.classList.remove('w-0')
        blackContainer?.classList.add('w-full')
    }

    const handleMouseLeave = () => {
        const blackContainer = document.querySelector('.black-div')
        blackContainer?.classList.remove('w-full')
        blackContainer?.classList.add('w-0')
    }

    return (
    <section className="py-16 flex font-body items-center gap-12 bg-gray-200/60">
          <div className="flex flex-col items-center justify-center p-2 w-[60%] h-full gap-12">
            <h4 className="text-xl lg:text-4xl font-semibold w-[80%]">¡Déjanos tus datos y entérate de las novedades!</h4>
            <form className="flex flex-col w-[80%]  items-center justify-start gap-8">
                <div className="flex flex-col w-full items-center justify-start gap-6">
                    <InputForm
                label="Nombre"
                type="text"
                placeholder="Juan Pérez"
                />
                <InputForm
                label="Correo electrónico"
                type="email"
                placeholder="juanperez123@gmail.com"
                />
                </div>
                <button 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                type="submit" className="relative px-4 py-2 text-transparent rounded-2xl bg-white shadow-lg cursor-pointer">
                    <div className="black-div absolute w-0 h-full inset-0 bg-gray-800 rounded-2xl z-0 transition-all duration-500"/>
                    <p className="absolute w-full h-full inset-0 text-black hover:text-white transition-colors flex items-center justify-center">Espera por nuestras novedades</p>
                    Espera por nuestras novedades
                </button>
            </form>
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img src="/images/Hero/finca-noche-cielo-estrellas.jpg" alt="" />
          </div>
        </section>
  )
}
