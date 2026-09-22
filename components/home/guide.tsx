import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"

export function Guide() {
  return (
    <section id="guide" className="bg-[#fffaef]">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col-reverse lg:flex-row lg:items-center lg:justify-between"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(60, 120),
          paddingBottom: fluid(60, 120),
          gap: fluid(50, 122),
        }}
      >
        <div
          className="relative w-full min-w-0 overflow-hidden rounded-[24px] lg:flex-[650]"
          style={{
            maxWidth: fluid(392, 650),
            height: fluid(360, 480),
          }}
        >
          <Image
            src="/images/guide/book.jpg"
            alt="A Practical Guide to EB-1A and EB-2 NIW Petitions"
            fill
            sizes="(min-width: 1024px) 650px, 392px"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute"
            style={{
              right: fluid(16, 24),
              bottom: fluid(16, 24),
              width: fluid(72, 96),
              height: fluid(72, 96),
            }}
          >
            <Image
              src="/images/guide/sticker.png"
              alt="$47 Instant Access"
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>
        </div>

        <div
          className="flex w-full min-w-0 flex-col items-start lg:flex-[500]"
          style={{
            maxWidth: fluid(392, 500),
            gap: fluid(40, 40),
          }}
        >
          <div className="flex w-full flex-col" style={{ gap: fluid(12, 12) }}>
            <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 66)}>
              <span className="text-[#707070]">Want to Handle </span>
              <span className="text-[#1c2f00]">Your Green Card</span>
              <span className="text-[#707070]"> Petition Yourself?</span>
            </h2>
            <p className="w-full text-[#606060]" style={fluidText(18, 20, 22, 24)}>
              Skip the guesswork and confusion. This comprehensive guide walks
              you through framing your profile, drafting your letters, and
              organizing your filing packet.
            </p>
          </div>
          <BookStrategyButton href="/guide">
            Get the Step-by-Step Guide
          </BookStrategyButton>
        </div>
      </div>
    </section>
  )
}
