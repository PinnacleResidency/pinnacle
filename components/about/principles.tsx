import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"

const principles = [
  {
    icon: "/images/partnership/papers-text.svg",
    title: "Your case is not a template",
    body: "Two EB-1A petitions can look completely different and both be strong, because the people behind them are different.",
  },
  {
    icon: "/images/partnership/chats-text.svg",
    title: "Honest odds matter more than false comfort",
    body: "We'd rather tell you the truth about where you stand than tell you what feels good to hear.",
  },
  {
    icon: "/images/partnership/papers-text.svg",
    title: "Evidence should hold up on its own",
    body: "A petition built on independently verifiable evidence is stronger than one that relies on our own account of your significance.",
  },
] as const

export function AboutPrinciples() {
  const icon = fluid(24, 28)

  return (
    <section className="bg-white">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col lg:flex-row lg:items-center lg:justify-between"
        style={{
          paddingInline: fluid(24, 120),
          paddingTop: fluid(60, 120),
          paddingBottom: fluid(60, 120),
          gap: fluid(40, 82),
        }}
      >
        <article
          className="flex w-full min-w-0 flex-col justify-between overflow-hidden rounded-[24px] bg-[#489832] lg:max-w-[570px] lg:flex-[570]"
          style={{
            minHeight: fluid(400, 500),
            paddingTop: fluid(44, 60),
            paddingInline: fluid(20, 40),
            paddingBottom: fluid(44, 60),
            gap: fluid(60, 60),
          }}
        >
          <div className="flex flex-col" style={{ gap: fluid(12, 12) }}>
            <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 68)}>
              <span className="text-white">The Principles </span>
              <span className="text-[#9edd8d]">Behind How We Work</span>
            </h2>
            <p className="w-full text-[#d6f0cf]" style={fluidText(18, 20, 22, 24)}>
              A few things we hold to on every case, regardless of profile or
              pathway.
            </p>
          </div>
          <BookStrategyButton variant="onGreen" className="self-start" />
        </article>

        <ul
          className="flex w-full min-w-0 list-none flex-col lg:max-w-[620px] lg:flex-[620]"
          style={{ gap: fluid(32, 32) }}
        >
          {principles.map((principle) => (
            <li
              key={principle.title}
              className="flex items-start border-t border-[#e6e6e6]"
              style={{
                paddingTop: fluid(32, 32),
                gap: fluid(32, 45),
              }}
            >
              <Image
                src={principle.icon}
                alt=""
                width={28}
                height={28}
                unoptimized
                className="block shrink-0 max-w-none"
                style={{ width: icon, height: icon }}
              />
              <div
                className="flex min-w-0 flex-col"
                style={{ gap: fluid(10, 10) }}
              >
                <h3
                  className="font-medium text-[#202020]"
                  style={fluidText(20, 20, 22, 24)}
                >
                  {principle.title}
                </h3>
                <p className="text-[#606060]" style={fluidText(18, 18, 22, 24)}>
                  {principle.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
