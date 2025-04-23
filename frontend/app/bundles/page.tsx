import {HeroBanner} from '../../components/shared/HeroBanner'
import BundleGrid from '../../components/bundles/BundleGrid'

export const metadata = {
  title: 'Meat Bundles',
  description: 'Premium meat bundles for every occasion',
}

export default function BundlesPage() {
  return (
    <main className="flex-grow">
      <HeroBanner
        title="Your Butcher Frank"
        subtitle="Premium Quality Meats & Exceptional Service"
        imagePath="/images/landing-hero-image.jpg"
        position={{x: 35, y: 61}}
        overlay={{opacity: 0.2, color: '#DE4F4F'}}
      />
      <BundleGrid />
    </main>
  )
}