// app/lunch/page.tsx
import {Metadata} from 'next'
import {HeroBanner} from '../../components/shared/HeroBanner'
import {LunchMenuContent} from '../../components/lunch/LunchMenuContent'
import {DailySpecialsFooter} from '@/components/lunch/DailySpecialsFooter'
import {WeeklySpecial} from '@/components/lunch/WeeklySpecial'
import {DailySpecial} from '@/components/lunch/DailySpecial'
import {getLunchMenuData} from '../../lib/sanity'
import type {LunchMenuData} from '../../lib/sanity'
import {projectId, dataset} from '@/lib/sanity'

export const metadata: Metadata = {
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
        imagePath="/images/lunch-hero.jpg"
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-grow">
            <LunchMenuContent
              sandwiches={data.sandwiches}
              prices={data.prices}
              meats={data.meats}
              cheeses={data.cheeses}
              condiments={data.condiments}
            />
          </div>

          <div className="lg:w-80 space-y-8">
            {data.dailySpecial && data.dailySpecial.name && (
              <DailySpecial
                dailySpecial={{
                  ...data.dailySpecial,
                  photo: data.dailySpecial.photo
                    ? {
                        asset: {
                          url: data.dailySpecial?.photo?.asset?._ref
                            ? `https://cdn.sanity.io/images/${projectId}/${dataset}/${data.dailySpecial.photo.asset._ref
                                .replace('image-', '')
                                .replace('-jpg', '.jpg')}`
                            : undefined,
                        },
                      }
                    : undefined,
                }}
              />
            )}
            <WeeklySpecial weeklySpecial={data.weeklySpecial} />
          </div>
        </div>
      </div>

      <DailySpecialsFooter banner={data.bottomBanner} />
    </main>
  )
}
