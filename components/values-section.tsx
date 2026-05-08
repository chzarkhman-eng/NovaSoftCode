"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Zap, Users, Award } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never compromise on quality. Every line of code is crafted with precision and tested rigorously.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Agile methodologies ensure rapid development cycles without sacrificing quality or reliability.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team consists of senior engineers with decades of combined experience across industries.",
  },
  {
    icon: CheckCircle2,
    title: "Reliability",
    description:
      "We build systems that scale and perform. Our solutions are designed for long-term success.",
  },
]

type ValuesSectionProps = {
  compactSpacing?: boolean
  /** Pull section up when stacked directly after another block (e.g. About hero). */
  joinPrevious?: boolean
}

export function ValuesSection({ compactSpacing = false, joinPrevious = false }: ValuesSectionProps) {
  return (
    <section
      id="values"
      className={cn(
        "relative scroll-mt-24 bg-secondary/30",
        joinPrevious
          ? "pt-3 sm:pt-5"
          : compactSpacing
            ? "pt-6 sm:pt-8"
            : "pt-24 sm:pt-32",
        compactSpacing ? "pb-6 sm:pb-8" : "pb-24 sm:pb-32",
      )}
    >
      <div className="absolute inset-0 pattern-dots opacity-20" />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-center ${compactSpacing ? "mb-6 sm:mb-8" : "mb-16"}`}
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-wider text-primary">
            Our Values
          </span>
          <h2 className="mt-4 mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            What Drives Us Forward
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Our core values guide every decision and action we take to serve our clients with excellence.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-hover rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
