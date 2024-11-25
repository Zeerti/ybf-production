import Link from 'next/link'

type NavigationCardProps = {
  title: string
  description: string
  link: string
  imagePath: string
}

export const NavigationCard = ({title, description, link, imagePath}: NavigationCardProps) => {
  return (
    <Link
      href={link}
      className="block group bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img src={imagePath} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-surface-800 group-hover:text-brand-500 transition-colors">
          {title}
        </h3>
        <p className="text-surface-600">{description}</p>
      </div>
    </Link>
  )
}
