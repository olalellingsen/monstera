import {defineField, defineType} from 'sanity'

export const header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      type: 'object',
      name: 'homeImage',
      title: 'Home Image',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Important for SEO and accessibility.',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
      preview: {
        select: {
          media: 'image',
          alt: 'alt',
          caption: 'caption',
        },
        prepare({media, alt, caption}) {
          return {
            title: 'Image',
            subtitle: caption || alt,
            media,
          }
        },
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})
