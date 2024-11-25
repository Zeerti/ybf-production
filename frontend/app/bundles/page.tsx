import {HeroBanner} from '../../components/shared/HeroBanner'
import {BundleGrid} from '../../components/bundles/BundleGrid'

export const metadata = {
  title: 'Meat Bundles',
  description: 'Premium meat bundles for every occasion',
}

export default function BundlesPage() {
  return (
    <main className="flex-grow">
      <HeroBanner
        title="Meat Bundles"
        description="Save big with our carefully curated meat bundles"
        imagePath="/images/bundles-hero.jpg"
      />
      <BundleGrid />
    </main>
  )
}
