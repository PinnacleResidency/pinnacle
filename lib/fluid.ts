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

/** Like `fluid()`, but holds the design size down to `shrinkBelowVw`, then eases off. */
export function fluidBelow(minPx: number, maxPx: number, shrinkBelowVw = 410) {
  const floor = Number(Math.min(minPx * 0.7, minPx - 2).toFixed(2))
  const grow = `calc(${minPx}px + (${maxPx} - ${minPx}) * (100vw - ${MIN_VW}px) / ${MAX_VW - MIN_VW})`
  const atBreak = Number(((minPx * 11) / 12).toFixed(4))
  const slope = Number((atBreak / 220).toFixed(4))
  const shrink = `calc(${atBreak}px + (100vw - ${shrinkBelowVw}px) * ${slope})`
  return `clamp(${floor}px, ${shrink}, max(${minPx}px, ${grow}))`
}

export function fluidTextBelow(
  minSize: number,
  maxSize: number,
  minLine: number,
  maxLine: number,
  shrinkBelowVw = 410
) {
  return {
    fontSize: fluidBelow(minSize, maxSize, shrinkBelowVw),
    lineHeight: fluidBelow(minLine, maxLine, shrinkBelowVw),
    letterSpacing: "-0.02em",
  } as const
}

/** Scale a px value with the nearest size container. Caps at `px` once the container is `designPx` wide. */
export function fromContainer(px: number, designPx = 300) {
  return `clamp(0px, calc(${px} * 100cqw / ${designPx}), ${px}px)`
}
