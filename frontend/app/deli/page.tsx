// app/deli/page.tsx
import {HeroBanner} from '@/components/shared/HeroBanner'
import {DeliTable} from '@/components/deli/DeliTable'
import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: 'Deli & Cheese',
  description: 'Fresh deli meats and artisanal cheeses',
}

export default function DeliPage() {
  return (
    <main className="flex-grow">
      <HeroBanner
        title="Deli & Cheese"
        subtitle="Premium deli meats and artisanal cheeses"
        imagePath="/images/landing-hero-image.jpg"
        position={{x: 35, y: 61}}
        overlay={{opacity: 0.2, color: '#DE4F4F'}}
      />
      <DeliTable />
    </main>
  )
}
