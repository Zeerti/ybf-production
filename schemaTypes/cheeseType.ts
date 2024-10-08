import {defineField, defineType} from 'sanity'

export const cheeseType = defineType({
  name: 'cheese',
  type: 'document',
  title: 'Cheeses',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Cheese Name',
      description: 'Enter the name of the cheese',
      validation: (rule) => rule.required().error('You must set the name'),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Enter the price of the cheese',
      validation: (rule) => rule.required().error('You must add a price'),
    }),
    defineField({
      name: 'priceUnit',
      type: 'string',
      title: 'Price Unit',
      description: 'Specify whether the price is per pound, per package, or per item',
      options: {
        list: [
          {title: 'Per Pound', value: 'perPound'},
          {title: 'Per Package', value: 'perPackage'},
          {title: 'Per Item', value: 'perItem'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().error('You must specify the price unit'),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      priceUnit: 'priceUnit',
    },
    prepare(selection) {
      const {title, price, priceUnit} = selection
      const priceUnitMap: {[key: string]: string} = {
        perPound: '/lb',
        perPackage: '/pkg',
        perItem: '/item',
      }
      const priceUnitDisplay = priceUnitMap[priceUnit] || ''
      return {
        title: title,
        subtitle: `$${price.toFixed(2)}${priceUnitDisplay}`,
      }
    },
  },
})
