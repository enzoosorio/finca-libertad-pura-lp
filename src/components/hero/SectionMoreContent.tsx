import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const SectionMoreContent: React.FC = () => {
  const img1Ref = useRef<HTMLImageElement | null>(null)
  const img2Ref = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // helper to setup parallax on an image element and its container
      const setupParallax = (imgEl: HTMLImageElement, containerEl: HTMLElement) => {
        // ensure the image is taller than the container so it can move
        // we apply a CSS min-height in the JSX; here we compute movement dynamically
        gsap.to(imgEl, {
          y: () => -(imgEl.offsetHeight - containerEl.offsetHeight),
          ease: 'none',
          scrollTrigger: {
            trigger: containerEl,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
            invalidateOnRefresh: true
          }
        })
      }

      if (img1Ref.current) {
        const container = img1Ref.current.parentElement as HTMLElement
        if (container) setupParallax(img1Ref.current, container)
      }

      if (img2Ref.current) {
        const container = img2Ref.current.parentElement as HTMLElement
        if (container) setupParallax(img2Ref.current, container)
      }
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((st: any) => st.kill())
    }
  }, [])

  return (
    <section className="py-12 font-body">
      <ul className="flex flex-col items-center p-0 ">
        <li className="relative w-full h-full mx-auto bg-[rgba(43,88,178,0.3)] overflow-hidden">
          <div className='w-full h-[550px] flex items-center justify-center  mx-auto'>
          <div className='absolute block md:hidden w-full h-[550px]  bg-black/60 z-40 pointer-events-none'/>
            <div className="absolute md:relative inset-0 md:inset-auto z-50 md:z-auto h-full flex w-full flex-col items-start justify-center gap-2  ">
               <div className='py-8 px-4 md:p-1 w-[90%] lg:w-max bg-black/30 md:bg-transparent text-white md:text-black backdrop-blur-sm mx-auto  flex flex-col items-center justify-center gap-6 lg:gap-4'>
                <div className="w-full flex flex-col items-start justify-start gap-2 ">
                  <span className="text-sm lg:text-lg font-roboto font-light">SAN RAMÓN</span>
                  <p className=" text-2xl lg:text-4xl font-semibold">FINCA PURA VIDA</p>
                </div>
                <div className='flex flex-col lg:flex-row items-start justify-center gap-4 font-roboto font-light text-pretty tracking-wide   '>
                  <p className="w-[90%] lg:w-72  2xl:text-lg">En Finca Libertad Pura vivimos y compartimos la esencia de Costa Rica: un espacio de naturaleza, tradición y familia, donde cada visita se convierte en una experiencia auténtica y memorable. Nuestro compromiso es brindar turismo rural sostenible que une hospitalidad, cultura y paisajes únicos, para que cada persona se sienta parte de nuestra historia.</p>
                  <p className="hidden md:block w-72 2xl:text-lg">
                    <span className='hidden lg:inline'>Nos enfocamos en presentar la sencillez del campo costarricense, cultivando momentos de unión, aprendizaje y respeto por la naturaleza.</span>
                    Más que un destino, somos un hogar abierto donde se celebra la vida, la tradición y la libertad en su forma más pura.</p>
                </div>
              </div>
            </div>
            <div className="md:relative w-full h-full overflow-hidden">
              <img ref={img1Ref} className="absolute top-0 left-0 w-full min-h-[140%] object-cover" src="/images/Hero/toro-finca-dia.jpg" alt="" />
            </div>
          </div>
        </li>

        <li className="relative overflow-hidden w-full mx-auto bg-[rgba(31,152,90,0.3)]">
          <div className='absolute block md:hidden inset-0 w-full h-full bg-black/60 z-40 pointer-events-none'/>
          <div className='w-full h-[550px]  flex items-center justify-center flex-row-reverse mx-auto'>
            <div className="absolute md:relative inset-0 md:inset-auto z-50 md:z-auto h-full flex w-full flex-col items-start justify-center gap-2  ">
              <div className='py-8 px-4 md:p-1 w-[90%] lg:w-max bg-black/30 md:bg-transparent text-white md:text-black backdrop-blur-sm mx-auto  flex flex-col items-start justify-center gap-6 lg:gap-4'>
                <div className="w-full flex flex-col items-start justify-start gap-2 ">
                  <span className="text-sm lg:text-lg font-roboto font-light">EXPERIENCIA CON</span>
                  <p className=" text-2xl lg:text-4xl font-semibold">CABALLOS</p>
                </div>
                <p className="xl:w-[60ch]  2xl:text-lg font-roboto font-light text-pretty tracking-wide ">Los caballos son el alma de nuestra finca. 
                  Ofrecemos paseos a caballo entre montañas y paisajes verdes, 
                  ideales para quienes buscan desconectarse y sentir la libertad del campo. 
                  Además, ofrecemos equinoterapia, una actividad que une el contacto con la naturaleza y el poder sanador de los caballos. Esta experiencia está orientada tanto al bienestar físico como emocional, ayudando a mejorar la confianza, la concentración y la relajación de quienes la practican. Es un encuentro transformador que enriquece tanto a niños como adultos.
                </p>
              </div>
            </div>
            <div className="md:relative w-full h-full overflow-hidden">
              <img ref={img2Ref} className="absolute top-8 left-0 w-full min-h-[130%] object-cover object-bottom" src="/images/Hero/Finca-caballos.png" alt="" />
              {/* <img className="opacity-0 w-full h-full object-cover object-top" src="/images/Hero/Finca-caballos.png" alt="" /> */}
            </div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default SectionMoreContent
