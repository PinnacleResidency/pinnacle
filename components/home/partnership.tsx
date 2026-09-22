import Image from "next/image"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"

const features = [
  {
    icon: "/images/partnership/trophy-star.svg",
    title: "Industry-Specific Framing",
    body: "We do not use templates. We translate your specific work, whether in tech, medicine, or humanities, into terms immigration officers understand.",
  },
  {
    icon: "/images/partnership/chats-text.svg",
    title: "Transparent Communication",
    body: "You will always know where your case stands. No hidden fees, no vague updates, and no waiting weeks for a simple reply.",
  },
  {
    icon: "/images/partnership/papers-text.svg",
    title: "Tailored to you",
    body: "We treat you like a partner, giving honest feedback on your approval odds before you invest time and money.",
  },
] as const

export function Partnership() {
  const icon = fluid(24, 28)

  return (
    <section id="partnership" className="bg-white">
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
            minHeight: fluid(400, 550),
            paddingTop: fluid(32, 60),
            paddingInline: fluid(20, 40),
            paddingBottom: fluid(32, 60),
            gap: fluid(60, 80),
          }}
        >
          <div className="flex flex-col" style={{ gap: fluid(12, 12) }}>
            <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 68)}>
              <span className="text-white">Clear Guidance. </span>
              <span className="text-[#9edd8d]">Honest Odds.</span>
              <span className="block text-[#9edd8d]">Real Partnership.</span>
            </h2>
            <p className="w-full text-[#d6f0cf]" style={fluidText(18, 20, 22, 24)}>
              Navigating employment-based immigration is a major life
              milestone, and we walk alongside you every step of the way.
            </p>
          </div>
          <BookStrategyButton variant="onGreen" className="self-start">
            Get started
          </BookStrategyButton>
        </article>

        <ul
          className="flex w-full min-w-0 list-none flex-col lg:max-w-[620px] lg:flex-[620]"
          style={{ gap: fluid(32, 32) }}
        >
          {features.map((feature) => (
            <li
              key={feature.title}
              className="flex items-start border-t border-[#e6e6e6]"
              style={{
                paddingTop: fluid(32, 32),
                gap: fluid(32, 45),
              }}
            >
              <Image
                src={feature.icon}
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
                  {feature.title}
                </h3>
                <p className="text-[#606060]" style={fluidText(18, 18, 22, 24)}>
                  {feature.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
