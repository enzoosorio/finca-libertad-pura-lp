import { useEffect, useState } from "react";
import { ReviewsCards, type Testimonials } from "../reusable/ReviewsCards";
import { Carousel, CarouselContent } from "../ui/carousel";

export const SectionTestimonials = () => {
  const [flags, setFlags] = useState<Record<string, string | undefined>>({});
  const [altsFlags, setAltsFlags] = useState<
    Record<string, string | undefined>
  >({});
  const testimonial: Testimonials[] = [
    {
      fechaIngreso: "2023-01-01",
      fechaFin: "2023-01-02",
      nombre: "Juan Pérez",
      pais: "Argentina",
      frase: "Increíble experiencia en la finca",
      testimonio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id molestiae! Praesentium harum distinctio eius aut quas eum vel expedita?",
      src: "/images/Hero/testimonio-1.jpg",
    },
    {
      fechaIngreso: "2023-01-03",
      fechaFin: "2023-01-04",
      nombre: "María López",
      pais: "Chile",
      frase: "Una experiencia transformadora",
      testimonio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id molestiae! Praesentium harum distinctio eius aut quas eum vel expedita?",
      src: "/images/Hero/testimonio-1.jpg",
    },
    {
      fechaIngreso: "2023-01-05",
      fechaFin: "2023-01-06",
      nombre: "Pedro González",
      pais: "Colombia",
      frase: "Una aventura inolvidable",
      testimonio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id molestiae! Praesentium harum distinctio eius aut quas eum vel expedita?",
      src: "/images/Hero/testimonio-1.jpg",
    },
    {
      fechaIngreso: "2023-01-07",
      fechaFin: "2023-01-08",
      nombre: "Laura Martínez",
      pais: "Perú",
      frase: "Un viaje que cambió mi vida",
      testimonio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id molestiae! Praesentium harum distinctio eius aut quas eum vel expedita?",
      src: "/images/Hero/testimonio-1.jpg",
    },
    {
      fechaIngreso: "2023-01-09",
      fechaFin: "2023-01-10",
      nombre: "Carlos Fernández",
      pais: "Uruguay",
      frase: "Una experiencia enriquecedora",
      testimonio:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id molestiae! Praesentium harum distinctio eius aut quas eum vel expedita?",
      src: "/images/Hero/testimonio-1.jpg",
    },
  ];

  useEffect(() => {
    const fetchingFlags = async () => {
      for (const t of testimonial) {
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/name/${t.pais}`
          );
          const data = await response.json();
          setFlags((prev) => ({ ...prev, [t.nombre]: data[0]?.flags?.png }));
          setAltsFlags((prev) => ({
            ...prev,
            [t.nombre]: data[0]?.flags?.alt,
          }));
        } catch (e) {
          // ignore individual fetch errors, keep previous state
          console.warn("failed fetching flag for", t.pais, e);
        }
      }
    };

    fetchingFlags();
  }, []);

  return (
    <section className="py-16  flex flex-col font-body items-center gap-12">
      <h3 className="text-2xl lg:text-3xl font-semibold">
        Turistas y voluntarios
      </h3>
      {/* <div className="scrolling-section flex items-center justify-start pl-40 gap-4 w-full"> */}
      <Carousel
        opts={{
          align: "start",
        }}
        className=" w-full"
      >
        <CarouselContent className="flex items-center justify-start pl-40 gap-4 w-full">
          {testimonial.map((t, index) => (
            <ReviewsCards
              key={t.nombre}
              testimonial={t}
              flagSrc={flags[t.nombre]}
              flagAlt={altsFlags[t.nombre]}
              index={index}
            />
          ))}
        </CarouselContent>
      </Carousel>
      {/* </div> */}
    </section>
  );
};
