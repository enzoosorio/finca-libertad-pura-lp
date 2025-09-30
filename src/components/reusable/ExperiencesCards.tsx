type ExperienceCardProps = {
  title: string
  image?: string
  index: number
  onClick?: () => void
}

export const ExperienceCard = ({ title, image = '/finca-libertad-1.jpg', onClick } : ExperienceCardProps) => {
  return (
    <article
      className={`relative w-[250px] cursor-pointer h-[360px] rounded-xs overflow-hidden transform-gpu group`}
      onClick={onClick}
    >
      <img src={image} alt={title} className={`absolute w-full h-full -z-10 inset-0 object-cover group-hover:scale-115 transition duration-300`} />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.4)_40%,rgba(0,0,0,0)_100%)]" />
      <p className="absolute bottom-20 text-xl  left-1/2 -translate-x-1/2 text-white text-center w-full px-2 ">
        {title}
      </p>
    </article>
  )
}

export default ExperienceCard
