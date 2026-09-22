import { HeadingRuns } from "@/components/pathways/heading-runs"
import { fluid, fluidText } from "@/lib/fluid"
import type { PathwayContent, TimelineField, TimelineRow } from "@/lib/pathways"

const defaultMobileOrder: readonly TimelineField[] = [
  "stage",
  "standard",
  "premium",
]

function StageValue({ row }: { row: TimelineRow }) {
  if (!row.stageDetail) {
    return <>{row.stage}</>
  }

  return (
    <>
      <span className="block">{row.stage}</span>
      <span className="block">{row.stageDetail}</span>
    </>
  )
}

function FieldBlock({
  label,
  row,
  field,
}: {
  label: string
  row: TimelineRow
  field: TimelineField
}) {
  return (
    <div className="flex w-full flex-col" style={{ gap: fluid(10, 10) }}>
      <p
        className="font-medium text-black"
        style={fluidText(16, 16, 18, 18)}
      >
        {label}
      </p>
      <p className="text-[#404040]" style={fluidText(18, 18, 22, 22)}>
        {field === "stage" ? <StageValue row={row} /> : row[field]}
      </p>
    </div>
  )
}

export function PathwayTimeline({ content }: { content: PathwayContent }) {
  const { timeline } = content

  return (
    <section className="bg-[#fffaef]">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(64, 100),
          paddingBottom: fluid(64, 100),
          gap: fluid(62, 40),
        }}
      >
        <header
          className="flex w-full flex-col"
          style={{
            gap: fluid(12, 12),
            maxWidth: fluid(392, 600),
          }}
        >
          <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 68)}>
            <HeadingRuns runs={timeline.heading} fallback="muted" />
          </h2>
          <p className="w-full text-[#606060]" style={fluidText(18, 20, 22, 24)}>
            {timeline.subhead}
          </p>
        </header>

        <div
          className="flex w-full flex-col"
          style={{ gap: fluid(24, 24) }}
        >
          <div
            className="w-full overflow-hidden rounded-[24px] border border-solid border-[#e4e2dd] bg-[#efece4]"
            style={{ padding: fluid(7, 8) }}
          >
            <div
              className="hidden grid-cols-3 font-medium text-black lg:grid"
              style={{
                ...fluidText(20, 20, 24, 24),
                paddingInline: fluid(20, 31),
                paddingTop: fluid(12, 11),
                paddingBottom: fluid(12, 16),
              }}
            >
              <p>Stage</p>
              <p>Standard Processing</p>
              <p>With Premium Processing</p>
            </div>

            <div className="flex flex-col" style={{ gap: fluid(8, 8) }}>
              {timeline.rows.map((row) => {
                const order = row.mobileOrder ?? defaultMobileOrder

                return (
                  <article
                    key={row.stage}
                    className="w-full rounded-[16px] border border-solid border-[#e4e2dd] bg-[#fffcf4]"
                    style={{
                      paddingTop: fluid(19, 39),
                      paddingBottom: fluid(19, 39),
                      paddingInline: fluid(20, 31),
                    }}
                  >
                    <div
                      className="flex flex-col lg:hidden"
                      style={{ gap: fluid(40, 40) }}
                    >
                      {order.map((field) => (
                        <FieldBlock
                          key={field}
                          field={field}
                          row={row}
                          label={
                            field === "stage"
                              ? "Stage"
                              : field === "standard"
                                ? "Standard Processing"
                                : "With Premium Processing"
                          }
                        />
                      ))}
                    </div>

                    <div
                      className="hidden grid-cols-3 text-[#404040] lg:grid"
                      style={fluidText(20, 20, 24, 24)}
                    >
                      <p className="pr-4">
                        <StageValue row={row} />
                      </p>
                      <p className="pr-4">{row.standard}</p>
                      <p>{row.premium}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <p
            className="w-full text-[#404040] lg:hidden"
            style={fluidText(18, 20, 22, 24)}
          >
            {timeline.disclaimerMobile}
          </p>
          <p
            className="hidden w-full text-[#404040] lg:block"
            style={fluidText(18, 20, 22, 24)}
          >
            {timeline.disclaimer}
          </p>
        </div>
      </div>
    </section>
  )
}
