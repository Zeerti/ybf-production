import {HeroBanner} from '../../components/shared/HeroBanner'
import {LunchMenuContent} from '../../components/lunch/LunchMenuContent'
import {DailySpecialsFooter} from '@/components/lunch/DailySpecialsFooter'
import {WeeklySpecial} from '@/components/lunch/WeeklySpecial'
import {DailySpecial} from '@/components/lunch/DailySpecial'
import {getLunchMenuData} from '../../lib/sanity'
import type {LunchMenuData} from '../../lib/sanity'
import {projectId, dataset} from '@/lib/sanity'

export const metadata = {
  title: 'Lunch Menu',
  description: "Fresh sandwiches and daily specials at Frank's Meat Market",
}

export default async function LunchPage(): Promise<JSX.Element> {
  const data: LunchMenuData = await getLunchMenuData()

  return (
    <main className="flex-grow pb-24">
      <HeroBanner
        title="Lunch Menu"
        subtitle="Fresh made sandwiches and daily specials"
        imagePath="/images/landing-hero-image.jpg"
        position={{x: 35, y: 61}}
        overlay={{opacity: 0.2, color: '#DE4F4F'}}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Specials are shown first on mobile, side by side if there's space */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.dailySpecial && data.dailySpecial.name && (
            <DailySpecial dailySpecial={data.dailySpecial} />
          )}
          <WeeklySpecial weeklySpecial={data.weeklySpecial} />
        </div>

        {/* Main lunch menu content */}
        <div className="space-y-8">
          <LunchMenuContent
            sandwiches={data.sandwiches}
            prices={data.prices}
            meats={data.meats}
            cheeses={data.cheeses}
            condiments={data.condiments}
          />
        </div>
      </div>

      <DailySpecialsFooter banner={data.bottomBanner} />
    </main>
  )
}
