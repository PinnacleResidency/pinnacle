export type ImageCrop = {
  height: string
  width: string
  left: string
  top: string
  cover?: boolean
}

export type CaseStudy = {
  slug: string
  tag: string
  title: string
  href: string
  image: string
  imageAlt: string
  width: number
  height: number
  desktopCrop: ImageCrop
  mobileCrop: ImageCrop
}

export const caseStudies = [
  {
    slug: "healthcare",
    tag: "Healthcare",
    title:
      "How a physician's everyday clinical work became the backbone of an approved EB-1A petition.",
    href: "/case-studies/healthcare",
    image: "/images/case-studies/healthcare.jpg",
    imageAlt: "Portrait of a physician",
    width: 1199,
    height: 1428,
    desktopCrop: {
      height: "219.9%",
      width: "230.79%",
      left: "-59.78%",
      top: "-8.9%",
    },
    mobileCrop: {
      height: "352.29%",
      width: "227.53%",
      left: "-63.8%",
      top: "-14.43%",
    },
  },
  {
    slug: "engineering",
    tag: "Engineering",
    title:
      "How a structural engineer's unpublicized work became the center of an approved case.",
    href: "/case-studies/engineering",
    image: "/images/case-studies/engineering.jpg",
    imageAlt: "Portrait of a structural engineer",
    width: 736,
    height: 1308,
    desktopCrop: {
      height: "153.39%",
      width: "107.89%",
      left: "-5%",
      top: "-13.31%",
    },
    mobileCrop: {
      height: "247.12%",
      width: "106.96%",
      left: "-7.08%",
      top: "-23.43%",
    },
  },
  {
    slug: "technology",
    tag: "Technology",
    title:
      "How one engineer's narrow technical focus became the strength of his EB-2 NIW petition.",
    href: "/case-studies/technology",
    image: "/images/case-studies/technology.jpg",
    imageAlt: "Portrait of a technology engineer",
    width: 900,
    height: 1350,
    desktopCrop: {
      height: "100%",
      width: "100%",
      left: "0%",
      top: "0%",
      cover: true,
    },
    mobileCrop: {
      height: "195%",
      width: "100%",
      left: "0.1%",
      top: "-17.8%",
    },
  },
  {
    slug: "finance",
    tag: "Finance",
    title:
      "How a quantitative risk analyst rebuilt a struggling EB-2 NIW case after an RFE, and got approved.",
    href: "/case-studies/finance",
    image: "/images/case-studies/finance.jpg",
    imageAlt: "Portrait of a quantitative risk analyst",
    width: 736,
    height: 1318,
    desktopCrop: {
      height: "143.26%",
      width: "100%",
      left: "0%",
      top: "-12.92%",
    },
    mobileCrop: {
      height: "232.8%",
      width: "100%",
      left: "0.12%",
      top: "-21.35%",
    },
  },
  {
    slug: "entrepreneurship",
    tag: "Entrepreneurship",
    title:
      "How a founder separated her own contribution from her company's story to build a convincing case.",
    href: "/case-studies/entrepreneurship",
    image: "/images/case-studies/entrepreneurship.jpg",
    imageAlt: "Portrait of a founder",
    width: 575,
    height: 1022,
    desktopCrop: {
      height: "169.56%",
      width: "119.25%",
      left: "-9.67%",
      top: "-11.55%",
    },
    mobileCrop: {
      height: "268.09%",
      width: "116.03%",
      left: "-7.99%",
      top: "-18.87%",
    },
  },
] as const satisfies readonly CaseStudy[]

export const caseStudiesDisclaimer =
  "The case studies are illustrative composites based on real client experiences. Names, identifying details, and images have been changed for client confidentiality."

export const caseStudyPhotoCaption =
  "**For illustrative purposes only. Image does not represent an actual Pinnacle client."

export type HeadingRun = {
  text: string
  tone?: "muted" | "forest"
}

export type BodyRun = {
  text: string
  underline?: boolean
}

export type StorySection = {
  icon: string
  iconWidth: number
  iconHeight: number
  title: string
  body: readonly BodyRun[]
}

export type CaseStudyArticle = {
  slug: CaseStudy["slug"]
  storyHeading: readonly HeadingRun[]
  storySubhead: string
  sections: readonly StorySection[]
}

const storyIcons = {
  start: {
    icon: "/images/case-studies/cycling.svg",
    iconWidth: 24,
    iconHeight: 24,
    title: "The Starting Point",
  },
  complication: {
    icon: "/images/case-studies/traffic-cone.svg",
    iconWidth: 28,
    iconHeight: 28,
    title: "The Complication",
  },
  turning: {
    icon: "/images/case-studies/star-shooting.svg",
    iconWidth: 28,
    iconHeight: 28,
    title: "The Turning Point",
  },
  outcome: {
    icon: "/images/case-studies/award-check.svg",
    iconWidth: 28,
    iconHeight: 28,
    title: "The Outcome",
  },
} as const

export const caseStudyArticles = {
  healthcare: {
    slug: "healthcare",
    storyHeading: [
      { text: "When Your Work Feels Too Normal to Be " },
      { text: "Extraordinary", tone: "forest" },
    ],
    storySubhead:
      "The hardest part usually isn't the work. It's believing the work counts.",
    sections: [
      {
        ...storyIcons.start,
        body: [
          {
            text: "Dr Chidi, a pediatric neurologist practicing at a regional hospital system in the Midwest, came to his first strategy session already half convinced EB-1A wasn't going to work for him. He had no major press coverage. No headline award. No single dramatic moment he could point to. What he had was ten years of quietly being the physician other physicians called when a case didn't make sense: rare presentations, diagnostic dead ends, patients who had already seen three other specialists before landing on his desk. To him, that was just the job. He assumed extraordinary ability meant something closer to a magazine feature or a national prize, and by that measure, he didn't think he qualified.",
          },
        ],
      },
      {
        ...storyIcons.complication,
        body: [
          {
            text: "The real challenge wasn't a lack of achievement. It was that almost none of it existed in a form USCIS could easily evaluate. His strongest evidence lived inside hospital referral patterns, internal case reviews, and informal reputation among colleagues, none of which shows up as a clean, citable document. A first draft of his case, built the way he initially described his own work, would have read as \"",
          },
          { text: "a good doctor who works hard,", underline: true },
          {
            text: "\" which is true of thousands of physicians and proves nothing about extraordinary ability on its own.",
          },
        ],
      },
      {
        ...storyIcons.turning,
        body: [
          {
            text: "We started by mapping his actual evidence against the ten regulatory criteria instead of against his own sense of what counted. Three distinct criteria stood out once we looked past his modesty about his own work. First, his formal role as his department's designated second-opinion reviewer for complex referrals, evaluating other physicians' diagnostic conclusions before a final course of treatment was set, which supported judging the work of others. Second, his role directing his department's complex case management protocol, which we framed as a leading or critical role within a respected institution. Third, a specific diagnostic protocol he had developed and quietly circulated, which had since been adopted by two other departments in his hospital system, supporting original contributions of major significance. None of these were things he would have volunteered as ",
          },
          { text: "\"extraordinary.\"", underline: true },
          {
            text: " Each one, properly documented and framed, became a distinct pillar of the petition.",
          },
        ],
      },
      {
        ...storyIcons.outcome,
        body: [
          {
            text: "The petition was approved on first review, with no Request for Evidence. What had felt to him like an unremarkable decade of clinical work became, on paper, a clear and well corroborated case for extraordinary ability.",
          },
        ],
      },
    ],
  },
  engineering: {
    slug: "engineering",
    storyHeading: [
      { text: "Impact Without an " },
      { text: "Audience", tone: "forest" },
    ],
    storySubhead:
      "Some of the most significant work in engineering never makes headlines. It just gets built.",
    sections: [
      {
        ...storyIcons.start,
        body: [
          {
            text: "Janet had spent over a decade designing seismic retrofitting systems for critical infrastructure. Her work was in active use in bridges across most parts of the United States, quietly protecting people who had never heard her name and never would. She came to us with almost no published material, no conference talks, and no media coverage, because that simply isn't how her corner of structural engineering operates. The work gets built. It doesn't get written up.",
          },
        ],
      },
      {
        ...storyIcons.complication,
        body: [
          {
            text: "Nearly all of her supporting documentation lived inside her firm's internal engineering reports, which carry weight inside the profession but very little independent evidentiary value to USCIS. An adjudicator has no way to verify an internal document's claims about its own significance. Left as is, her case would have rested almost entirely on her own firm's word for how important her work was, which is exactly the kind of self-interested evidence that draws the heaviest scrutiny.",
          },
        ],
      },
      {
        ...storyIcons.turning,
        body: [
          {
            text: "We shifted the strategy away from internal documentation and toward independent corroboration. That meant identifying which parts of her work had left a paper trail outside her own firm: municipal licensing and permitting records tied to her specific designs, a third-party structural review commissioned by a client unrelated to her employer, and two letters from engineers at other firms who had directly used or evaluated her seismic retrofitting approach in their own projects. This turned \"my firm says my work matters\" into \"here is independent, verifiable proof that my work is in active use and has been evaluated by people with no reason to overstate its importance.\" Alongside this, her elevation to a selective grade of membership in a national engineering society, one requiring nomination and evaluation by existing members for outstanding achievement, gave us a third, independently verifiable criterion to build around. Together, his case rested on original contributions of major significance, a leading or critical role at her firm, and membership in an association that requires outstanding achievement of its members.",
          },
        ],
      },
      {
        ...storyIcons.outcome,
        body: [
          {
            text: "The petition was approved in a single pass, with no Request for Evidence. The independent corroboration made the difference: an adjudicator didn't have to take her firm's word for anything, because the evidence stood on its own.",
          },
        ],
      },
    ],
  },
  technology: {
    slug: "technology",
    storyHeading: [
      { text: "The Danger of Being Too Technical to " },
      { text: "Explain", tone: "forest" },
    ],
    storySubhead:
      "The work was groundbreaking. Explaining why it mattered nationally was the hard part.",
    sections: [
      {
        ...storyIcons.start,
        body: [
          {
            text: "Bamidele was a senior machine learning engineer leading fraud detection work at a mid-sized fintech company. He came to us with a strong technical record: two patents filed, a measurable drop in false-positive fraud flags under his system design, and a reputation inside his company as the person who fixed problems other engineers had given up on.",
          },
        ],
      },
      {
        ...storyIcons.complication,
        body: [
          {
            text: "His first attempt at describing his own endeavor sounded like a performance review, not a national interest case. He described his work as \"improving our fraud detection accuracy,\" which is a real and valuable achievement, but framed that way, it only mattered to his employer's bottom line. USCIS doesn't grant national interest waivers for helping one company perform better financially. That framing, left unchanged, would have sunk an otherwise strong case at the first prong of the Dhanasar test.",
          },
        ],
      },
      {
        ...storyIcons.turning,
        body: [
          {
            text: "The evidence didn't need to change. The scope did. We reframed his proposed endeavor away from his employer's specific product and toward the broader problem his work addressed: a category of financial fraud that costs the US economy billions annually and erodes public trust in digital financial infrastructure generally. His company's fraud detection system became one applied example of a solution to that larger problem, not the endeavor itself. Once the endeavor was scoped at the national level, his existing evidence, patents, internal performance metrics, and technical publications, stopped being \"things he did at work\" and became evidence supporting a claim that already made sense on its face.",
          },
        ],
      },
      {
        ...storyIcons.outcome,
        body: [
          {
            text: "USCIS approved the petition without issuing a Request for Evidence. The technical work never changed. Once the scope matched what the law was actually asking for, the case moved through cleanly.",
          },
        ],
      },
    ],
  },
  finance: {
    slug: "finance",
    storyHeading: [
      { text: "Arriving After Things Had Already Gone " },
      { text: "Wrong", tone: "forest" },
    ],
    storySubhead:
      "Sometimes the case doesn't start clean. It starts with an RFE already on the table.",
    sections: [
      {
        ...storyIcons.start,
        body: [
          {
            text: "Vishesh, a quantitative risk analyst at a large asset management firm, came to Pinnacle after his self-filed EB-2 NIW petition had already drawn a Request for Evidence. He had built his original case around his day-to-day work: modeling portfolio risk and improving his firm's exposure calculations. On paper, it read as competent and well compensated financial work. It did not read as work with national importance, and USCIS said so directly in the RFE.",
          },
        ],
      },
      {
        ...storyIcons.complication,
        body: [
          {
            text: "The RFE challenged his case on exactly the point that matters most for NIW petitions: national importance. USCIS noted that his endeavor, as described, appeared to benefit his employer's specific trading positions rather than the broader financial system. It also questioned whether his evidence adequately showed he was well positioned to advance an endeavor at that scale, since his original filing leaned almost entirely on his job title and compensation rather than on specific, demonstrable expertise. He had roughly 28 days to respond, and the original framing of his case was part of the problem, not just the evidence behind it.",
          },
        ],
      },
      {
        ...storyIcons.turning,
        body: [
          {
            text: "We didn't try to patch the existing case. We rebuilt the proposed endeavor from the ground up. His actual technical contribution was a risk modeling approach he had developed for assessing systemic exposure during periods of market stress, the kind of modeling that regulators and other institutions rely on to understand contagion risk across the financial system, not just within one firm's book. We reframed his endeavor around strengthening the resilience of US financial markets against systemic shocks, and supported it with new evidence: a technical paper he had co-authored internally but never framed as evidence, a letter from a former regulator familiar with his modeling approach, and documentation showing her methodology had been adopted beyond his own trading desk. The RFE response addressed each USCIS concern point by point, but the real work was making sure the endeavor itself, not just the evidence pile, actually answered the question USCIS was asking.",
          },
        ],
      },
      {
        ...storyIcons.outcome,
        body: [
          {
            text: "Following the RFE response, USCIS approved the petition. What had looked, in its original form, like a strong professional simply doing well-paid work became a case that clearly answered why his specific expertise mattered at a national scale.",
          },
        ],
      },
    ],
  },
  entrepreneurship: {
    slug: "entrepreneurship",
    storyHeading: [
      { text: "When the Business Succeeds, But the Case Isn't About the " },
      { text: "Business", tone: "forest" },
    ],
    storySubhead:
      "A growing company is a great sign. It isn't, on its own, a green card case.",
    sections: [
      {
        ...storyIcons.start,
        body: [
          {
            text: "Aisha had built a maternal health platform from a rough idea into a company with real revenue, a growing team, and coverage in a couple of industry publications. By most measures, the business was a success. She assumed that success would carry her case on its own.",
          },
        ],
      },
      {
        ...storyIcons.complication,
        body: [
          {
            text: "USCIS isn't evaluating whether a company succeeded. It's evaluating whether the individual petitioner, specifically, is well positioned to advance a nationally important endeavor, the standard EB-2 NIW actually requires. Her first draft of her own story read almost entirely as a company profile: funding raised, users onboarded, revenue growth. An adjudicator reading it would reasonably ask what, specifically, she had done, versus what her team, her investors, or market timing had done for her.",
          },
        ],
      },
      {
        ...storyIcons.turning,
        body: [
          {
            text: "The strategy work here was subtraction as much as addition. We went through her company's growth story and separated out exactly which decisions were hers: the specific technical architecture she had designed personally in the platform's early version, a clinical partnership she had negotiated directly, and a public health gap in maternal care access that she had identified and built the entire company's direction around before hiring a single engineer. We built her proposed endeavor around that gap itself, not around her company's balance sheet, and supported it with evidence of her individual role: her original technical approach, her direct leadership decisions at key turning points, and outside recognition of her personally, distinct from press coverage that credited \"the company\" as a whole.",
          },
        ],
      },
      {
        ...storyIcons.outcome,
        body: [
          {
            text: "The petition was approved without a Request for Evidence. Once the case was built around her, and not around her company's growth numbers, the distinction USCIS needed to see was already on the page.",
          },
        ],
      },
    ],
  },
} as const satisfies Record<string, CaseStudyArticle>

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug)
}

export function getCaseStudyArticle(slug: string) {
  const study = getCaseStudy(slug)
  const article = caseStudyArticles[slug as keyof typeof caseStudyArticles]
  if (!study || !article) return null
  return { study, article }
}
