import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogPage } from "@/components/blog/page"
import {
  BLOG_PAGE_SIZE_MOBILE,
  blogPageCount,
  getBlogPosts,
  parseBlogPage,
} from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog | Pinnacle Residency",
  description:
    "Clear, practical answers to the questions that come up most in EB-1A and EB-2 NIW petitions",
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const { page: pageParam } = await searchParams
  const page = parseBlogPage(pageParam)
  if (page === null) notFound()

  const posts = await getBlogPosts()
  if (page > blogPageCount(posts.length, BLOG_PAGE_SIZE_MOBILE)) notFound()

  return <BlogPage posts={posts} page={page} />
}
