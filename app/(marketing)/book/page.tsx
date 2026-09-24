import type { Metadata } from "next"

import { BookPage } from "@/components/book/page"

export const metadata: Metadata = {
  title: "Book a Strategy Session | Pinnacle Residency",
  description:
    "A focused conversation about your background, your options, and whether EB-1A or EB-2 NIW is the right path for you.",
}

export default function Page() {
  return <BookPage />
}
