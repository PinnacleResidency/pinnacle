import Image from "next/image"
import Link from "next/link"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { StampCard } from "@/components/home/stamp-card"
import { fluid, fluidText } from "@/lib/fluid"

const stats = [
  {
    value: "98.4%",
    width: [100, 165] as const,
    lines: ["Approval Rate", "Across All Petitions"],
  },
  {
    value: "82%",
    width: [100, 165] as const,
    lines: ["Direct Approval Rate (Without RFE)"],
  },
  {
    value: "91%",
    width: [120, 178] as const,
    lines: ["Success rate in solving complex RFE cases"],
  },
] as const

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 1250' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 108.71 -38.265 243.81 60.529 108.83)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 982' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 85.4 -131.49 191.54 208 85.5)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

function PathBadge() {
  const icon = fluid(36, 40)

  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-[10px] bg-[#72bf00] p-1.5 align-middle"
      aria-hidden
    >
      <Image
        src="/images/hero/arrow-forward-alt.svg"
        alt=""
        width={40}
        height={40}
        unoptimized
        className="block max-w-none"
        style={{ width: icon, height: icon }}
      />
    </span>
  )
}

function HeroStats() {
  return (
    <div className="flex flex-col" style={{ gap: fluid(12, 24) }}>
      <div className="flex items-center" style={{ gap: fluid(36, 60) }}>
        {stats.map((stat) => (
          <div
            key={stat.value}
            className="flex min-w-0 flex-col"
            style={{
              width: fluid(stat.width[0], stat.width[1]),
              gap: fluid(4, 6),
            }}
          >
            <p className="font-medium text-[#202020]" style={fluidText(16, 20, 20, 26)}>
              {stat.value}
            </p>
            <p className="text-[#808080]" style={fluidText(12, 18, 14, 22)}>
              {stat.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
      <p className="text-[#aaaaaa]" style={fluidText(10, 14, 12, 16)}>
        **Past results do not guarantee future outcomes.
      </p>
    </div>
  )
}

function StampCluster() {
  const width = fluid(358, 593)

  return (
    <div
      className="relative mx-auto"
      style={{
        width,
        height: `calc(718 * (${width}) / 593)`,
      }}
    >
      <div
        className="absolute top-0 left-0 origin-top-left"
        style={{
          width: 593,
          height: 718,
          transform: `scale(calc(${fluid(358, 593)} / 593px))`,
        }}
      >
        <StampCard
          stampSrc="/images/hero/stamp-nyc.svg"
          photoSrc="/images/hero/nyc-photo.jpg"
          photoAlt="Statue of Liberty"
          photoClassName="top-[-38.73%] left-[-10.31%] h-[151.56%] w-[120.62%]"
          labelSrc="/images/hero/label-nyc.svg"
          labelWidth={40.0841}
          labelHeight={14.92}
          labelClassName="top-[4.8%] left-6"
          rotate={-5}
          className="top-0 left-0 h-[530px] w-[409px]"
          preload
        />
        <StampCard
          stampSrc="/images/hero/stamp-sf.svg"
          photoSrc="/images/hero/sf-photo.jpg"
          photoAlt="Golden Gate Bridge"
          labelSrc="/images/hero/label-sf.svg"
          labelWidth={61.3152}
          labelHeight={54.9}
          labelClassName="bottom-[4.59%] left-6"
          rotate={10}
          className="top-[162px] left-[145px] h-[556px] w-[448px]"
          preload
        />
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
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
        className="relative mx-auto w-full max-w-[1512px]"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(150, 240),
          paddingBottom: fluid(34, 46),
        }}
      >
        <div className="relative flex flex-col lg:block">
          <div
            className="flex w-full flex-col items-center text-center lg:items-start lg:text-left"
            style={{
              maxWidth: fluid(392, 560),
              gap: fluid(40, 40),
            }}
          >
            <div
              className="flex w-full flex-col items-center lg:items-start"
              style={{ gap: fluid(12, 24) }}
            >
              <h1
                className="w-full font-medium"
                style={{
                  ...fluidText(56, 72, 52, 70),
                  maxWidth: fluid(366, 560),
                }}
              >
                <span className="text-[#202020]">Your Clear </span>
                <span
                  className="inline-flex items-center whitespace-nowrap align-middle"
                  style={{ gap: fluid(8, 8) }}
                >
                  <span className="text-[#202020]">Path</span>
                  <PathBadge />
                  <span className="text-[#707070] lg:hidden">to US</span>
                </span>
                <span className="text-[#707070]">
                  <span className="hidden lg:inline"> to US</span>
                  {" "}
                  Permanent Residency
                </span>
              </h1>
              <p className="w-full text-[#404040]" style={fluidText(20, 22, 24, 28)}>
                We guide professionals, researchers, and entrepreneurs through
                EB-1A and EB-2 NIW pathways with tailored strategy and personal
                support.
              </p>
            </div>

            <div
              className="flex flex-col items-center lg:flex-row lg:items-center"
              style={{ gap: fluid(24, 28) }}
            >
              <BookStrategyButton />
              <Link
                href="#pathways"
                className="font-medium text-black"
                style={fluidText(20, 20, 26, 26)}
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="lg:absolute lg:top-[-90px] lg:right-0"
            style={{ marginTop: fluid(80, 0) }}
          >
            <StampCluster />
          </div>

          <div
            className="w-full max-w-[628px]"
            style={{ marginTop: fluid(66, 162) }}
          >
            <HeroStats />
          </div>
        </div>
      </div>
    </section>
  )
}
