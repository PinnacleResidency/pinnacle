import Image from "next/image"

import { cn } from "@/lib/utils"

const STAMP_WIDTH = 366.667
const STAMP_HEIGHT = 500

export function StampCard({
  stampSrc,
  photoSrc,
  photoAlt,
  labelSrc,
  labelWidth,
  labelHeight,
  labelClassName,
  photoClassName,
  rotate,
  className,
  preload,
}: {
  stampSrc: string
  photoSrc: string
  photoAlt: string
  labelSrc: string
  labelWidth: number
  labelHeight: number
  labelClassName: string
  photoClassName?: string
  rotate: number
  className?: string
  preload?: boolean
}) {
  return (
    <div className={cn("absolute flex items-center justify-center", className)}>
      <div
        className="relative shrink-0"
        style={{
          width: STAMP_WIDTH,
          height: STAMP_HEIGHT,
          transform: `rotate(${rotate}deg)`,
          filter: "drop-shadow(0px 0px 2px rgb(0 0 0 / 0.2))",
        }}
      >
        <Image
          src={stampSrc}
          alt=""
          width={367}
          height={500}
          unoptimized
          preload={preload}
          loading={preload ? "eager" : undefined}
          className="pointer-events-none block max-w-none"
          style={{ width: STAMP_WIDTH, height: STAMP_HEIGHT }}
        />
        <div className="absolute inset-[2.67%_3.64%] overflow-hidden">
          {photoClassName ? (
            <Image
              src={photoSrc}
              alt={photoAlt}
              width={686}
              height={1200}
              preload={preload}
              className={cn("absolute max-w-none", photoClassName)}
            />
          ) : (
            <Image
              src={photoSrc}
              alt={photoAlt}
              fill
              sizes="367px"
              preload={preload}
              className="object-cover"
            />
          )}
        </div>
        <Image
          src={labelSrc}
          alt=""
          width={Math.round(labelWidth)}
          height={Math.round(labelHeight)}
          unoptimized
          className={cn("pointer-events-none absolute max-w-none", labelClassName)}
          style={{ width: labelWidth, height: labelHeight }}
        />
      </div>
    </div>
  )
}
