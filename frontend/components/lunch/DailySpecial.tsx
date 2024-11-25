import Image from 'next/image'

interface DailySpecialProps {
  dailySpecial: {
    name: string
    description?: string
    photo?: {
      asset?: {
        url?: string
      }
    }
  }
}

export function DailySpecial({dailySpecial}: DailySpecialProps) {
  if (!dailySpecial) return null

  return (
    <div className="bg-white/95 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-red-700 mb-4">Special of the Day</h3>
      {dailySpecial.photo?.asset?.url && (
        <div className="relative w-full h-40 mb-4">
          <img
            src={dailySpecial.photo.asset.url}
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
