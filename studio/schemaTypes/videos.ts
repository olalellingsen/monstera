import {defineField, defineType} from 'sanity'

export const videos = defineType({
  name: 'videos',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'videoList',
      title: 'Video List',
      type: 'array',
      of: [
        {
          name: 'videoItem',
          title: 'Video Item',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required().max(100),
            }),
            defineField({
              name: 'videoUrl',
              title: 'Video URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
