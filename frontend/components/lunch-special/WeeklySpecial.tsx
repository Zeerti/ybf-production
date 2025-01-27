import type {WeeklySpecial as WeeklySpecialType} from '@/types/sanity/types'
import {getImageUrl} from '@/lib/sanity'

interface WeeklySpecialProps {
  weeklySpecial: WeeklySpecialType | null
}

export const WeeklySpecial: React.FC<WeeklySpecialProps> = ({weeklySpecial}) => {
  if (!weeklySpecial) {
    return null
  }

  const {name, description, photo} = weeklySpecial

  return (
    <div className="bg-white shadow rounded-lg p-6">
      {/* Debug Panel */}
      <div className="mb-4 p-4 bg-gray-100 rounded text-xs">
        <pre className="whitespace-pre-wrap">
          {JSON.stringify(
            {
              name,
              description,
              hasPhoto: !!photo,
              photoData: photo,
              imageUrl: photo ? getImageUrl(photo) : null,
            },
            null,
            2,
          )}
        </pre>
      </div>

      <h3 className="text-xl font-semibold text-red-700 mb-4">Special of the Week</h3>
      {photo?.asset && (
        <img
          src={getImageUrl(photo) ?? ''}
          alt={name ?? 'Special of the Week'}
          className="w-full rounded-lg mb-4"
        />
      )}
      {name && <h4 className="font-semibold mb-2">{name}</h4>}
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  )
}
