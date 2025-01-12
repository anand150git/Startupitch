import { defineField, defineType } from "sanity";

export const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            },
            validation: Rule => Rule.required().error('Slug Required')
        }),
        defineField({
            name: "author",
            type: "reference",
            to: { type: "author" }
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
            validation: Rule => Rule.required().min(20).max(200).error('Category must be between 50 and 200 characters')
        }),
        defineField({
            name: "category",
            type: "string",
        }),
        defineField({
            name: "image",
            type: "url",
            validation: Rule => Rule.required().uri({ allowRelative: true }).error('Please enter a valid URL')
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        }),
    ],
})