import {defineField, defineType} from 'sanity'

export const gallery = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      imageCount: 'images.length',
    },
    prepare(selection) {
      const {imageCount} = selection
      return {
        title: `Gallery with ${imageCount} image${imageCount !== 1 ? 's' : ''}`,
      }
    },
  },
})
