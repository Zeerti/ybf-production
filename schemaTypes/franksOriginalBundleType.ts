import {defineField, defineType, Rule} from 'sanity'

export const franksOriginalBundlesType = defineType({
  name: 'franksOriginalBundle',
  type: 'document',
  title: 'Franks Original Bundles',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Bundle Name',
      description: 'Sets the name of the bundle',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (typeof value === 'undefined' || value === null) {
            return 'You must give the bundle a name. Use bundle document if you wish to make a bundle without a name' // Allow empty values if needed, remove this if the field is required
          }

          if (value.length < 3) return 'Please enter at least 3 characters'

          // Regular expression to match special characters
          const specialCharsRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g

          // Find all special characters in the input
          const specialCharsFound = value.match(specialCharsRegex)

          if (specialCharsFound) {
            // Remove duplicates and sort the special characters
            const uniqueSpecialChars = [...new Set(specialCharsFound)].sort().join('')
            return `Please remove the following special characters: ${uniqueSpecialChars}`
          }

          return true
        }),
    }),
    defineField({
      name: 'weight',
      type: 'number',
      title: 'Weight in pounds',
      description: 'Sets the weight of the bundle',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (typeof value === 'undefined' || value === null) {
            return 'Value must be a number' // Allow empty values if needed, remove this if the field is required
          }
          return true
        }),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Sets the price of the bundle',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (typeof value === 'undefined' || value === null) {
            return 'Price must be a number with at most 2 decimals'
          }

          // Check if the value is non-negative
          if (value < 0) {
            return 'Price must be 0 or a positive number'
          }

          // Check decimal places
          const decimalPlaces = (value.toString().split('.')[1] || '').length
          if (decimalPlaces > 2) {
            return `Price can have at most two decimal places.`
          }

          return true
        }),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Bundle Image',
      description: 'Sets the image displayed at the top of the bundle card',
    }),
    defineField({
      name: 'bundleItems',
      type: 'array',
      title: 'Items in Bundle',
      description: 'Sets the list of items that are in a bundle',
      of: [{type: 'string'}],
      validation: (rule) => [
        rule.custom((items: string[] | undefined) => {
          // Check if the array is empty
          if (!items || items.length === 0) {
            return 'You must add at least one item to the bundle'
          }

          return true
        }),
        rule
          .custom((items: string[] | undefined) => {
            if (!items) return 'You must add at least one item to the bundle'
            if (items.length > 6)
              return 'Adding more than 6 items causes it to truncate the rest you add'

            // Check the length of each item
            const longItems = items.filter((item: string) => item.length > 40)

            if (longItems.length > 0) {
              return `Warning: ${longItems.length} item(s) exceed 40 characters and may be truncated`
            }
            return true
          })
          .warning(),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'price',
      media: 'image',
    },
  },
})
