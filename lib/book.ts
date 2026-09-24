import type { FaqItem } from "@/lib/pathways"

export const bookFaqs: readonly FaqItem[] = [
  {
    question: "Is there a fee for the strategy session?",
    answer: "Yes. There is a $50 fee for the one-hour strategy session.",
  },
  {
    question: "What should I prepare beforehand?",
    answer: "",
  },
  {
    question: "Will I get a final answer on whether I qualify?",
    answer: "",
  },
  {
    question: "What happens after the session if I want to move forward?",
    answer: "",
  },
  {
    question: "Do I need to be in the US to book a session?",
    answer: "",
  },
]

export const sessionSteps = [
  {
    icon: "/images/book/papers-text.svg",
    title: "Share Your Background",
    body: "You’ll complete a short intake form covering your education, career, and achievements. This gives us the context to prepare before your session.",
  },
  {
    icon: "/images/book/search-text.svg",
    title: "Have the Conversation",
    body: "We'll review your profile, explore the pathway that fit best, and give you an honest assessment based on your career and available evidence.",
  },
  {
    icon: "/images/book/badge-like.svg",
    title: "Leave With a Clear Next Step",
    body: "You'll know which pathway to pursue, what evidence to prioritize, and what needs to happen next if you decide to move forward with us.",
  },
] as const

export const sessionFits = [
  "Are unsure which of the EB-1A or EB-2 NIW pathway fits your background",
  "Want an honest assessment before investing time and money into a full petition",
  "Have a general sense of your achievements but haven't organized them into a case yet",
] as const
