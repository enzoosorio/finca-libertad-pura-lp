import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useEffect, useState } from "react";
import { ExperiencesList } from "../reusable/ExperiencesList";
import { CustomEase } from "gsap/CustomEase";
import { ExperiencesListMobile } from "../reusable/ExperienceListMobile";

gsap.registerPlugin(ScrollTrigger, useGSAP, CustomEase, SplitText);

export const AllExperiences = () => {
  
  const [experienceSelected, setExperienceSelected] = useState<string | null>(null);

  const imagesLeft : ExperiencesList[] = [
    {
      src: "/images/Hero/caballin.jpg",
      text: "Paseo a caballo",
      content: "Disfruta de un relajante paseo a caballo por los hermosos paisajes de la finca, explorando senderos rodeados de naturaleza y tranquilidad.",
      value: "paseo_caballo",
      cta_text: "Reserva tu paseo"
    },
    {
      src: "/images/Experiences/finca-naturaleza-dia.jpg",
      text: "Caminatas",
      content: "Explora diversos senderos naturales a pie, desde rutas cortas y fáciles hasta caminatas más desafiantes, todas ofreciendo vistas impresionantes y la oportunidad de conectar con la naturaleza.",
      value: "caminatas",
      cta_text: "Explora los senderos"
    },
    {
      src: "/images/Experiences/camping-de-noche.jpg",
      text: "Camping",
      content: "Pasa la noche bajo las estrellas en nuestras áreas designadas para acampar, equipadas con comodidades básicas para una experiencia auténtica y confortable en medio de la naturaleza.",
      value: "camping",
      cta_text: "Reserva tu lugar"
    },
  ];

  const imagesRight: ExperiencesList[] = [
    {
      src: "/images/Experiences/finca-noche-cielo-estrellas.jpg",
      text: "Atención personalizada",
      content: "Disfruta de una atención personalizada y cálida por parte de nuestro equipo, siempre dispuesto a ayudarte a tener la mejor experiencia posible durante tu visita a la finca.",
      value: "atencion_personalizada",
      cta_text: "Conoce a nuestro equipo"
    },
    {
      src: "/images/Experiences/horse_perfil.webp",
      text: "Equinoterapia",
      content: "Experimenta los beneficios terapéuticos de la equinoterapia, una actividad que combina el contacto con caballos y técnicas de rehabilitación para mejorar el bienestar físico y emocional.",
      value: "equinoterapia",
      cta_text: "Descubre la equinoterapia"
    },
    {
      src: "/images/Experiences/Finca-casa-2.png",
      text: "Hospedaje",
      content: "Relájate y descansa en nuestras cómodas instalaciones de hospedaje, diseñadas para ofrecerte una estancia agradable y memorable en un entorno natural.",
      value: "hospedaje",
      cta_text: "Reserva tu estadía"
    },
  ];

  const totalImagesArr = imagesLeft.concat(imagesRight);

  // efectos GSAP
  useEffect(() => {
    
    let mm = gsap.matchMedia();

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-container-experiences",
        pin: ".content-container-experiences",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    mm.add("(min-width: 1024px)", () => {

    tl.to(
      ".container-images-experiences-left",
      {
        y: "-120%",
        ease: "linear",
      },
      0.02
    ).to(
      ".container-images-experiences-right",
      { 
        y: "-120%", 
        ease: "linear",
      },
      0.05
    )
    .to(
        ".container-image-experience",
        {
            rotateX: 2,
            transformOrigin: "center center",
            ease: "power1.inOut",
            stagger: 0.2,
        },
        0.2
    );
    });

    mm.add("(max-width: 1023px)", () => {

      const containerMobile = document.querySelector('.container-image-experience-mobile');
      if (!containerMobile) return;

      const containerWidth = containerMobile.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distanceToMove = containerWidth - viewportWidth + 20; // +20 para un poco de margen

      tl.to('.container-image-experience-mobile',{
        
        x: -distanceToMove,
        ease: "linear",
      }, 0.1);
    });

    
    
    return () => {
      tl.kill(); 
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger && trigger.trigger.classList.contains('section-container-experiences')) {
          trigger.kill();
        }
      });
    };

  }, []);

  useGSAP(() => { 
    // Reset button state immediately when experience changes
    gsap.set(".content-experience button", {
      y: 20,
      opacity: 0
    });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      let tl = gsap.timeline(
      {
        scrollTrigger: {
        trigger: ".section-container-experiences",
        start: "15% 80%",
        toggleActions: "play reverse play reverse",
        end: "60% 20%",
      }
      }
    );

    let split = new SplitText(".text-for-split", { type: "words" });
    tl.from(split.words, {
      y: 20,
      opacity: 0,
      stagger: 0.06,
      duration: 0.6,
      ease: "power2.out"
    }, 0)
    tl.to(".content-experience button", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    }, "+=0.2" );
    });

    mm.add("(max-width: 1023px)", () => {
      let tl = gsap.timeline(
      {
        scrollTrigger: {
        trigger: ".section-container-experiences",
        start: "15% 80%",
        toggleActions: "play reverse play reverse",
        end: "bottom 20%",
      }
      }
    );

    let split = new SplitText(".text-for-split", { type: "words" });
    tl.from(split.words, {
      y: 20,
      opacity: 0,
      stagger: 0.06,
      duration: 0.6,
      ease: "power2.out"
    }, 0)
    tl.to(".content-experience button", {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out",
    }, "+=0.2" );
    });
    

  }, [experienceSelected])


  return (
    <section
    className="section-container-experiences relative overflow-hidden py-16 flex flex-col font-body items-center gap-12 h-[400vh] ">
      <div className="relative  content-container-experiences w-full h-[100vh] flex flex-col items-center gap-12">
        <h3 className="text-2xl font-roboto font-light lg:text-2xl ">
          Todas las Experiencias
        </h3>
        <ExperiencesList className="hidden lg:flex" experience={imagesLeft} experienceSelected={experienceSelected} isLeft={true} setExperienceSelected={setExperienceSelected} />        
        <ExperiencesList className="hidden lg:flex" experience={imagesRight} experienceSelected={experienceSelected} isLeft={false} setExperienceSelected={setExperienceSelected} />
        <ExperiencesListMobile className="flex lg:hidden" experience={totalImagesArr} experienceSelected={experienceSelected} isLeft={true} setExperienceSelected={setExperienceSelected} />
        <div className="content-experience absolute bottom-28 xs:bottom-[20%]  lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-11/12 lg:w-1/3 xl:w-1/4 min-h-56 lg:min-h-80 flex flex-col items-center justify-start lg:items-center lg:justify-center gap-6 xs:gap-8 xl:gap-12 z-50">
            <p className="text-for-split xl:scale-120  text-pretty prose xs:prose-2xl font-light text-black text-center font-roboto px-4">
              {experienceSelected ?  imagesLeft.concat(imagesRight).find(exp => exp.value === experienceSelected)?.content : "Selecciona una experiencia para ver más detalles" }
            </p>
            <button className={`bg-green-600 text-white xs:text-lg font-roboto py-3 px-4 lg:py-4 lg:px-6 rounded-sm ${experienceSelected ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-auto hidden'}`}>
              {experienceSelected ? imagesLeft.concat(imagesRight).find(exp => exp.value === experienceSelected)?.cta_text : "Selecciona una experiencia"}
            </button>
        </div>
      </div>
    </section>
  );
};
