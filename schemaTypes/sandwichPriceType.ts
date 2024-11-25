import {defineField, defineType} from 'sanity'

// Schema for storing global sandwich prices
export const sandwichPricesType = defineType({
  name: 'sandwichPrices',
  type: 'document',
  title: 'Sandwich Prices',
  fields: [
    defineField({
      name: 'fourInchPrice',
      type: 'number',
      title: '4" Sandwich Price',
      validation: (rule) => rule.required().precision(2).positive(),
    }),
    defineField({
      name: 'sixInchPrice',
      type: 'number',
      title: '6" Sandwich Price',
      validation: (rule) => rule.required().precision(2).positive(),
    }),
    defineField({
      name: 'eightInchPrice',
      type: 'number',
      title: '8" Sandwich Price',
      validation: (rule) => rule.required().precision(2).positive(),
    }),
    defineField({
      name: 'halfRyePrice',
      type: 'number',
      title: '1/2 Rye Sandwich Price',
      validation: (rule) => rule.required().precision(2).positive(),
    }),
    defineField({
      name: 'wholeRyePrice',
      type: 'number',
      title: 'Whole Rye Sandwich Price',
      validation: (rule) => rule.required().precision(2).positive(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Sandwich Prices',
      }
    },
  },
})
