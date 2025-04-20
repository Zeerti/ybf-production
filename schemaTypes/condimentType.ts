import {defineField, defineType} from 'sanity'

export const condimentType = defineType({
  name: 'condiment',
  type: 'document',
  title: 'Sandwich Condiment',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required().error('A name is required'),
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Select which category this condiment belongs to',
      options: {
        list: [
          {title: 'Condiments', value: 'condiments'},
          {title: 'Vegetables', value: 'vegetables'},
          {title: 'Peppers', value: 'peppers'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().error('You must select a category'),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      category: 'category',
    },
    prepare(selection) {
      const {title, category} = selection
      const categoryMap = {
        condiments: '🧂 Condiment',
        vegetables: '🥬 Vegetable',
        peppers: '🌶️ Pepper',
        other: '⚪ Other',
      }
      
      const categoryDisplay = category ? (categoryMap[category] || 'Unknown') : 'Uncategorized'

      return {
        title: title || 'Unnamed Condiment',
        subtitle: categoryDisplay,
      }
    },
  },
})