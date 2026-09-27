import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { BlogPage } from "@/components/blog/page"
import { getBlogPage, parseBlogPage } from "@/lib/blog"

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

  const { posts, totalPages } = await getBlogPage(page)
  if (page > totalPages) notFound()

  return <BlogPage posts={posts} page={page} totalPages={totalPages} />
}
