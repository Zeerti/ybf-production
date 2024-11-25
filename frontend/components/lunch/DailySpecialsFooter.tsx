import type {LunchSpecialBottomBanner} from '@/types/sanity/types'

interface DailySpecialsFooterProps {
  banner: LunchSpecialBottomBanner | null
}

export const DailySpecialsFooter: React.FC<DailySpecialsFooterProps> = ({banner}) => {
  if (!banner || !banner.header) {
    return null
  }

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-brand-500 text-white px-6 py-4 rounded-lg shadow-lg text-center w-full max-w-2xl mx-4">
      <p className="font-bold text-lg mb-1">{banner.header}</p>
      {banner.subheader && <p>{banner.subheader}</p>}
    </div>
  )
}
