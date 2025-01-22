import {HeroBanner} from '../../components/shared/HeroBanner'
import {SpecialtyMeatsTable} from '../../components/specialty-meats/SpecialtyMeatsTable'

export const metadata = {
  title: 'Specialty Meats',
  description: 'Rare and premium meat cuts',
}

export default function SpecialtyPage() {
  return (
    <main className="flex-grow">
      <HeroBanner
        title="Specialty Meats"
        subtitle="Discover our premium and rare meat selections"
        imagePath="/images/landing-hero-image.jpg"
        position={{x: 35, y: 61}}
        overlay={{opacity: 0.2, color: '#DE4F4F'}}
      />
      <SpecialtyMeatsTable />
    </main>
  )
}
