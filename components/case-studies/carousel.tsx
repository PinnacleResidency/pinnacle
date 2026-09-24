"use client"

import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel"
import { fluid, fluidText } from "@/lib/fluid"
import {
  caseStudies,
  caseStudiesDisclaimer,
  type CaseStudy,
  type ImageCrop,
} from "@/lib/case-studies"
import { cn } from "@/lib/utils"

function CroppedPhoto({
  study,
  crop,
  className,
  preload,
}: {
  study: CaseStudy
  crop: ImageCrop
  className?: string
  preload?: boolean
}) {
  return (
    <Image
      src={study.image}
      alt=""
      width={study.width}
      height={study.height}
      preload={preload}
      sizes="(min-width: 1024px) 307px, 312px"
      className={cn(
        "absolute max-w-none",
        crop.cover && "inset-0 size-full object-cover",
        className
      )}
      style={
        crop.cover
          ? undefined
          : {
              height: crop.height,
              width: crop.width,
              left: crop.left,
              top: crop.top,
            }
      }
    />
  )
}

function FieldTag({
  label,
  className,
}: {
  label: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center justify-center bg-[#f8eacc] font-medium whitespace-nowrap text-[#897548] rounded-[3px] px-[3px] pt-0.5 pb-px lg:rounded-[5px] lg:px-[5px] lg:pt-1 lg:pb-0.5",
        className
      )}
      style={fluidText(10, 14, 12, 16)}
    >
      {label}
    </span>
  )
}

function CaseStudyCard({
  study,
  preload,
  className,
}: {
  study: CaseStudy
  preload?: boolean
  className?: string
}) {
  return (
    <article
      className={cn(
        "flex h-[400px] w-[320px] flex-col overflow-hidden rounded-[20px] border border-solid border-[#e4e2dd] bg-white lg:w-[min(850px,calc(100vw*850/1512))] lg:flex-row lg:rounded-[24px]",
        className
      )}
    >
      <div className="relative mx-1 mt-1 h-[240px] w-[calc(100%-8px)] overflow-hidden rounded-[16px] lg:mx-2 lg:my-2 lg:h-[calc(100%-16px)] lg:w-[min(307px,36.14%)] lg:shrink-0 lg:rounded-[20px]">
        <CroppedPhoto
          study={study}
          crop={study.mobileCrop}
          className="lg:hidden"
          preload={preload}
        />
        <CroppedPhoto
          study={study}
          crop={study.desktopCrop}
          className="hidden lg:block"
          preload={preload}
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[16px] bg-[rgba(112,87,34,0.2)] lg:rounded-[20px]"
          aria-hidden
        />
        <FieldTag label={study.tag} className="absolute top-2 left-[11px] lg:hidden" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-5 pt-6 pb-5 lg:px-10 lg:pt-[26px] lg:pr-12 lg:pb-9">
        <FieldTag label={study.tag} className="hidden lg:inline-flex" />
        <div
          className="mt-auto flex flex-col items-start"
          style={{ gap: fluid(24, 60) }}
        >
          <p className="w-full text-[#202020]" style={fluidText(18, 35, 22, 40)}>
            {study.title}
          </p>
          <Link
            href={study.href}
            className="inline-flex items-center border-b border-solid border-[#202020] font-medium text-[#202020]"
            style={{
              ...fluidText(16, 18, 20, 24),
              gap: fluid(5, 10),
            }}
          >
            Read Case Study
            <Image
              src="/images/case-studies/arrow-up-right.svg"
              alt=""
              width={20}
              height={20}
              unoptimized
              className="block max-w-none"
              style={{
                width: fluid(16, 20),
                height: fluid(16, 20),
              }}
            />
          </Link>
        </div>
      </div>
    </article>
  )
}

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next"
  disabled: boolean
  onClick: () => void
}) {
  const icon = fluid(24, 28)

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous case studies" : "Next case studies"}
      className="flex shrink-0 cursor-pointer items-center justify-center rounded-[32px] border border-solid border-[#47a62d] bg-[#489832] disabled:cursor-not-allowed disabled:opacity-40"
      style={{
        width: fluid(42, 54),
        height: fluid(42, 54),
      }}
    >
      <Image
        src="/images/case-studies/angle-left.svg"
        alt=""
        width={28}
        height={28}
        unoptimized
        className={cn("block max-w-none", direction === "next" && "rotate-180")}
        style={{ width: icon, height: icon }}
      />
    </button>
  )
}

function CarouselToolbar({ showDisclaimer }: { showDisclaimer: boolean }) {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel()

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-[1512px] items-end",
        showDisclaimer ? "justify-between" : "justify-end"
      )}
      style={{
        paddingInline: fluid(24, 120),
        gap: fluid(16, 24),
      }}
    >
      {showDisclaimer ? (
        <p
          className="min-w-0 text-[#707070]"
          style={{
            ...fluidText(12, 20, 16, 24),
            maxWidth: fluid(235, 762),
          }}
        >
          <span className="font-medium">Disclaimer:</span> {caseStudiesDisclaimer}
        </p>
      ) : null}
      <div className="flex shrink-0 items-center" style={{ gap: fluid(10, 10) }}>
        <ArrowButton
          direction="prev"
          disabled={!canScrollPrev}
          onClick={scrollPrev}
        />
        <ArrowButton
          direction="next"
          disabled={!canScrollNext}
          onClick={scrollNext}
        />
      </div>
    </div>
  )
}

export function CaseStudiesCarousel({
  studies = caseStudies,
  showDisclaimer = true,
}: {
  studies?: readonly CaseStudy[]
  showDisclaimer?: boolean
} = {}) {
  return (
    <Carousel
      opts={{
        align: "start",
        containScroll: "trimSnaps",
      }}
      className="flex w-full flex-col"
      style={{ gap: fluid(40, 40) } satisfies CSSProperties}
    >
      <CarouselContent className="-ml-0">
        {studies.map((study, index) => (
          <CarouselItem
            key={study.slug}
            className="basis-auto pl-0"
            style={{
              paddingLeft: index === 0 ? fluid(24, 120) : fluid(16, 20),
              paddingRight:
                index === studies.length - 1 ? fluid(24, 120) : undefined,
            }}
          >
            <CaseStudyCard study={study} preload={index === 0} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselToolbar showDisclaimer={showDisclaimer} />
    </Carousel>
  )
}
