import Image from "next/image"
import Link from "next/link"

import { fluid, fluidText } from "@/lib/fluid"
import {
  BLOG_TOTAL_PAGES,
  blogPageHref,
  blogPaginationItems,
  type BlogPost,
} from "@/lib/blog"
import { cn } from "@/lib/utils"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 1930' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 167.84 -38.265 376.45 60.529 168.04)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 2400' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 208.72 -131.49 468.12 208 208.96)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function BlogListing({
  posts,
  page,
}: {
  posts: readonly BlogPost[]
  page: number
}) {
  const items = blogPaginationItems(page, BLOG_TOTAL_PAGES)

  return (
    <section
      className="relative overflow-x-hidden bg-white"
      style={{ marginTop: `calc(${fluid(48, 64)} * -1)` }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-no-repeat lg:hidden"
        style={{ backgroundImage: mobileGradient, backgroundSize: "100% 100%" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 hidden bg-no-repeat lg:block"
        style={{ backgroundImage: desktopGradient, backgroundSize: "100% 100%" }}
        aria-hidden
      />

      <div
        className="relative mx-auto flex w-full max-w-[1512px] flex-col"
        style={{
          paddingInline: fluid(24, 121),
          paddingTop: fluid(120, 240),
          paddingBottom: fluid(72, 120),
        }}
      >
        <h1
          className="w-full font-medium"
          style={{
            ...fluidText(56, 72, 52, 70),
            maxWidth: fluid(392, 1013),
          }}
        >
          <span className="text-[#1c2f00]">Clear, practical answers </span>
          <span className="text-[#707070]">
            to the questions that come up most in EB-1A and EB-2 NIW petitions
          </span>
        </h1>

        <ul
          className="grid w-full list-none grid-cols-1 lg:grid-cols-3"
          style={{
            marginTop: fluid(40, 60),
            columnGap: fluid(16, 20),
            rowGap: fluid(16, 24),
          }}
        >
          {posts.map((post) => (
            <li key={post.slug} className="min-w-0">
              <Link
                href={post.href}
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
                    src={post.image}
                    alt={post.imageAlt}
                    width={post.imageWidth}
                    height={post.imageHeight}
                    sizes="(min-width: 1024px) 394px, 384px"
                    className="absolute inset-0 size-full object-cover"
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
                  <p className="text-[#202020]" style={fluidText(18, 20, 22, 28)}>
                    {post.title}
                  </p>
                  <span
                    className="inline-flex w-fit items-center border-b border-[#202020] font-medium text-[#202020]"
                    style={{
                      ...fluidText(16, 18, 20, 24),
                      gap: fluid(6, 10),
                    }}
                  >
                    Read article
                    <Image
                      src="/images/knowledge/arrow-read.svg"
                      alt=""
                      width={18}
                      height={18}
                      unoptimized
                      className="block max-w-none"
                      style={{
                        width: fluid(18, 20),
                        height: fluid(18, 20),
                      }}
                    />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <nav
          aria-label="Blog pages"
          className="flex items-center justify-center self-center"
          style={{
            marginTop: fluid(60, 112),
            gap: 12,
          }}
        >
          {items.map((item, index) => {
            if (item === "ellipsis") {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="inline-flex items-center justify-center rounded-[32px] border border-solid border-[#47a62d] bg-white text-[#489832]"
                  style={{
                    ...fluidText(16, 20, 24, 24),
                    width: fluid(42, 50),
                    height: fluid(42, 50),
                  }}
                  aria-hidden
                >
                  ...
                </span>
              )
            }

            const current = item === page

            return (
              <Link
                key={item}
                href={blogPageHref(item)}
                aria-current={current ? "page" : undefined}
                scroll
                className={cn(
                  "inline-flex items-center justify-center rounded-[32px] border border-solid border-[#47a62d]",
                  current ? "bg-[#489832] text-white" : "bg-white text-[#489832]"
                )}
                style={{
                  ...fluidText(16, 20, 24, 24),
                  width: fluid(42, 50),
                  height: fluid(42, 50),
                }}
              >
                {item}
              </Link>
            )
          })}
        </nav>
      </div>
    </section>
  )
}
