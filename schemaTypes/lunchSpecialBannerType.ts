import {defineField, defineType} from 'sanity'

export const lunchSpecialBannerType = defineType({
  name: 'lunchSpecialBanner',
  type: 'document',
  title: 'Lunch Specials Banner Item',
  fields: [
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true, // Enables resizable images
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
    defineField({
      name: 'type',
      type: 'string',
      title: 'Type',
      options: {
        list: [
          {title: 'Soup', value: 'soup'},
          {title: 'Weekly Special', value: 'weeklySpecial'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
      type: 'type',
    },
    prepare(selection) {
      const {title, media, type} = selection
      return {
        title: title,
        subtitle: `Type: ${type === 'soup' ? 'Soup' : 'Weekly Special'}`,
        media: media,
      }
    },
  },
})
