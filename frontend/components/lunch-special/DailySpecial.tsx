import {getImageUrl} from '@/lib/sanity'
import type {DailySpecial as DailySpecialType} from '@/types/sanity/types'
import {projectId, dataset} from '@/lib/sanity'

interface DailySpecialProps {
  dailySpecial: DailySpecialType | null
}

export function DailySpecial({dailySpecial}: DailySpecialProps) {
  if (!dailySpecial) return null

  const imageUrl = dailySpecial?.photo?.asset?._ref
    ? `https://cdn.sanity.io/images/${projectId}/${dataset}/${dailySpecial.photo.asset._ref
        .replace('image-', '')
        .replace('-jpg', '.jpg')}`
    : null

  return (
    <div className="bg-white shadow rounded-lg p-6 h-full">
      <h3 className="text-xl font-bold text-red-700 mb-4">Special of the Day</h3>
      {imageUrl && (
        <div className="relative aspect-video mb-4">
          <img
            src={imageUrl}
            alt={dailySpecial.name}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      )}
      <h4 className="font-semibold mb-2">{dailySpecial.name}</h4>
      {dailySpecial.description && <p className="text-gray-600">{dailySpecial.description}</p>}
    </div>
  )
}
