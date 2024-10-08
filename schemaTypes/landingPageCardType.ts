import {defineField, defineType} from 'sanity'

export const landingPageCardType = defineType({
  name: 'landingPageCard',
  type: 'document',
  title: 'Landing Page Cards',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Set the title of the card',
      validation: (rule) => rule.required().error('You must set a title'),
    }),
    defineField({
      name: 'subTitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Sets the text below the header',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Card Body Image',
      description: 'Sets the image displayed in the body of the card (Below header)',
    }),
    defineField({
      name: 'cardRowItems',
      type: 'array',
      title: 'Items in Bundle',
      description:
        'Each item displays on a row. Leave an empty item if you wish to add an empty row',
      of: [{type: 'string'}],
    }),
  ],
})
