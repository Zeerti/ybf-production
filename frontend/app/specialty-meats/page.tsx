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
        description="Discover our premium and rare meat selections"
        imagePath="/images/specialty-hero.jpg"
      />
      <SpecialtyMeatsTable />
    </main>
  )
}
