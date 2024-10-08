import {defineField, defineType} from 'sanity'

export const bundleType = defineType({
  name: 'bundle',
  type: 'document',
  title: 'Other Bundles',
  fields: [
    defineField({
      name: 'weight',
      type: 'number',
      title: 'Weight in pounds',
      description: 'Sets the weight of the bundle',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Sets the price of the bundle',
    }),
    defineField({
      name: 'bundleItems',
      type: 'array',
      title: 'Items in Bundle',
      description: 'Sets the list of items that are in a bundle',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    select: {
      weight: 'weight',
      price: 'price',
      items: 'bundleItems',
      media: 'image',
    },
    prepare(selection) {
      const {weight, price, items} = selection
      const itemCount = items ? items.length : 0
      const itemSummary =
        items && items.length > 0
          ? items.slice(0, 3).join(', ') + (items.length > 3 ? '...' : '')
          : 'No items'

      return {
        title: `${weight}lb Bundle - $${price}`,
        subtitle: `${itemCount} items: ${itemSummary}`,
      }
    },
  },
})
