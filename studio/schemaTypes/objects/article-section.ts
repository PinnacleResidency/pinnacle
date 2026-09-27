import { defineArrayMember, defineField, defineType } from "sanity"

export const articleSection = defineType({
  name: "articleSection",
  title: "Article section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "paragraphs",
      type: "array",
      of: [defineArrayMember({ type: "text" })],
      validation: (rule) => rule.min(1).required(),
    }),
  ],
  preview: {
    select: { title: "heading" },
  },
})
