import { fluid, fluidText } from "@/lib/fluid"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 513' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 44.613 -38.265 100.06 60.529 44.666)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 464' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 40.352 -131.49 90.504 208 40.399)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function AboutWhy() {
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
        className="relative mx-auto flex w-full max-w-[1512px] flex-col items-center text-center"
        style={{
          paddingInline: fluid(24, 241),
          paddingTop: fluid(60, 120),
          paddingBottom: fluid(43, 120),
          gap: fluid(12, 12),
        }}
      >
        <h2
          className="w-full font-medium"
          style={{
            ...fluidText(44, 60, 45, 68),
            maxWidth: fluid(392, 760),
          }}
        >
          <span className="text-[#707070]">Why Pinnacle </span>
          <span className="text-[#1c2f00]">Exists</span>
        </h2>
        <div
          className="flex w-full flex-col text-[#606060]"
          style={{
            ...fluidText(18, 20, 22, 24),
            maxWidth: fluid(392, 1030),
          }}
        >
          <p className="lg:hidden">
            Pinnacle Residency was founded on a simple observation: talented
            professionals, researchers, and founders regularly have strong
            enough profiles for EB-1A or EB-2 NIW, but their achievements get
            lost in translation between what they&apos;ve actually done and what
            USCIS needs to see on paper.
          </p>
          <p className="hidden lg:block">
            Pinnacle Residency was founded on a simple observation: talented
            professionals, researchers, and founders regularly have strong
            enough profiles for EB-1A or EB-2 NIW, but their achievements get
            lost in translation between what they&apos;ve actually done and what
            USCIS needs to see on paper. The work is real. The petition just
            doesn&apos;t always reflect it.
          </p>
          <p className="lg:hidden">
            The work is real. The petition just doesn&apos;t always reflect it.
          </p>
          <p className="mt-[22px] lg:mt-6">
            This observation shapes how Pinnacle works today. We conduct honest
            evaluation before commitment, build strategy around the specific
            evidence a case actually has, and a refusal to use templates where a
            person&apos;s real story should be.
          </p>
        </div>
      </div>
    </section>
  )
}
