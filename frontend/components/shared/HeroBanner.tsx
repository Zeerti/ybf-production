import Image from 'next/image'

interface Position {
  x?: number // Percentage from 0 to 100
  y?: number // Percentage from 0 to 100
}

interface HeroBannerProps {
  title: string
  subtitle?: string
  description?: string
  imagePath?: string
  position?: Position
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
  position = {x: 50, y: 50}, // Center by default
  overlay = {opacity: 0.4, color: '#000'},
}: HeroBannerProps) => {
  const getObjectPosition = () => {
    const x = position.x ?? 50
    const y = position.y ?? 50
    return `${x}% ${y}%`
  }

  return (
    <div className="relative bg-brand-500 text-white">
      {imagePath && (
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <img
              src={imagePath}
              alt={`${title} banner background`}
              className="absolute w-full h-full object-cover"
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
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-white">
          {title}
        </h1>
        {subtitle && <p className="text-xl font-bold text-white max-w-2xl mb-4">{subtitle}</p>}
        {description && <p className="text-xl text-brand-100 max-w-2xl">{description}</p>}
      </div>
    </div>
  )
}
