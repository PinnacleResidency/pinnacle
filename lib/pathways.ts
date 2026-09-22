export type FaqItem = {
  question: string
  answer: string
}

export type TextTone = "muted" | "ink" | "forest"

export type TextRun = {
  text: string
  tone?: TextTone
}

export type Criterion = {
  title?: string
  body: string
}

export type TimelineField = "stage" | "standard" | "premium"

export type TimelineRow = {
  stage: string
  stageDetail?: string
  standard: string
  premium: string
  mobileOrder?: readonly TimelineField[]
}

export type PathwayContent = {
  slug: "eb-1a" | "eb-2-niw"
  name: string
  hero: {
    align: "center" | "start"
    heading: readonly TextRun[]
    bodyDesktop: string
    bodyMobile: string
    imageAlt: string
  }
  define: {
    heading: readonly TextRun[]
    headingMax?: number
    subhead: string
    whatTitle: string
    whatLead: string
    whatRest: readonly string[]
    profileTitle: string
    profileIntro: string
    criteria: readonly Criterion[]
    footnote: string
  }
  timeline: {
    heading: readonly TextRun[]
    subhead: string
    rows: readonly TimelineRow[]
    disclaimer: string
    disclaimerMobile: string
  }
  faqs: readonly FaqItem[]
  ctaCopy: string
}

export const eb1aPathway: PathwayContent = {
  slug: "eb-1a",
  name: "EB-1A",
  hero: {
    align: "center",
    heading: [
      { text: "All You Need to Know About the " },
      { text: "EB-1A Pathway", tone: "ink" },
    ],
    bodyDesktop:
      "An employment-based immigrant petition for people who have reached the top of their field, built without an employer sponsor, job offer, or labor certification.",
    bodyMobile:
      'The EB-1A pathway to US permanent residency, often called the "Extraordinary Ability" green card, is a self-petitioned green card specifically designed for people who have reached the top of their field, with no employer sponsor, job offer, or labor certification required.',
    imageAlt: "Statue of Liberty with the New York City skyline at sunset",
  },
  define: {
    heading: [
      { text: "Defining " },
      { text: "Extraordinary Ability", tone: "forest" },
    ],
    subhead: "The petition built for people whose work already speaks for itself.",
    whatTitle: "What Is EB-1A?",
    whatLead:
      "EB-1A is the Employment-Based First Preference category for individuals with extraordinary ability in the sciences, arts, education, business, or athletics. It's built for people whose achievements already speak for themselves, and it doesn't require a job offer, an employer sponsor, or labor certification.",
    whatRest: [
      "USCIS evaluates your case in two steps: first against ten regulatory criteria, where you need to meet at least three, or show one major award like a Nobel Prize, then through a final merits review of your record as a whole.",
      "Meeting three criteria on paper gets you considered. Building a petition that reads as a coherent, convincing case at final merits is what actually gets you approved, and that gap is where most underprepared petitions lose ground.",
    ],
    profileTitle: "Does your profile fit?",
    profileIntro: "Here's what USCIS looks for across those ten criteria:",
    criteria: [
      { body: "Display of your work at artistic exhibitions or showcases." },
      { body: "Original research with a citation record or measurable field impact" },
      { body: "Leadership of a distinguished organization, team, or initiative" },
      {
        body: "A track record of judging, peer review, or serving in a selective evaluative role",
      },
      {
        body: "Media coverage or industry recognition of your work, not just your employer's",
      },
      { body: "Authorship of scholarly articles, patents, or widely adopted technical work" },
      {
        body: "A salary or compensation history that stands out relative to others in the field",
      },
      {
        body: "Nationally or internationally recognized prizes or awards for excellence in your field",
      },
      {
        body: "Membership in associations that require outstanding achievement of their members",
      },
      {
        body: "Commercial success in the performing arts, measured by box office receipts or sales",
      },
    ],
    footnote:
      "**You do not need to meet every category above. Most successful petitioners build their case around three to five criteria supported by strong, corroborated evidence, not a long list of weak ones.",
  },
  timeline: {
    heading: [
      { text: "How Long ", tone: "forest" },
      { text: "Does EB-1A Take?" },
    ],
    subhead: "A realistic look at each stage, not a best-case estimate.",
    rows: [
      {
        stage: "I-140 petition adjudication",
        standard:
          "Roughly 4 to 8 months, sometimes longer depending on service center",
        premium: "15 business days from filing",
        mobileOrder: ["stage", "premium", "standard"],
      },
      {
        stage: "Adjustment of status",
        stageDetail: "(I-485, if filing inside the US)",
        standard:
          "Several months to over a year, depending on category and backlog",
        premium: "Not accelerated by premium processing",
      },
      {
        stage: "Consular processing",
        stageDetail: "(if filing from abroad)",
        standard: "Several months, depending on post",
        premium: "Not accelerated by premium processing",
      },
    ],
    disclaimer:
      "Timelines above reflect general USCIS processing patterns as of 2026 and are not a guarantee. USCIS processing times shift, and your actual timeline depends on your service center, filing volume, and case complexity. Always confirm current times at uscis.gov before making plans around them.",
    disclaimerMobile:
      "Timelines above reflect general USCIS processing patterns as of 2026 and are not a guarantee. USCIS processing times shift, and your actual timeline depends on your service center, filing volume, and case complexity. Always confirm current times at uscis.gov before making plans around them.",
  },
  faqs: [
    {
      question: "Do I need a job offer or employer sponsor for EB-1A?",
      answer:
        "No. EB-1A is a self-petition category. You file on your own behalf, without an employer, a specific job offer, or labor certification.",
    },
    {
      question: "Can premium processing guarantee my petition gets approved?",
      answer: "",
    },
    {
      question: "What happens if my profile isn't strong enough right now?",
      answer: "",
    },
    {
      question:
        "Do I need to be in the United States already to start this process?",
      answer: "",
    },
    {
      question: "How do I get started on my green card journey with Pinnacle?",
      answer: "",
    },
  ],
  ctaCopy:
    "An honest assessment of your profile against the EB-1A criteria, specific to your field.",
}

export const eb2NiwPathway: PathwayContent = {
  slug: "eb-2-niw",
  name: "EB-2 NIW",
  hero: {
    align: "start",
    heading: [
      { text: "The EB-2 NIW" },
      { text: " (National Interest Waiver) ", tone: "ink" },
      { text: "Pathway" },
    ],
    bodyDesktop:
      "The EB-2 NIW (National Interest Waiver) pathway to US permanent residency is an employment-based immigrant petition for professionals whose work benefits the United States, built without an employer sponsor, job offer, or labor certification.",
    bodyMobile:
      "The EB-2 NIW (National Interest Waiver) pathway to US permanent residency is an employment-based immigrant petition for professionals whose work benefits the United States, built without an employer sponsor, job offer, or labor certification.",
    imageAlt: "Statue of Liberty with the New York City skyline at sunset",
  },
  define: {
    heading: [
      { text: "A Petition Built Around " },
      { text: "Your Work’s Impact", tone: "forest" },
    ],
    headingMax: 760,
    subhead:
      "For professionals whose contributions matter more than a specific job title",
    whatTitle: "What Is EB-2 NIW?",
    whatLead:
      "EB-2 NIW is the Employment-Based Second Preference category, available to professionals with an advanced degree, or a bachelor's degree plus five years of progressive experience, or exceptional ability in the sciences, arts, or business.",
    whatRest: [
      "The National Interest Waiver (NIW) is what makes this petition possible without a sponsor: it waives the job offer and labor certification (PERM) that EB-2 normally requires, so you don't need an employer to sponsor you.",
    ],
    profileTitle: "Does your profile fit?",
    profileIntro:
      "USCIS evaluates NIW petitions using a three-part test known as the Dhanasar framework. Here's what each part actually asks:",
    criteria: [
      {
        title: "Substantial Merit and National Importance",
        body: "Your proposed endeavor, the specific work you plan to continue in the US, must have real substance and matter at a national level. This can be shown through economic impact, public health benefit, technological advancement, or another area with broad significance, not just significance to your employer or industry alone.",
      },
      {
        title: "You Are Well Positioned to Advance It",
        body: "Your education, skills, track record, and plans need to show you're genuinely positioned to carry out the endeavor, not simply that you'd like to. USCIS looks at your past achievements as evidence of future capability.",
      },
      {
        title: "Benefits the US to Waive the Job Offer Requirement",
        body: "You need to show that requiring a labor certification, and by extension a specific job offer, would be impractical or would hinder your ability to benefit the US, and that the country is better served by letting you proceed without one.",
      },
    ],
    footnote:
      "**You don't need to satisfy these three prongs with equal weight. Most strong petitions lead with a clearly defined, well-evidenced endeavor, since prongs two and three largely follow from how convincingly the first one is built.",
  },
  timeline: {
    heading: [
      { text: "How Long ", tone: "forest" },
      { text: "Does EB-2 NIW Take?" },
    ],
    subhead: "A realistic look at each stage, not a best-case estimate.",
    rows: [
      {
        stage: "I-140 petition adjudication",
        standard: "Roughly 7 to 15 months, depending on service center",
        premium:
          "Available for EB-2 NIW; usually 45 calendar days from filing",
      },
      {
        stage: "Adjustment of status",
        stageDetail: "(I-485, if filing inside the US)",
        standard:
          "Several months to over a year, depending on visa availability",
        premium: "Not accelerated by premium processing",
      },
      {
        stage: "Consular processing",
        stageDetail: "(if filing from abroad)",
        standard: "Several months, depending on post",
        premium: "Not accelerated by premium processing",
      },
    ],
    disclaimer:
      "Timelines below reflect general USCIS processing patterns as of 2026 and are not a guarantee. USCIS processing times shift, and your actual timeline depends on your service center, filing volume, and case complexity. Always confirm current times at uscis.gov before making plans around them.",
    disclaimerMobile:
      "Timelines above reflect general USCIS processing patterns as of 2026 and are not a guarantee. USCIS processing times shift, and your actual timeline depends on your service center, filing volume, and case complexity. Always confirm current times at uscis.gov before making plans around them.",
  },
  faqs: [
    {
      question: "Do I need a job offer or employer sponsor for EB-2 NIW?",
      answer:
        "No. The National Interest Waiver removes the job offer and labor certification requirements that EB-2 normally has, so you self-petition on your own behalf.",
    },
    {
      question: "Can premium processing guarantee my petition gets approved?",
      answer: "",
    },
    {
      question: "What happens if my profile isn't strong enough right now?",
      answer: "",
    },
    {
      question:
        "Do I need to be in the United States already to start this process?",
      answer: "",
    },
    {
      question: "How do I get started on my green card journey with Pinnacle?",
      answer: "",
    },
  ],
  ctaCopy:
    "An honest assessment of your profile and proposed endeavor against the Dhanasar criteria.",
}

export const toneClass: Record<TextTone, string> = {
  muted: "text-[#707070]",
  ink: "text-[#202020]",
  forest: "text-[#1c2f00]",
}
