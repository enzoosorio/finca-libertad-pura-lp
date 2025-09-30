import CaballoBallo from "../Caballoballo"
import { Vaca } from "../Vaca"
import { places } from "@/lib/near-places"
import { PlaceCard } from "./PlaceCard"

export const Card2 = () => {

  const nearestPlaces = places.sort((a, b) => a.distance - b.distance);

  return (
    <article className="relative w-[100vw] h-[100vh] flex items-center justify-center">
   <div 
        data-card-id="2"
        className="card w-full h-[90%] shadow-md ring ring-black/5 max-w-7xl px-12 py-4 rounded-4xl grid grid-cols-1 grid-rows-7 gap-6 p-4">
          {/* titulo */}
          <h4 className="col-span-1 row-span-1 text-3xl font-roboto font-light text-center pt-6">
            Prepara todo esto si quieres disfrutar todo el día en la finca:
          </h4>
          {/* card horizontal 1 caballo vaca */}
          <div className="col-span-1 row-span-2 bg-white rounded-md shadow-lg p-6 flex flex-col items-center justify-center gap-4">
            {/* texto */}
            <div className="flex items-center justify-between px-4 w-full ">
              <CaballoBallo/>
              <p>
                Cuidemos a nuestros animales queridos de la finca.
              </p>
              <Vaca/>
            </div>
          </div>
          {/* card horizontal 2 indicaciones lugares */}
          {/* todo: agregar scroll mejor */}
          <div className="relative flex flex-row items-start overflow-y-auto m-1 lg:m-4 justify-between px-4 lg:px-12 col-span-1 row-span-4 bg-white rounded-md shadow-lg py-2 gap-4">
            <div className="w-full  grid grid-cols-1 lg:grid-cols-3 grid-rows-6 gap-4 ">
              {nearestPlaces.map((place, index) => (
                <PlaceCard key={index} place={place} />
              ))}
              <div className="absolute w-full bottom-0 h-12 bg-black/50 backdrop-blur-sm inset-x-0">

              </div>
            </div>
          </div>
        </div>
        </article>
  )
}
