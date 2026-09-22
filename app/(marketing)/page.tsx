import { Cta } from "@/components/home/cta"
import { Faq } from "@/components/home/faq"
import { Guide } from "@/components/home/guide"
import { Hero } from "@/components/home/hero"
import { Journey } from "@/components/home/journey"
import { Knowledge } from "@/components/home/knowledge"
import { Outcomes } from "@/components/home/outcomes"
import { Partnership } from "@/components/home/partnership"
import { Pathways } from "@/components/home/pathways"

export default function Page() {
  return (
    <>
      <Hero />
      <Pathways />
      <Outcomes />
      <Guide />
      <Partnership />
      <Journey />
      <Faq />
      <Knowledge />
      <Cta />
    </>
  )
}
