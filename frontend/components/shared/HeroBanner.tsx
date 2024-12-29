type HeroBannerProps = {
  title: string
  subtitle: string
  imagePath?: string
}

export const HeroBanner = ({title, subtitle, imagePath}: HeroBannerProps) => {
  return (
    <div className="relative bg-brand-500 text-white">
      {imagePath && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{backgroundImage: `url(${imagePath})`}}
        />
      )}
      <div className="relative container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">{title}</h1>
        <p className="text-xl text-brand-100 max-w-2xl">{subtitle}</p>
      </div>
    </div>
  )
}
