import { CaseStudiesCarousel } from "@/components/case-studies/carousel"
import { fluid, fluidText } from "@/lib/fluid"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 956' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 83.139 -38.265 186.47 60.529 83.236)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 1050' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 91.314 -131.49 204.8 208 91.421)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function CaseStudiesListing() {
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
        className="relative mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingTop: fluid(100, 140),
          paddingBottom: fluid(40, 88),
          gap: fluid(40, 40),
        }}
      >
        <div
          className="flex w-full flex-col"
          style={{ paddingInline: fluid(24, 120) }}
        >
          <div
            className="flex w-full flex-col"
            style={{
              maxWidth: fluid(392, 585),
              gap: fluid(12, 20),
            }}
          >
            <h1 className="w-full font-medium" style={fluidText(56, 72, 52, 70)}>
              <span className="text-[#1c2f00]">Real Cases,</span>
              <span className="text-[#707070]"> Not Just Statistics</span>
            </h1>
            <p className="w-full text-[#404040]" style={fluidText(20, 22, 24, 28)}>
              Numbers tell you the odds. Stories tell you how we get there.
            </p>
          </div>
        </div>

        <CaseStudiesCarousel />
      </div>
    </section>
  )
}
