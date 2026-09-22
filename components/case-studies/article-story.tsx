import Image from "next/image"

import { fluid, fluidText } from "@/lib/fluid"
import type { CaseStudyArticle } from "@/lib/case-studies"
import { cn } from "@/lib/utils"

export function CaseStudyStory({ article }: { article: CaseStudyArticle }) {
  return (
    <section className="bg-white">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(60, 100),
          paddingBottom: fluid(60, 90),
          gap: fluid(40, 50),
        }}
      >
        <div
          className="flex w-full flex-col"
          style={{
            maxWidth: fluid(392, 835),
            gap: fluid(12, 12),
          }}
        >
          <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 68)}>
            {article.storyHeading.map((run, index) => (
              <span
                key={`${run.text}-${index}`}
                className={run.tone === "forest" ? "text-[#124a0a]" : "text-[#707070]"}
              >
                {run.text}
              </span>
            ))}
          </h2>
          <p className="w-full text-[#606060]" style={fluidText(18, 20, 22, 24)}>
            {article.storySubhead}
          </p>
        </div>

        <div
          className="mx-auto flex w-full flex-col"
          style={{
            maxWidth: fluid(392, 1312),
            gap: fluid(32, 32),
          }}
        >
          {article.sections.map((section) => (
            <div key={section.title} className="flex flex-col" style={{ gap: fluid(32, 32) }}>
              <div className="h-px w-full bg-[#e4e2dd]" />
              <div
                className="flex w-full items-start"
                style={{
                  gap: fluid(32, 45),
                  paddingInline: fluid(20, 50),
                }}
              >
                <Image
                  src={section.icon}
                  alt=""
                  width={section.iconWidth}
                  height={section.iconHeight}
                  unoptimized
                  className="block shrink-0 max-w-none"
                  style={{
                    width: section.iconWidth,
                    height: section.iconHeight,
                  }}
                />
                <div className="flex min-w-0 flex-1 flex-col" style={{ gap: fluid(10, 10) }}>
                  <h3
                    className="w-full font-medium text-[#202020]"
                    style={fluidText(18, 20, 22, 28)}
                  >
                    {section.title}
                  </h3>
                  <p className="w-full text-[#606060]" style={fluidText(18, 18, 22, 24)}>
                    {section.body.map((run, index) => (
                      <span
                        key={`${section.title}-${index}`}
                        className={cn(run.underline && "underline")}
                      >
                        {run.text}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
