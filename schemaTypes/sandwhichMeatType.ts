import {defineField, defineType} from 'sanity'

export const sandwichMeatType = defineType({
  name: 'sandwichMeat',
  type: 'document',
  title: 'Sandwich Meat',
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
