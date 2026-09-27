import { BlogCta } from "@/components/blog/cta"
import { BlogListing } from "@/components/blog/listing"
import type { BlogPost } from "@/lib/blog"

export function BlogPage({
  posts,
  page,
  totalPages,
}: {
  posts: readonly BlogPost[]
  page: number
  totalPages: number
}) {
  return (
    <>
      <BlogListing posts={posts} page={page} totalPages={totalPages} />
      <BlogCta />
    </>
  )
}
