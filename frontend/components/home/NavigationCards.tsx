import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type {HomePageNavCard} from '../../types/sanity/types'
import {getImageUrl} from '../../lib/sanity'

interface NavigationCardsProps {
  cards: HomePageNavCard[]
}

export default function NavigationCards({cards}: NavigationCardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {cards.map((card) => (
        <Link
          key={card._id}
          href={card.navigationLink ?? '#'}
          className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-2 hover:border-brand-500"
        >
          {card.image && (
            <div className="relative h-32 w-full">
              <Image
                src={getImageUrl(card.image) || ''}
                alt={card.title || 'Navigation card image'}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          )}
          <div className="p-3">
            {card.title && <h3 className="text-lg font-semibold mb-1">{card.title}</h3>}
            {card.subtitle && <p className="text-sm text-gray-600">{card.subtitle}</p>}
          </div>
        </Link>
      ))}
    </div>
  )
}
