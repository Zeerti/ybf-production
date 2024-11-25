type InfoCardProps = {
  title: string
  content: string
}

export const InformationCard = ({title, content}: InfoCardProps) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{content}</p>
    </div>
  )
}
