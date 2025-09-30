import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, MorphSVGPlugin);
import { useRef} from "react";
import MainPartForTravelGuide from "@/components/travel-guide/MainPartForTravelGuide";
import { CardGrid } from "@/components/travel-guide/CardGrid";

export const TravelGuide = () => {
  const mainRef = useRef<HTMLElement>(null);


  // parte animaciones de los svgs
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: ".card-grid-first-section",
      scrub: true,
      invalidateOnRefresh: true,
    });
  }, []);


  return (
    <main
      ref={mainRef}
      className="main-container relative overflow-x-hidden h-[250vh] w-full "
    >
      <section className="relative card-grid-first-section w-auto h-[100vh] flex items-start justify-start bg-[#FAF9F6]">
        <MainPartForTravelGuide />
        <CardGrid/>
      </section>
    </main>
  );
};
