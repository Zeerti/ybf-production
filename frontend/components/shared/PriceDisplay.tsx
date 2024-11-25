type PriceDisplayProps = {
  price: number
  unit?: string
  size?: 'sm' | 'md' | 'lg'
}

export const PriceDisplay = ({price, unit, size = 'md'}: PriceDisplayProps) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }

  return (
    <span className={`${sizeClasses[size]} font-bold text-brand-500`}>
      ${price.toFixed(2)}
      {unit && <span className="text-surface-500 text-sm ml-1">{unit}</span>}
    </span>
  )
}
