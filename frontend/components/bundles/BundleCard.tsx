'use client'

type BundleCardProps = {
  title: string
  price: number
  items: string[]
  imageUrl?: string
}

export const BundleCard = ({title, price, items, imageUrl}: BundleCardProps) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden border-2 border-transparent hover:border-brand-500 transition-colors">
      {imageUrl && (
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-48 object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-surface-800">{title}</h3>
        <p className="text-2xl font-bold text-brand-500 mb-4">${price.toFixed(2)}</p>
        <ul className="list-disc pl-5 space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-surface-600">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
