export interface ExperiencesList {
  src: string;
  text: string;
  content: string;
  value: string;
  cta_text?: string;
}

interface ExperiencesListProps {
  experience: ExperiencesList[];
  isLeft?: boolean;
  experienceSelected?: string | null;
  setExperienceSelected: React.Dispatch<React.SetStateAction<string | null>>;
  className?: string;
}

export const ExperiencesListMobile = ({
  experience,
  isLeft,
  experienceSelected,
  setExperienceSelected,
  className,
}: ExperiencesListProps) => {
  const handleExperienceClick = (experienceText: string) => () => {
    if (experienceSelected === experienceText) {
      setExperienceSelected(null);
    } else {
      console.log(experienceText);
      setExperienceSelected(experienceText);
    }
  };

  return (
    <div
      className={`${className} absolute container-image-experience-mobile ${
        isLeft
          ? "top-20 -left-0"
          : "bottom-5 left-auto"
      }  flex flex-row items-start justify-start ml-2 xs:ml-10  gap-12`}
    >
      {experience.map(({ src, text, value }, index) => (
        <div
          onClick={handleExperienceClick(value)}
          key={index}
          className="group relative w-[300px] xs:w-[340px] h-72 cursor-pointer md:aspect-video md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[450px] 2xl:h-[350px] overflow-hidden rounded-xs shadow-lg"
        >
          <img
            src={src}
            alt={`Experience ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div
            className={`absolute inset-0 transition-all duration-300 z-20 ${
              experienceSelected === value
                ? "bg-black/40" // Seleccionado: overlay oscuro estático
                : "bg-black/10 group-hover:bg-black/40" // No seleccionado: hover normal
            }`}
          ></div>
          <p
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-xl transition-opacity 
  duration-300 font-roboto text-white font-light z-30 text-center ${
    experienceSelected === value
      ? "opacity-100" 
      : "opacity-0 group-hover:opacity-100" // No seleccionado: hover normal
  }`}
          >
            {text}
          </p>
        </div>
      ))}
    </div>
  );
};
