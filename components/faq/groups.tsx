import { FaqList } from "@/components/home/faq-list"
import { faqGroups } from "@/lib/faq"
import { fluid, fluidText } from "@/lib/fluid"

export function FaqGroups() {
  return (
    <section className="bg-white">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(60, 60),
          paddingBottom: fluid(60, 60),
          gap: fluid(60, 60),
        }}
      >
        {faqGroups.map((group) => (
          <div
            key={group.heading}
            className="flex w-full flex-col"
            style={{ gap: fluid(12, 12) }}
          >
            <h2
              className="w-full font-medium text-[#707070]"
              style={fluidText(28, 40, 32, 40)}
            >
              {group.heading}
            </h2>
            <FaqList items={group.items} inset />
          </div>
        ))}
      </div>
    </section>
  )
}
