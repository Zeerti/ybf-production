// Fix for DailySpecial.tsx
import type {SimplifiedSpecial} from '@/types/simplified-specials'

interface DailySpecialProps {
  dailySpecial: SimplifiedSpecial | null
}

export function DailySpecial({dailySpecial}: DailySpecialProps) {
  if (!dailySpecial || !dailySpecial.name) return null

  return (
    <div className="bg-white/95 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-red-700 mb-4">Special of the Day</h3>
      {dailySpecial.photo?.asset?.url && (
        <div className="relative w-full h-40 mb-4">
          <img
            src={dailySpecial.photo.asset.url}
            alt={dailySpecial.name || 'Daily Special'}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      )}
      <h4 className="font-semibold mb-2">{dailySpecial.name}</h4>
      {dailySpecial.description && <p className="text-gray-600">{dailySpecial.description}</p>}
    </div>
  )
}
