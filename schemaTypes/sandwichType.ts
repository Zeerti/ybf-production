import {defineField, defineType} from 'sanity'

export const sandwichType = defineType({
  name: 'sandwich',
  type: 'document',
  title: 'Named Sandwiches',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Sandwich Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'availableBreads',
      type: 'array',
      title: 'Available Bread Types',
      description: 'Select which bread types this sandwich can be made with',
      validation: (rule) => rule.required().min(1),
      of: [
        {
          type: 'string',
          options: {
            list: [
              {title: 'White', value: 'white'},
              {title: 'Wheat', value: 'wheat'},
              {title: 'Marbled Rye', value: 'rye'},
              {title: 'Plain Bagel', value: 'bagel'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      description: 'List the ingredients that come on this sandwich',
      of: [{type: 'string'}],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Optional description of the sandwich',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      breads: 'availableBreads',
      media: 'image',
    },
    prepare(selection) {
      const {title, breads = [], media} = selection
      const breadTypes = breads
        .map((bread: string) => {
          switch (bread) {
            case 'white':
              return 'White'
            case 'wheat':
              return 'Wheat'
            case 'rye':
              return 'Rye'
            default:
              return bread
          }
        })
        .join(', ')

      return {
        title: title,
        subtitle: `Available on: ${breadTypes}`,
        media: media,
      }
    },
  },
})
