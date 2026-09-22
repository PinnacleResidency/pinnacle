"use client"

import { ReactLenis, useLenis } from "lenis/react"
import { usePathname } from "next/navigation"
import { useEffect, type ReactNode } from "react"

const options = {
  autoRaf: true,
  autoToggle: true,
  allowNestedScroll: true,
  stopInertiaOnNavigate: true,
  anchors: {
    offset: -64,
  },
} as const

function ScrollToTopOnNavigate() {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis || window.location.hash) return
    lenis.scrollTo(0, { immediate: true })
  }, [pathname, lenis])

  return null
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={options}>
      {children}
      <ScrollToTopOnNavigate />
    </ReactLenis>
  )
}
