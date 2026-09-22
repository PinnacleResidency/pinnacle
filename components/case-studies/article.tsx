import { CaseStudyHero } from "@/components/case-studies/article-hero"
import { CaseStudyStory } from "@/components/case-studies/article-story"
import { CaseStudiesCta } from "@/components/case-studies/cta"
import { MoreStories } from "@/components/case-studies/more-stories"
import type { CaseStudy, CaseStudyArticle } from "@/lib/case-studies"

export function CaseStudyPage({
  study,
  article,
}: {
  study: CaseStudy
  article: CaseStudyArticle
}) {
  return (
    <>
      <CaseStudyHero study={study} />
      <CaseStudyStory article={article} />
      <MoreStories excludeSlug={study.slug} />
      <CaseStudiesCta />
    </>
  )
}
