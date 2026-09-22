import type { Metadata } from "next"

import { AboutPage } from "@/components/about/page"

export const metadata: Metadata = {
  title: "About Pinnacle | Pinnacle Residency",
  description:
    "Pinnacle Residency exists because immigration strategy should be as specific as the person it's for.",
}

export default function Page() {
  return <AboutPage />
}
