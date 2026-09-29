import { defineQuery } from "next-sanity"

const coverImageFields = `
  coverImage {
    alt,
    hotspot,
    crop,
    asset->{
      _id,
      url,
      metadata {
        lqip,
        dimensions { width, height }
      }
    }
  }
`

const listingFields = `
  _id,
  title,
  "slug": slug.current,
  ${coverImageFields}
`

export const BLOG_COUNT_QUERY = defineQuery(`
  count(*[_type == "post" && defined(slug.current)])
`)

export const BLOG_LISTING_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(publishedOn desc) {
    ${listingFields}
  }
`)

export const BLOG_FEATURED_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && featured == true]
  | order(publishedOn desc) [0...3] {
    ${listingFields}
  }
`)

export const BLOG_LATEST_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  | order(publishedOn desc) [0...3] {
    ${listingFields}
  }
`)

export const BLOG_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }
`)

export const BLOG_POST_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    readTime,
    publishedOn,
    intro,
    featured,
    ${coverImageFields},
    sections[]{
      _key,
      heading,
      paragraphs
    },
    faqs[]{
      _key,
      question,
      answer
    }
  }
`)
