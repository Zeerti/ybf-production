import {defineField, defineType} from 'sanity'

export const lunchSpecialBottomBannerType = defineType({
  name: 'lunchSpecialBottomBanner',
  type: 'document',
  title: 'Lunch Special Floating Bottom Banner',
  fields: [
    defineField({
      name: 'header',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheader',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      header: 'header',
      subheader: 'subheader',
    },
    prepare(selection) {
      const {header, subheader} = selection

      return {
        title: header,
        description: subheader,
      }
    },
  },
})
