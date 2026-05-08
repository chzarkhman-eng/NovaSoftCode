/** Filter id for portfolio navbar (aligned with Website / App / AI + related work) */
export type PortfolioCategoryId =
  | "website"
  | "app"
  | "ai"
  | "education"
  | "tools"

export type PortfolioProject = {
  id: string
  title: string
  description: string
  /** Single category for filtering */
  category: PortfolioCategoryId
  /** Poster / thumbnail in /public */
  poster: string
  /** Video in /public, or null for image-only showcase */
  video: string | null
}

export const PORTFOLIO_CATEGORY_FILTERS: {
  id: "all" | PortfolioCategoryId
  label: string
}[] = [
  { id: "all", label: "All" },
  { id: "website", label: "Website" },
  { id: "app", label: "App" },
  { id: "ai", label: "AI" },
  { id: "education", label: "Education" },
  { id: "tools", label: "Tools & guides" },
]

const dir = "/portfolio-section"

/** Real projects from `public/portfolio-section` (videos + thumbnails) */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "resume-maker",
    title: "Resume / CV Maker",
    description: "Create polished resumes with guided templates and export options.",
    category: "website",
    poster: `${dir}/Resume maker image.jpg`,
    video: `${dir}/CV maker.mp4`,
  },
  {
    id: "ielts-speaking",
    title: "IELTS Speaking",
    description: "Practice and preparation tools for IELTS speaking skills.",
    category: "education",
    poster: `${dir}/ielts speaking image.png`,
    video: `${dir}/ielts speaking video.mp4`,
  },
  {
    id: "unit-converter",
    title: "Unit Converter",
    description: "Fast, accurate conversions across units and measurement systems.",
    category: "tools",
    poster: `${dir}/UnitConverter image.png`,
    video: `${dir}/unitconverter video.mp4`,
  },
  {
    id: "peima",
    title: "Peima",
    description: "Product experience demo — video walkthrough.",
    category: "app",
    poster: `${dir}/peima.jpg`,
    video: `${dir}/peima video1.mp4`,
  },
  {
    id: "quran-app",
    title: "Quran App",
    description: "Quran reading and learning experience on mobile.",
    category: "education",
    poster: `${dir}/Quran App images.jpg`,
    video: `${dir}/Quran App.mp4`,
  },
  {
    id: "first-aid",
    title: "First Aid Guide",
    description: "Visual first-aid reference — tap to view full guide.",
    category: "tools",
    poster: `${dir}/first aid guide image.jpg`,
    video: null,
  },
]

/** Encode path segments so spaces/special chars work in URLs */
export function encodePublicPath(path: string): string {
  if (!path.startsWith("/")) return path
  const segments = path.split("/")
  const file = segments.pop()!
  if (!file) return path
  return [...segments, encodeURIComponent(file)].join("/")
}
