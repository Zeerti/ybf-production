import {defineField, defineType} from 'sanity'

// Weekly Special
export const weeklySpecialType = defineType({
  name: 'weeklySpecial',
  type: 'document',
  title: 'Weekly Special',
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
      title: 'Special Name',
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
        title: `Weekly Special: ${title}`,
        media: media,
      }
    },
  },
})
