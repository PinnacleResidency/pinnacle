const MIN_VW = 440
const MAX_VW = 1512

export function fluid(minPx: number, maxPx: number) {
  const lo = Math.min(minPx, maxPx)
  const hi = Math.max(minPx, maxPx)
  return `clamp(${lo}px, calc(${minPx}px + (${maxPx} - ${minPx}) * (100vw - ${MIN_VW}px) / ${MAX_VW - MIN_VW}), ${hi}px)`
}

export function fluidText(minSize: number, maxSize: number, minLine: number, maxLine: number) {
  return {
    fontSize: fluid(minSize, maxSize),
    lineHeight: fluid(minLine, maxLine),
    letterSpacing: "-0.02em",
  } as const
}

/** Scale a px value with the nearest size container. Caps at `px` once the container is `designPx` wide. */
export function fromContainer(px: number, designPx = 300) {
  return `clamp(0px, calc(${px} * 100cqw / ${designPx}), ${px}px)`
}
