import Image from "next/image"

import { HeadingRuns } from "@/components/pathways/heading-runs"
import { fluid, fluidText } from "@/lib/fluid"
import type { PathwayContent } from "@/lib/pathways"

export function PathwayDefine({ content }: { content: PathwayContent }) {
  const { define } = content
  const icon = fluid(18, 22)

  return (
    <section className="bg-white">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(64, 100),
          paddingBottom: fluid(64, 100),
          gap: fluid(40, 40),
        }}
      >
        <header
          className="flex w-full flex-col lg:items-center lg:text-center"
          style={{
            gap: fluid(12, 12),
            maxWidth: define.headingMax ? fluid(392, define.headingMax) : undefined,
            marginInline: define.headingMax ? "auto" : undefined,
          }}
        >
          <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 68)}>
            <HeadingRuns runs={define.heading} />
          </h2>
          <p className="w-full text-[#606060]" style={fluidText(18, 20, 22, 24)}>
            {define.subhead}
          </p>
        </header>

        <div
          className="flex w-full flex-col"
          style={{ gap: fluid(20, 24) }}
        >
          <div
            className="flex w-full flex-col overflow-hidden rounded-[24px] bg-[#8ee377] lg:flex-row"
            style={{
              padding: fluid(8, 16),
              gap: fluid(40, 56),
            }}
          >
            <article
              className="flex w-full min-w-0 flex-col rounded-[16px] bg-[#417333] lg:max-w-[464px] lg:shrink-0"
              style={{
                paddingTop: fluid(24, 32),
                paddingInline: fluid(20, 28),
                paddingBottom: fluid(32, 32),
                gap: fluid(20, 24),
              }}
            >
              <h3
                className="font-medium text-white"
                style={fluidText(24, 24, 28, 28)}
              >
                {define.whatTitle}
              </h3>
              <div
                className="flex flex-col text-[#d6f0cf]"
                style={{ gap: fluid(24, 24) }}
              >
                <p style={fluidText(18, 18, 22, 24)}>{define.whatLead}</p>
                <div>
                  {define.whatRest.map((paragraph) => (
                    <p key={paragraph} style={fluidText(18, 18, 22, 24)}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>

            <div
              className="flex min-w-0 flex-1 flex-col"
              style={{
                paddingTop: fluid(0, 32),
                paddingRight: fluid(16, 36),
                paddingBottom: fluid(24, 32),
                paddingLeft: fluid(16, 20),
                gap: fluid(20, 20),
              }}
            >
              <div
                className="flex w-full flex-col"
                style={{ gap: fluid(20, 24) }}
              >
                <h3
                  className="font-medium text-[#124a0a]"
                  style={fluidText(24, 24, 28, 28)}
                >
                  {define.profileTitle}
                </h3>
                <p className="text-[#364232]" style={fluidText(18, 18, 22, 22)}>
                  {define.profileIntro}
                </p>
              </div>

              <ul
                className="flex w-full list-none flex-col"
                style={{ gap: fluid(16, 16) }}
              >
                {define.criteria.map((criterion) => (
                  <li
                    key={criterion.title ?? criterion.body}
                    className="flex w-full items-start"
                    style={{ gap: fluid(10, 10) }}
                  >
                    <Image
                      src="/images/pathways/badge-check.svg"
                      alt=""
                      width={22}
                      height={22}
                      unoptimized
                      className="mt-0.5 block max-w-none shrink-0"
                      style={{ width: icon, height: icon }}
                    />
                    {criterion.title ? (
                      <div className="min-w-0 flex-1 text-[#364232]">
                        <p
                          className="font-medium"
                          style={fluidText(18, 18, 24, 24)}
                        >
                          {criterion.title}
                        </p>
                        <p style={fluidText(18, 18, 24, 24)}>{criterion.body}</p>
                      </div>
                    ) : (
                      <p
                        className="min-w-0 flex-1 text-[#364232]"
                        style={fluidText(18, 18, 20, 20)}
                      >
                        {criterion.body}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="w-full text-[#404040]" style={fluidText(18, 20, 22, 24)}>
            {define.footnote}
          </p>
        </div>
      </div>
    </section>
  )
}
