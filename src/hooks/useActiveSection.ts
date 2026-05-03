import { useEffect, useState } from 'react'

const sections = [
  'home',
  'about',
  'projects',
  'skills',
  'experience',
  'contact',
] as const

export type SectionId = (typeof sections)[number]

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const nodes = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (nodes.length === 0) {
      return
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.target.id) {
            setActive(e.target.id as SectionId)
            break
          }
        }
      },
      { rootMargin: '-20% 0px -50% 0px', threshold: 0.1 },
    )

    for (const n of nodes) {
      obs.observe(n)
    }
    return () => obs.disconnect()
  }, [])

  return { active, sections }
}
