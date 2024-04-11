import { defineField, defineType } from '@sanity/types';

export const Post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      title: 'Post title',
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Post unique identifier',
      name: 'slug',
      type: 'slug',
      validation: (rule) =>
        rule.required().custom((slug) => {
          return /\s/.test(slug.current) ? 'Slug cannot contain spaces' : true;
        }),
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Post tag',
      name: 'tag',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Post synopsis',
      name: 'synopsis',
      type: 'string',
      time: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Post cover image',
      name: 'cover',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Time to read the post',
      name: 'time',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Post content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {
              title: 'Normal',
              value: 'normal',
            },
            {
              title: 'Heading',
              value: 'h5',
            },
          ],
          marks: {
            decorators: [],
          },
        },
      ],
      options: {
        validation: (rule) => rule.required(),
      },
    }),
  ],
});
