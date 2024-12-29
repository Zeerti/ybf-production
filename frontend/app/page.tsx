'use client'

import {HeroBanner} from '@/components/shared/HeroBanner'
import NavigationCards from '@/components/home/NavigationCards'
import {InfoCard} from '@/components/home/InfoCard'
import {SeasonalNotification} from '@/components/home/SeasonalNotification'
import {getHomePageNavCards, getHomePageInfoCard, getSeasonalNotification} from '@/lib/sanity'
import {useState, useEffect} from 'react'
import type {HomePageInfoCard as HomePageInfoCardType, HomePageNavCard} from '@/types/sanity/types'
import FindUsCard from '@/components/home/FindUsCard'

export default function HomePage() {
  const [navigationCards, setNavigationCards] = useState<HomePageNavCard[]>([])
  const [infoCard, setInfoCard] = useState<HomePageInfoCardType | null>(null)
  const [seasonalNotification, setSeasonalNotification] = useState<HomePageInfoCardType | null>(
    null,
  )
  const [showNotification, setShowNotification] = useState<boolean>(false)

  useEffect(() => {
    async function fetchData() {
      const [navCards, info, seasonal] = await Promise.all([
        getHomePageNavCards(),
        getHomePageInfoCard(),
        getSeasonalNotification(),
      ])

      setNavigationCards(navCards)
      setInfoCard(info)
      if (seasonal) {
        setSeasonalNotification(seasonal)
        setShowNotification(true)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="flex-grow">
      <HeroBanner
        title="Your Butcher Frank"
        subtitle="Premium Quality Meats & Exceptional Service"
        imagePath="https://images.unsplash.com/photo-1577412032138-bbf147ceb80b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 text-surface-800">
          Serving the Longmont area since 1980
        </h2>
        <h4 className="text-center mb-8 text-surface-800">
          A locally owned business, <span className="font-bold">Patrick Martien</span> and{' '}
          <span className="font-bold">Ron Lamb</span> plus their friendly staff are ready and
          willing to help each customer with one on one service.
        </h4>
        <NavigationCards cards={navigationCards} />
      </div>

      {/* Info Cards Section - optimized for mobile */}
      <section className="container mx-auto px-4 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <FindUsCard />
          <InfoCard card={infoCard} />
        </div>
      </section>

      {/* Longmont Dairy Section */}
      <section className="container mx-auto px-4 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 lg:w-2/5">
              <img
                src="https://longmontdairy.com/images/logo.png"
                alt="Longmont Dairy Delivery"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-3/5">
              <h2 className="text-3xl sm:text-4xl font-bold text-surface-900 mb-6">
                We Carry Longmont Dairy Milk
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg sm:text-xl text-surface-700">
                <li>Whole Milk</li>
                <li>2% Milk</li>
                <li>Fat Free Milk</li>
                <li>Half and Half</li>
                <li>Heavy Cream</li>
                <li>Eggnog (Seasonally)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Notification */}
      {showNotification && seasonalNotification && (
        <SeasonalNotification
          notification={seasonalNotification}
          onClose={() => setShowNotification(false)}
        />
      )}
    </main>
  )
}
