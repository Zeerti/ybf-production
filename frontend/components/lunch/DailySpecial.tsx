import {getImageUrl} from '@/lib/sanity'
import type {DailySpecial as DailySpecialType} from '@/types/sanity/types'

interface DailySpecialProps {
  dailySpecial: DailySpecialType
}

export function DailySpecial({dailySpecial}: DailySpecialProps) {
  if (!dailySpecial) return null

  const imageUrl = getImageUrl(dailySpecial.photo)

  return (
    <div className="bg-white shadow rounded-lg p-6 h-full">
      <h3 className="text-xl font-bold text-red-700 mb-4">Special of the Day</h3>
      {dailySpecial.photo?.asset?._ref && imageUrl && (
        <div className="relative aspect-video mb-4">
          <img
            src={imageUrl}
            alt={dailySpecial.name ?? 'Daily Special'}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      )}
      <h4 className="font-semibold mb-2">{dailySpecial.name}</h4>
      {dailySpecial.description && <p className="text-gray-600">{dailySpecial.description}</p>}
    </div>
  )
}
