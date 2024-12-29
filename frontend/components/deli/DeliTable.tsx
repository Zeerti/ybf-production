'use client'

import {useState, useEffect} from 'react'
import {getDeliMeats, getCheeses, getDeliSalads} from '@/lib/sanity'
import type {ColdCuts, Cheese, DeliSalad} from '@/types/sanity/types'

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

export const DeliTable = () => {
  // Data states
  const [deliMeats, setDeliMeats] = useState<ColdCuts[]>([])
  const [cheeses, setCheeses] = useState<Cheese[]>([])
  const [deliSalads, setDeliSalads] = useState<DeliSalad[]>([])

  // Search states
  const [meatsSearch, setMeatsSearch] = useState('')
  const [cheeseSearch, setCheeseSearch] = useState('')
  const [saladsSearch, setSaladsSearch] = useState('')

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [meatsData, cheesesData, saladsData] = await Promise.all([
          getDeliMeats(),
          getCheeses(),
          getDeliSalads(),
        ])
        setDeliMeats(meatsData)
        setCheeses(cheesesData)
        setDeliSalads(saladsData)
      } catch (error) {
        console.error('Error fetching deli data:', error)
      }
    }

    fetchData()
  }, [])

  // Filter functions
  const filteredMeats = deliMeats.filter((meat) =>
    meat.name?.toLowerCase().includes(meatsSearch.toLowerCase()),
  )
  const filteredCheeses = cheeses.filter((cheese) =>
    cheese.name?.toLowerCase().includes(cheeseSearch.toLowerCase()),
  )
  const filteredSalads = deliSalads.filter((salad) =>
    salad.name?.toLowerCase().includes(saladsSearch.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Deli Meats Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-brand-900">Cold Cuts</h2>
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <SearchBar placeholder="Search cold cuts..." onChange={setMeatsSearch} />
            <div className="max-h-[400px] overflow-y-auto">
              <table className="min-w-full divide-y divide-surface-200">
                <thead className="bg-brand-50 sticky top-0">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-brand-700 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-brand-700 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-surface-200">
                  {filteredMeats.map((meat) => (
                    <tr key={meat._id} className="hover:bg-brand-50 transition-colors">
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-surface-900">
                        {meat.name}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-brand-600 font-medium text-right">
                        {formatPrice(meat.price || 0, meat.priceUnit || '')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cheese Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-brand-900">Cheese</h2>
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <SearchBar placeholder="Search cheese..." onChange={setCheeseSearch} />
            <div className="max-h-[400px] overflow-y-auto">
              <table className="min-w-full divide-y divide-surface-200">
                <thead className="bg-brand-50 sticky top-0">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-brand-700 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-brand-700 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-surface-200">
                  {filteredCheeses.map((cheese) => (
                    <tr key={cheese._id} className="hover:bg-brand-50 transition-colors">
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-surface-900">
                        {cheese.name}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-brand-600 font-medium text-right">
                        {formatPrice(cheese.price || 0, cheese.priceUnit || '')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Deli Salads Section */}
        <section className="lg:col-span-2 lg:max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-brand-900">Deli Salads</h2>
          <div className="bg-white shadow overflow-hidden rounded-lg">
            <SearchBar placeholder="Search deli salads..." onChange={setSaladsSearch} />
            <div className="max-h-[400px] overflow-y-auto">
              <table className="min-w-full divide-y divide-surface-200">
                <thead className="bg-brand-50 sticky top-0">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-brand-700 uppercase tracking-wider">
                      Item
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-right text-xs font-medium text-brand-700 uppercase tracking-wider">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-surface-200">
                  {filteredSalads.map((salad) => (
                    <tr key={salad._id} className="hover:bg-brand-50 transition-colors">
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-surface-900">
                        {salad.name}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-brand-600 font-medium text-right">
                        {formatPrice(salad.price || 0, salad.priceUnit || '')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
