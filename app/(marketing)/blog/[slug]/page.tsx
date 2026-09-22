import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogArticlePage } from "@/components/blog/article"
import { blogArticle, blogPosts, getBlogPost } from "@/lib/blog"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Pinnacle Residency`,
    description: blogArticle.intro,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return <BlogArticlePage post={post} article={blogArticle} />
}
