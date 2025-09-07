import GoogleMapa from "./Map"

export const Ubication = () => {
  return (
    <section className="py-16  flex flex-col font-body items-center gap-12">
          <h3 className="text-2xl lg:text-3xl font-semibold">¿Dónde estamos?</h3>
          <GoogleMapa
          center={{ lat: 10.094966619372148, lng: -84.53872877703768 }} 
          zoom={13}
        />
        </section>
  )
}
