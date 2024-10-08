import {defineField, defineType} from 'sanity'

export const condimentType = defineType({
  name: 'condiment',
  type: 'document',
  title: 'Sandwich Condiment',
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
