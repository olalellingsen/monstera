import {defineType, defineField} from 'sanity'

export const singles = defineType({
  name: 'Singles',
  type: 'document',
  title: 'Singles',
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
  ],
})
