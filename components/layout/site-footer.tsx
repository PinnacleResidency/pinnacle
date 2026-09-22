import Link from "next/link"

import { FooterWordmark } from "@/components/branding/logo"
import { fluid, fluidText } from "@/lib/fluid"
import { footerColumns, footerDisclaimer, footerSocial } from "@/lib/site-nav"

export function SiteFooter() {
  return (
    <footer
      className="bg-white"
      style={{
        paddingInline: fluid(24, 60),
        paddingTop: fluid(32, 48),
        paddingBottom: fluid(40, 64),
      }}
    >
      <div
        className="mx-auto w-full max-w-[1392px] overflow-hidden rounded-[24px] border border-[#def2d9] bg-[#f9fff8]"
        style={{
          paddingInline: fluid(24, 60),
          paddingTop: fluid(24, 60),
          paddingBottom: fluid(24, 40),
        }}
      >
        <FooterWordmark />

        <div
          className="grid grid-cols-2 lg:flex lg:justify-between"
          style={{
            marginTop: fluid(40, 40),
            columnGap: fluid(32, 32),
            rowGap: fluid(32, 32),
          }}
        >
          {footerColumns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-3">
              <p
                className="font-medium text-[#124a0a]"
                style={fluidText(18, 20, 20, 26)}
              >
                {column.heading}
              </p>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#606060]"
                  style={fluidText(18, 18, 20, 22)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div
          className="h-px w-full bg-[#def2d9]"
          style={{ marginTop: fluid(40, 60) }}
        />

        <p
          className="text-[#606060]"
          style={{
            ...fluidText(14, 14, 18, 18),
            marginTop: fluid(24, 40),
          }}
        >
          <span className="font-medium text-[#606060]">Legal Disclaimer:</span>{" "}
          {footerDisclaimer}
        </p>

        <div
          className="h-px w-full bg-[#def2d9]"
          style={{ marginTop: fluid(24, 40) }}
        />

        <div
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between"
          style={{
            marginTop: fluid(24, 40),
            gap: fluid(16, 16),
          }}
        >
          <div
            className="flex items-center lg:order-2"
            style={{ gap: fluid(40, 60) }}
          >
            {footerSocial.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[#606060] underline decoration-solid underline-offset-2"
                style={fluidText(18, 18, 20, 22)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p
            className="text-[#606060] lg:order-1"
            style={fluidText(18, 18, 20, 22)}
          >
            ©2026 Pinnacle Residency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
