import { use } from 'react'
import { BundleCard } from './BundleCard'
import BundlePdfDownload from './BundlePdfDownload'
import BundleSortControl from './BundleSortControl'
import { 
  getFranksBundles, 
  getOtherBundles, 
  getImageUrl, 
  getBundlePdf 
} from '@/lib/sanity'
import type { FranksOriginalBundle, Bundle } from '@/types/sanity/types'

const SectionTitle = ({children}: {children: React.ReactNode}) => (
  <h2 className="text-2xl font-bold mb-6 text-brand-900">{children}</h2>
)

export default function BundleGrid() {
  // Fetch data with server components
  const franksBundles = use(getFranksBundles())
  const otherBundles = use(getOtherBundles())
  const bundlePdf = use(getBundlePdf() || null)

  // Filter Frank's Original Bundles to only include ones with names
  const namedBundles = franksBundles.filter((bundle) => bundle.name)
  
  // Filter the rest into other bundles
  const unnamedFranksBundles = franksBundles.filter((bundle) => !bundle.name)
  const allOtherBundles = [...unnamedFranksBundles, ...otherBundles]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* PDF Download Section */}
      {bundlePdf && bundlePdf.displayOnWebsite && bundlePdf.pdfUrl && (
        <BundlePdfDownload
          pdfUrl={bundlePdf.pdfUrl}
          title={bundlePdf.title}
          _updatedAt={bundlePdf._updatedAt}
        />
      )}
      
      {/* Frank's Original Bundles Section */}
      {namedBundles.length > 0 && (
        <section className="mb-16">
          <SectionTitle>Frank's Original Bundles</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {namedBundles.map((bundle) => (
              <BundleCard
                key={bundle._id}
                title={bundle.name || ''}
                price={bundle.price ?? 0}
                items={bundle.bundleItems ?? []}
                imageUrl={bundle.image ? getImageUrl(bundle.image) : undefined}
              />
            ))}
          </div>
        </section>
      )}

      {/* Other Bundles Section with client-side sorting */}
      {allOtherBundles.length > 0 && (
        <BundleSortControl 
          title="Other Bundles" 
          bundles={allOtherBundles} 
          unnamed={true} 
        />
      )}

      {/* Show message if no bundles are available */}
      {namedBundles.length === 0 && allOtherBundles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-surface-600 text-lg">
            No bundles are currently available. Please check back later.
          </p>
        </div>
      )}
    </div>
  )
}