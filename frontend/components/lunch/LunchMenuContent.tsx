import React from 'react'
import type {
  Sandwich,
  SandwichPrices,
  SandwichMeat,
  SandwichCheese,
  Condiment,
} from '../../types/sanity/types'

interface MenuItemProps {
  title: string
  price?: string | number
  children: React.ReactNode
}

const MenuItem: React.FC<MenuItemProps> = ({title, price, children}) => (
  <div className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold text-red-700">{title}</h3>
      {price && <span className="font-bold text-gray-800">${price}</span>}
    </div>
    {children}
  </div>
)

// Updated to handle color-coding by category
const CondimentsList: React.FC<{condiments: Condiment[]}> = ({condiments}) => {
  // Create arrays for each category
  const condimentsInCategory = condiments
    .filter(c => c.category === 'condiments')
    .map(c => ({ name: c.name || '', category: 'condiments' }));
    
  const vegetablesInCategory = condiments
    .filter(c => c.category === 'vegetables')
    .map(c => ({ name: c.name || '', category: 'vegetables' }));
    
  const peppersInCategory = condiments
    .filter(c => c.category === 'peppers')
    .map(c => ({ name: c.name || '', category: 'peppers' }));
    
  const othersInCategory = condiments
    .filter(c => c.category === 'other' || !c.category)
    .map(c => ({ name: c.name || '', category: 'other' }));
  
  // Combine all categories in the specific order we want
  const orderedCondiments = [
    ...condimentsInCategory,
    ...vegetablesInCategory,
    ...peppersInCategory,
    ...othersInCategory
  ];

  // Define subtle background colors for each category
  const getCategoryColor = (category: string): string => {
    switch(category) {
      case 'condiments':
        return 'border-l-2 border-l-yellow-200 pl-2';
      case 'vegetables':
        return 'border-l-2 border-l-green-200 pl-2';
      case 'peppers':
        return 'border-l-2 border-l-red-200 pl-2';
      case 'other':
        return 'border-l-2 border-l-gray-200 pl-2';
      default:
        return '';
    }
  };
  
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {orderedCondiments.map((item, index) => (
        <li key={index} className={`text-gray-700 ${getCategoryColor(item.category)}`}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

// Standard options list for other sections
const OptionsList: React.FC<{items: string[]}> = ({items}) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {items.map((item, index) => (
      <li key={index} className="text-gray-700">
        {item}
      </li>
    ))}
  </ul>
);

interface LunchMenuContentProps {
  sandwiches: Sandwich[]
  prices: SandwichPrices
  meats: SandwichMeat[]
  cheeses: SandwichCheese[]
  condiments: Condiment[]
}

export const LunchMenuContent: React.FC<LunchMenuContentProps> = ({
  sandwiches,
  prices,
  meats,
  cheeses,
  condiments,
}) => {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-white shadow-lg rounded-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-6">Lunch Menu</h2>

          <MenuItem title="Sandwiches">
            <p className="mb-2">
              White or Wheat: 4"{' '}
              <span className="font-bold">${prices.fourInchPrice?.toFixed(2)}</span> - 6"{' '}
              <span className="font-bold">${prices.sixInchPrice?.toFixed(2)}</span> - 8"{' '}
              <span className="font-bold">${prices.eightInchPrice?.toFixed(2)}</span>
            </p>
            <p className="mb-3">
              Marbled Rye: 1/2 sandwich{' '}
              <span className="font-bold">${prices.halfRyePrice?.toFixed(2)}</span> - Whole{' '}
              <span className="font-bold">${prices.wholeRyePrice?.toFixed(2)}</span>
            </p>
            <p className="text-sm italic bg-red-50 text-gray-700 p-2 rounded">
              Kosher Pickle slice included!
            </p>
          </MenuItem>

          <MenuItem title="Meat Options">
            <OptionsList items={meats.map((meat) => meat.name ?? '')} />
          </MenuItem>

          <MenuItem title="Cheese Options">
            <OptionsList items={cheeses.map((cheese) => cheese.name ?? '')} />
          </MenuItem>

          <MenuItem title="Toppings & Condiments">
            <CondimentsList condiments={condiments} />
          </MenuItem>

          {sandwiches.map((sandwich) => (
            <MenuItem key={sandwich._id} title={sandwich.name ?? ''}>
              <p className="text-gray-700">{sandwich.description}</p>
              {sandwich.ingredients && sandwich.ingredients.length > 0 && (
                <p className="text-gray-600 text-sm mt-2">
                  Includes: {sandwich.ingredients.join(', ')}
                </p>
              )}
              <p className="text-gray-600 text-sm mt-1">
                Available on: {sandwich.availableBreads?.join(', ')}
              </p>
            </MenuItem>
          ))}

          <div className="mt-6 bg-red-50 p-4 rounded text-sm italic text-black">
            <p>Sandwich orders Tuesday - Friday 8:00am - 5:30pm Saturday 8:00am -5:00 pm</p>
            <p>(inch size approximate)</p>
          </div>
        </div>
      </div>
    </div>
  )
}