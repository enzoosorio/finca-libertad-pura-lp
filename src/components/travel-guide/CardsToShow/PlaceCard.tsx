import type { Places } from "@/lib/near-places";

interface PlaceCardProps {
  place: Places;
}

export const PlaceCard = ({ place }: PlaceCardProps) => {
  return (
    <div className="relative flex items-center justify-center gap-4 bg-white rounded-md shadow-lg p-4 ">
      {place.representativeImage && (
        <div className="w-16 h-16 flex-shrink-0">
          <img
            src={place.representativeImage}
            alt={place.place}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      )}
     {/* <div className="flex flex-row items-center gap-2"> */}
         <div className="flex flex-col items-start justify-center flex-1">
        <h3 className="text-sm font-semibold font-body">{place.place}</h3>
        <p className="text-sm text-green-800">A {place.distance}km</p>
        <div className="flex flex-row items-center flex-wrap justify-start gap-x-4 gap-y-2 mt-2">
          {place.activities?.map((activity, index) => (
            <span
              key={index}
              className="text-black bg-gray-200 text-xs rounded-full px-4 py-1"
            >
              {activity}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 flex flex-col items-center justify-start gap-2">
          <button className="cursor-pointer p-[4px] rounded-full w-6 bg-black/20 hover:bg-black/30 transition">
            <img src="/images/Travel-guide/person-walking.webp" className="w-full h-full object-cover"/>
          </button>
          <button className="cursor-pointer p-[3px] rounded-full w-6 bg-black/20 hover:bg-black/30 transition">
            <img src="/images/Travel-guide/car-icon.png" className="w-full h-full object-cover"/>
          </button>
      </div>
     {/* </div> */}
    </div>
  );
};
