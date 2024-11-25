export const DailySpecial = () => {
  const dailySpecials = [
    {
      name: 'Hot Roast Beef Sandwich',
      price: 12.99,
      description:
        'Tender roast beef served hot on a fresh roll with au jus, horseradish sauce, and your choice of cheese. Comes with fries or coleslaw.',
      calories: '780 cal',
      availableUntil: '3:00 PM',
    },
    {
      name: 'Homemade Meatball Sub',
      price: 11.99,
      description:
        'Three large Italian meatballs in marinara sauce, melted provolone, on a toasted garlic roll. Served with chips and a pickle.',
      calories: '850 cal',
      availableUntil: '3:00 PM',
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-brand-500 mb-4">Today's Hot Specials</h2>
        <div className="space-y-6">
          {dailySpecials.map((special, index) => (
            <div key={index} className="border-b border-surface-200 pb-4 last:border-b-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-surface-800">{special.name}</h3>
                <span className="text-lg font-bold text-brand-500">${special.price}</span>
              </div>
              <p className="text-surface-600 mb-2">{special.description}</p>
              <div className="flex justify-between text-sm text-surface-500">
                <span>{special.calories}</span>
                <span>Available until {special.availableUntil}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
