import Image from "next/image"
import Link from "next/link"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { fluid, fluidText } from "@/lib/fluid"

function Badge({
  label,
  tone,
}: {
  label: string
  tone: "mint" | "lime"
}) {
  return (
    <span
      className="inline-flex w-fit items-center justify-center self-start rounded-[5px] px-[5px] pt-1 pb-0.5 font-medium whitespace-nowrap text-[#489933]"
      style={{
        ...fluidText(12, 12, 16, 16),
        backgroundColor: tone === "mint" ? "#b9efaa" : "#b5f4a4",
      }}
    >
      {label}
    </span>
  )
}

function LearnMoreLink({ href }: { href: string }) {
  const icon = fluid(18, 22)

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2.5 border-b border-[#124a0a] font-medium text-[#124a0a]"
      style={fluidText(18, 20, 22, 24)}
    >
      Learn More
      <Image
        src="/images/pathways/arrow-learn-more.svg"
        alt=""
        width={22}
        height={22}
        unoptimized
        className="block max-w-none"
        style={{ width: icon, height: icon }}
      />
    </Link>
  )
}

function MintCard({
  badge,
  title,
  body,
  href,
}: {
  badge: string
  title: string
  body: string
  href: string
}) {
  return (
    <article
      className="flex w-full min-w-0 flex-col overflow-hidden rounded-[24px] border border-solid border-[#c7e2c0] bg-[#f2ffef] lg:flex-1"
      style={{
        minHeight: fluid(388, 415),
        paddingTop: fluid(23, 24),
        paddingInline: fluid(24, 32),
        paddingBottom: fluid(39, 40),
      }}
    >
      <Badge label={badge} tone="mint" />
      <div
        className="flex flex-col"
        style={{ marginTop: fluid(40, 40), gap: fluid(12, 12) }}
      >
        <h3
          className="font-medium text-[#124a0a]"
          style={fluidText(20, 24, 24, 28)}
        >
          {title}
        </h3>
        <p className="text-[#707070]" style={fluidText(18, 20, 22, 24)}>
          {body}
        </p>
      </div>
      <div className="mt-auto" style={{ paddingTop: fluid(24, 32) }}>
        <LearnMoreLink href={href} />
      </div>
    </article>
  )
}

export function Pathways() {
  return (
    <section
      id="pathways"
      className="overflow-x-clip bg-white"
      style={{ scrollMarginTop: fluid(48, 64) }}
    >
      <div
        className="mx-auto w-full max-w-[1512px]"
        style={{
          paddingInline: fluid(26, 121),
          paddingTop: fluid(64, 120),
          paddingBottom: fluid(83, 120),
        }}
      >
        <div
          className="mx-auto flex w-full flex-col items-center text-center"
          style={{
            gap: fluid(6, 12),
            marginBottom: fluid(40, 60),
          }}
        >
          <h2 className="w-full font-medium" style={fluidText(44, 60, 45, 68)}>
            <span className="whitespace-nowrap text-[#707070]">
              Pathways Designed for
            </span>
            <br />
            <span className="whitespace-nowrap">
              <span className="text-[#1c2f00]">Your Career</span>
              <span className="text-[#707070]"> Profile</span>
            </span>
          </h2>
          <p
            className="w-full text-[#606060]"
            style={{
              ...fluidText(18, 20, 22, 24),
              maxWidth: fluid(380, 480),
            }}
          >
            Explore tailored pathways designed to turn your career achievements
            into permanent residency
          </p>
        </div>

        <div
          className="mx-auto flex w-full flex-col lg:flex-row lg:items-stretch"
          style={{ gap: fluid(16, 20), maxWidth: fluid(388, 1270) }}
        >
          <MintCard
            badge="EB-1A"
            title="For Recognized Leaders in Their Field"
            body="Built for founders, researchers, physicians, and engineers who have achieved sustained national or international acclaim, without needing an employer or job offer."
            href="/pathways/eb-1a"
          />
          <MintCard
            badge="EB-2 NIW"
            title="For Skilled Professionals And Problem-Solvers"
            body="Ideal for people with an advanced degree or exceptional ability whose work will benefit the US. This pathway waives the job offer and labor certification requirement."
            href="/pathways/eb-2-niw"
          />
          <article
            className="@container flex w-full min-w-0 flex-col overflow-hidden rounded-[24px] bg-[#489832] lg:flex-[1.06]"
            style={{
              minHeight: fluid(420, 415),
              paddingTop: fluid(24, 24),
              paddingInline: fluid(24, 32),
              paddingBottom: fluid(40, 40),
            }}
          >
            <Badge label="CASE EVALUATION" tone="lime" />
            <div
              className="flex flex-col"
              style={{ marginTop: fluid(40, 40), gap: fluid(12, 12) }}
            >
              <h3 className="font-medium text-white" style={fluidText(20, 24, 24, 28)}>
                For Anyone Planning Their US Journey
              </h3>
              <p className="text-[#eeeeee]" style={fluidText(18, 20, 22, 24)}>
                Not sure which pathway fits your background? We&apos;ll assess
                your profile against EB-1A and EB-2 NIW criteria and give you an
                honest read on where you stand and what your options look like.
              </p>
            </div>
            <div className="mt-auto" style={{ paddingTop: fluid(24, 32) }}>
              <BookStrategyButton variant="onGreen" fit="card" />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}