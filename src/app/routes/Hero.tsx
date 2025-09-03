import { SectionForm } from "@/components/hero/SectionForm"
import MainPart from "../../components/hero/MainPart"
import SectionExperiencesCards from "../../components/hero/SectionExperiencesCards"
import SectionMoreContent from "../../components/hero/SectionMoreContent"
import { SectionTestimonials } from "../../components/hero/SectionTestimonials"

export const Hero = () => {
  return (
   <main className="overflow-x-hidden">
   <MainPart/>
   <SectionExperiencesCards/>
   <SectionMoreContent/>
   <SectionTestimonials/>
   <SectionForm/>
   </main>
  )
}
