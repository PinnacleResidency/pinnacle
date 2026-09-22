import Image from "next/image"
import Link from "next/link"

import { fluidText } from "@/lib/fluid"
import { cn } from "@/lib/utils"

export function GetStartedButton({ className }: { className?: string }) {
  return (
    <Link
      href="/book"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-[32px] border border-solid border-[#47a62d] bg-[#489832] py-1 pr-1 pl-3 font-medium whitespace-nowrap text-white",
        className
      )}
      style={fluidText(16, 16, 20, 20)}
    >
      Get Started
      <span className="flex size-7 shrink-0 items-center justify-center rounded-[32px] bg-white p-1.5 shadow-[0px_2px_2px_rgb(0_0_0_/_0.1)]">
        <Image
          src="/images/hero/arrow-up-right.svg"
          alt=""
          width={16}
          height={16}
          unoptimized
          className="block size-4 max-w-none"
        />
      </span>
    </Link>
  )
}
