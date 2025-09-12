import { AllExperiences } from "@/components/experiencias/AllExperiences"
import MainPartReusable from "@/components/reusable/MainPartReusable"

export const Experiences = () => {
  return (
    <main className="overflow-x-hidden">
    <MainPartReusable
    srcMainImage="/images/Experiences/camping-de-noche.jpg"
    />
    <AllExperiences />
    </main>
  )
}
