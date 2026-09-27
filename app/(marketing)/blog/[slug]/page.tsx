import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogArticlePage } from "@/components/blog/article"
import { getBlogPost, getBlogSlugs } from "@/lib/blog"

export async function generateStaticParams() {
  const slugs = await getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = await getBlogPost(slug)
  if (!data) return {}

  return {
    title: `${data.post.title} | Pinnacle Residency`,
    description: data.article.intro,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = await getBlogPost(slug)
  if (!data) notFound()

  return <BlogArticlePage post={data.post} article={data.article} />
}
