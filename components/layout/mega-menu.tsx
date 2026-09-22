"use client"

import Image from "next/image"
import Link from "next/link"

import { fluid, fluidText } from "@/lib/fluid"
import type { MegaItem } from "@/lib/site-nav"

function closeAfterClick(onNavigate?: () => void) {
  window.setTimeout(() => onNavigate?.(), 0)
}

function StrategyCard({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div
      className="absolute inset-y-0 right-0 bg-[#fff9ed]"
      style={{
        width: fluid(300, 800),
        paddingInline: fluid(20, 100),
        paddingBlock: fluid(16, 24),
      }}
    >
      <div className="relative size-full overflow-hidden rounded-[20px]">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <Image
            src="/images/nav/strategy-session.jpg"
            alt=""
            width={1044}
            height={1863}
            className="absolute top-[-151.39%] left-[0.01%] h-[278.85%] w-full max-w-none"
          />
          <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-[rgba(15,15,15,0.75)] to-[#0d1a0b]" />
        </div>

        <div
          className="absolute flex flex-col items-start"
          style={{
            bottom: fluid(24, 40),
            left: fluid(20, 40),
            width: fluid(200, 400),
            gap: fluid(20, 32),
          }}
        >
          <div className="flex w-full flex-col gap-2.5">
            <p
              className="font-medium text-[#aaa]"
              style={fluidText(24, 36, 28, 40)}
            >
              Book a{" "}
              <span className="text-white">Strategy Session</span>
            </p>
            <p className="text-[#ddd]" style={fluidText(16, 20, 20, 24)}>
              A focused conversation about your background and options.
            </p>
          </div>

          <Link
            href="/book"
            onClick={() => closeAfterClick(onNavigate)}
            className="inline-flex items-center gap-2.5 border-b border-solid border-white font-medium text-white"
            style={fluidText(16, 18, 22, 24)}
          >
            Get Started
            <Image
              src="/images/nav/arrow-up-right-white.svg"
              alt=""
              width={20}
              height={20}
              unoptimized
              className="block size-5 max-w-none"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function MegaMenu({
  items,
  showCard,
  onNavigate,
}: {
  items: readonly MegaItem[]
  showCard?: boolean
  onNavigate?: () => void
}) {
  return (
    <div
      className="relative bg-white"
      style={{
        minHeight: showCard ? fluid(320, 428) : undefined,
      }}
    >
      <nav
        className="relative z-10 flex flex-col items-start"
        style={{
          paddingInline: fluid(20, 100),
          paddingTop: fluid(24, 40),
          paddingBottom: fluid(24, 40),
          gap: fluid(16, 20),
        }}
      >
        {items.map((item) => (
          <Link
            key={item.href + item.label}
            href={item.href}
            onClick={() => closeAfterClick(onNavigate)}
            className="inline-flex items-center text-[#202020] transition-opacity hover:opacity-70"
            style={{
              ...fluidText(18, 24, 24, 32),
              gap: fluid(8, 12),
            }}
          >
            {item.label}
            <Image
              src="/images/nav/arrow-up-right.svg"
              alt=""
              width={50}
              height={50}
              unoptimized
              className="block max-w-none shrink-0"
              style={{
                width: fluid(18, 24),
                height: fluid(18, 24),
              }}
            />
          </Link>
        ))}
      </nav>

      {showCard ? <StrategyCard onNavigate={onNavigate} /> : null}
    </div>
  )
}
