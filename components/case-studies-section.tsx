"use client"

import { motion } from "framer-motion"
import { AlertCircle, CheckCircle2, TrendingUp, Dumbbell, Coffee } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type CaseStudy = {
  business: string
  type: string
  icon: LucideIcon
  problem: string
  solution: string[]
  result: string
}

const caseStudies: CaseStudy[] = [
  {
    business: "101 Jiu Jitsu & Kickboxing",
    type: "Gym & Fitness",
    icon: Dumbbell,
    problem:
      "The gym relied entirely on social media platforms for visibility and class sign-ups. Without a dedicated website, prospective members struggled to find class schedules, pricing, coach information, and a clear way to inquire — resulting in lost leads and inconsistent brand presence.",
    solution: [
      "Designed and built a modern, responsive website that showcases the gym's brand, programs, and coaches.",
      "Added clear class schedules, pricing tiers, and a dedicated inquiry form with prominent calls-to-action.",
      "Optimized the site for mobile-first browsing so members can find information on the go.",
    ],
    result:
      "A noticeable lift in qualified inquiries and trial sign-ups, plus a credible online presence that no longer depends solely on social platforms.",
  },
  {
    business: "Velvet Brew",
    type: "Café & Hospitality",
    icon: Coffee,
    problem:
      "Like many small cafés, Velvet Brew depended heavily on social media for visibility but lacked a dedicated website where customers could access menu details, operating hours, reservations, and online ordering. The team needed a site that communicates the café's brand story and ambiance, makes the menu easy to browse, supports table reservations and online orders, and works seamlessly across desktop and mobile devices.",
    solution: [
      "Crafted a brand-led website that captures Velvet Brew's story, ambiance, and signature offerings.",
      "Built an easy-to-browse digital menu with categories, imagery, and quick scanning on any device.",
      "Integrated table reservations and an online ordering flow so customers can book and order in a few taps.",
      "Engineered a fully responsive experience that performs equally well on desktop and mobile.",
    ],
    result:
      "A polished digital storefront that reduces reliance on social media, drives reservations and online orders directly, and gives the café a consistent, on-brand experience across every device.",
  },
]

type CaseStudiesSectionProps = {
  compactSpacing?: boolean
}

export function CaseStudiesSection({ compactSpacing = false }: CaseStudiesSectionProps) {
  return (
    <section
      id="case-studies"
      className={`relative scroll-mt-24 ${
        compactSpacing ? "py-14 sm:py-16" : "py-24 sm:py-32"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-center ${compactSpacing ? "mb-10" : "mb-16"}`}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-wider text-primary">
            Case Studies
          </span>
          <h2 className="mt-4 mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Real businesses, <span className="gradient-text">real results</span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            A look at how we partner with small businesses to turn ideas into modern, conversion-ready digital products.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <motion.article
                key={study.business}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg sm:p-8"
              >
                <div className="mb-6 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {study.type}
                    </span>
                    <h3 className="mt-1 text-xl font-bold leading-tight text-foreground sm:text-2xl">
                      {study.business}
                    </h3>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-2xl border border-border/60 bg-background/50 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-amber-500" aria-hidden />
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                        Problem
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {study.problem}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/50 p-5">
                    <div className="mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden />
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                        Solution
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {study.solution.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" aria-hidden />
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">
                        Result
                      </h4>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-foreground/90">
                      {study.result}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
