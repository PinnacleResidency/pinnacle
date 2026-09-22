import Image from "next/image"
import Link from "next/link"

import { BookStrategyButton } from "@/components/cta/book-strategy-button"
import { featuredBlogPosts } from "@/lib/blog"
import { fluid, fluidText } from "@/lib/fluid"

export function Knowledge() {
  return (
    <section id="knowledge" className="bg-[#fffaef]">
      <div
        className="mx-auto flex w-full max-w-[1512px] flex-col items-center"
        style={{
          paddingInline: fluid(24, 121),
          paddingTop: fluid(60, 100),
          paddingBottom: fluid(73, 100),
          gap: fluid(40, 40),
        }}
      >
        <h2
          className="w-full text-center font-medium text-[#707070] lg:whitespace-nowrap"
          style={{
            ...fluidText(44, 60, 45, 68),
            maxWidth: fluid(392, 697),
          }}
        >
          Pinnacle Knowledge Base
        </h2>

        <ul
          className="flex w-full list-none flex-col lg:flex-row"
          style={{ gap: fluid(16, 20) }}
        >
          {featuredBlogPosts.map((article) => (
            <li key={article.href} className="min-w-0 lg:flex-1">
              <Link
                href={article.href}
                className="flex w-full flex-col overflow-hidden rounded-[20px] border border-solid border-[#e4e2dd] bg-white lg:rounded-[24px]"
                style={{
                  height: fluid(400, 520),
                  padding: fluid(4, 8),
                }}
              >
                <div
                  className="relative overflow-hidden rounded-[16px] border border-solid border-[#c7e2c0]"
                  style={{ height: fluid(280, 364) }}
                >
                  <Image
                    src={article.image}
                    alt={article.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 394px, 384px"
                    className="object-cover"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(67,109,5,0)] to-[rgba(3,20,1,0.8)]"
                    aria-hidden
                  />
                </div>
                <div
                  className="flex flex-1 flex-col justify-end"
                  style={{
                    paddingInline: fluid(12, 12),
                    paddingBottom: fluid(14, 16),
                    gap: fluid(16, 24),
                  }}
                >
                  <p className="text-[#202020]" style={fluidText(18, 24, 22, 32)}>
                    {article.title}
                  </p>
                  <span
                    className="inline-flex w-fit items-center border-b border-[#202020] font-medium text-[#202020] lg:hidden"
                    style={{
                      ...fluidText(16, 16, 20, 20),
                      gap: 6,
                    }}
                  >
                    Read article
                    <Image
                      src="/images/knowledge/arrow-read.svg"
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                      className="block size-[18px] max-w-none"
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="flex w-full flex-col items-center"
          style={{
            marginTop: fluid(20, 20),
            maxWidth: fluid(392, 790),
            gap: fluid(24, 24),
          }}
        >
          <p
            className="w-full text-center text-[#606060] lg:whitespace-nowrap"
            style={{
              ...fluidText(22, 24, 28, 28),
              maxWidth: fluid(392, 790),
            }}
          >
            There&apos;s more where these came from, click on the button below
            to read more
          </p>
          <BookStrategyButton href="/blog">See more content</BookStrategyButton>
        </div>
      </div>
    </section>
  )
}
