import type {LunchSpecialBottomBanner} from '@/types/sanity/types'

interface DailySpecialsFooterProps {
  banner: LunchSpecialBottomBanner | null
}

export const DailySpecialsFooter: React.FC<DailySpecialsFooterProps> = ({banner}) => {
  if (!banner || !banner.header) {
    return null
  }

  return (
    <div className="fixed bottom-4 inset-x-4 sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:max-w-2xl">
      <div className="bg-brand-500 text-white px-6 py-4 rounded-lg shadow-lg text-center">
        <p className="font-bold text-lg mb-1">{banner.header}</p>
        {banner.subheader && <p>{banner.subheader}</p>}
      </div>
    </div>
  )
}
