type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning'
}

export const Badge = ({children, variant = 'default'}: BadgeProps) => {
  const variantClasses = {
    default: 'bg-brand-100 text-brand-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
  }

  return (
    <span className={`${variantClasses[variant]} px-2 py-1 rounded-full text-xs font-medium`}>
      {children}
    </span>
  )
}
