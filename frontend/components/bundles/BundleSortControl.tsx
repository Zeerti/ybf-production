'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { BundleCard } from './BundleCard'
import type { FranksOriginalBundle, Bundle } from '@/types/sanity/types'
import { getImageUrl } from '@/lib/sanity'

// Type guard to check if a bundle has a name (is a FranksOriginalBundle)
function isFranksBundle(bundle: FranksOriginalBundle | Bundle): bundle is FranksOriginalBundle {
  return 'name' in bundle;
}

type SortOption = 'none' | 'highToLow' | 'lowToHigh'

interface BundleSortControlProps {
  title: string
  bundles: (FranksOriginalBundle | Bundle)[]
  unnamed?: boolean
}

export default function BundleSortControl({ 
  title, 
  bundles, 
  unnamed = false 
}: BundleSortControlProps) {
  const [sortOption, setSortOption] = useState<SortOption>('none')

  // Apply sorting to bundles
  let sortedBundles = [...bundles]
  
  if (sortOption === 'highToLow') {
    sortedBundles = sortedBundles.sort((a, b) => (b.price || 0) - (a.price || 0))
  } else if (sortOption === 'lowToHigh') {
    sortedBundles = sortedBundles.sort((a, b) => (a.price || 0) - (b.price || 0))
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-brand-900">{title}</h2>
        
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="bg-white border border-surface-200 text-surface-700 py-2 pl-4 pr-10 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="none">Sort By</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="lowToHigh">Price: Low to High</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-surface-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedBundles.map((bundle) => {
          // Determine the title based on bundle type and unnamed flag
          let title = '';
          if (unnamed && bundle.weight) {
            title = `${bundle.weight}lb Bundle`;
          } else if ('name' in bundle && bundle.name) {
            title = bundle.name;
          } else if (bundle.weight) {
            title = `${bundle.weight}lb Bundle`;
          }

          const hasImage = !unnamed && 'image' in bundle && bundle.image;
          
          return (
            <BundleCard
              key={bundle._id}
              title={title}
              price={bundle.price ?? 0}
              items={bundle.bundleItems ?? []}
              imageUrl={hasImage ? getImageUrl(bundle.image) : undefined}
            />
          );
        })}
      </div>
    </section>
  )
}