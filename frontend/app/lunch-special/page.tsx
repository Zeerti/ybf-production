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
        subtitle="Fresh made sandwiches and daily specials"
        imagePath="/images/landing-hero-image.jpg"
        position={{x: 35, y: 61}}
        overlay={{opacity: 0.2, color: '#DE4F4F'}}
      />
      <div className="py-8">
        <DailySpecial />
        <WeeklySpecial />
      </div>
    </main>
  )
}
