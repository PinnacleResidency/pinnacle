export type MegaMenuId = "about" | "pathways" | "resources"

export type MegaItem = {
  label: string
  href: string
}

export const megaMenus: Record<
  MegaMenuId,
  {
    id: MegaMenuId
    label: string
    items: readonly MegaItem[]
    showCard: boolean
  }
> = {
  about: {
    id: "about",
    label: "About us",
    showCard: false,
    items: [
      { label: "About Pinnacle", href: "/about" },
      { label: "Contact Us", href: "/book" },
    ],
  },
  pathways: {
    id: "pathways",
    label: "Pathways",
    showCard: true,
    items: [
      { label: "EB-1A", href: "/pathways/eb-1a" },
      { label: "EB-2 NIW", href: "/pathways/eb-2-niw" },
    ],
  },
  resources: {
    id: "resources",
    label: "Resources",
    showCard: true,
    items: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "FAQs", href: "/faq" },
    ],
  },
}

export const aboutLinks = megaMenus.about.items
export const pathwayLinks = megaMenus.pathways.items
export const resourceLinks = megaMenus.resources.items

export function activeMegaId(pathname: string): MegaMenuId | null {
  if (pathname.startsWith("/about") || pathname.startsWith("/book")) return "about"
  if (pathname.startsWith("/pathways")) return "pathways"
  if (
    pathname.startsWith("/case-studies") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/faq")
  ) {
    return "resources"
  }
  return null
}

export const footerColumns = [
  {
    heading: "Company",
    links: aboutLinks,
  },
  {
    heading: "Services",
    links: [
      { label: "EB-1A", href: "/pathways/eb-1a" },
      { label: "EB-2 NIW", href: "/pathways/eb-2-niw" },
      { label: "Case evaluation", href: "/book" },
    ],
  },
  {
    heading: "Resources",
    links: resourceLinks,
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "#" },
      { label: "Terms of service", href: "#" },
      { label: "Refund policy", href: "#" },
    ],
  },
] as const

export const footerSocial = [
  { label: "Email", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const

export const footerDisclaimer =
  "Pinnacle Residency is a strategic immigration consultancy providing profile evaluation, evidence strategy, and petition preparation resources. Pinnacle Residency is not a law firm, does not provide legal advice, and does not act as your legal representative or attorney before United States Citizenship and Immigration Services (USCIS), the U.S. Department of Labor, or the U.S. Department of State. Purchase or use of our services, playbooks, or materials does not create an attorney-client relationship. Pinnacle Residency is an independent entity and is not affiliated with, endorsed by, or associated with USCIS or any governmental agency. Past client outcomes or case assessments do not guarantee future approval results."
