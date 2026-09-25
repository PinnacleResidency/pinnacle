"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

import { Logo } from "@/components/branding/logo"
import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { GetStartedButton } from "@/components/cta/get-started-button"
import { MegaMenu, StrategyCard } from "@/components/layout/mega-menu"
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

function mobileMenuLabel(id: MegaMenuId, label: string) {
  return id === "about" ? "About Us" : label
}

function MobileNav() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<MegaMenuId | "root">("root")
  const drilldown = view === "root" ? null : megaMenus[view]

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (!next) setView("root")
  }

  function closeAfterNavigate() {
    window.setTimeout(() => handleOpenChange(false), 0)
  }

  const itemType = {
    ...fluidText(32, 32, 32, 32),
    letterSpacing: "-0.02em",
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetTrigger className="inline-flex size-8 cursor-pointer items-center justify-center bg-transparent lg:hidden">
        <span className="sr-only">Open menu</span>
        <HamburgerIcon />
      </SheetTrigger>
      <SheetContent
        side="right"
        showCloseButton={false}
        className="h-full w-full max-w-none gap-0 overflow-y-auto border-none bg-white p-0 opacity-100 data-open:opacity-100 data-[side=right]:w-full sm:max-w-none"
      >
        <SheetHeader className="flex h-14 shrink-0 flex-row items-center justify-between border-b border-solid border-[#d0d0d0] bg-white/80 px-5 py-0 backdrop-blur-[7.5px]">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <span onClick={() => handleOpenChange(false)}>
            <Logo />
          </span>
          <SheetClose className="inline-flex size-8 cursor-pointer items-center justify-center bg-transparent text-[#0d3708]">
            <span className="sr-only">Close menu</span>
            <CloseIcon />
          </SheetClose>
        </SheetHeader>

        {drilldown ? (
          <>
            <button
              type="button"
              onClick={() => setView("root")}
              className="inline-flex w-fit cursor-pointer items-start self-start bg-transparent px-6 text-[#404040]"
              style={{
                ...fluidText(18, 18, 20, 20),
                paddingTop: 44,
                gap: 4,
              }}
            >
              <Image
                src="/images/nav/angle-left.svg"
                alt=""
                width={18}
                height={18}
                unoptimized
                className="mt-px block size-[18px] max-w-none shrink-0"
              />
              Back
            </button>
            <nav className="flex flex-col items-start px-6 pt-10" style={{ gap: 40 }}>
              {drilldown.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeAfterNavigate}
                  className="inline-flex items-center text-black"
                  style={{ ...itemType, gap: 12 }}
                >
                  {item.label}
                  <Image
                    src="/images/nav/arrow-up-right-32.svg"
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="block size-8 max-w-none shrink-0"
                  />
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex min-h-[500px] items-center justify-center bg-[#fff9ed] px-2.5 py-[25px]">
              <StrategyCard
                variant="mobile"
                onNavigate={closeAfterNavigate}
              />
            </div>
          </>
        ) : (
          <>
            <nav className="flex w-full flex-col px-6 pt-16" style={{ gap: 40 }}>
              {menus.map((menu) => (
                <button
                  key={menu.id}
                  type="button"
                  onClick={() => setView(menu.id)}
                  className="flex w-full cursor-pointer items-center justify-between bg-transparent text-left text-black"
                  style={itemType}
                >
                  {mobileMenuLabel(menu.id, menu.label)}
                  <Image
                    src="/images/nav/angle-right.svg"
                    alt=""
                    width={24}
                    height={24}
                    unoptimized
                    className="block size-6 max-w-none shrink-0"
                  />
                </button>
              ))}
            </nav>
            <div
              className="mt-auto flex justify-center"
              style={{ paddingBottom: 48 }}
              onClick={closeAfterNavigate}
            >
              <BookStrategyButton />
            </div>
          </>
        )}
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
