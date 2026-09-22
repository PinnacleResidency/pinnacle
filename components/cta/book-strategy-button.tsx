import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

import { fromContainer, fluidText } from "@/lib/fluid"
import { cn } from "@/lib/utils"

const variants = {
  primary: {
    link: "border-[#47a62d] bg-[#489832] text-white",
    disc: "bg-white",
    arrow: "/images/hero/arrow-up-right.svg",
  },
  onGreen: {
    link: "border-[#47a62d] bg-white text-[#283d22]",
    disc: "bg-[#489832]",
    arrow: "/images/pathways/arrow-book-on-green.svg",
  },
} as const

export function BookStrategyButton({
  className,
  variant = "primary",
  fit = "hug",
  href = "/book",
  children = "Book a Strategy Session",
}: {
  className?: string
  variant?: keyof typeof variants
  fit?: "hug" | "card"
  href?: string
  children?: ReactNode
}) {
  const styles = variants[variant]
  const line = variant === "onGreen" ? 26 : 22
  const cardFit = fit === "card"
  const disc = cardFit ? fromContainer(42) : undefined
  const arrow = cardFit ? fromContainer(26) : undefined

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center overflow-hidden rounded-[32px] border border-solid font-medium whitespace-nowrap",
        cardFit ? "max-w-full" : "w-fit gap-2.5 py-2 pr-2 pl-5",
        styles.link,
        className
      )}
      style={
        cardFit
          ? {
              fontSize: fromContainer(20),
              lineHeight: fromContainer(line),
              letterSpacing: "-0.02em",
              paddingTop: fromContainer(8),
              paddingBottom: fromContainer(8),
              paddingRight: fromContainer(8),
              paddingLeft: fromContainer(20),
              gap: fromContainer(10),
              borderRadius: fromContainer(32),
            }
          : fluidText(20, 20, line, 26)
      }
    >
      {children}
      <span
        className={cn(
          "flex shrink-0 items-center justify-center rounded-full shadow-[0px_2px_2px_rgb(0_0_0_/_0.1)]",
          cardFit ? undefined : "size-[42px] p-2",
          styles.disc
        )}
        style={
          cardFit
            ? { width: disc, height: disc, padding: fromContainer(8) }
            : undefined
        }
      >
        <Image
          src={styles.arrow}
          alt=""
          width={26}
          height={26}
          unoptimized
          className="block max-w-none"
          style={
            cardFit
              ? { width: arrow, height: arrow }
              : { width: 26, height: 26 }
          }
        />
      </span>
    </Link>
  )
}
