import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 856' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(107 74.268 -131.18 143.61 726.5 304.22)'><stop stop-color='rgb(15,15,15)' offset='0'/><stop stop-color='rgb(13,26,11)' offset='1'/></radialGradient></defs></svg>\")"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 1200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(31.138 104.11 -38.175 201.32 211.42 426.48)'><stop stop-color='rgb(15,15,15)' offset='0'/><stop stop-color='rgb(13,26,11)' offset='1'/></radialGradient></defs></svg>\")"

const steps = [
  {
    icon: "/images/journey/puzzle.svg",
    title: "Initial Assessment",
    body: "We review your background, achievements, and career goals to determine the best immigration path for you",
  },
  {
    icon: "/images/journey/fire.svg",
    title: "Strategy & Document Prep",
    body: "We identify supporting evidence, refine your documents, draft recommendation letters, and organize your case for maximum impact.",
  },
  {
    icon: "/images/journey/pen-tool.svg",
    title: "Final Review & Handoff",
    body: "We review your completed petition package with you and answer any remaining questions before you sign and file.",
  },
] as const

export function Journey({
  showCta = true,
}: {
  showCta?: boolean
} = {}) {
  return (
    <section id="journey" className="relative overflow-hidden">
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
        className="relative mx-auto flex w-full max-w-[1512px] flex-col items-center text-center"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(60, 120),
          paddingBottom: showCta ? fluid(82, 120) : fluid(60, 120),
          gap: fluid(40, 60),
        }}
      >
        <div
          className="flex w-full flex-col items-center"
          style={{
            gap: fluid(10, 12),
          }}
        >
          <h2
            className="w-full font-medium lg:w-max lg:whitespace-nowrap"
            style={fluidText(44, 60, 45, 68)}
          >
            <span className="text-white">Your Journey</span>
            <span className="text-[#707070]">
              <span className="hidden lg:inline"> </span>
              <span className="block lg:inline">With Pinnacle</span>
            </span>
          </h2>
          <p
            className="w-full text-[#aaaaaa]"
            style={{
              ...fluidText(18, 20, 22, 24),
              maxWidth: fluid(376, 480),
            }}
          >
            Your step-by-step roadmap from initial evaluation to final
            submission
          </p>
        </div>

        <ul
          className="flex w-full list-none flex-col lg:flex-row"
          style={{ gap: fluid(16, 20) }}
        >
          {steps.map((step) => (
            <li
              key={step.title}
              className="flex w-full min-w-0 flex-col items-start overflow-hidden rounded-[24px] bg-[#121c0f] text-left lg:flex-1"
              style={{
                minHeight: fluid(214, 236),
                paddingTop: fluid(32, 32),
                paddingInline: fluid(20, 28),
                paddingBottom: fluid(32, 32),
                gap: fluid(16, 16),
              }}
            >
              <span className="inline-flex items-center rounded-[32px] bg-[rgba(193,251,106,0.2)] px-1.5 py-2">
                <Image
                  src={step.icon}
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="block size-5 max-w-none"
                />
              </span>
              <div
                className="flex w-full flex-col"
                style={{ gap: fluid(6, 6) }}
              >
                <h3
                  className="font-medium text-white"
                  style={fluidText(20, 20, 26, 26)}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#afcba8]"
                  style={fluidText(18, 18, 22, 22)}
                >
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {showCta ? (
          <div
            className="flex w-full flex-col items-center"
            style={{
              gap: fluid(24, 24),
              marginTop: fluid(20, 20),
            }}
          >
            <p
              className="w-full text-center text-[#aaaaaa] lg:w-max lg:whitespace-nowrap"
              style={fluidText(24, 24, 28, 28)}
            >
              Ready to kickstart your journey to US green card?
            </p>
            <BookStrategyButton />
          </div>
        ) : null}
      </div>
    </section>
  )
}
