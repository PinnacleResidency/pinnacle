import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { CaseStudyPage } from "@/components/case-studies/article"
import { caseStudies, getCaseStudyArticle } from "@/lib/case-studies"

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const content = getCaseStudyArticle(slug)
  if (!content) return {}

  return {
    title: `${content.study.tag} Case Study | Pinnacle Residency`,
    description: content.study.title,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const content = getCaseStudyArticle(slug)
  if (!content) notFound()

  return <CaseStudyPage study={content.study} article={content.article} />
}
