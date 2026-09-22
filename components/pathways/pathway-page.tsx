import { Cta } from "@/components/home/cta"
import { Faq } from "@/components/home/faq"
import { Journey } from "@/components/home/journey"
import { PathwayDefine } from "@/components/pathways/pathway-define"
import { PathwayHero } from "@/components/pathways/pathway-hero"
import { PathwayTimeline } from "@/components/pathways/pathway-timeline"
import type { PathwayContent } from "@/lib/pathways"

export function PathwayPage({ content }: { content: PathwayContent }) {
  return (
    <>
      <PathwayHero content={content} />
      <PathwayDefine content={content} />
      <PathwayTimeline content={content} />
      <Journey />
      <Faq items={content.faqs} />
      <Cta
        headingMuted="Ready to Find Out "
        headingAccent="Where You Stand?"
        accentNowrap={false}
        accentClassName="text-[#1c2f00] lg:text-[#121c0f]"
        copy={content.ctaCopy}
        image={{
          src: "/images/cta/capitol.jpg",
          alt: "United States Capitol",
          width: 1200,
          height: 1800,
          heightPct: "203.12%",
          topPct: "-36.98%",
        }}
      />
    </>
  )
}
