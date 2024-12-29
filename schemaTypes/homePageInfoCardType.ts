import {defineField, defineType} from 'sanity'

export const homePageInfoCardType = defineType({
  name: 'homePageInfoCard',
  type: 'document',
  title: 'Home Page Info Cards',
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      isSeasonalNotification: 'isSeasonalNotification',
    },
    prepare(selection) {
      const {title, subtitle, isSeasonalNotification} = selection
      return {
        title: `${isSeasonalNotification ? '[SEASONAL] ' : ''}${title || 'Untitled'}`,
        subtitle: subtitle || '',
      }
    },
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Set the title of the info card',
      validation: (rule) => rule.required().error('You must set a title'),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Set the subtitle text below the title',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      description: 'The main content of the info card',
      of: [{type: 'block'}],
      validation: (rule) => rule.required().error('You must add some content'),
    }),
    defineField({
      name: 'isSeasonalNotification',
      type: 'boolean',
      title: 'Seasonal Notification',
      description: 'Toggle if this is a seasonal notification',
      initialValue: false,
    }),
  ],
})
