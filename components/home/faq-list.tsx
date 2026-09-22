"use client"

import Image from "next/image"
import { useState } from "react"

import { fluid, fluidText } from "@/lib/fluid"
import type { FaqItem } from "@/lib/pathways"

export type { FaqItem }

const homeItems: readonly FaqItem[] = [
  {
    question: "Do I need a job offer or a US sponsor for EB-1A or EB-2 NIW?",
    answer:
      "No. Both EB-1A and EB-2 NIW allow you to self-petition, meaning you do not need an employer sponsor, job offer, or labor certification (PERM) to apply.",
  },
  {
    question: "What is inside the complete self-petition DIY guide?",
    answer: "",
  },
  {
    question: "What happens if my profile isn't strong enough right now?",
    answer: "",
  },
  {
    question: "Do I need to be in the United States already to start this process?",
    answer: "",
  },
  {
    question: "How do I get started on my green card journey with Pinnacle?",
    answer: "",
  },
]

export function FaqList({
  items = homeItems,
  inset = false,
}: {
  items?: readonly FaqItem[]
  inset?: boolean
}) {
  const [open, setOpen] = useState(0)

  return (
    <ul className="flex w-full list-none flex-col">
      {items.map((item, index) => {
        const isOpen = open === index

        return (
          <li
            key={item.question}
            className="border-t border-[#e6e6e6] last:border-b"
          >
            <button
              type="button"
              className="flex w-full items-start justify-between text-left no-underline"
              style={{
                paddingTop: fluid(28, 32),
                paddingBottom: fluid(28, 32),
                paddingInline: inset ? fluid(12, 36) : 0,
                gap: fluid(16, 20),
              }}
              aria-expanded={isOpen}
              onClick={() =>
                setOpen((current) => (current === index ? -1 : index))
              }
            >
              <span
                className="flex min-w-0 flex-col"
                style={{ gap: fluid(10, 10) }}
              >
                <span
                  className="font-medium text-[#202020]"
                  style={fluidText(18, 20, 22, 24)}
                >
                  {item.question}
                </span>
                {isOpen && item.answer ? (
                  <span
                    className="text-[#606060]"
                    style={fluidText(18, 20, 22, 28)}
                  >
                    {item.answer}
                  </span>
                ) : null}
              </span>
              <Image
                src={isOpen ? "/images/faq/minus.svg" : "/images/faq/plus.svg"}
                alt=""
                width={22}
                height={22}
                unoptimized
                className="mt-0.5 block size-[22px] max-w-none shrink-0"
              />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
