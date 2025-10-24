import {defineType, defineField} from 'sanity'

export const albums = defineType({
  name: 'albums',
  type: 'document',
  title: 'Albums',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'releaseDate',
      type: 'date',
      title: 'Release Date',
    }),
    defineField({
      name: 'coverArt',
      type: 'image',
      title: 'Cover Art',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'spotifyLink',
      type: 'string',
      title: 'Spotify Link',
    }),
    defineField({
      name: 'trackList',
      type: 'array',
      title: 'Track List',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'personnel',
      type: 'array',
      title: 'Personnel',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
  ],
})
