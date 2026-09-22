import { fluid, fluidText } from "@/lib/fluid"
import type { BlogArticle } from "@/lib/blog"

export function BlogArticleBody({ article }: { article: BlogArticle }) {
  return (
    <section className="bg-white">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(40, 60),
          paddingBottom: fluid(40, 30),
          gap: fluid(40, 60),
        }}
      >
        <p className="w-full text-[#606060]" style={fluidText(18, 20, 22, 24)}>
          {article.intro}
        </p>

        {article.sections.map((section) => (
          <div
            key={section.heading}
            className="flex w-full flex-col"
            style={{ gap: fluid(12, 12) }}
          >
            <h2
              className="w-full font-medium text-[#707070]"
              style={fluidText(28, 40, 32, 40)}
            >
              {section.heading}
            </h2>
            <div
              className="flex w-full flex-col text-[#606060]"
              style={{
                ...fluidText(18, 20, 22, 24),
                gap: fluid(22, 24),
              }}
            >
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
