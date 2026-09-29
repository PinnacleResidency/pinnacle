import { BlogCta } from "@/components/blog/cta"
import { BlogListing } from "@/components/blog/listing"
import type { BlogPost } from "@/lib/blog"

export function BlogPage({
  posts,
  page,
}: {
  posts: readonly BlogPost[]
  page: number
}) {
  return (
    <>
      <BlogListing posts={posts} page={page} />
      <BlogCta />
    </>
  )
}
