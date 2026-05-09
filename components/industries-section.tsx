"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Plane,
  ShoppingCart,
  Stethoscope,
  CreditCard,
} from "lucide-react"

/** 
 * STREAMING_CHUNK:Defining industry data... 
 * We keep only the 4 requested items.
 */
const industries: { name: string; icon: LucideIcon }[] = [
  { name: "Travel & Hospitality", icon: Plane },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Banking & Fintech", icon: CreditCard },
  { name: "Healthcare & Pharmaceuticals", icon: Stethoscope },
]

function IndustryList({ items }: { items: { name: string; icon: LucideIcon }[] }) {
  return (
    <ul className="w-full">
      {items.map(({ name, icon: Icon }) => (
        <li
          key={name}
          className="group border-b border-border py-4 first:pt-0 sm:py-5"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <Icon
                className="h-5 w-5 shrink-0 text-foreground/55 transition-colors duration-200 group-hover:text-primary sm:h-[1.35rem] sm:w-[1.35rem]"
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="text-base font-semibold text-foreground sm:text-lg">
                {name}
              </span>
            </div>
            <ArrowRight
              className="h-5 w-5 shrink-0 text-foreground/40 opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:text-primary group-hover:opacity-100"
              strokeWidth={1.75}
              aria-hidden
            />
          </div>
        </li>
      ))}
    </ul>
  )
}

type IndustriesSectionProps = {
  compactSpacing?: boolean
}

export function IndustriesSection({ compactSpacing = false }: IndustriesSectionProps) {
  return (
    <section
      id="industries"
      className={`scroll-mt-24 bg-background ${
        compactSpacing ? "py-8 sm:py-12" : "py-24 sm:py-32"
      }`}
    >
      <div className="container relative z-10 mx-auto px-6">
        {}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={compactSpacing ? "mb-8 text-center" : "mb-16 text-center"}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Discover our Impact Across Industries
          </h2>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          /* 
             Changed from grid-cols-2 to a single column 
             max-w-2xl and mx-auto centers the content nicely 
          */
          className="mx-auto max-w-2xl"
        >
          <IndustryList items={industries} />
        </motion.div>
      </div>
    </section>
  )
}