import {defineType, defineField} from 'sanity'

export const concerts = defineType({
  name: 'concerts',
  type: 'document',
  title: 'Concerts',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'date',
      type: 'date',
      title: 'Date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'time',
      type: 'string',
      title: 'Time',
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location',
    }),
    defineField({
      name: 'ticketsLink',
      title: 'Link to tickets',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
  preview: {
    select: {
      location: 'location',
      date: 'date',
    },
    prepare(selection) {
      const {location, date} = selection
      return {
        title: location,
        subtitle: date || 'No date set',
      }
    },
  },
})
