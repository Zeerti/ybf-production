import {defineField, defineType} from 'sanity'

export const specialtyMeatType = defineType({
  name: 'specialtyMeat',
  type: 'document',
  title: 'Specialty Meat',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Specialty Meat Product Name',
      description: 'Enter the name of the game meat product',
      validation: (rule) => rule.required().error('You must set the name'),
    }),
    defineField({
      name: 'section',
      type: 'string',
      title: 'Game Meat Section',
      description: 'Select the section this game meat belongs to',
      options: {
        list: [
          {title: 'Lamb', value: 'lamb'},
          {title: 'Veal', value: 'veal'},
          {title: 'Pork', value: 'pork'},
          {title: 'Beef', value: 'beef'},
          {title: 'Chicken', value: 'chicken'},
          {title: 'Seafood', value: 'seafood'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required().error('You must select a section'),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
      description: 'Enter the price of the game meat product',
      validation: (rule) => rule.required().error('You must add a price'),
    }),
    defineField({
      name: 'priceUnit',
      type: 'string',
      title: 'Price Unit',
      description: 'Specify whether the price is per pound or per package',
      options: {
        list: [
          {title: 'Per Pound', value: 'perPound'},
          {title: 'Per Package', value: 'perPackage'},
          {title: 'Per Item', value: 'perItem'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required().error('You must specify the price unit'),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Product Description',
      description: 'Provide a brief description of the game meat product',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Product Image',
      description: 'Upload an image of the game meat product',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
      priceUnit: 'priceUnit',
      media: 'image',
    },
    prepare(selection) {
      const {title, price, priceUnit, media} = selection
      const priceUnitDisplay = priceUnit
      return {
        title: title,
        subtitle: `$${price.toFixed(2)} ${priceUnitDisplay}`,
        media: media,
      }
    },
  },
})
