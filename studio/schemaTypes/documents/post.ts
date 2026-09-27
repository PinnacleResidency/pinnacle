import { DocumentTextIcon } from "@sanity/icons/DocumentText"
import { defineArrayMember, defineField, defineType } from "sanity"

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) =>
        rule.required().custom((slug) => {
          if (!slug?.current) return "Required"
          if (!/^[a-z0-9-]+$/.test(slug.current)) {
            return "Slug must be lowercase with hyphens only"
          }
          return true
        }),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (rule) =>
            rule.required().warning("Alt text is important for SEO"),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedOn",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      type: "string",
      initialValue: "5-minute read",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "intro",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [defineArrayMember({ type: "articleSection" })],
      validation: (rule) => rule.min(1).required(),
    }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [defineArrayMember({ type: "faqItem" })],
    }),
    defineField({
      name: "featured",
      title: "Featured",
      description: "Show this post in the homepage knowledge section",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      publishedOn: "publishedOn",
    },
    prepare({ title, media, publishedOn }) {
      return {
        title,
        subtitle: publishedOn ?? "No date",
        media,
      }
    },
  },
  orderings: [
    {
      title: "Published date, newest",
      name: "publishedOnDesc",
      by: [{ field: "publishedOn", direction: "desc" }],
    },
  ],
})
