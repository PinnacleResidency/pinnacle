"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

import { Logo } from "@/components/branding/logo"
import { GetStartedButton } from "@/components/cta/get-started-button"
import { MegaMenu } from "@/components/layout/mega-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { fluid, fluidText } from "@/lib/fluid"
import {
  activeMegaId,
  megaMenus,
  type MegaMenuId,
} from "@/lib/site-nav"
import { cn } from "@/lib/utils"

const menus = [megaMenus.about, megaMenus.pathways, megaMenus.resources] as const

function AngleDown({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      <path
        d="M4.5 6.75 9 11.25 13.5 6.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <span className="flex h-[17.5px] w-5 flex-col justify-between" aria-hidden>
      <span className="h-[2.5px] w-5 rounded-full bg-[#202020]" />
      <span className="h-[2.5px] w-5 rounded-full bg-[#202020]" />
      <span className="h-[2.5px] w-5 rounded-full bg-[#202020]" />
    </span>
  )
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 4 16 16M16 4 4 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MobileNav() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<MegaMenuId | "root">("root")
  const drilldown = view === "root" ? null : megaMenus[view]

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) setView("root")
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger className="inline-flex size-8 items-center justify-center bg-transparent lg:hidden">
        <span className="sr-only">Open menu</span>
        <HamburgerIcon />
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="h-full w-full max-w-none gap-0 border-none bg-white p-0 data-[side=right]:w-full sm:max-w-none"
      >
        <SheetHeader
          className="flex flex-row items-center justify-between px-5 py-0"
          style={{ height: fluid(48, 64) }}
        >
          <SheetTitle className="sr-only">Menu</SheetTitle>
          {view === "root" ? (
            <Logo />
          ) : (
            <button
              type="button"
              onClick={() => setView("root")}
              className="inline-flex items-center gap-2 bg-transparent text-[#202020]"
              style={fluidText(16, 16, 20, 20)}
            >
              <ChevronLeftIcon className="size-5" />
              Back
            </button>
          )}
          <SheetClose className="inline-flex size-8 items-center justify-center bg-transparent text-[#202020]">
            <span className="sr-only">Close menu</span>
            <CloseIcon />
          </SheetClose>
        </SheetHeader>

        {drilldown ? (
          <nav className="flex flex-col gap-6 px-5 pt-8">
            <p
              className="font-medium text-[#124a0a]"
              style={fluidText(18, 18, 20, 20)}
            >
              {drilldown.label}
            </p>
            {drilldown.items.map((item) => (
              <SheetClose
                key={item.label}
                nativeButton={false}
                render={<Link href={item.href} />}
                className="text-left text-[#606060]"
                style={fluidText(18, 18, 20, 20)}
              >
                {item.label}
              </SheetClose>
            ))}
          </nav>
        ) : (
          <nav className="flex flex-col gap-8 px-5 pt-8">
            {menus.map((menu) => (
              <button
                key={menu.id}
                type="button"
                onClick={() => setView(menu.id)}
                className="flex w-full items-center justify-between bg-transparent text-left font-medium text-[#124a0a]"
                style={fluidText(18, 18, 20, 20)}
              >
                {menu.label}
                <ChevronRightIcon className="size-5 text-[#606060]" />
              </button>
            ))}
          </nav>
        )}

        <div className="mt-auto px-5 py-8">
          <GetStartedButton className="w-full" />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<MegaMenuId | null>(null)
  const [menuPath, setMenuPath] = useState(pathname)
  const closeTimer = useRef<number | null>(null)

  if (menuPath !== pathname) {
    setMenuPath(pathname)
    setOpenMenu(null)
  }

  function clearCloseTimer() {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function open(menu: MegaMenuId) {
    clearCloseTimer()
    setOpenMenu(menu)
  }

  function scheduleClose() {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140)
  }

  useEffect(() => {
    return () => clearCloseTimer()
  }, [])

  useEffect(() => {
    if (!openMenu) return

    function onPointerDown(event: PointerEvent) {
      const target = event.target as HTMLElement | null
      if (target?.closest("[data-mega-trigger]") || target?.closest("[data-mega-panel]")) {
        return
      }
      setOpenMenu(null)
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenMenu(null)
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("keydown", onKeyDown)
    }
  }, [openMenu])

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-[15px]">
      <div
        className="relative mx-auto w-full max-w-[1512px]"
        onMouseLeave={scheduleClose}
      >
        <div
          className="relative flex w-full items-center justify-between"
          style={{
            height: fluid(48, 72),
            paddingInline: fluid(20, 100),
          }}
        >
          <Logo />

          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center lg:flex"
            style={{ gap: fluid(24, 60) }}
          >
            {menus.map((menu) => {
              const isOpen = openMenu === menu.id

              return (
                <button
                  key={menu.id}
                  type="button"
                  data-mega-trigger=""
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  aria-current={activeMegaId(pathname) === menu.id ? "page" : undefined}
                  onMouseEnter={() => open(menu.id)}
                  onFocus={() => open(menu.id)}
                  onClick={() => open(menu.id)}
                  className="inline-flex cursor-pointer items-center gap-2 bg-transparent font-normal text-[#202020] outline-none"
                  style={fluidText(18, 18, 24, 24)}
                >
                  {menu.label}
                  <AngleDown
                    className={cn(
                      "transition-transform duration-200",
                      isOpen && "-scale-y-100"
                    )}
                  />
                </button>
              )
            })}
          </nav>

          <div className="flex items-center">
            <div className="hidden lg:block">
              <GetStartedButton />
            </div>
            <MobileNav />
          </div>
        </div>

        {openMenu ? (
          <div
            data-mega-panel=""
            className="absolute inset-x-0 top-full z-50 hidden lg:block"
            style={{ paddingInline: fluid(20, 100), paddingTop: 8 }}
            onMouseEnter={clearCloseTimer}
          >
            <MegaMenu
              key={openMenu}
              title={megaMenus[openMenu].label}
              items={megaMenus[openMenu].items}
              showCard={megaMenus[openMenu].showCard}
              onNavigate={() => setOpenMenu(null)}
            />
          </div>
        ) : null}
      </div>
    </header>
  )
}
