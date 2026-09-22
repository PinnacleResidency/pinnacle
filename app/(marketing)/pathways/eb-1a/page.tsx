import type { Metadata } from "next"

import { PathwayPage } from "@/components/pathways/pathway-page"
import { eb1aPathway } from "@/lib/pathways"

export const metadata: Metadata = {
  title: "EB-1A Pathway | Pinnacle Residency",
  description:
    "An employment-based immigrant petition for people who have reached the top of their field, built without an employer sponsor, job offer, or labor certification.",
}

export default function Page() {
  return <PathwayPage content={eb1aPathway} />
}
