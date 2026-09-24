import Image from "next/image"

import { fluid, fluidText } from "@/lib/fluid"
import {
  caseStudyPhotoCaption,
  type CaseStudy,
} from "@/lib/case-studies"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 880' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 76.53 -38.265 171.65 60.529 76.619)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 910' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 79.138 -131.49 177.5 208 79.231)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section
      className="relative overflow-x-hidden bg-white"
      style={{ marginTop: `calc(${fluid(48, 64)} * -1)` }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat lg:hidden"
        style={{ backgroundImage: mobileGradient, backgroundSize: "100% 100%" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hidden bg-no-repeat lg:block"
        style={{ backgroundImage: desktopGradient, backgroundSize: "100% 100%" }}
        aria-hidden
      />

      <div
        className="relative mx-auto w-full max-w-[1512px]"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(100, 140),
          paddingBottom: fluid(58, 60),
        }}
      >
        <article
          className="flex w-full flex-col overflow-hidden rounded-[20px] border border-solid border-[#e4e2dd] bg-white lg:h-[650px] lg:flex-row lg:rounded-[24px]"
        >
          <div
            className="relative order-2 isolate mx-[3px] mb-1 h-[480px] overflow-hidden rounded-[16px] lg:order-1 lg:mx-2 lg:my-2 lg:h-[634px] lg:w-[min(507px,40%)] lg:shrink-0 lg:rounded-[20px]"
          >
            <Image
              src={study.image}
              alt={study.imageAlt}
              width={study.width}
              height={study.height}
              preload
              sizes="(min-width: 1024px) 1170px, 885px"
              className="absolute max-w-none"
              style={{
                height: study.desktopCrop.cover ? "100%" : study.desktopCrop.height,
                width: study.desktopCrop.cover ? "100%" : study.desktopCrop.width,
                left: study.desktopCrop.cover ? "0%" : study.desktopCrop.left,
                top: study.desktopCrop.cover ? "0%" : study.desktopCrop.top,
                objectFit: study.desktopCrop.cover ? "cover" : undefined,
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(112, 87, 34, 0.2) 0%, rgba(112, 87, 34, 0.2) 100%), linear-gradient(180deg, rgba(15, 15, 15, 0) 69.164%, rgb(13, 26, 11) 147.87%)",
              }}
              aria-hidden
            />
            <p
              className="absolute left-5 bottom-8 whitespace-nowrap text-[#dedede] lg:left-5 lg:bottom-9"
              style={fluidText(10, 12, 12, 16)}
            >
              {caseStudyPhotoCaption}
            </p>
          </div>

          <div
            className="relative z-10 order-1 flex min-w-0 flex-1 flex-col px-4 pt-4 pb-6 lg:order-2 lg:px-10 lg:pt-10 lg:pr-12 lg:pb-16"
          >
            <span
              className="inline-flex w-fit items-center justify-center rounded-[3px] bg-[#f8eacc] px-[3px] pt-0.5 pb-px font-medium whitespace-nowrap text-[#897548] lg:rounded-[5px] lg:px-[5px] lg:pt-1 lg:pb-0.5"
              style={fluidText(10, 18, 12, 20)}
            >
              {study.tag}
            </span>
            <h1
              className="mt-8 w-full text-[#202020] lg:mt-auto"
              style={fluidText(28, 64, 32, 68)}
            >
              {study.title}
            </h1>
          </div>
        </article>
      </div>
    </section>
  )
}
