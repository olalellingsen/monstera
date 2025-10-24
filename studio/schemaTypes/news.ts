import {defineField, defineType} from 'sanity'

export const news = defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}]}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
    },
    prepare(selection) {
      const {title, publishedAt} = selection
      return {
        title: title,
        subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString() : 'No publish date',
      }
    },
  },
})
