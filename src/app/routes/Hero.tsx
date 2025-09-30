import { SectionForm } from "@/components/hero/SectionForm"
import SectionExperiencesCards from "../../components/hero/SectionExperiencesCards"
import SectionMoreContent from "../../components/hero/SectionMoreContent"
import { SectionTestimonials } from "../../components/hero/SectionTestimonials"
import { Ubication } from "@/components/hero/SectionUbication"
import MainPartReusable from "@/components/reusable/MainPartReusable"

export const Hero = () => {
  return (
   <main className="overflow-x-hidden">
   <MainPartReusable
    srcMainImage="/images/Hero/finca-casa-dia.jpg"
    navInSameRoute={[{ value: '#section-experiences', label: 'Experiencias' }, { value: '#section-more-content', label: 'Más contenido' }, { value: '#section-testimonials', label: 'Testimonios' }, { value: '#section-ubication', label: 'Ubicación' }, { value: '#section-form', label: 'Contáctanos' }]}
   />
   <SectionExperiencesCards/>
   <SectionMoreContent/>
   <SectionTestimonials/>
   <Ubication/>
   <SectionForm/>
   </main>
  )
}
