import type { FaqItem } from "@/lib/pathways"

export type FaqGroup = {
  heading: string
  description: string
  items: readonly FaqItem[]
}

export const homeFaqs: readonly FaqItem[] = [
  {
    question: "Do I need a job offer or a US sponsor for EB-1A or EB-2 NIW?",
    answer:
      "No. Both EB-1A and EB-2 NIW allow you to self-petition, meaning you do not need an employer sponsor, job offer, or labor certification (PERM) to apply.",
  },
  {
    question: "What is inside the complete self-petition DIY guide?",
    answer:
      "Our guide is a practical playbook that walks you through framing your professional story, structuring your cover letter, satisfying the legal prongs, gathering exhibits, and assembling your final filing packet without needing to hire a full-service firm.",
  },
  {
    question: "How do I get started on my journey with Pinnacle?",
    answer:
      "You can start by booking a case evaluation call with our team to review your background, or you can purchase our complete DIY petition playbook to begin drafting your application immediately.",
  },
  {
    question: "Can I apply for both EB-1A and EB-2 NIW at the same time?",
    answer:
      "Yes. Dual-filing EB-1A and EB-2 NIW is a common strategy. It allows you to secure an earlier priority date through EB-2 NIW while simultaneously pursuing the faster, higher-tier EB-1A category.",
  },
  {
    question: "Do I need to be living inside the United States to start this process?",
    answer:
      "No. You can file an EB-1A or EB-2 NIW petition whether you are currently living in the US on a temporary visa (like H-1B, O-1, or F-1 OPT) or residing entirely overseas. If approved abroad, you will complete consular processing to enter the US as a permanent resident.",
  },
  {
    question: "What is Premium Processing, and is it available for these visa paths?",
    answer:
      "Premium Processing is an optional USCIS fee that guarantees an official decision or response on your Form I-140 petition within 15 business days for EB-1A and 45 calendar days for EB-2 NIW.",
  },
]

export const faqGroups: readonly FaqGroup[] = [
  {
    heading: "Getting Started With Pinnacle",
    description: "The basics, before you dive into pathway-specific questions.",
    items: [
      {
        question: "Do I need to be living inside the United States to start this process?",
        answer:
          "No. You can begin working with us, and file your petition, from anywhere. Where you eventually apply for your green card, adjustment of status inside the US or consular processing abroad, depends on your specific circumstances.",
      },
      {
        question: "How do I get started on my green card journey with Pinnacle?",
        answer:
          "Book a strategy session. We'll review your background against EB-1A and EB-2 NIW criteria and give you an honest read on where you stand and which pathway fits.",
      },
      {
        question: "What happens if my profile isn't strong enough right now?",
        answer:
          "We'll tell you directly if that's the case, and where the specific gaps are. Sometimes the right move is to build up certain evidence first, or to look at a different pathway entirely. We'd rather give you an accurate picture upfront than take on a case that isn't ready.",
      },
      {
        question: "Is Pinnacle a law firm?",
        answer:
          "No. Pinnacle Residency is a strategic immigration consultancy providing profile evaluation, evidence strategy, and petition preparation resources. We are not a law firm, do not provide legal advice, and do not act as your legal representative or attorney before USCIS, the US Department of Labor, or the US Department of State.",
      },
    ],
  },
  {
    heading: "Extraordinary Ability Questions",
    description: "For people exploring the EB-1A pathway specifically.",
    items: [
      {
        question: "Do I need a job offer or a US sponsor for EB-1A?",
        answer:
          "No. EB-1A is a self-petition category, meaning you do not need an employer sponsor, job offer, or labor certification to apply.",
      },
      {
        question: "What are the ten EB-1A criteria?",
        answer:
          "They include things like nationally or internationally recognized awards, membership in selective associations, published material about you, judging others' work, original contributions of major significance, authorship of scholarly articles, display of work at exhibitions, a leading role at a distinguished organization, a high salary relative to your field, and commercial success in the performing arts. You need to meet at least three, or show one major internationally recognized award.",
      },
      {
        question: "Is EB-1A faster than other pathways?",
        answer:
          "Not inherently. Premium processing can speed up the I-140 decision itself for an additional fee, but it does not guarantee approval, and it does not speed up the adjustment of status or consular processing stages that follow.",
      },
    ],
  },
  {
    heading: "National Interest Waiver Questions",
    description: "For people exploring the EB-2 NIW pathway specifically.",
    items: [
      {
        question: "Do I need a job offer or employer sponsor for EB-2 NIW?",
        answer:
          "No. The National Interest Waiver removes the job offer and labor certification requirements that EB-2 normally has, so you self-petition on your own behalf.",
      },
      {
        question: 'What is a "proposed endeavor"?',
        answer:
          "It's the specific work you intend to continue in the US. It's the foundation of your entire petition, evaluated against the three-part Dhanasar test: whether it has substantial merit and national importance, whether you're well positioned to advance it, and whether waiving the job offer requirement would benefit the US.",
      },
      {
        question: "How is EB-2 NIW different from EB-1A?",
        answer:
          "EB-1A requires evidence of extraordinary ability and sustained acclaim at the top of your field. EB-2 NIW asks whether your specific proposed endeavor has national importance and whether you're positioned to carry it out. Many professionals who don't yet meet the EB-1A threshold are strong fits for NIW.",
      },
    ],
  },
  {
    heading: "What to Expect Once You Start",
    description: "Questions about how the actual process works.",
    items: [
      {
        question: "Do I need to be inside the United States to start this process?",
        answer:
          "No. You can start from anywhere, and we'll help you determine the right filing approach based on where you're currently located.",
      },
      {
        question: "What is inside the complete self-petition DIY guide?",
        answer:
          "The guide walks through framing your profile, drafting your letters, and organizing your filing packet, for people who want to handle their own petition rather than work with us directly.",
      },
      {
        question: "How long does the process take from start to finish?",
        answer:
          "It varies by pathway and by your specific case. Generally, expect several months for petition preparation and strategy work, followed by USCIS processing time that depends on your service center and whether you use premium processing. We'll walk through realistic timelines specific to your case during your strategy session.",
      },
    ],
  },
] as const
