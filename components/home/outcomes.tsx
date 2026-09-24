import Image from "next/image"
import Link from "next/link"

import { fluid, fluidText } from "@/lib/fluid"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 1224' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(31.138 106.2 -38.175 205.35 211.42 435.01)'><stop stop-color='rgb(15,15,15)' offset='0'/><stop stop-color='rgb(19,35,17)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 900' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(107 78.086 -131.18 150.99 726.5 319.86)'><stop stop-color='rgb(15,15,15)' offset='0'/><stop stop-color='rgb(19,35,17)' offset='1'/></radialGradient></defs></svg>\")"

const quoteGradient =
  "linear-gradient(95.29deg, rgb(20, 60, 8) 35.846%, rgb(94, 146, 16) 99.057%)"

export function Outcomes() {
  return (
    <section id="outcomes" className="relative overflow-hidden">
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
          paddingTop: fluid(64, 120),
          paddingBottom: fluid(96, 120),
        }}
      >
        <div
          className="flex flex-col text-white"
          style={{
            maxWidth: fluid(392, 600),
            gap: fluid(10, 16),
            marginBottom: fluid(40, 68),
          }}
        >
          <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 68)}>
            <span className="block">Proven Outcomes</span>
            <span className="block text-[#707070]">Across Every Field</span>
          </h2>
          <p className="w-full" style={fluidText(18, 20, 22, 24)}>
            Discover how professionals, researchers, and founders successfully
            navigated their EB visas with Pinnacle.
          </p>
        </div>

        <div
          className="flex flex-col"
          style={{ gap: fluid(16, 10) }}
        >
          <div
            className="flex flex-col lg:flex-row lg:justify-between"
            style={{ gap: fluid(16, 20) }}
          >
            <article
              className="flex w-full flex-col overflow-hidden rounded-[24px] bg-[#92e87b] lg:flex-[850]"
              style={{
                minHeight: fluid(460, 360),
                paddingTop: fluid(24, 24),
                paddingInline: fluid(20, 40),
                paddingBottom: fluid(32, 40),
              }}
            >
              <span
                className="inline-flex w-fit items-center justify-center self-start rounded-[5px] bg-[#76c95f] px-[5px] pt-1 pb-0.5 font-medium whitespace-nowrap text-[#427135]"
                style={fluidText(14, 14, 16, 16)}
              >
                Past Client
              </span>
              <div
                className="mt-auto flex flex-col"
                style={{ gap: fluid(40, 40) }}
              >
                <p
                  className="bg-clip-text font-medium text-transparent [-webkit-text-fill-color:transparent]"
                  style={{
                    ...fluidText(28, 35, 32, 40),
                    backgroundImage: quoteGradient,
                    backgroundSize: "100% 100%",
                  }}
                >
                  Pinnacle went beyond preparing my documents. They helped me
                  tell my career story and impact in a way that made my case
                  easy to understand. My EB-2 NIW was approved without an RFE.
                </p>
                <p
                  className="text-[#5b7e26]"
                  style={fluidText(20, 24, 24, 32)}
                >
                  Neurosurgical Resident
                </p>
              </div>
            </article>

            <article
              className="flex w-full flex-col overflow-hidden rounded-[24px] bg-[#417333] lg:max-w-[402px] lg:flex-[402]"
              style={{
                minHeight: fluid(350, 360),
                paddingTop: fluid(24, 24),
                paddingInline: fluid(20, 24),
                paddingBottom: fluid(32, 32),
              }}
            >
              <span
                className="inline-flex w-fit items-center justify-center self-start rounded-[5px] bg-[#568c47] px-[5px] pt-1 pb-0.5 font-medium whitespace-nowrap text-[#bcf8ab]"
                style={fluidText(14, 14, 16, 16)}
              >
                Case Studies
              </span>
              <div
                className="mt-[42px] flex flex-col"
                style={{ gap: fluid(10, 10) }}
              >
                <h3
                  className="font-medium text-white"
                  style={fluidText(32, 36, 36, 40)}
                >
                  Real Cases.
                  <br />
                  Real Approvals.
                </h3>
                <p
                  className="text-[#d2ddc2]"
                  style={fluidText(18, 20, 22, 24)}
                >
                  Explore how our targeted strategy and end-to-end support
                  turned intricate profiles into successful case outcomes.
                </p>
              </div>
              <Link
                href="/case-studies"
                className="mt-auto inline-flex w-fit items-center gap-2.5 font-medium text-white"
                style={fluidText(18, 18, 24, 24)}
              >
                <span className="border-b border-white">See Case Studies</span>
                <Image
                  src="/images/outcomes/arrow-up-right.svg"
                  alt=""
                  width={20}
                  height={20}
                  unoptimized
                  className="block size-5 max-w-none"
                />
              </Link>
            </article>
          </div>

          <p className="text-[#aaaaaa]" style={fluidText(12, 14, 16, 22)}>
            **Past results do not guarantee future outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
