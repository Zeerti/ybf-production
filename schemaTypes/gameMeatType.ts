import {defineField, defineType} from 'sanity'

export const gameMeatType = defineType({
  name: 'gameMeat',
  type: 'document',
  title: 'Game Meats',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Game Meat Product Name',
      description: 'Enter the name of the game meat product',
      validation: (rule) => rule.required().error('You must set the name'),
    }),
    defineField({
      name: 'section',
      type: 'string',
      title: 'Game Meat Section',
      description: 'Select the section this game meat belongs to',
      options: {
        list: [
          {title: 'Game Birds', value: 'gameBirds'},
          {title: 'Venison', value: 'venison'},
          {title: 'Buffalo', value: 'buffalo'},
          {title: 'Elk', value: 'elk'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().error('You must select a section'),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Enter the price of the game meat product',
      validation: (rule) => rule.required().error('You must add a price'),
    }),
    defineField({
      name: 'priceUnit',
      type: 'string',
      title: 'Price Unit',
      description: 'Specify whether the price is per pound or per package',
      options: {
        list: [
          {title: 'Per Pound', value: 'perPound'},
          {title: 'Per Package', value: 'perPackage'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required().error('You must specify the price unit'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Product Description',
      description: 'Provide a brief description of the game meat product',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      priceUnit: 'priceUnit',
      media: 'image',
    },
    prepare(selection) {
      const {title, price, priceUnit, media} = selection
      const priceUnitDisplay = priceUnit === 'perPound' ? 'per pound' : 'per package'
      return {
        title: title,
        subtitle: `$${price.toFixed(2)} ${priceUnitDisplay}`,
        media: media,
      }
    },
  },
})
