import { Link } from "react-router"

export const MainPart = () => {

    const routes = [
        { path: '#section-experiences', label: 'Experiencias' },
        { path: '#testimonials-section', label: 'Reseñas' },
        { path: '/near', label: 'Lugares cercanos' },
        { path: '/guide', label: 'Guía de viaje' },
    ]

    const handleMouseEnter = (index : number) => {
        const bgSimulated = document.querySelector(`.bg-simulated-${index}`);
        if (bgSimulated) {
            bgSimulated.classList.remove('w-0');
            bgSimulated.classList.add('w-full');
        }
    };

    const handleMouseLeave = (index : number) => {
        const bgSimulated = document.querySelector(`.bg-simulated-${index}`);
        if (bgSimulated) {
            bgSimulated.classList.remove('w-full');
            bgSimulated.classList.add('w-0');
        }
    };

  return (
    <main className="relative min-h-[100dvh] w-full bg-center bg-cover">
      <div className="absolute inset-0 bg-black/40 z-0" />
      <img src="/images/Hero/finca-casa-dia.jpg" className='object-center object-cover w-full h-full absolute inset-0 -z-10' />
      <nav className="absolute left-[13%] top-0 pt-6 h-full flex flex-col justify-start items-center gap-12 min-w-[175px]  bg-white/30 backdrop-blur-sm">
        <Link to={"/"} className="cursor-pointer w-max h-max rounded-full">
            <img src="/images/Hero/logo.webp" alt="Logo" className="w-28 rounded-full"/>
        </Link>
        <ul className="flex flex-col font-body items-center justify-between w-full py-4 gap-16 text-white text-sm">
            {routes.map((route, index) => (
                <li 
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                key={route.path} className="w-full relative">
                    <div className={`bg-simulated-${index} bg-white/25 absolute inset-0 w-0 transition-all duration-[350ms] -z-10`}/>
                    {route.path.startsWith('#') ? (
                        <a href={route.path} className="block py-3 px-4 mx-auto ">
                            <p className="text-left text-xl max-w-[13ch] ">{route.label}</p>    
                        </a>
                    ) : (
                        <Link to={route.path} className="block py-3 px-4 mx-auto ">
                        <p className="text-left text-xl max-w-[13ch] ">{route.label}</p>
                    </Link>
                    )}
                </li>
            ))}
        </ul>
      </nav>

     <div className="absolute right-[80px] font-body bottom-1/12 min-w-[350px] min-h-[100px]  text-sm flex items-stretch">
    <div className="flex flex-col items-start gap-2 bg-white/80 backdrop-blur-xl w-full p-4">
        <p className="font-semibold text-xl">¡Reserva ahora!</p>
        <p className="w-32 text-xs">Sin terciarios, precio mínimo</p>
    </div>
    <div 
    onMouseEnter={() => handleMouseEnter(-1)}
    onMouseLeave={() => handleMouseLeave(-1)}
    className="relative flex items-center gap-2 cursor-pointer group/groupReservation bg-white/40 backdrop-blur-md w-full p-4">
    <div className="bg-simulated--1 bg-white/55 absolute inset-0 w-0 transition-all duration-[350ms] -z-10 "/>
        {/* calendario svg */}
        <svg width="48" height="49" viewBox="0 0 48 49" fill="none" className="w-10 fill-white group-hover/groupReservation:fill-black transition-colors">
        <path d="M33.5625 9.44845V6.27032H31.5V9.44845H16.5V6.27032H14.4375V9.44845H4.3125V42.7297H43.6875V9.44845H33.5625ZM6.375 11.5109H14.4375V14.7547H16.5V11.5109H31.5V14.7547H33.5625V11.5109H41.625V18.6031H6.375V11.5109ZM41.625 40.6672H6.375V19.3531H41.625V40.6672Z"/>
        <path d="M13.4062 27.0172C13.4062 27.4275 13.5692 27.8209 13.8593 28.111C14.1494 28.4011 14.5429 28.5641 14.9531 28.5641C15.3634 28.5641 15.7568 28.4011 16.0469 28.111C16.337 27.8209 16.5 27.4275 16.5 27.0172C16.5 26.607 16.337 26.2135 16.0469 25.9234C15.7568 25.6333 15.3634 25.4703 14.9531 25.4703C14.5429 25.4703 14.1494 25.6333 13.8593 25.9234C13.5692 26.2135 13.4063 26.607 13.4062 27.0172Z"/>
        <path d="M22.3594 27.0172C22.3594 27.2204 22.3994 27.4215 22.4771 27.6092C22.5549 27.7969 22.6688 27.9674 22.8124 28.111C22.9561 28.2547 23.1266 28.3686 23.3143 28.4463C23.502 28.5241 23.7031 28.5641 23.9062 28.5641C24.1094 28.5641 24.3105 28.5241 24.4982 28.4463C24.6859 28.3686 24.8564 28.2547 25.0001 28.111C25.1437 27.9674 25.2576 27.7969 25.3354 27.6092C25.4131 27.4215 25.4531 27.2204 25.4531 27.0172C25.4531 26.8141 25.4131 26.6129 25.3354 26.4252C25.2576 26.2376 25.1437 26.067 25.0001 25.9234C24.8564 25.7798 24.6859 25.6658 24.4982 25.5881C24.3105 25.5103 24.1094 25.4703 23.9062 25.4703C23.7031 25.4703 23.502 25.5103 23.3143 25.5881C23.1266 25.6658 22.9561 25.7798 22.8124 25.9234C22.6688 26.067 22.5549 26.2376 22.4771 26.4252C22.3994 26.6129 22.3594 26.8141 22.3594 27.0172Z"/>
        <path d="M31.3171 27.0172C31.3171 27.4275 31.4801 27.8209 31.7702 28.111C32.0603 28.4011 32.4538 28.5641 32.864 28.5641C33.2743 28.5641 33.6677 28.4011 33.9578 28.111C34.2479 27.8209 34.4109 27.4275 34.4109 27.0172C34.4109 26.607 34.2479 26.2135 33.9578 25.9234C33.6677 25.6333 33.2743 25.4703 32.864 25.4703C32.4538 25.4703 32.0603 25.6333 31.7702 25.9234C31.4801 26.2135 31.3171 26.607 31.3171 27.0172Z"/>
        <path d="M13.4062 33.0031C13.4062 33.4134 13.5692 33.8068 13.8593 34.0969C14.1494 34.387 14.5429 34.55 14.9531 34.55C15.3634 34.55 15.7568 34.387 16.0469 34.0969C16.337 33.8068 16.5 33.4134 16.5 33.0031C16.5 32.5929 16.337 32.1994 16.0469 31.9093C15.7568 31.6192 15.3634 31.4562 14.9531 31.4562C14.5429 31.4562 14.1494 31.6192 13.8593 31.9093C13.5692 32.1994 13.4063 32.5929 13.4062 33.0031Z"/>
        <path d="M22.3594 33.0031C22.3594 33.2063 22.3994 33.4074 22.4771 33.5951C22.5549 33.7828 22.6688 33.9533 22.8124 34.0969C22.9561 34.2406 23.1266 34.3545 23.3143 34.4322C23.502 34.51 23.7031 34.55 23.9062 34.55C24.1094 34.55 24.3105 34.51 24.4982 34.4322C24.6859 34.3545 24.8564 34.2406 25.0001 34.0969C25.1437 33.9533 25.2576 33.7828 25.3354 33.5951C25.4131 33.4074 25.4531 33.2063 25.4531 33.0031C25.4531 32.8 25.4131 32.5988 25.3354 32.4111C25.2576 32.2235 25.1437 32.0529 25.0001 31.9093C24.8564 31.7657 24.6859 31.6517 24.4982 31.574C24.3105 31.4962 24.1094 31.4562 23.9062 31.4562C23.7031 31.4562 23.502 31.4962 23.3143 31.574C23.1266 31.6517 22.9561 31.7657 22.8124 31.9093C22.6688 32.0529 22.5549 32.2235 22.4771 32.4111C22.3994 32.5988 22.3594 32.8 22.3594 33.0031Z"/>
        <path d="M31.3171 33.0031C31.3171 33.4134 31.4801 33.8068 31.7702 34.0969C32.0603 34.387 32.4538 34.55 32.864 34.55C33.2743 34.55 33.6677 34.387 33.9578 34.0969C34.2479 33.8068 34.4109 33.4134 34.4109 33.0031C34.4109 32.5929 34.2479 32.1994 33.9578 31.9093C33.6677 31.6192 33.2743 31.4562 32.864 31.4562C32.4538 31.4562 32.0603 31.6192 31.7702 31.9093C31.4801 32.1994 31.3171 32.5929 31.3171 33.0031Z"/>
        </svg>
        <p className="text-white group-hover/groupReservation:text-black transition-colors">Reservar ahora</p>
    </div>
    </div>
    </main>
  )
}

export default MainPart
