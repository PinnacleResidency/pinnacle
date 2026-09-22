import type { FaqItem } from "@/lib/pathways"

export type FaqGroup = {
  heading: string
  items: readonly FaqItem[]
}

export const faqGroups: readonly FaqGroup[] = [
  {
    heading: "Getting Started With Pinnacle",
    items: [
      {
        question: "Do I need to be living inside the United States to start this process?",
        answer:
          "No. You can begin working with us, and file your petition, from anywhere. Where you eventually apply for your green card, adjustment of status inside the US or consular processing abroad, depends on your specific circumstances.",
      },
      {
        question: "How do I get started on my green card journey with Pinnacle?",
        answer: "",
      },
      {
        question: "What happens if my profile isn't strong enough right now?",
        answer: "",
      },
      {
        question: "Is Pinnacle a law firm?",
        answer: "",
      },
    ],
  },
  {
    heading: "Extraordinary Ability Questions",
    items: [
      {
        question: "Do I need a job offer or a US sponsor for EB-1A?",
        answer:
          "No. EB-1A is a self-petition category, meaning you do not need an employer sponsor, job offer, or labor certification to apply.",
      },
      {
        question: "What are the ten EB-1A criteria?",
        answer: "",
      },
      {
        question: "Is EB-1A faster than other pathways?",
        answer: "",
      },
    ],
  },
  {
    heading: "National Interest Waiver Questions",
    items: [
      {
        question: "Do I need a job offer or employer sponsor for EB-2 NIW?",
        answer:
          "No. The National Interest Waiver removes the job offer and labor certification requirements that EB-2 normally has, so you self-petition on your own behalf.",
      },
      {
        question: 'What is a "proposed endeavor"?',
        answer: "",
      },
      {
        question: "How is EB-2 NIW different from EB-1A?",
        answer: "",
      },
    ],
  },
  {
    heading: "What to Expect Once You Start",
    items: [
      {
        question: "Do I need to be inside the United States to start this process?",
        answer:
          "No. You can start from anywhere, and we'll help you determine the right filing approach based on where you're currently located.",
      },
      {
        question: "What is inside the complete self-petition DIY guide?",
        answer: "",
      },
      {
        question: "How long does the process take from start to finish?",
        answer: "",
      },
    ],
  },
] as const
