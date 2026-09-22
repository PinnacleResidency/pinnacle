import { AboutCta } from "@/components/about/cta"
import { AboutHero } from "@/components/about/hero"
import { AboutPrinciples } from "@/components/about/principles"
import { AboutWhy } from "@/components/about/why"
import { Journey } from "@/components/home/journey"

export function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhy />
      <AboutPrinciples />
      <Journey showCta={false} />
      <AboutCta />
    </>
  )
}
