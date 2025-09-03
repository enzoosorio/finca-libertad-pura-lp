
import React from 'react'
import ExperienceCard from '../reusable/ExperiencesCards'

export const SectionExperiencesCards: React.FC = () => {
  const items = [
    { title: 'Paseo de caballo', src: '/images/Hero/Finca-paseo-caballo-card.webp' },
    { title: 'Caminatas', src: '/images/Hero/Finca-caminatas-card.webp' },
    { title: 'Camping', src: '/images/Hero/finca-bolsa-camping-atardecer.jpg' },
    { title: 'Paisajes únicos', src: '/images/Hero/finca-atardecer-rosa-rs.webp' }
  ]

  return (
    <section className="py-16  flex flex-col font-body items-center gap-12">
      <h3 className="text-2xl lg:text-3xl font-semibold">Explora la Finca</h3>

      <div className="w-full  flex flex-wrap items-center justify-center gap-12 min-h-[220px] px-4">
        {items.map((it, index) => (
          <ExperienceCard key={it.title} title={it.title} image={it.src} index={index} />
        ))}
      </div>
    </section>
  )
}

export default SectionExperiencesCards
