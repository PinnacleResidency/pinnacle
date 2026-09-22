import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { HeadingRuns } from "@/components/pathways/heading-runs"
import { fluid, fluidText } from "@/lib/fluid"
import type { PathwayContent } from "@/lib/pathways"
import { cn } from "@/lib/utils"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 1180' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 102.62 -38.265 230.16 60.529 102.74)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 982' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 85.4 -131.49 191.54 208 85.5)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function PathwayHero({ content }: { content: PathwayContent }) {
  const { hero } = content
  const centered = hero.align === "center"

  return (
    <section
      className="relative overflow-x-hidden bg-white lg:min-h-[982px]"
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
        className="relative mx-auto flex w-full max-w-[1512px] flex-col lg:flex-row lg:items-start lg:justify-between"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(180, 250),
          paddingBottom: fluid(55, 130),
          gap: fluid(60, 87),
        }}
      >
        <div
          className={cn(
            "flex w-full min-w-0 flex-col",
            centered
              ? "items-center text-center lg:items-start lg:text-left"
              : "items-start text-left"
          )}
          style={{
            maxWidth: fluid(392, 585),
            gap: fluid(40, 40),
            paddingTop: fluid(0, 50),
          }}
        >
          <div
            className={cn(
              "flex w-full flex-col",
              centered ? "items-center lg:items-start" : "items-start"
            )}
            style={{ gap: fluid(16, 24) }}
          >
            <h1 className="w-full font-medium" style={fluidText(56, 72, 52, 70)}>
              <HeadingRuns runs={hero.heading} />
            </h1>
            <p
              className="w-full text-[#404040] lg:hidden"
              style={fluidText(20, 22, 24, 28)}
            >
              {hero.bodyMobile}
            </p>
            <p
              className="hidden w-full text-[#404040] lg:block"
              style={fluidText(20, 22, 24, 28)}
            >
              {hero.bodyDesktop}
            </p>
          </div>
          <BookStrategyButton>Get Started</BookStrategyButton>
        </div>

        <div
          className="relative w-full min-w-0 shrink-0 overflow-hidden rounded-[24px] lg:w-[600px]"
          style={{
            maxWidth: fluid(392, 600),
            height: fluid(393, 602),
            alignSelf: centered ? "center" : "flex-start",
          }}
        >
          <Image
            src="/images/pathways/liberty.jpg"
            alt={hero.imageAlt}
            fill
            sizes="(min-width: 1024px) 600px, 392px"
            preload
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
