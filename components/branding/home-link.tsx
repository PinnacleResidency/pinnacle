"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLenis } from "lenis/react"
import type { ComponentProps, MouseEvent } from "react"

export function HomeLink({
  onClick,
  ...props
}: Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname()
  const lenis = useLenis()

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event)
    if (event.defaultPrevented) return
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    if (pathname !== "/") return

    event.preventDefault()
    if (window.location.hash) {
      window.history.replaceState(null, "", "/")
    }
    if (lenis) {
      lenis.scrollTo(0)
      return
    }
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return <Link href="/" onClick={handleClick} {...props} />
}
