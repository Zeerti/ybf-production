import {defineField, defineType} from 'sanity'

// Daily Special (Soup of the Day)
export const dailySpecialType = defineType({
  name: 'dailySpecial',
  type: 'document',
  title: 'Daily Special (Soup)',
  fields: [
    defineField({
      name: 'photo',
      type: 'image',
      title: 'Photo',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Soup Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      title: 'Description',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
    prepare(selection) {
      const {title, media} = selection
      return {
        title: `Soup of the Day: ${title}`,
        media: media,
      }
    },
  },
})
