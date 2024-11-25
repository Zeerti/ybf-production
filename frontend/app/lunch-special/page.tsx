import {HeroBanner} from '@/components/shared/HeroBanner'
import {DailySpecial} from '@/components/lunch-special/DailySpecial'
import {WeeklySpecial} from '@/components/lunch-special/WeeklySpecial'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Lunch Specials',
  description: 'Daily lunch specials and sandwiches',
}

export default function LunchPage() {
  return (
    <main className="flex-grow">
      <HeroBanner
        title="Lunch Specials"
        description="Fresh made sandwiches and daily specials"
        imagePath="/images/lunch-hero.jpg"
      />
      <div className="py-8">
        <DailySpecial />
        <WeeklySpecial />
      </div>
    </main>
  )
}
