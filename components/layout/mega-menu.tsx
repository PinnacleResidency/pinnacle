"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { fluid, fluidText } from "@/lib/fluid"
import type { MegaItem } from "@/lib/site-nav"
import { cn } from "@/lib/utils"

function closeAfterClick(onNavigate?: () => void) {
  window.setTimeout(() => onNavigate?.(), 0)
}

export function StrategyCard({
  variant = "desktop",
  onNavigate,
}: {
  variant?: "desktop" | "mobile"
  onNavigate?: () => void
}) {
  const mobile = variant === "mobile"

  return (
    <div
      className="relative overflow-hidden rounded-[20px]"
      style={
        mobile
          ? { width: "100%", aspectRatio: "420 / 450" }
          : {
              width: fluid(220, 520),
              aspectRatio: "600 / 380",
            }
      }
    >
      <Image
        src="/images/nav/strategy-session.jpg"
        alt=""
        width={1044}
        height={1863}
        className={cn(
          "absolute left-0 w-full max-w-none",
          mobile
            ? "top-[-14.21%] h-[114.21%]"
            : "top-[-151.39%] left-[0.01%] h-[278.85%]"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(15,15,15,0.75)] to-[#0d1a0b]" />

      <div
        className="absolute inset-x-0 bottom-0 flex flex-col items-start"
        style={{
          padding: mobile ? 24 : fluid(20, 32),
          gap: mobile ? 32 : fluid(16, 24),
        }}
      >
        <div className="flex w-full flex-col gap-2.5">
          <p
            className="font-medium text-[#aaa]"
            style={mobile ? fluidText(32, 32, 40, 40) : fluidText(20, 28, 24, 32)}
          >
            Book a <span className="text-white">Strategy Session</span>
          </p>
          <p
            className="text-[#ddd]"
            style={mobile ? fluidText(18, 18, 22, 22) : fluidText(14, 18, 18, 22)}
          >
            A focused conversation about your background and options.
          </p>
        </div>

        <Link
          href="/book"
          onClick={() => closeAfterClick(onNavigate)}
          className="inline-flex items-center gap-2.5 border-b border-solid border-white font-medium text-white"
          style={fluidText(16, 18, 20, 24)}
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
  )
}

export function MegaMenu({
  title,
  items,
  showCard,
  onNavigate,
}: {
  title: string
  items: readonly MegaItem[]
  showCard?: boolean
  onNavigate?: () => void
}) {
  const [activeHref, setActiveHref] = useState(items[0]?.href)
  const active = items.find((item) => item.href === activeHref) ?? items[0]

  return (
    <div
      className="flex w-full items-stretch overflow-hidden rounded-[24px] border border-[#e8e8e8]"
      style={{ gap: 0 }}
    >
      <div
        className="flex min-w-0 flex-1 flex-col bg-white"
        style={{
          gap: fluid(20, 32),
          padding: fluid(20, 40),
        }}
      >
        <p
          className="font-medium text-[#1c2f00]"
          style={fluidText(22, 28, 26, 32)}
        >
          {title}
        </p>
        <ul className="flex flex-col" style={{ gap: fluid(14, 20) }}>
          {items.map((item) => {
            const isActive = item.href === active?.href

            return (
              <li key={item.href + item.label}>
                <Link
                  href={item.href}
                  onClick={() => closeAfterClick(onNavigate)}
                  onFocus={() => setActiveHref(item.href)}
                  onMouseEnter={() => setActiveHref(item.href)}
                  className={cn(
                    "inline-flex items-center underline-offset-4 transition-colors",
                    isActive
                      ? "text-[#489832] underline"
                      : "text-[#202020] hover:text-[#489832] hover:underline"
                  )}
                  style={{
                    ...fluidText(18, 22, 24, 28),
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
                    className={cn(
                      "block max-w-none shrink-0",
                      isActive && "opacity-80"
                    )}
                    style={{
                      width: fluid(16, 20),
                      height: fluid(16, 20),
                    }}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {showCard ? (
        <div
          className="flex shrink-0 items-center justify-center bg-[#fff9ed]"
          style={{ padding: fluid(20, 40) }}
        >
          <StrategyCard onNavigate={onNavigate} />
        </div>
      ) : null}
    </div>
  )
}
