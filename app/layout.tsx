import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"

import "./globals.css"
import { SmoothScroll } from "@/components/layout/smooth-scroll"
import { ThemeProvider } from "@/components/theme-provider"
import { SanityLive } from "@/lib/sanity/live"
import { cn } from "@/lib/utils"

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Pinnacle Residency",
  description:
    "Strategic immigration consultancy for accomplished professionals pursuing EB-1A and EB-2 NIW pathways.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased font-sans", fontMono.variable)}
    >
      <body suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
          <SanityLive />
        </ThemeProvider>
      </body>
    </html>
  )
}
