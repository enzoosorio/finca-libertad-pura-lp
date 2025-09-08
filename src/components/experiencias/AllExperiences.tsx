import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import { ExperiencesList } from "../reusable/ExperiencesList";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const AllExperiences = () => {
  const componentId = useRef(Math.random().toString(36).substr(2, 9));
  console.log(`🔄 AllExperiences [${componentId.current}]: Componente renderizándose`);
  
  const imagesLeft = [
    "/images/Hero/caballin.jpg",
    "/images/Experiences/finca-plato-comida.jpg",
    "/images/Experiences/finca-plato-comida.jpg",
  ];

  const imagesRight = [
    "/images/Experiences/finca-plato-comida.jpg",
    "/images/Experiences/finca-plato-comida.jpg",
    "/images/Experiences/finca-plato-comida.jpg",
  ];

  // Trackear el ciclo de vida del componente
  useEffect(() => {
    console.log(`✅ AllExperiences [${componentId.current}]: Componente montado`);
    
    return () => {
      console.log(`❌ AllExperiences [${componentId.current}]: Componente desmontándose`);
    };
  }, []);

  // Verificar elementos después del render
  useEffect(() => {
    console.log(`🔍 [${componentId.current}] Verificando elementos después del render...`);
    const triggerElement = document.querySelector(".section-container-experiences");
    const pinElement = document.querySelector(".content-container-experiences");
    const leftContainer = document.querySelector(".container-images-experiences-left");
    const rightContainer = document.querySelector(".container-images-experiences-right");
    const imageContainers = document.querySelectorAll(".container-image-experience");
    
    console.log(`📋 [${componentId.current}] Estado de elementos en useEffect:`, {
      triggerElement: !!triggerElement,
      pinElement: !!pinElement,
      leftContainer: !!leftContainer,
      rightContainer: !!rightContainer,
      imageContainers: imageContainers.length
    });
  });

  useGSAP(() => {
    console.log("🎬 useGSAP: Iniciando configuración de animaciones");
    
    // Verificar si los elementos existen antes de crear animaciones
    const triggerElement = document.querySelector(".section-container-experiences");
    const pinElement = document.querySelector(".content-container-experiences");
    const leftContainer = document.querySelector(".container-images-experiences-left");
    const rightContainer = document.querySelector(".container-images-experiences-right");
    const imageContainers = document.querySelectorAll(".container-image-experience");
    
    console.log("🔍 Elementos encontrados:", {
      triggerElement: !!triggerElement,
      pinElement: !!pinElement,
      leftContainer: !!leftContainer,
      rightContainer: !!rightContainer,
      imageContainers: imageContainers.length
    });
    
    if (!triggerElement || !pinElement) {
      console.error("❌ GSAP: Elementos principales no encontrados, abortando animaciones");
      return;
    }
    
    // Verificar ScrollTriggers existentes
    const existingTriggers = ScrollTrigger.getAll();
    console.log("📊 ScrollTriggers existentes antes de crear nuevos:", existingTriggers.length);
    existingTriggers.forEach((trigger, index) => {
      console.log(`   - Trigger ${index}:`, trigger.trigger?.className || "sin clase");
    });

    console.log("📌 Creando ScrollTrigger para pin...");
    ScrollTrigger.create({
      trigger: ".section-container-experiences",
      pin: ".content-container-experiences",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onToggle: (self) => {
        console.log("🔄 Pin toggle:", self.isActive ? "ACTIVO" : "INACTIVO");
      },
      onUpdate: (self) => {
        console.log("📈 Pin progress:", self.progress.toFixed(2));
      }
    });

    console.log("⏱️ Creando timeline con ScrollTrigger...");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-container-experiences",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onToggle: (self) => {
          console.log("🎯 Timeline toggle:", self.isActive ? "ACTIVO" : "INACTIVO");
        },
        onUpdate: (self) => {
          console.log("📊 Timeline progress:", self.progress.toFixed(2));
        }
      },
    });

    console.log("🎨 Agregando animaciones al timeline...");
    tl.to(
      ".container-images-experiences-left",
      {
        y: "-120%",
        ease: "power2.in",
        onStart: () => console.log("▶️ Iniciando animación izquierda"),
        onComplete: () => console.log("✅ Completada animación izquierda")
      },
      0
    ).to(
      ".container-images-experiences-right",
      { 
        y: "-120%", 
        ease: "expo.in",
        onStart: () => console.log("▶️ Iniciando animación derecha"),
        onComplete: () => console.log("✅ Completada animación derecha")
      },
      0
    )
    .to(
        ".container-image-experience",
        {
            rotateX: 10,
            scale: 0.8,
            transformOrigin: "center center",
            ease: "power1.inOut",
            stagger: 0.1,
            onStart: () => console.log("▶️ Iniciando animación de imágenes"),
            onComplete: () => console.log("✅ Completada animación de imágenes")
        },
        0
    );
    
    console.log("✨ useGSAP: Configuración completada");
    
    // Verificar ScrollTriggers después de crear los nuevos
    const finalTriggers = ScrollTrigger.getAll();
    console.log("📊 ScrollTriggers totales después de crear:", finalTriggers.length);

  }, []);


  return (
    <section className="section-container-experiences relative overflow-hidden py-16 flex flex-col font-body items-center gap-12 h-[400vh] ">
      <div className="relative  content-container-experiences w-full h-[100vh] flex flex-col items-center gap-12">
        <h3 className="text-2xl lg:text-3xl font-semibold">
          Todas las Experiencias
        </h3>
        <ExperiencesList images={imagesLeft} isLeft={true} />
        <ExperiencesList images={imagesRight} isLeft={false} />
        <div className="content-experience absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] min-h-80 flex flex-col items-center justify-center gap-6 z-50">
            <p className="text-xl font-light font-roboto">Elige una experiencia</p>

        </div>
      </div>
    </section>
  );
};
