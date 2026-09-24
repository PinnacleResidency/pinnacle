import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"
import { sessionSteps } from "@/lib/book"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 1150' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(44 -118.22 45.232 272.63 0 1202.1)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 982' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(151.2 -100.95 155.43 232.8 0 1026.5)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function BookHonestLook() {
  return (
    <section className="relative overflow-x-hidden bg-white">
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
        className="relative mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(60, 120),
          paddingBottom: fluid(60, 120),
          gap: fluid(40, 120),
        }}
      >
        <div
          className="flex w-full flex-col items-start lg:flex-row lg:items-center lg:justify-between"
          style={{ gap: fluid(24, 72) }}
        >
          <h2
            className="w-full font-medium lg:hidden"
            style={{
              ...fluidText(44, 60, 45, 66),
              marginBottom: fluid(24, 24),
            }}
          >
            <span className="text-[#707070]">An </span>
            <span className="text-[#1c2f00]">Honest Look</span>
            <span className="text-[#707070]"> at Where You Stand</span>
          </h2>

          <div
            className="relative w-full min-w-0 overflow-hidden rounded-[24px] lg:w-[700px] lg:shrink-0"
            style={{
              maxWidth: fluid(392, 700),
              height: fluid(342, 480),
            }}
          >
            <Image
              src="/images/book/chess.jpg"
              alt="Chess pieces on a board"
              width={750}
              height={750}
              sizes="(min-width: 1024px) 700px, 392px"
              className="absolute max-w-none"
              style={{
                height: "125.83%",
                width: "109.82%",
                left: "-9.88%",
                top: "-20.23%",
              }}
            />
          </div>

          <div
            className="flex w-full min-w-0 flex-col items-start lg:w-[500px] lg:shrink-0"
            style={{
              marginTop: fluid(24, 0),
              gap: fluid(40, 40),
            }}
          >
            <div className="flex w-full flex-col" style={{ gap: fluid(12, 12) }}>
              <h2
                className="hidden w-full font-medium lg:block"
                style={fluidText(44, 60, 45, 66)}
              >
                <span className="text-[#707070]">An </span>
                <span className="text-[#1c2f00]">Honest Look</span>
                <span className="text-[#707070]"> at Where You Stand</span>
              </h2>
              <div
                className="flex w-full flex-col text-[#606060]"
                style={fluidText(18, 20, 22, 24)}
              >
                <p>
                  A strategy session is a one-on-one consultation where we
                  review your background, achievements, and goals against the
                  actual criteria for EB-1A and EB-2 NIW.
                </p>
                <p className="mt-6">
                  You&apos;ll leave knowing which pathway fits your profile,
                  where your evidence is already strong, and where the gaps
                  are, before you commit to building a full petition.
                </p>
              </div>
            </div>
            <BookStrategyButton>Get Started</BookStrategyButton>
          </div>
        </div>

        <div
          className="flex w-full flex-col overflow-hidden rounded-[20px] border border-solid border-[#e4e2dd] bg-[#fffaef] lg:rounded-[24px]"
          style={{
            padding: fluid(20, 50),
            gap: fluid(40, 40),
          }}
        >
          <div className="flex w-full flex-col" style={{ gap: fluid(10, 12) }}>
            <h3
              className="w-full font-medium text-[#1c2f00]"
              style={fluidText(32, 40, 32, 45)}
            >
              How the Session Works
            </h3>
            <p
              className="w-full text-[#606060]"
              style={{
                ...fluidText(18, 20, 22, 24),
                maxWidth: fluid(352, 600),
              }}
            >
              Three simple steps from your profile to a clear path forward.
            </p>
          </div>

          <ul
            className="grid w-full list-none grid-cols-1 lg:grid-cols-3"
            style={{ gap: fluid(8, 16) }}
          >
            {sessionSteps.map((step) => (
              <li
                key={step.title}
                className="flex flex-col overflow-hidden rounded-[16px] border border-solid border-[#e4e2dd] bg-white"
                style={{
                  paddingInline: fluid(20, 30),
                  paddingBlock: fluid(24, 32),
                  gap: fluid(16, 16),
                }}
              >
                <span className="inline-flex w-fit items-center overflow-hidden rounded-[32px] bg-[rgba(71,166,45,0.2)] px-1.5 py-2">
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
                  className="flex flex-col"
                  style={{ gap: fluid(6, 6) }}
                >
                  <h4
                    className="font-medium text-[#202020]"
                    style={fluidText(20, 20, 24, 26)}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-[#404040]"
                    style={fluidText(18, 18, 22, 22)}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
