type InfoCardProps = {
  title: string
  children: React.ReactNode
}

export const InfoCard = ({title, children}: InfoCardProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-brand-500">{title}</h3>
        {children}
      </div>
    </div>
  )
}
