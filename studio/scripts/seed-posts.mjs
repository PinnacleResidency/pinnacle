import { readFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { createClient } from "@sanity/client"

const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN

if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN or SANITY_API_READ_TOKEN")
  process.exit(1)
}

const client = createClient({
  projectId: "p5hejukj",
  dataset: "production",
  apiVersion: "2026-02-01",
  token,
  useCdn: false,
})

const posts = JSON.parse(
  readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), "pdf-posts.json"), "utf8")
)

function key() {
  return Math.random().toString(36).slice(2, 14)
}

function toSections(sections) {
  return sections.map((section) => ({
    _type: "articleSection",
    _key: key(),
    heading: section.heading,
    paragraphs: section.paragraphs,
  }))
}

function toFaqs(faqs) {
  return faqs.map((faq) => ({
    _type: "faqItem",
    _key: key(),
    question: faq.question,
    answer: faq.answer,
  }))
}

async function main() {
  for (const post of posts) {
    const existing = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug: post.slug }
    )

    const fields = {
      title: post.title,
      publishedOn: post.publishedOn,
      readTime: post.readTime,
      intro: post.intro,
      featured: post.featured,
      sections: toSections(post.sections),
      faqs: toFaqs(post.faqs),
    }

    if (!existing) {
      console.error("missing post, skip create", post.slug)
      continue
    }

    await client.patch(existing).set(fields).commit()
    console.log("updated", post.slug, post.publishedOn, post.featured ? "featured" : "")
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
