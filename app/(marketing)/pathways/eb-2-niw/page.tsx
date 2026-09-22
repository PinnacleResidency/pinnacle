import type { Metadata } from "next"

import { PathwayPage } from "@/components/pathways/pathway-page"
import { eb2NiwPathway } from "@/lib/pathways"

export const metadata: Metadata = {
  title: "EB-2 NIW Pathway | Pinnacle Residency",
  description:
    "The EB-2 NIW (National Interest Waiver) pathway to US permanent residency is an employment-based immigrant petition for professionals whose work benefits the United States, built without an employer sponsor, job offer, or labor certification.",
}

export default function Page() {
  return <PathwayPage content={eb2NiwPathway} />
}
