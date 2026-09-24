import { fluid, fluidText } from "@/lib/fluid"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 480' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 41.743 -38.265 93.625 60.529 41.792)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 530' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 46.092 -131.49 103.38 208 46.146)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function FaqHero() {
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
          paddingBottom: fluid(48, 80),
        }}
      >
        <h1
          className="w-full font-medium"
          style={{
            ...fluidText(56, 72, 52, 70),
            maxWidth: fluid(392, 1013),
          }}
        >
          <span className="text-[#1c2f00]">Straight answers </span>
          <span className="text-[#707070]">
            to the questions we hear most, organized by topic.
          </span>
        </h1>
      </div>
    </section>
  )
}
