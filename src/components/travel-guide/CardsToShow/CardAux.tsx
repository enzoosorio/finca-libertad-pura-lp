import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { AuxPerrito } from "../AuxPerrito";
import { AuxEstrellas } from "../AuxEstrellas";

gsap.registerPlugin(useGSAP);

export const CardAuxForMobile = () => {
  return (
    <article className="relative w-[100vw] h-[100vh] flex items-center justify-center px-4">
      <div className="card w-[90%] h-[90%] max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center gap-4 xs:gap-20">
        {/* card horizontal 2 */}
        <div className="flex lg:hidden flex-col items-center justify-between px-12 bg-white rounded-md shadow-lg p-6 gap-4">
          {/* texto */}
          <p className="text-lg lg:text-3xl font-body font-light text-center text-pretty leading-normal">
            ¡Por supuesto que somos pet friendly!
          </p>
          <AuxPerrito />
        </div>
        {/* card horizontal 3 */}
        <div className="relative flex lg:hidden flex-col items-center justify-center xs:shadow-lg xs:pb-16  bg-white rounded-md p-1 gap-4">
          {/* texto */}
          <p className="text-lg lg:text-3xl font-body leading-normal font-light text-center text-pretty w-full ">
            Atentos a nuestras redes sociales para los eventos naturales únicos
            que podemos compartir.
          </p>
          {/* luna y estrellas */}
          {/* estrellas */}
          <p className="absolute z-10 font-body text-xs w-full bg -bottom-10 xs:bottom-6 left-[56%] xs:left-[65%] -rotate-10 origin-top-left -translate-x-[35%] ">
            ¡atento a la lluvia de estrellas fugaces!
          </p>
          <div className="relative ">
            <AuxEstrellas />
          </div>
        </div>
      </div>
    </article>
  );
};
