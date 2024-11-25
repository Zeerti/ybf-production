import {HeroBanner} from '@/components/shared/HeroBanner'
import {NavigationCard} from '@/components/home/NavigationCard'
import {InfoCard} from '@/components/home/InfoCard'

export default function HomePage() {
  const navigationCards = [
    {
      title: 'Meat Bundles',
      description: 'Save big with our curated meat bundles perfect for any family',
      link: '/bundles',
      imagePath: '/api/placeholder/800/400',
    },
    {
      title: 'Deli & Cheese',
      description: 'Fresh sliced meats and artisanal cheeses',
      link: '/deli',
      imagePath: '/api/placeholder/800/400',
    },
    {
      title: 'Specialty Meats',
      description: 'Premium cuts and game meats for special occasions',
      link: '/specialty-meats',
      imagePath: '/api/placeholder/800/400',
    },
    {
      title: 'Lunch Specials',
      description: 'Daily made sandwiches and hot lunch options',
      link: '/lunch',
      imagePath: '/api/placeholder/800/400',
    },
  ]

  return (
    <main className="flex-grow">
      <HeroBanner
        title="Welcome to Your Butcher Frank"
        description="Premium cuts, exceptional service, serving the Longmont area since 1980"
        imagePath="/api/placeholder/1920/1080"
      />

      {/* Centered text section - now responsive */}
      <div className="text-center py-8 sm:py-12 bg-white px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-900 mb-3 sm:mb-4">
          Serving the Longmont Area since 1980
        </h1>
        <div className="space-y-2">
          <p className="text-lg sm:text-xl text-surface-600">A locally owned business 123ABC</p>
        </div>
      </div>

      {/* Navigation Cards Section - already responsive but optimized */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {navigationCards.map((card, index) => (
            <NavigationCard
              key={index}
              title={card.title}
              description={card.description}
              link={card.link}
              imagePath={card.imagePath}
            />
          ))}
        </div>
      </section>

      {/* Info Cards Section - optimized for mobile */}
      <section className="container mx-auto px-4 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <InfoCard title="Find Us">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.5704709393035!2d-105.10592622309066!3d40.174116171479774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf972bcfdd727%3A0x2f03fa33ec9282d3!2sYour%20Butcher%20Frank!5e0!3m2!1sen!2sus!4v1732507997075!5m2!1sen!2sus"
                className="w-full h-full rounded-lg"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="space-y-2 text-surface-600">
              <p className="text-sm sm:text-base">900 Coffman St.</p>
              <p className="text-sm sm:text-base">Longmont, CO 80501</p>
              <p className="text-sm sm:text-base">Phone: (303) 772-0754</p>
            </div>
          </InfoCard>

          <InfoCard title="About Our Store">
            <div className="space-y-4 text-surface-600">
              <p className="text-sm sm:text-base">
                Family owned and operated since 1950, Your Butcher Frank has been serving our
                community with the finest quality meats and exceptional service for over 70 years.
              </p>
              <div>
                <h4 className="font-semibold text-surface-800 mb-2">Store Hours:</h4>
                <ul className="space-y-1 text-sm sm:text-base">
                  <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 8:00 AM - 5:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-surface-800 mb-2">Special Services:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                  <li>Custom Cuts Available</li>
                  <li>Special Orders Welcome</li>
                  <li>Holiday Pre-Orders</li>
                  <li>Catering Services</li>
                </ul>
              </div>
            </div>
          </InfoCard>
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
    </main>
  )
}
