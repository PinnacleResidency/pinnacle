import type { Metadata } from "next"

import { FaqPage } from "@/components/faq/page"

export const metadata: Metadata = {
  title: "FAQ | Pinnacle Residency",
  description:
    "Straight answers to the questions we hear most, organized by topic.",
}

export default function Page() {
  return <FaqPage />
}
