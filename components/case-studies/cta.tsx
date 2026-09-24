import { Cta } from "@/components/home/cta"
import { fluidText } from "@/lib/fluid"

export function CaseStudiesCta() {
  return (
    <Cta
      headingAccent="Curious"
      headingMuted=" What Your Story Could Look Like?"
      accentFirst
      accentNowrap={false}
      copy="Book a strategy session and let's find out where your case actually stands."
      mobileCopyStyle={fluidText(18, 18, 22, 22)}
      image={{
        src: "/images/cta/liberty-skyline.jpg",
        alt: "Statue of Liberty and the New York City skyline",
        width: 982,
        height: 1876,
        heightPct: "258.5%",
        topPct: "-95.61%",
        widthPct: "99.92%",
        leftPct: "-0.02%",
        mobile: {
          heightPct: "213.96%",
          topPct: "-65.27%",
        },
      }}
    />
  )
}
