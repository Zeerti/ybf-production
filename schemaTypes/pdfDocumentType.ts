import {defineField, defineType} from 'sanity'

export const pdfDocumentType = defineType({
  name: 'pdfDocument',
  type: 'document',
  title: 'Bundle PDF',
  // Set this to true to make it a singleton - only one instance can exist
  __experimental_actions: ['update', 'publish'], // Only allow update and publish, not create or delete
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Document Title',
      description: 'Enter a descriptive title for the PDF document',
      validation: (rule) => rule.required().error('You must set a title'),
      initialValue: 'Bundle PDF',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Document Description',
      description: 'Provide a brief description of the document (optional)',
      initialValue: 'Official Bundle PDF',
    }),
    defineField({
      name: 'pdfFile',
      type: 'file',
      title: 'PDF File',
      description: 'Upload the PDF Bundle file (only PDF files are accepted)',
      options: {
        accept: 'application/pdf',
      },
      validation: (rule) => rule.required().error('You must upload a PDF file'),
    }),
    defineField({
      name: 'lastUpdated',
      type: 'datetime',
      title: 'Last Updated',
      description: 'Date and time when this menu was last updated',
      readOnly: true,
      validation: (rule) => rule.required(),
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: 'displayOnWebsite',
      type: 'boolean',
      title: 'Display on Website',
      description: 'Toggle to show or hide the PDF on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      lastUpdated: 'lastUpdated',
      media: 'pdfFile',
    },
    prepare(selection) {
      const {title, lastUpdated, media} = selection
      const date = lastUpdated ? new Date(lastUpdated).toLocaleDateString() : 'Not updated'
      
      return {
        title: title || 'Bundle PDF',
        subtitle: `Last updated: ${date}`,
        media: media,
      }
    },
  },
})