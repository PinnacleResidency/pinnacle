import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 730' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 63.485 -38.265 142.39 60.529 63.559)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 982' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 85.4 -131.49 191.54 208 85.5)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function BookHero() {
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
          paddingInline: fluid(10, 20),
          paddingTop: fluid(60, 84),
          paddingBottom: fluid(20, 20),
        }}
      >
        <div
          className="relative isolate overflow-hidden rounded-[20px] lg:rounded-[24px]"
          style={{ height: fluid(650, 825) }}
        >
          <Image
            src="/images/about/hero.jpg"
            alt="Golden Gate Bridge at night"
            width={1044}
            height={1863}
            preload
            sizes="100vw"
            className="absolute max-w-none lg:hidden"
            style={{
              height: "114.21%",
              width: "100%",
              left: "0%",
              top: "-14.21%",
            }}
          />
          <Image
            src="/images/about/hero.jpg"
            alt=""
            width={1044}
            height={1863}
            sizes="(min-width: 1024px) 1472px, 100vw"
            className="absolute hidden max-w-none lg:block"
            style={{
              height: "278.85%",
              width: "100%",
              left: "0.01%",
              top: "-151.39%",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(15,15,15,0.75)] to-[#0d1a0b]"
            aria-hidden
          />

          <div
            className="absolute inset-x-0 bottom-0 flex flex-col items-center lg:items-start"
            style={{
              paddingInline: fluid(14, 120),
              paddingBottom: fluid(50, 100),
            }}
          >
            <div
              className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
              style={{
                maxWidth: fluid(392, 600),
                gap: fluid(40, 40),
              }}
            >
              <div
                className="flex w-full flex-col"
                style={{ gap: fluid(12, 24) }}
              >
                <h1
                  className="w-full font-medium"
                  style={fluidText(56, 72, 52, 70)}
                >
                  <span className="text-[#aaaaaa]">Book Your </span>
                  <span className="text-white">Strategy Session</span>
                </h1>
                <p
                  className="w-full text-[#dddddd]"
                  style={fluidText(20, 22, 24, 28)}
                >
                  A focused conversation about your background, your options,
                  and whether EB-1A or EB-2 NIW is the right path for you.
                </p>
              </div>
              <BookStrategyButton>
                <span className="lg:hidden">Book a Strategy Session</span>
                <span className="hidden lg:inline">Get Started</span>
              </BookStrategyButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
