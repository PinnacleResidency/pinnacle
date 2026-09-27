import type { FaqItem } from "@/lib/pathways"
import { urlFor } from "@/lib/sanity/image"
import { sanityFetch } from "@/lib/sanity/live"
import {
  BLOG_COUNT_QUERY,
  BLOG_FEATURED_QUERY,
  BLOG_LATEST_QUERY,
  BLOG_POST_QUERY,
  BLOG_SLUGS_QUERY,
  blogPageQuery,
} from "@/lib/sanity/queries"

export type BlogPost = {
  slug: string
  href: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  title: string
}

export type BlogArticleSection = {
  _key?: string
  heading: string
  paragraphs: readonly string[]
}

export type BlogArticle = {
  readTime: string
  publishedOn: string
  intro: string
  sections: readonly BlogArticleSection[]
  faqs: readonly FaqItem[]
}

const images = {
  capitol: {
    image: "/images/knowledge/capitol.jpg",
    imageAlt: "The US Capitol dome with an American flag",
    imageWidth: 2457,
    imageHeight: 1310,
  },
  notice: {
    image: "/images/knowledge/notice.jpg",
    imageAlt: "A close-up of an immigration approval notice form",
    imageWidth: 750,
    imageHeight: 1000,
  },
  passport: {
    image: "/images/knowledge/passport.jpg",
    imageAlt: "A US passport on an American flag with cash",
    imageWidth: 2457,
    imageHeight: 1566,
  },
} as const

const seedPosts = [
  {
    slug: "uscis-ai-adjudicate",
    title: "USCIS Is Using AI to Adjudicate Cases. Here's What That Means for Your RFE",
    ...images.capitol,
  },
  {
    slug: "eb-2-niw-approval-rate",
    title:
      "Is EB-2 NIW Actually Recovering? What the Approval Rate Rebound Really Means",
    ...images.notice,
  },
  {
    slug: "eb-1a-or-eb-2-niw",
    title: "EB-1A or EB-2 NIW: How to Choose the Right Pathway for Your Profile",
    ...images.passport,
  },
  {
    slug: "eb-1a-discretionary-review",
    title: "EB-1A's Big Shift: From Discretionary to Non-Discretionary Review",
    ...images.capitol,
  },
  {
    slug: "eb-1a-vs-eb-2-niw-approval-gap",
    title: "EB-1A vs. EB-2 NIW: The Approval Rate Gap Is Real, and It's Not Closing",
    ...images.notice,
  },
  {
    slug: "eb-2-niw-backlog",
    title: "The EB-2 NIW Backlog Nobody's Talking About, and What Exactly Is Going On",
    ...images.passport,
  },
  {
    slug: "common-petition-mistakes",
    title: "Common Mistakes That May Weaken Your EB-1A and EB-2 NIW Petitions",
    ...images.capitol,
  },
  {
    slug: "strong-recommendation-letters",
    title: "What Actually Makes a Strong Recommendation Letter for Your Petition",
    ...images.notice,
  },
  {
    slug: "rfe-risks-updated-policies",
    title: "Understanding Possible RFE Risks Under The Newly Updated USCIS Policies",
    ...images.passport,
  },
] as const

export const BLOG_PAGE_SIZE = 9
export const BLOG_TOTAL_PAGES = 13

type SanityCoverImage = {
  alt?: string | null
  asset?: {
    url?: string | null
    metadata?: {
      dimensions?: {
        width?: number | null
        height?: number | null
      } | null
    } | null
  } | null
}

type SanityBlogListItem = {
  title?: string | null
  slug?: string | null
  coverImage?: SanityCoverImage | null
}

type SanityBlogPost = SanityBlogListItem & {
  readTime?: string | null
  publishedOn?: string | null
  intro?: string | null
  sections?:
    | {
        _key?: string
        heading?: string | null
        paragraphs?: (string | null)[] | null
      }[]
    | null
  faqs?:
    | {
        _key?: string
        question?: string | null
        answer?: string | null
      }[]
    | null
}

async function fetchSanity<T>(load: () => Promise<T>): Promise<T | null> {
  try {
    return await load()
  } catch (error) {
    console.error("[sanity]", error)
    return null
  }
}

function formatPublishedOn(value?: string | null) {
  if (!value) return ""
  const date = new Date(`${value}T00:00:00`)
  if (Number.isNaN(date.getTime())) return value
  const day = date.getDate()
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
        ? "nd"
        : day % 10 === 3 && day !== 13
          ? "rd"
          : "th"
  const month = date.toLocaleString("en-GB", { month: "long" })
  return `${day}${suffix} ${month}, ${date.getFullYear()}`
}

function toBlogPost(item: SanityBlogListItem): BlogPost | null {
  if (!item.slug || !item.title) return null

  const cover = item.coverImage
  const image = cover?.asset
    ? urlFor(cover as Parameters<typeof urlFor>[0]).width(2400).url()
    : images.capitol.image

  return {
    slug: item.slug,
    href: `/blog/${item.slug}`,
    image,
    imageAlt: cover?.alt || item.title,
    imageWidth: cover?.asset?.metadata?.dimensions?.width || images.capitol.imageWidth,
    imageHeight:
      cover?.asset?.metadata?.dimensions?.height || images.capitol.imageHeight,
    title: item.title,
  }
}

function toBlogArticle(item: SanityBlogPost): BlogArticle {
  return {
    readTime: item.readTime || "5-minute read",
    publishedOn: formatPublishedOn(item.publishedOn),
    intro: item.intro || "",
    sections: (item.sections ?? [])
      .filter((section): section is { heading: string; paragraphs?: (string | null)[] | null; _key?: string } =>
        Boolean(section?.heading)
      )
      .map((section) => ({
        _key: section._key,
        heading: section.heading,
        paragraphs: (section.paragraphs ?? []).filter(
          (paragraph): paragraph is string => Boolean(paragraph)
        ),
      })),
    faqs: (item.faqs ?? [])
      .filter((faq): faq is { question: string; answer?: string | null; _key?: string } =>
        Boolean(faq?.question)
      )
      .map((faq) => ({
        question: faq.question,
        answer: faq.answer ?? "",
      })),
  }
}

function toPost(
  seed: (typeof seedPosts)[number],
  slug: string
): BlogPost {
  return {
    slug,
    href: `/blog/${slug}`,
    image: seed.image,
    imageAlt: seed.imageAlt,
    imageWidth: seed.imageWidth,
    imageHeight: seed.imageHeight,
    title: seed.title,
  }
}

/** Featured posts used on the homepage knowledge section. */
export const featuredBlogPosts = seedPosts
  .slice(0, 3)
  .map((seed) => toPost(seed, seed.slug))

/**
 * Mock listing until the headless CMS is connected.
 * Repeats the designed articles across 13 pages so pagination matches Figma.
 */
export const blogPosts: BlogPost[] = Array.from(
  { length: BLOG_TOTAL_PAGES * BLOG_PAGE_SIZE },
  (_, index) => {
    const seed = seedPosts[index % seedPosts.length]
    const page = Math.floor(index / BLOG_PAGE_SIZE) + 1
    const slug = page === 1 ? seed.slug : `${seed.slug}-p${page}`
    return toPost(seed, slug)
  }
)

export function parseBlogPage(value?: string) {
  if (value === undefined) return 1
  if (!/^\d+$/.test(value)) return null
  const page = Number(value)
  if (page < 1) return null
  return page
}

export async function getBlogPage(page: number) {
  const start = (page - 1) * BLOG_PAGE_SIZE
  const end = start + BLOG_PAGE_SIZE

  const result = await fetchSanity(async () => {
    const [{ data: posts }, { data: total }] = await Promise.all([
      sanityFetch({ query: blogPageQuery(start, end), stega: false }),
      sanityFetch({ query: BLOG_COUNT_QUERY, stega: false }),
    ])
    return {
      posts: (posts ?? []) as SanityBlogListItem[],
      total: Number(total ?? 0),
    }
  })

  if (!result || result.total === 0) {
    return {
      posts: blogPosts.slice(start, end),
      totalPages: BLOG_TOTAL_PAGES,
    }
  }

  return {
    posts: result.posts
      .map((post) => toBlogPost(post))
      .filter((post): post is BlogPost => post !== null),
    totalPages: Math.max(1, Math.ceil(result.total / BLOG_PAGE_SIZE)),
  }
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  const featured = await fetchSanity(async () => {
    const { data } = await sanityFetch({
      query: BLOG_FEATURED_QUERY,
      stega: false,
    })
    return (data ?? []) as SanityBlogListItem[]
  })

  const latest =
    featured && featured.length > 0
      ? featured
      : await fetchSanity(async () => {
          const { data } = await sanityFetch({
            query: BLOG_LATEST_QUERY,
            stega: false,
          })
          return (data ?? []) as SanityBlogListItem[]
        })

  const posts = (latest ?? [])
    .map((post) => toBlogPost(post))
    .filter((post): post is BlogPost => post !== null)

  return posts.length > 0 ? posts : featuredBlogPosts
}

export async function getBlogSlugs(): Promise<string[]> {
  const slugs = await fetchSanity(async () => {
    const { data } = await sanityFetch({
      query: BLOG_SLUGS_QUERY,
      perspective: "published",
      stega: false,
    })
    return (data ?? []) as { slug?: string | null }[]
  })

  if (slugs && slugs.length > 0) {
    return slugs
      .map((item) => item.slug)
      .filter((slug): slug is string => Boolean(slug))
  }

  return blogPosts.map((post) => post.slug)
}

export function blogPageHref(page: number) {
  return page <= 1 ? "/blog" : `/blog?page=${page}`
}

/**
 * One designed article body, reused across listing slugs until the CMS lands.
 */
export const blogArticle: BlogArticle = {
  readTime: "5-minute read",
  publishedOn: "16th September, 2026",
  intro:
    "Over the past year, USCIS has been expanding its use of artificial intelligence tools in how it processes and adjudicates immigration petitions, including in the employment-based categories. This isn't speculative. USCIS maintains a public inventory of its AI use cases through the Department of Homeland Security. What's less discussed is what this shift actually looks like from the petitioner's side, and immigration practitioners have started noticing a pattern worth understanding.",
  sections: [
    {
      heading: "What's Actually Happening",
      paragraphs: [
        "USCIS has been incorporating AI tools into parts of its adjudication workflow, joining a broader trend across federal agencies toward AI-assisted processing. The specifics of how these tools are used in any individual case aren't fully public, but immigration practitioners handling EB-1A and EB-2 NIW petitions have reported a noticeable pattern: Requests for Evidence that are longer than they used to be, but less internally coherent, sometimes referencing evidence inconsistently or raising points that don't fully track with the specific petition being reviewed.",
        "This doesn't mean every RFE now involves AI, or that AI-assisted review is inherently less accurate. It does mean that petitioners and their representatives are encountering RFEs with a different character than the more tightly focused requests common in the past, and it's worth understanding why before you're staring at one on a ninety-day deadline.",
      ],
    },
    {
      heading: "Why This Matters for How You Respond to an RFE",
      paragraphs: [
        "If you receive an RFE that feels unusually long, references points that seem tangential, or asks for clarification on something you thought your original filing already addressed clearly, that's increasingly common under current adjudication patterns, not necessarily a sign that your case is in unusually serious trouble. The right response isn't to panic at the length. It's to carefully identify each specific point being raised, even ones that seem redundant or oddly framed, and address each one directly and completely.",
        "A scattered or inconsistent RFE is, if anything, more important to respond to with tight organization and clarity than a narrowly focused one, precisely because it's easier to accidentally miss or under-address one of several points buried in a longer, less coherent request.",
      ],
    },
    {
      heading: "Why This Matters Before You File",
      paragraphs: [
        "If adjudication increasingly involves automated review at some stage, even as a supplementary tool alongside human officers, the practical takeaway is the same one that's mattered all along, just more so: clarity and internal consistency in your petition matter enormously. A petition where your cover letter, your evidence index, and your recommendation letters all tell a clearly aligned, consistent story is easier to evaluate accurately, whether the reviewer is a person, a tool, or some combination of both. A petition with internal inconsistencies, vague claims, or evidence that doesn't clearly map to the criterion it's meant to support is more likely to generate exactly the kind of scattered, over-broad RFE this trend describes.",
      ],
    },
    {
      heading: "What This Doesn't Change",
      paragraphs: [
        "The legal standards for EB-1A and EB-2 NIW haven't changed because of how USCIS processes petitions internally. AI-assisted review, to whatever extent it's being used, is a tool for managing volume and consistency, not a new legal test you need to satisfy. The fundamentals remain the same: specific, well-organized, internally consistent evidence that clearly satisfies the applicable legal standard.",
      ],
    },
    {
      heading: "The Practical Takeaway",
      paragraphs: [
        "Treat this less as a reason for alarm and more as reinforcement of something that was already true: build your petition to be unambiguous. Don't leave room for a reviewer, human or otherwise, to misread or misconnect your evidence. And if you do receive an unusually long or scattered RFE, resist the urge to write a similarly scattered response. Organize your reply point by point, address everything raised, and keep your response as tightly structured as the original petition should have been.",
      ],
    },
  ],
  faqs: [
    {
      question: "Can I find out whether AI was used to review my specific case?",
      answer:
        "Not directly. USCIS doesn't disclose which tools were involved in adjudicating an individual petition, though its general AI use case inventory is publicly available through DHS.",
    },
    {
      question:
        "Does the AI-assisted adjudication mean my case is less likely to be approved?",
      answer: "",
    },
    {
      question: "Should I change how I write my petition because of this trend?",
      answer: "",
    },
  ],
}

export async function getBlogPost(slug: string) {
  const data = await fetchSanity(async () => {
    const { data: post } = await sanityFetch({
      query: BLOG_POST_QUERY,
      params: { slug },
      stega: false,
    })
    return (post ?? null) as SanityBlogPost | null
  })

  if (data) {
    const post = toBlogPost(data)
    if (post) {
      return { post, article: toBlogArticle(data) }
    }
  }

  const mock = blogPosts.find((post) => post.slug === slug)
  if (!mock) return null
  return { post: mock, article: blogArticle }
}

export function blogPaginationItems(current: number, total: number) {
  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1)
  }

  if (current <= 3) {
    return [1, 2, 3, "ellipsis", total] as const
  }

  if (current >= total - 2) {
    return [1, "ellipsis", total - 2, total - 1, total] as const
  }

  return [1, "ellipsis", current, "ellipsis", total] as const
}
