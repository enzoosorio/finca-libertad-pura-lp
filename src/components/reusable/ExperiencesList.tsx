
export interface ExperiencesList{
  src: string;
  text: string;
  content:string;
  value: string;
}

interface ExperiencesListProps {
  experience: ExperiencesList[];
  isLeft?: boolean;
  experienceSelected?: string | null;
  setExperienceSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ExperiencesList = ({ experience, isLeft, experienceSelected, setExperienceSelected }: ExperiencesListProps) => {


  const handleExperienceClick = (experienceText: string) => () => {
   if(experienceSelected === experienceText) {
    setExperienceSelected(null);
   } else {
    console.log(experienceText);
    setExperienceSelected(experienceText);
   }
  }

  return (
    <div className={`absolute container-image-experience ${isLeft ? "top-40 left-[4%] container-images-experiences-left" : "top-40 right-[4%] left-auto container-images-experiences-right"}  flex flex-col items-center justify-around gap-12`}>
                {experience.map(({ src, text, value }, index) => (   
                <div 
                onClick={handleExperienceClick(value)}
                key={index} className="group relative w-72 h-48 cursor-pointer aspect-video md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[450px] 2xl:h-[350px] overflow-hidden rounded-lg shadow-lg">
                    <img src={src} alt={`Experience ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                    <div className={`absolute inset-0 bg-black/10 transition-all
                      ${experienceSelected === value ? 'bg-black/20' : 'bg-transparent'}
                      group-hover:bg-black/40  duration-300 z-20`}/>
                    <p className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-xl opacity-0 group-hover:opacity-100 
                      transition-opacity font-roboto text-white font-light z-30 `}>{text}</p>
                </div>
                ))}
    </div>
  )
}
