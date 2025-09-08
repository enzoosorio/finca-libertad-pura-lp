
interface ExperiencesListProps {
  images: string[];
  isLeft?: boolean;
}

export const ExperiencesList = ({ images, isLeft }: ExperiencesListProps) => {
  return (
    <div className={`absolute container-image-experience ${isLeft ? "top-40 left-[4%] container-images-experiences-left" : "top-48 right-[4%] left-auto container-images-experiences-right"}  flex flex-col items-center justify-around gap-12`}>
                {images.map((src, index) => (   
                <div key={index} className=" w-72 h-48 cursor-pointer aspect-video md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[450px] 2xl:h-[350px] overflow-hidden rounded-lg shadow-lg">
                    <img src={src} alt={`Experience ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                ))}
    </div>
  )
}
