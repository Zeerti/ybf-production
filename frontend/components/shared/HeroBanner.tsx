import Image from 'next/image'

type HeroBannerProps = {
  title: string
  subtitle?: string
  description?: string
  imagePath?: string
  imagePosition?: {
    x?: 'left' | 'center' | 'right'
    y?: 'top' | 'center' | 'bottom'
  }
  overlay?: {
    opacity?: number
    color?: string
  }
}

export const HeroBanner = ({
  title,
  subtitle,
  description,
  imagePath,
  imagePosition = {x: 'center', y: 'center'},
  overlay = {opacity: 0.4, color: '#000'},
}: HeroBannerProps) => {
  const getObjectPosition = () => {
    const x = imagePosition.x || 'center'
    const y = imagePosition.y || 'center'
    return `${x} ${y}`
  }

  return (
    <div className="relative bg-brand-500 text-white">
      {imagePath && (
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            {/* Changed to use unoptimized prop for public directory images */}
            <Image
              src={imagePath}
              alt={`${title} banner background`}
              fill
              unoptimized
              priority
              sizes="100vw"
              className="object-cover"
              style={{objectPosition: getObjectPosition()}}
            />
          </div>
        </div>
      )}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: overlay.color,
          opacity: overlay.opacity,
        }}
      />
      <div className="relative container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-brand-500">
          {title}
        </h1>
        {subtitle && <p className="text-xl font-bold text-brand-500 max-w-2xl mb-4">{subtitle}</p>}
        {description && <p className="text-xl text-brand-100 max-w-2xl">{description}</p>}
      </div>
    </div>
  )
}
