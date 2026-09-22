import { toneClass, type TextRun } from "@/lib/pathways"

export function HeadingRuns({
  runs,
  fallback = "muted",
}: {
  runs: readonly TextRun[]
  fallback?: keyof typeof toneClass
}) {
  return (
    <>
      {runs.map((run, index) => (
        <span key={`${run.text}-${index}`} className={toneClass[run.tone ?? fallback]}>
          {run.text}
        </span>
      ))}
    </>
  )
}
