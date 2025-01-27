import type {SimplifiedSpecial} from '@/types/simplified-specials'

interface WeeklySpecialProps {
  weeklySpecial: SimplifiedSpecial | null
}

export const WeeklySpecial: React.FC<WeeklySpecialProps> = ({weeklySpecial}) => {
  if (!weeklySpecial) {
    return null
  }

  const {name, description, photo} = weeklySpecial

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold text-red-700 mb-4">Special of the Week</h3>
      {photo?.asset?.url && (
        <img
          src={photo.asset.url}
          alt={name ?? 'Special of the Week'}
          className="w-full rounded-lg mb-4"
        />
      )}
      {name && <h4 className="font-semibold mb-2">{name}</h4>}
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  )
}
