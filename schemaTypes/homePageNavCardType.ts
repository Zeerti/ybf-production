import {defineField, defineType} from 'sanity'

export const homePageNavCardType = defineType({
  name: 'homePageNavCard',
  type: 'document',
  title: 'Home Page Navigation Cards',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Set the title of the navigation card',
      validation: (rule) => rule.required().error('You must set a title'),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Set the subtitle text below the title',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Card Image',
      description: 'Set the image for the navigation card',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required().error('You must set an image'),
    }),
    defineField({
      name: 'navigationLink',
      type: 'string',
      title: 'Navigation Link',
      description: 'Select which page this card should navigate to',
      options: {
        list: [
          {title: 'Bundles', value: '/bundles'},
          {title: 'Deli', value: '/deli'},
          {title: 'Specialty Meats', value: '/specialty-meats'},
          {title: 'Lunch Specials', value: '/lunch'},
        ],
      },
      validation: (rule) => rule.required().error('You must select a navigation link'),
    }),
  ],
})
