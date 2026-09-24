import { BookHero } from "@/components/book/hero"
import { BookHonestLook } from "@/components/book/honest-look"
import { BookRightForYou } from "@/components/book/right-for-you"
import { Cta } from "@/components/home/cta"
import { Faq } from "@/components/home/faq"
import { bookFaqs } from "@/lib/book"

export function BookPage() {
  return (
    <>
      <BookHero />
      <BookHonestLook />
      <BookRightForYou />
      <Faq items={bookFaqs} />
      <Cta
        headingMuted="Ready to Find Out "
        headingAccent="Where You Stand?"
        accentNowrap={false}
        accentClassName="text-[#1c2f00] lg:text-[#121c0f]"
        copy="An honest assessment of your profile and proposed endeavor against the Dhanasar criteria."
        mobileCopy="An honest assessment of your profile against the EB-1A criteria, specific to your field."
        image={{
          src: "/images/cta/capitol.jpg",
          alt: "United States Capitol",
          width: 1200,
          height: 1800,
          heightPct: "203.12%",
          topPct: "-36.98%",
        }}
      />
    </>
  )
}
