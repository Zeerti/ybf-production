export const WeeklySpecial = () => {
  const weeklyBundles = [
    {
      name: 'Family Lunch Pack',
      price: 39.99,
      serves: '4-6',
      includes: [
        '1 lb Premium Deli Meat (Turkey, Ham, or Roast Beef)',
        '1/2 lb Swiss or American Cheese',
        '1 lb Homemade Potato Salad',
        '6 Fresh Kaiser Rolls',
        'Lettuce, Tomato, & Condiments',
        '6 Chocolate Chip Cookies',
      ],
      validDays: 'Monday-Friday',
      orderAhead: '2 hours notice required',
    },
    {
      name: 'Office Meeting Bundle',
      price: 89.99,
      serves: '10-12',
      includes: [
        'Sandwich Platter (12 half sandwiches)',
        '2 lbs Deli Salads (Choice of Potato, Macaroni, or Coleslaw)',
        'Pickle Tray',
        '12 Bags of Chips',
        '12 Fresh Baked Cookies',
        'Plates, napkins, and utensils included',
      ],
      validDays: 'Monday-Friday',
      orderAhead: '24 hours notice required',
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-brand-500 mb-4">Weekly Lunch Bundles</h2>
        <div className="grid gap-6">
          {weeklyBundles.map((bundle, index) => (
            <div
              key={index}
              className="border border-surface-200 rounded-lg p-4 hover:border-brand-200 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-surface-800">{bundle.name}</h3>
                <div className="text-right">
                  <span className="block text-lg font-bold text-brand-500">${bundle.price}</span>
                  <span className="text-sm text-surface-500">Serves {bundle.serves}</span>
                </div>
              </div>
              <ul className="list-disc list-inside mb-3 text-surface-600 space-y-1">
                {bundle.includes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <div className="text-sm text-surface-500 border-t border-surface-200 pt-2">
                <p>Available: {bundle.validDays}</p>
                <p className="font-medium text-brand-600">{bundle.orderAhead}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
