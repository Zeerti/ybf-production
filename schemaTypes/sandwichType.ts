import {defineField, defineType} from 'sanity'

export const sandwichType = defineType({
  name: 'sandwich',
  type: 'document',
  title: 'Sandwiches',
  fields: [
    defineField({
      name: 'isNamedSandwich',
      type: 'boolean',
      title: 'Named Sandwich',
      description: 'Is this a named sandwich?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Sandwich Name',
      hidden: ({document}) => !document?.isNamedSandwich,
      validation: (rule) =>
        rule.custom((name, context) => {
          if (context.document?.isNamedSandwich && !name) {
            return 'Named sandwiches must have a name'
          }
          return true
        }),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (rule) =>
        rule
          .required()
          .precision(2)
          .positive()
          .custom((price) => {
            if (typeof price === 'number' && !Number.isFinite(price)) {
              return 'Price must be a finite number'
            }
            return true
          }),
    }),
    defineField({
      name: 'breadType',
      type: 'string',
      title: 'Bread Type',
      options: {
        list: [
          {title: 'White', value: 'white'},
          {title: 'Whole Wheat', value: 'wholeWheat'},
          {title: 'Rye', value: 'rye'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'size',
      type: 'string',
      title: 'Size',
      options: ({document}) => ({
        list:
          document?.breadType === 'rye'
            ? [
                {title: 'Half', value: 'half'},
                {title: 'Whole', value: 'whole'},
              ]
            : [
                {title: '4"', value: '4'},
                {title: '6"', value: '6'},
                {title: '8"', value: '8'},
              ],
        layout: 'radio',
      }),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ingredients',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Ingredients',
      hidden: ({document}) => !document?.isNamedSandwich,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      isNamed: 'isNamedSandwich',
      breadType: 'breadType',
      size: 'size',
      price: 'price',
    },
    prepare(selection) {
      const {title, isNamed, breadType, size, price} = selection
      const displayTitle = isNamed ? title : 'Custom Sandwich'
      const displaySubtitle = `${breadType} bread, ${size}${breadType === 'rye' ? '' : '"'} - $${price.toFixed(2)}`
      return {
        title: displayTitle,
        subtitle: displaySubtitle,
      }
    },
  },
})
