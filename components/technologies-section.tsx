"use client"

import { motion } from "framer-motion"

type TechItem = { icon: string; label: string }

/** Comprehensive stack — marquee cards (Core Technologies style) */
const techStack: TechItem[] = [
  { icon: "📱", label: "Flutter / Mobile" },
  { icon: "🐍", label: "Python / Django" },
  { icon: "🧠", label: "Machine Learning" },
  { icon: "🟢", label: "Node.js / Express" },
  { icon: "📜", label: "PHP / Laravel" },
  { icon: "☕", label: "Java / Spring" },
  { icon: "💎", label: "TypeScript" },
  { icon: "⚛️", label: "React / Next.js" },
  { icon: "💚", label: "Vue / Nuxt" },
  { icon: "🅰️", label: "Angular" },
  { icon: "🔥", label: "Svelte / SvelteKit" },
  { icon: "🍎", label: "Swift / iOS" },
  { icon: "🤖", label: "Kotlin / Android" },
  { icon: "📲", label: "React Native" },
  { icon: "☁️", label: "AWS / GCP / Azure" },
  { icon: "🐳", label: "Docker / Kubernetes" },
  { icon: "🏗️", label: "Terraform / IaC" },
  { icon: "🍃", label: "MongoDB" },
  { icon: "🗄️", label: "PostgreSQL" },
  { icon: "⚡", label: "Redis / Kafka" },
  { icon: "🔍", label: "Elasticsearch" },
  { icon: "📡", label: "GraphQL / REST" },
  { icon: "🐹", label: "Go / Golang" },
  { icon: "🔷", label: ".NET / C#" },
  { icon: "🚀", label: "FastAPI / Django REST" },
  { icon: "🛡️", label: "Cyber Security" },
  { icon: "🌐", label: "Network Security" },
  { icon: "🔐", label: "OAuth / SSO / OIDC" },
  { icon: "⚙️", label: "GitHub Actions / CI CD" },
  { icon: "❄️", label: "Snowflake / dbt" },
  { icon: "🎨", label: "Figma / Design Systems" },
  { icon: "⛓️", label: "Solidity / Web3" },
  { icon: "🌀", label: "Apache Airflow" },
  { icon: "🐰", label: "RabbitMQ" },
  { icon: "🎭", label: "Cypress / Playwright" },
  { icon: "✅", label: "Jest / Testing Library" },
  { icon: "📶", label: "gRPC / WebSockets" },
  { icon: "🐧", label: "Linux / Bash" },
  { icon: "🔧", label: "nginx / Load Balancing" },
]

function TechMarquee({ items, durationSec }: { items: TechItem[]; durationSec: number }) {
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex w-max gap-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: durationSec,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((tech, index) => (
          <div
            key={`${tech.label}-${index}`}
            className="flex w-[148px] shrink-0 flex-col items-center justify-center rounded-2xl border border-border/70 bg-card px-4 py-5 text-center shadow-md transition-all duration-300 hover:border-primary/35 hover:shadow-lg sm:w-[168px]"
          >
            <span className="mb-3 text-3xl sm:text-4xl" aria-hidden>
              {tech.icon}
            </span>
            <span className="text-xs font-semibold leading-snug text-foreground sm:text-sm">
              {tech.label}
            </span>
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-20" />
    </div>
  )
}

type TechnologiesSectionProps = {
  compactSpacing?: boolean
}

export function TechnologiesSection({ compactSpacing = false }: TechnologiesSectionProps) {
  const half = Math.ceil(techStack.length / 2)
  const rowA = techStack.slice(0, half)
  const rowB = techStack.slice(half)

  return (
    <section
      id="technologies"
      className={`relative overflow-hidden scroll-mt-24 ${compactSpacing ? "pt-6 sm:pt-8 pb-6 sm:pb-8" : "py-24 sm:py-32"}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[min(90vw,640px)] w-[min(90vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={
            compactSpacing
              ? "mx-auto mb-6 max-w-4xl text-center sm:mb-8"
              : "mx-auto mb-12 max-w-4xl text-center sm:mb-14"
          }
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            Core Technologies
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Leveraging the Best Modern Stacks to Build{" "}
            <span className="text-primary">Robust, Scalable &amp; Secure</span> Enterprise Software
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            We work with the best tools available to deliver fast, secure, and future-proof solutions for
            our clients—frontend to backend, data to DevOps, and AI to infrastructure.
          </p>
        </motion.div>

        <div className={compactSpacing ? "space-y-3 sm:space-y-4" : "space-y-5 sm:space-y-6"}>
          <TechMarquee items={rowA} durationSec={52} />
          <TechMarquee items={rowB} durationSec={58} />
        </div>
      </div>
    </section>
  )
}
