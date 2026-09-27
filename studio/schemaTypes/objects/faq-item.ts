import { HelpCircleIcon } from "@sanity/icons/HelpCircle"
import { defineField, defineType } from "sanity"

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ",
  type: "object",
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
    }),
  ],
  preview: {
    select: { title: "question" },
  },
})
