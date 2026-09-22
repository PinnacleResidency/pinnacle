import { BlogArticleBody } from "@/components/blog/article-body"
import { BlogArticleHero } from "@/components/blog/article-hero"
import { BlogCta } from "@/components/blog/cta"
import { Faq } from "@/components/home/faq"
import type { BlogArticle, BlogPost } from "@/lib/blog"

export function BlogArticlePage({
  post,
  article,
}: {
  post: BlogPost
  article: BlogArticle
}) {
  return (
    <>
      <BlogArticleHero post={post} article={article} />
      <BlogArticleBody article={article} />
      <Faq
        items={article.faqs}
        compact
        copy="Got other questions? Send us a message, and we’ll get back to you within 24 hours."
        mobileCopy="Looking for something else? Send us a message, and we’ll get back to you within 24 hours."
      />
      <BlogCta />
    </>
  )
}
