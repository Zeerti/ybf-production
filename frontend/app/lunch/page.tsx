import {HeroBanner} from '../../components/shared/HeroBanner'
import {LunchMenuContent} from '../../components/lunch/LunchMenuContent'
import {DailySpecialsFooter} from '@/components/lunch/DailySpecialsFooter'
import {WeeklySpecial} from '@/components/lunch/WeeklySpecial'
import {DailySpecial} from '@/components/lunch/DailySpecial'
import {getLunchMenuData} from '../../lib/sanity'
import type {LunchMenuData} from '../../lib/sanity'

export const metadata = {
  title: 'Lunch Menu',
  description: "Fresh sandwiches and daily specials at Frank's Meat Market",
}

// Disable Next.js cache for this route
export const revalidate = 1800;
export const dynamic = 'force-dynamic';

// Updated version of the LunchPage component
export default async function LunchPage(): Promise<JSX.Element> {
  const data: LunchMenuData = await getLunchMenuData()

  // Check if we have any specials to display
  const hasSpecials =
    (data.dailySpecial && Object.keys(data.dailySpecial).length > 0) ||
    (data.weeklySpecial && Object.keys(data.weeklySpecial).length > 0)

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
        {/* If we have specials, use the three-column layout on large screens */}
        {hasSpecials ? (
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Mobile-only specials section */}
            <div className="lg:hidden mb-8 space-y-4">
              {data.dailySpecial && Object.keys(data.dailySpecial).length > 0 && (
                <DailySpecial dailySpecial={data.dailySpecial} />
              )}
              {data.weeklySpecial && Object.keys(data.weeklySpecial).length > 0 && (
                <WeeklySpecial weeklySpecial={data.weeklySpecial} />
              )}
            </div>

            {/* Main lunch menu content */}
            <div className="lg:col-span-2 space-y-8">
              <LunchMenuContent
                sandwiches={data.sandwiches || []}
                prices={data.prices || {}}
                meats={data.meats || []}
                cheeses={data.cheeses || []}
                condiments={data.condiments || []}
              />
            </div>

            {/* Desktop-only specials section */}
            <div className="hidden lg:block space-y-4">
              {data.dailySpecial && Object.keys(data.dailySpecial).length > 0 && (
                <DailySpecial dailySpecial={data.dailySpecial} />
              )}
              {data.weeklySpecial && Object.keys(data.weeklySpecial).length > 0 && (
                <WeeklySpecial weeklySpecial={data.weeklySpecial} />
              )}
            </div>
          </div>
        ) : (
          /* If no specials, use a centered layout */
          <div className="max-w-3xl mx-auto">
            <LunchMenuContent
              sandwiches={data.sandwiches || []}
              prices={data.prices || {}}
              meats={data.meats || []}
              cheeses={data.cheeses || []}
              condiments={data.condiments || []}
            />
          </div>
        )}
      </div>

      {data.bottomBanner && data.bottomBanner.header && (
        <DailySpecialsFooter banner={data.bottomBanner} />
      )}
    </main>
  )
}
