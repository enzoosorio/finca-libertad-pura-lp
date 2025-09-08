
import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import ExperienceCard from '../reusable/ExperiencesCards'

export const SectionExperiencesCards: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  const [isClosing, setIsClosing] = useState(false)
  
  const overlayRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const items = [
    { 
      title: 'Paseo de caballo', 
      src: '/images/Hero/caballin.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    { 
      title: 'Caminatas', 
      src: '/images/Hero/senderito.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    { 
      title: 'Camping', 
      src: '/images/Hero/finca-bolsa-camping-atardecer.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    { 
      title: 'Paisajes únicos', 
      src: '/images/Hero/finca-atardecer-rosa-rs.webp',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    }
  ]

  // Animaciones con GSAP
  useGSAP(() => {
    if (selectedExperience !== null && !isClosing) {
      // Animaciones de entrada
      const tl = gsap.timeline()
      
      // Overlay fade in
      tl.fromTo(overlayRef.current, 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      )
      
      // Modal bounce in
      .fromTo(modalRef.current, 
        { scale: 0.85, opacity: 0, y: 50 }, 
        { scale: 1, opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }, 
        0.1
      )
      
      // Imagen slide from left con spring
      .fromTo(imageRef.current, 
        { x: 0, y: 0,opacity: 0, scale: 1.4 }, 
        { x: 0, y:0 ,opacity: 1, scale: 1, duration: 0.8, ease: "power2" }, 
        0.25
      )
      
      // Título slide from right
      .fromTo(titleRef.current, 
        { x: 50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.6, ease: "back.out(1.4)" }, 
        0.5
      )
      
      // Descripción slide from right con delay
      .fromTo(descriptionRef.current, 
        { x: 30, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, 
        0.7
      )
      
      // Botón cerrar bounce
      .fromTo(closeButtonRef.current, 
        { scale: 0, opacity: 0, rotation: -90 }, 
        { scale: 1, opacity: 1, rotation: 0, duration: 0.4, ease: "bounce.out" }, 
        0.8
      )
    }

  }, [selectedExperience, isClosing])

  const handleCardClick = (index: number) => {
    setSelectedExperience(index)
    setIsClosing(false)
  }

  const handleCloseModal = () => {
    setIsClosing(true)
    
    // Animaciones de salida
    const tl = gsap.timeline({
      onComplete: () => {
        setSelectedExperience(null)
        setIsClosing(false)
      }
    })
    
    // Botón cerrar desaparece con rotación
    tl.to(closeButtonRef.current, 
      { scale: 0, opacity: 0, rotation: 90, duration: 0.2, ease: "power2.in" }
    )
    
    // Descripción sale hacia la derecha
    .to(descriptionRef.current, 
      { x: 30, opacity: 0, duration: 0.3, ease: "power2.in" }, 
      0.1
    )
    
    // Título sale hacia la derecha
    .to(titleRef.current, 
      { x: 50, opacity: 0, duration: 0.4, ease: "back.in(1.4)" }, 
      0.2
    )
    
    // Imagen sale hacia la izquierda con spring
    .to(imageRef.current, 
      { x: 0, opacity: 0, scale: 0.9, duration: 0.5, ease: "elastic.in(1, 0.5)" }, 
      0.3
    )
    
    // Modal bounce out
    .to(modalRef.current, 
      { scale: 0.7, opacity: 0, y: 50, duration: 0.4, ease: "back.in(1.7)" }, 
      0.5
    )
    
    // Overlay fade out
    .to(overlayRef.current, 
      { opacity: 0, duration: 0.3, ease: "power2.in" }, 
      0.7
    )
  }

  return (
    <>
      <section
        id='section-experiences'
        className="py-16 flex flex-col font-body items-center gap-12">
        <h3 className="text-2xl lg:text-3xl font-semibold">Explora la Finca</h3>
        <div className="w-full flex flex-wrap items-center justify-center gap-12 min-h-[220px] px-4">
          {items.map((it, index) => (
            <ExperienceCard 
              key={it.title} 
              title={it.title} 
              image={it.src} 
              index={index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedExperience !== null && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
          onClick={handleCloseModal}
        >
          <div 
            ref={modalRef}
            className="bg-white rounded-md shadow-2xl max-w-4xl w-[90%] h-[70vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Imagen a la izquierda */}
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img 
                  ref={imageRef}
                  src={items[selectedExperience].src} 
                  alt={items[selectedExperience].title}
                  className="w-full h-full object-center object-cover landscape:shadow"
                />
              </div>
              
              {/* Contenido a la derecha */}
              <div className="relative md:w-1/2 p-8 flex flex-col justify-center font-body">
                <button 
                  ref={closeButtonRef}
                  onClick={handleCloseModal}
                  className="absolute top-4 cursor-pointer right-4 text-gray-500 hover:text-gray-700 text-4xl font-bold"
                >
                  ×
                </button>
                
                <h2 
                  ref={titleRef}
                  className="text-3xl font-bold mb-6 text-gray-800"
                >
                  {items[selectedExperience].title}
                </h2>
                
                <p 
                  ref={descriptionRef}
                  className="text-gray-600 leading-relaxed text-lg font-roboto font-light"
                >
                  {items[selectedExperience].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SectionExperiencesCards
