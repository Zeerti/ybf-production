// components/specialty-meats/SpecialtyMeatsTable.tsx
'use client'

import {useState, useEffect} from 'react'
import {getSpecialtyMeats, getGameMeats} from '@/lib/sanity'
import type {SpecialtyMeat, GameMeat} from '@/types/sanity/types'

const formatPrice = (price: number, unit: string) => {
  const formattedPrice = price.toFixed(2)
  switch (unit) {
    case 'perPound':
      return `$${formattedPrice}/lb`
    case 'perPackage':
      return `$${formattedPrice}/pkg`
    case 'perItem':
      return `$${formattedPrice}/ea`
    default:
      return `$${formattedPrice}`
  }
}

const SearchBar = ({
  placeholder,
  onChange,
}: {
  placeholder: string
  onChange: (value: string) => void
}) => (
  <div className="p-4">
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-surface-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
    />
  </div>
)

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

type MeatTableProps = {
  items: (SpecialtyMeat | GameMeat)[]
  section: string
  searchTerm: string
}

const MeatTable = ({items, section, searchTerm}: MeatTableProps) => {
  const filteredItems = items.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="bg-white shadow overflow-hidden rounded-lg mb-8">
      <div className="px-6 py-4 bg-brand-50 border-b border-surface-200">
        <h3 className="text-lg font-semibold text-brand-700">{capitalizeFirstLetter(section)}</h3>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        <table className="min-w-full divide-y divide-surface-200">
          <thead className="bg-brand-50 sticky top-0">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-brand-700 uppercase tracking-wider">
                Cut
              </th>
              <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-brand-700 uppercase tracking-wider">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-surface-200">
            {filteredItems.map((item) => (
              <tr key={item._id} className="hover:bg-brand-50 transition-colors">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-surface-900">
                  {item.name}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-brand-600 font-medium text-right">
                  {formatPrice(item.price, item.priceUnit)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const SpecialtyMeatsTable = () => {
  const [specialtyMeats, setSpecialtyMeats] = useState<SpecialtyMeat[]>([])
  const [gameMeats, setGameMeats] = useState<GameMeat[]>([])
  const [searchTerms, setSearchTerms] = useState<{[key: string]: string}>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [specialtyData, gameData] = await Promise.all([getSpecialtyMeats(), getGameMeats()])
        setSpecialtyMeats(specialtyData)
        setGameMeats(gameData)
      } catch (error) {
        console.error('Error fetching meat data:', error)
      }
    }

    fetchData()
  }, [])

  // Group meats by section and combine "other" categories
  const specialtySections = specialtyMeats.reduce(
    (acc, meat) => {
      const section = meat.section || 'other'
      if (!acc[section]) {
        acc[section] = []
      }
      acc[section].push(meat)
      return acc
    },
    {} as {[key: string]: SpecialtyMeat[]},
  )

  const gameSections = gameMeats.reduce(
    (acc, meat) => {
      const section = meat.section || 'other'
      if (!acc[section]) {
        acc[section] = []
      }
      acc[section].push(meat)
      return acc
    },
    {} as {[key: string]: GameMeat[]},
  )

  // Combine "other" categories if they exist
  if (specialtySections.other && gameSections.other) {
    specialtySections.other = [...specialtySections.other, ...gameSections.other]
    delete gameSections.other
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Premium Meats Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-brand-900">Premium Cuts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(specialtySections).map(([section, meats]) => (
            <div key={section}>
              <SearchBar
                placeholder={`Search ${capitalizeFirstLetter(section)}...`}
                onChange={(value) => setSearchTerms({...searchTerms, [section]: value})}
              />
              <MeatTable section={section} items={meats} searchTerm={searchTerms[section] || ''} />
            </div>
          ))}
        </div>
      </section>

      {/* Visual divider */}
      <div className="border-b border-surface-200 my-12"></div>

      {/* Game Meats Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-brand-900">Game Meats</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(gameSections).map(([section, meats]) => (
            <div key={section}>
              <SearchBar
                placeholder={`Search ${capitalizeFirstLetter(section)}...`}
                onChange={(value) => setSearchTerms({...searchTerms, [section]: value})}
              />
              <MeatTable section={section} items={meats} searchTerm={searchTerms[section] || ''} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
