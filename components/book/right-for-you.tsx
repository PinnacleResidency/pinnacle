import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"
import { sessionFits } from "@/lib/book"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 1680' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(31.138 145.78 -38.175 281.9 211.42 597)'><stop stop-color='rgb(15,15,15)' offset='0'/><stop stop-color='rgb(13,26,11)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 1016' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(107 88.15 -131.18 170.45 726.5 361.08)'><stop stop-color='rgb(15,15,15)' offset='0'/><stop stop-color='rgb(13,26,11)' offset='1'/></radialGradient></defs></svg>\")"

export function BookRightForYou() {
  return (
    <section className="relative overflow-x-hidden">
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
          paddingInline: fluid(24, 265),
          paddingTop: fluid(60, 120),
          paddingBottom: fluid(60, 120),
          gap: fluid(36, 60),
        }}
      >
        <div
          className="flex w-full flex-col items-center"
          style={{ gap: fluid(10, 12) }}
        >
          <h2
            className="w-full font-medium"
            style={fluidText(44, 60, 45, 68)}
          >
            <span className="text-[#707070]">Is This Session</span>
            <span className="text-white"> Right for You?</span>
          </h2>
          <p
            className="w-full text-[#aaaaaa]"
            style={{
              ...fluidText(18, 20, 22, 24),
              maxWidth: fluid(392, 592),
            }}
          >
            If you&apos;re serious about pursuing a green card, this is where
            to start. This session works well if you:
          </p>
        </div>

        <ul
          className="grid w-full list-none grid-cols-1 lg:grid-cols-3"
          style={{ gap: fluid(16, 32) }}
        >
          {sessionFits.map((fit) => (
            <li
              key={fit}
              className="flex flex-col items-start rounded-[24px] bg-[#121c0f] text-left"
              style={{
                paddingInline: fluid(20, 28),
                paddingBlock: fluid(24, 32),
                gap: fluid(16, 24),
                minHeight: fluid(132, 184),
              }}
            >
              <Image
                src="/images/book/user-alt.svg"
                alt=""
                width={24}
                height={24}
                unoptimized
                className="block size-6 max-w-none"
              />
              <p
                className="text-white"
                style={fluidText(18, 18, 22, 22)}
              >
                {fit}
              </p>
            </li>
          ))}
        </ul>

        <div
          className="flex w-full flex-col items-center"
          style={{ gap: fluid(24, 24) }}
        >
          <p
            className="w-full text-[#aaaaaa]"
            style={{
              ...fluidText(20, 24, 28, 28),
              maxWidth: fluid(340, 706),
            }}
          >
            If you belong to any of these categories, you can click on the
            button below book a session directly.
          </p>
          <BookStrategyButton />
        </div>
      </div>
    </section>
  )
}
