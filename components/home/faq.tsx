import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { FaqList, type FaqItem } from "@/components/home/faq-list"
import { fluid, fluidText } from "@/lib/fluid"

export function Faq({
  items,
  compact = false,
  copy = "Looking for something else? Send us a message, and we'll get back to you within 24 hours.",
  mobileCopy,
}: {
  items?: readonly FaqItem[]
  compact?: boolean
  copy?: string
  mobileCopy?: string
} = {}) {
  return (
    <section id="faq" className="bg-white">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col lg:flex-row lg:items-center lg:justify-between"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: compact ? fluid(24, 100) : fluid(60, 120),
          paddingBottom: compact ? fluid(40, 100) : fluid(62, 120),
          gap: fluid(40, 70),
        }}
      >
        <article
          className="relative flex w-full min-w-0 flex-col justify-between overflow-hidden rounded-[24px] border border-solid border-[#489832] bg-[#489832] lg:max-w-[472px] lg:flex-[472]"
          style={{
            minHeight: compact ? fluid(350, 450) : fluid(420, 620),
            padding: fluid(28, 40),
          }}
        >
          <Image
            src="/images/faq/vector.svg"
            alt=""
            width={669}
            height={752}
            unoptimized
            className="pointer-events-none absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-plus-lighter"
          />
          <h2
            className="relative w-full font-medium"
            style={{
              ...fluidText(44, 60, 45, 64),
              maxWidth: fluid(352, 392),
            }}
          >
            <span className="lg:hidden">
              <span className="whitespace-nowrap">
                <span className="text-[#beffac]">Frequently </span>
                <span className="text-white">Asked</span>
              </span>
              <span className="mt-0 block text-[#beffac]">Questions</span>
            </span>
            <span className="hidden lg:block">
              <span className="text-[#beffac]">Frequently</span>
              <span className="block text-white">Asked</span>
              <span className="block text-[#beffac]">Questions</span>
            </span>
          </h2>
          <div
            className="relative flex flex-col"
            style={{ gap: fluid(32, 32) }}
          >
            <p
              className="hidden text-[#d6f0cf] lg:block"
              style={fluidText(20, 20, 24, 24)}
            >
              {copy}
            </p>
            <p
              className="text-[#d6f0cf] lg:hidden"
              style={fluidText(20, 20, 24, 24)}
            >
              {mobileCopy ?? copy}
            </p>
            <BookStrategyButton variant="onGreen" href="/contact">
              Get in touch
            </BookStrategyButton>
          </div>
        </article>

        <div className="w-full min-w-0 lg:max-w-[720px] lg:flex-[720]">
          <FaqList items={items} />
        </div>
      </div>
    </section>
  )
}
