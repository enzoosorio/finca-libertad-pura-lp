import { useState } from "react";
import { CarouselItem } from "../ui/carousel";

export interface Testimonials {
  fechaIngreso: string;
  fechaFin: string;
  nombre: string;
  pais: string;
  frase: string;
  testimonio: string;
  src: string;
}

interface ReviewCardProps {
  testimonial: Testimonials;
  flagSrc?: string;
  flagAlt?: string;
  index: number;
}

export const ReviewsCards = ({
  testimonial,
  flagSrc,
  flagAlt,
  index,
}: ReviewCardProps) => {

  const [flipCardIndex, setFlipCardIndex] = useState<number | null>(null);

  return (
    <CarouselItem
    onClick={() => {
        if (flipCardIndex === index) {
          setFlipCardIndex(-1);
        } else {
          setFlipCardIndex(index);
        }
    }}
    className={`relative min-w-[350px] hover:cursor-pointer min-h-[450px] md:basis-1/2 lg:basis-1/3 
    group
    ${flipCardIndex === index && flipCardIndex !== -1 ? "rotate-y-180" : "rotate-y-0"}
    rounded-lg bg-white border-2 border-black/15 shadow-xl
    transform-3d transition-all duration-700`}>
        {/* front face */}
      <div className={`front-card-${index} flex flex-col items-center 
      backface-hidden
      justify-start gap-4 px-6 py-10 absolute top-0 w-full h-full inset-0
      rotate-y-0
      `}>
        <div className="flex items-center justify-between w-full  ">
        <img
          src={testimonial.src}
          alt={testimonial.nombre}
          className="w-12 h-12 rounded-full object-cover object-top"
        />
        <img src={flagSrc} alt={flagAlt} className="w-8 h-8 rounded-full" />
      </div>
      <div className="flex flex-col items-start justify-start pt-6">
        <span className="text-sm text-black/70">
          {testimonial.fechaIngreso} - {testimonial.fechaFin}
        </span>
        <h4 className="text-xl">{testimonial.nombre}</h4>
        <p className="font-bold py-2 text-lg">{testimonial.frase}</p>
        <p className="font-roboto font-light">{testimonial.testimonio}</p>
      </div>
      {/* backward icon */}
        <svg viewBox="0 0 38 40" fill="none" 
        className="w-8 pt-10 group-hover:scale-110 transition-all">
        <path d="M23.4062 0V1.9375C30.4062 1.9375 36.0625 7.625 36.0625 14.625C36.0625 21.625 30.4062 27.3125 23.4062 27.3125H4.59375L13.3125 18.5625L11.9062 17.1563L0.71875 28.375L11.9688 39.6875L13.375 38.2812L4.375 29.25H23.4062C31.4687 29.25 38 22.6875 38 14.625C38 6.5625 31.4687 0 23.4062 0Z" fill="black"/>
        </svg>
      </div>
      {/* backward face */}
      <div className={`back-card-${index} absolute top-0 w-full h-full 
      backface-hidden
      inset-0 rotate-y-180`}>
        <img src={testimonial.src} alt={testimonial.nombre} className="w-full h-full object-cover"/>
      </div>
    </CarouselItem>
  );
};
