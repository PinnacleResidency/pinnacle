import type { Metadata } from "next"

import { CaseStudiesCta } from "@/components/case-studies/cta"
import { CaseStudiesListing } from "@/components/case-studies/listing"

export const metadata: Metadata = {
  title: "Case Studies | Pinnacle Residency",
  description:
    "Numbers tell you the odds. Stories tell you how we get there.",
}

export default function Page() {
  return (
    <>
      <CaseStudiesListing />
      <CaseStudiesCta />
    </>
  )
}
