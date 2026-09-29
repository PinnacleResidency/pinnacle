import Image from "next/image"

import { HomeLink } from "@/components/branding/home-link"
import { fluid } from "@/lib/fluid"
import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <HomeLink
      className={cn("inline-flex items-center", className)}
      aria-label="Pinnacle home"
    >
      <Image
        src="/branding/logo-header.svg"
        alt=""
        width={149}
        height={24}
        className="h-auto max-w-none"
        style={{ width: fluid(112, 149), height: "auto" }}
        unoptimized
        priority
      />
    </HomeLink>
  )
}

export function FooterWordmark({ className }: { className?: string }) {
  return (
    <HomeLink
      className={cn("mx-auto block w-full", className)}
      aria-label="Pinnacle home"
    >
      <Image
        src="/branding/logo-footer.svg"
        alt=""
        width={1272}
        height={204}
        className="h-auto w-full"
        unoptimized
      />
    </HomeLink>
  )
}
