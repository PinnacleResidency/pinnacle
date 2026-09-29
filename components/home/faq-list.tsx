import Image from "next/image"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { homeFaqs } from "@/lib/faq"
import { fluid, fluidText } from "@/lib/fluid"
import type { FaqItem } from "@/lib/pathways"

export type { FaqItem }

function FaqIcon({ open }: { open: boolean }) {
  return (
    <Image
      src={open ? "/images/faq/minus.svg" : "/images/faq/plus.svg"}
      alt=""
      width={22}
      height={22}
      unoptimized
      className="block size-[22px] max-w-none shrink-0"
    />
  )
}

export function FaqList({
  items = homeFaqs,
  inset = false,
}: {
  items?: readonly FaqItem[]
  inset?: boolean
}) {
  const itemPad = {
    paddingInline: inset ? fluid(12, 36) : 0,
    ["--faq-pb" as string]: fluid(28, 32),
  }

  return (
    <Accordion defaultValue={items.length ? ["0"] : []} className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={String(index)}
          className="border-t border-[#e6e6e6] not-last:border-b-0 last:border-b"
        >
          <AccordionTrigger
            className="cursor-pointer rounded-none border-0 py-0 pb-(--faq-pb) font-medium hover:no-underline focus-visible:ring-0 aria-expanded:pb-0 [&_[data-slot=accordion-trigger-icon]]:hidden"
            style={{
              ...itemPad,
              paddingTop: fluid(28, 32),
              gap: fluid(16, 20),
            }}
          >
            <span
              className="min-w-0 flex-1 text-[#202020]"
              style={fluidText(18, 20, 22, 24)}
            >
              {item.question}
            </span>
            <span className="relative size-[22px] shrink-0">
              <span className="absolute inset-0 group-aria-expanded/accordion-trigger:hidden">
                <FaqIcon open={false} />
              </span>
              <span className="absolute inset-0 hidden group-aria-expanded/accordion-trigger:block">
                <FaqIcon open />
              </span>
            </span>
          </AccordionTrigger>
          {item.answer ? (
            <AccordionContent
              className="pb-0 text-[#606060]"
              style={{
                ...itemPad,
                paddingTop: fluid(10, 10),
                paddingBottom: "var(--faq-pb)",
                ...fluidText(18, 20, 22, 28),
              }}
            >
              {item.answer}
            </AccordionContent>
          ) : null}
        </AccordionItem>
      ))}
    </Accordion>
  )
}
