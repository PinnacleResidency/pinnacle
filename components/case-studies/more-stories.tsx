import { CaseStudiesCarousel } from "@/components/case-studies/carousel"
import { fluid, fluidText } from "@/lib/fluid"
import { caseStudies } from "@/lib/case-studies"

export function MoreStories({ excludeSlug }: { excludeSlug: string }) {
  const studies = caseStudies.filter((study) => study.slug !== excludeSlug)

  return (
    <section className="overflow-x-hidden bg-white">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingTop: fluid(60, 120),
          paddingBottom: fluid(60, 120),
          gap: fluid(40, 60),
        }}
      >
        <div
          className="flex w-full flex-col"
          style={{ paddingInline: fluid(24, 132) }}
        >
          <div
            className="flex w-full flex-col"
            style={{
              maxWidth: fluid(392, 811),
              gap: fluid(8, 12),
            }}
          >
            <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 68)}>
              <span className="text-[#707070]">More Stories From </span>
              <span className="text-[#1c2f00]">Real Cases</span>
            </h2>
            <p className="w-full text-[#606060]" style={fluidText(18, 20, 22, 24)}>
              See how we&apos;ve approached cases in other fields.
            </p>
          </div>
        </div>

        <CaseStudiesCarousel
          key={excludeSlug}
          studies={studies}
          showDisclaimer={false}
        />
      </div>
    </section>
  )
}
