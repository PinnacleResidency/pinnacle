import Image from "next/image"

import { fluid, fluidText } from "@/lib/fluid"
import type { BlogArticle, BlogPost } from "@/lib/blog"

const mobileGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 440 722' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(36.201 62.789 -38.265 140.83 60.529 62.863)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

const desktopGradient =
  "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1512 982' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect width='100%' height='100%' fill='url(%23g)'/><defs><radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(124.4 85.4 -131.49 191.54 208 85.5)'><stop stop-color='rgb(255,255,255)' offset='0'/><stop stop-color='rgb(255,250,239)' offset='0.45673'/><stop stop-color='rgb(239,253,237)' offset='1'/></radialGradient></defs></svg>\")"

export function BlogArticleHero({
  post,
  article,
}: {
  post: BlogPost
  article: BlogArticle
}) {
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
        className="relative mx-auto w-full max-w-[1512px]"
        style={{
          paddingInline: fluid(10, 20),
          paddingTop: fluid(60, 84),
          paddingBottom: fluid(12, 20),
        }}
      >
        <div
          className="relative isolate overflow-hidden rounded-[20px] lg:rounded-[24px]"
          style={{ height: fluid(650, 825) }}
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={post.imageWidth}
            height={post.imageHeight}
            preload
            sizes="100vw"
            className="absolute max-w-none lg:hidden"
            style={{
              height: "100%",
              width: "290.27%",
              left: "-79.66%",
              top: "0%",
            }}
          />
          <Image
            src={post.image}
            alt=""
            width={post.imageWidth}
            height={post.imageHeight}
            sizes="(min-width: 1024px) 1472px, 100vw"
            className="absolute hidden max-w-none lg:block"
            style={{
              height: "100%",
              width: "105.12%",
              left: "-2.56%",
              top: "0%",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(67,109,5,0)] to-[78.485%] to-[rgba(3,20,1,0.85)]"
            aria-hidden
          />

          <div
            className="absolute inset-x-0 bottom-0 flex flex-col"
            style={{
              paddingInline: fluid(16, 100),
              paddingBottom: fluid(24, 48),
              gap: fluid(12, 20),
            }}
          >
            <h1
              className="w-full font-medium text-white"
              style={{
                ...fluidText(54, 68, 52, 70),
                maxWidth: fluid(388, 1257),
              }}
            >
              {post.title}
            </h1>
            <p
              className="flex items-center text-white"
              style={{
                ...fluidText(18, 24, 22, 28),
                gap: fluid(20, 20),
              }}
            >
              <span className="whitespace-nowrap">{article.readTime}</span>
              <span
                className="block shrink-0 rounded-full bg-white"
                style={{
                  width: fluid(6, 8),
                  height: fluid(6, 8),
                }}
                aria-hidden
              />
              <span className="whitespace-nowrap">{article.publishedOn}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
