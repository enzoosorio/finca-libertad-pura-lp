import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { useEffect, useState } from "react";
import { Card1 } from "./CardsToShow/Card1";
import { Card2 } from "./CardsToShow/Card2";
import { CardAuxForMobile } from "./CardsToShow/CardAux";

gsap.registerPlugin(ScrollTrigger, useGSAP, MorphSVGPlugin);

export const CardGrid = () => {
  const [cardId, setCardId] = useState<number>(0); // Iniciar en 0
  const [cards, setCards] = useState<number[]>([0, 1]); // Array de cards disponibles
  const [isMobile, setIsMobile] = useState(false);

  // Detectar cambio de tamaño y configurar cards
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      if (mobile) {
        setCards([0, 1, 2]); // Desktop + Mobile: Card1, Card2, CardAux
      } else {
        setCards([0, 1]); // Solo desktop: Card1, Card2
        // Si estamos en la card aux y cambiamos a desktop, volver a card 1
        if (cardId === 2) {
          setCardId(1);
        }
      }
    };

    // Ejecutar al montar
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [cardId]);

  // Navegación de botones
  const handleButtonClick = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && cardId > 0) {
      setCardId(cardId - 1);
    } else if (direction === 'next' && cardId < cards.length - 1) {
      setCardId(cardId + 1);
    }
  };

  // Animación GSAP para el desplazamiento
  useGSAP(() => {
    const movePercentage = (cardId * 100); // Cada card ocupa 100vw
    
    gsap.to('.card-wrapper', {
      x: `-${movePercentage}vw`,
      duration: 0.8,
      ease: "power3.inOut"
    });
  }, { dependencies: [cardId, isMobile] });

  return (
    <>
      {/* Botón Izquierda */}
      <button 
        disabled={cardId === 0}
        onClick={() => handleButtonClick('prev')} 
        className={`group absolute left-2.5 lg:left-2 top-1/2 z-20 -translate-y-1/2 xl:left-24 transition-opacity ${
          cardId === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
      >
        <svg
          viewBox="0 0 38 60"
          fill="none"
          className={`rotate-180 w-6 h-12 lg:w-8 lg:h-16 transition-colors ${
            cardId === 0 
              ? "fill-black/30" 
              : "fill-[#494A4C] group-hover:fill-[#222]"
          }`}
        >
          <g filter="url(#filter0_i_231_19)">
            <path d="M21.084 0.220755C20.2783 -0.0490211 0.829297 -0.097311 0.0206377 0.220755C-0.664977 0.490425 15.9822 28.0006 15.9822 29.8885C15.9822 31.572 -0.665316 59.5564 0.140401 59.8261C0.710061 60.0169 12.7601 60.0958 21.0838 59.826C21.8887 59.7999 38 30.9673 38 29.8886C38 28.8099 21.8897 0.490532 21.084 0.220755Z" />
          </g>
          <defs>
            <filter id="filter0_i_231_19" x="0" y="0" width="40" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="2" dy="3" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_231_19" />
            </filter>
          </defs>
        </svg>
      </button>

      {/* Botón Derecha */}
      <button 
        disabled={cardId === cards.length - 1}
        onClick={() => handleButtonClick('next')} 
        className={`group absolute right-2.5 lg:right-2 top-1/2 z-20 -translate-y-1/2 xl:right-24 transition-opacity ${
          cardId === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 cursor-pointer'
        }`}
      >
        <svg
          viewBox="0 0 38 60"
          fill="none"
          className={`w-6 h-12 lg:w-8 lg:h-16 transition-colors ${
            cardId === cards.length - 1 
              ? "fill-black/30" 
              : "fill-[#494A4C] group-hover:fill-[#222]"
          }`}
        >
          <g filter="url(#filter0_i_231_19)">
            <path d="M21.084 0.220755C20.2783 -0.0490211 0.829297 -0.097311 0.0206377 0.220755C-0.664977 0.490425 15.9822 28.0006 15.9822 29.8885C15.9822 31.572 -0.665316 59.5564 0.140401 59.8261C0.710061 60.0169 12.7601 60.0958 21.0838 59.826C21.8887 59.7999 38 30.9673 38 29.8886C38 28.8099 21.8897 0.490532 21.084 0.220755Z" />
          </g>
          <defs>
            <filter id="filter0_i_231_19" x="0" y="0" width="40" height="63" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="2" dy="3" />
              <feGaussianBlur stdDeviation="3.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_231_19" />
            </filter>
          </defs>
        </svg>
      </button>

      {/* Wrapper cards con ancho dinámico */}
      <div className={`absolute ${isMobile ? 'w-[300vw]' : 'w-[200vw]'} h-[100vh] flex items-center justify-start card-wrapper`}>
        {/* Card 1 - Siempre visible */}
        <Card1 
        isMobile={isMobile}
        />
        
        {/* Card 2 - Siempre visible */}
        <Card2 />
        
        {/* Card AUX - Solo en mobile */}
        {isMobile && <CardAuxForMobile />}
      </div>

      {/* Indicadores de navegación (opcional) */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCardId(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              cardId === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </>
  );
};