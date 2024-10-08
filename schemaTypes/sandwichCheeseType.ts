import {defineField, defineType} from 'sanity'

export const sandwichCheeseType = defineType({
  name: 'sandwichCheese',
  type: 'document',
  title: 'Sandwich Cheese',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const {name} = selection

      return {
        title: `${name}`,
      }
    },
  },
})
