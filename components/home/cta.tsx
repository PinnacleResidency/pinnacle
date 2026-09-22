import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"
import { cn } from "@/lib/utils"

type CtaImageCrop = {
  heightPct: string
  topPct: string
  widthPct?: string
  leftPct?: string
}

type CtaImage = {
  src: string
  alt: string
  width: number
  height: number
} & CtaImageCrop & {
  mobile?: CtaImageCrop
}

const homeImage = {
  src: "/images/cta/skyline.jpg",
  alt: "New York City skyline",
  width: 736,
  height: 1308,
  heightPct: "240.66%",
  topPct: "-79.91%",
} as const satisfies CtaImage

function CtaPhoto({
  image,
  crop,
  className,
}: {
  image: CtaImage
  crop: CtaImageCrop
  className?: string
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      className={cn("absolute max-w-none", className)}
      style={{
        height: crop.heightPct,
        width: crop.widthPct ?? "100%",
        top: crop.topPct,
        left: crop.leftPct ?? "0%",
      }}
    />
  )
}

export function Cta({
  headingMuted = "Take the First Step Toward Your ",
  headingAccent = "American Dream",
  accentFirst = false,
  accentNowrap = true,
  accentClassName = "text-[#1c2f00]",
  copy = "Let's discuss your timeline and build a petition strategy that highlights your real value.",
  mobileCopy,
  image = homeImage,
}: {
  headingMuted?: string
  headingAccent?: string
  accentFirst?: boolean
  accentNowrap?: boolean
  accentClassName?: string
  copy?: string
  mobileCopy?: string
  image?: CtaImage
} = {}) {
  const accent = (
    <span className={cn(accentNowrap && "whitespace-nowrap", accentClassName)}>
      {headingAccent}
    </span>
  )
  const muted = <span className="text-[#707070]">{headingMuted}</span>

  return (
    <section id="cta" className="bg-white">
      <div
        className="mx-auto grid w-full max-w-[1512px] grid-cols-1 lg:grid-cols-[minmax(0,550px)_minmax(0,650px)] lg:items-center lg:justify-between"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(60, 120),
          paddingBottom: fluid(80, 150),
          rowGap: fluid(24, 24),
          columnGap: fluid(24, 72),
        }}
      >
        <div
          className="flex w-full min-w-0 flex-col items-start"
          style={{ gap: fluid(40, 40) }}
        >
          <div className="flex w-full flex-col" style={{ gap: fluid(12, 12) }}>
            <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 66)}>
              {accentFirst ? (
                <>
                  {accent}
                  {muted}
                </>
              ) : (
                <>
                  {muted}
                  {accent}
                </>
              )}
            </h2>
            <div className="hidden lg:block">
              <p className="w-full text-[#606060]" style={fluidText(20, 20, 24, 24)}>
                {copy}
              </p>
            </div>
          </div>
          <div className="hidden lg:block">
            <BookStrategyButton />
          </div>
        </div>

        <div
          className="relative w-full min-w-0 overflow-hidden rounded-[24px] lg:max-w-[650px]"
          style={{
            maxWidth: fluid(392, 650),
            height: fluid(350, 480),
          }}
        >
          {image.mobile ? (
            <>
              <CtaPhoto image={image} crop={image.mobile} className="lg:hidden" />
              <CtaPhoto image={image} crop={image} className="hidden lg:block" />
            </>
          ) : (
            <CtaPhoto image={image} crop={image} />
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(67,109,5,0)] to-[143.44%] to-[rgba(3,20,1,0.8)]"
            aria-hidden
          />
        </div>

        <div
          className="flex w-full flex-col items-start lg:hidden"
          style={{ gap: fluid(40, 40) }}
        >
          <p className="w-full text-[#606060]" style={fluidText(20, 20, 24, 24)}>
            {mobileCopy ?? copy}
          </p>
          <BookStrategyButton />
        </div>
      </div>
    </section>
  )
}
