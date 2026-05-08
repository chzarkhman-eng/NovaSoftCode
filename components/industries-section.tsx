"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  Plane,
  Smartphone,
  Factory,
  ShoppingCart,
  Stethoscope,
  Landmark,
  Store,
  Rocket,
  CreditCard,
  Gamepad2,
} from "lucide-react"

/** Order: left column top→bottom, then right column; simple monochrome line icons */
const industriesLeft: { name: string; icon: LucideIcon }[] = [
  { name: "Travel & Hospitality", icon: Plane },
  { name: "Telecommunication", icon: Smartphone },
  { name: "Oil, Gas, and Energy", icon: Factory },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Healthcare & Pharmaceuticals", icon: Stethoscope },
]

const industriesRight: { name: string; icon: LucideIcon }[] = [
  { name: "Public Sector", icon: Landmark },
  { name: "Retail & CPG", icon: Store },
  { name: "Startups", icon: Rocket },
  { name: "Banking & Fintech", icon: CreditCard },
  { name: "Gaming", icon: Gamepad2 },
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
                className="h-5 w-5 shrink-0 text-foreground/55 sm:h-[1.35rem] sm:w-[1.35rem]"
                strokeWidth={1.75}
                aria-hidden
              />
              <span className="text-base font-semibold text-foreground sm:text-lg">{name}</span>
            </div>
            <ArrowRight
              className="h-5 w-5 shrink-0 text-foreground/40 opacity-0 transition-opacity duration-200 group-hover:text-primary group-hover:opacity-100"
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
      className={`scroll-mt-24 bg-background ${compactSpacing ? "pt-6 sm:pt-8 pb-6 sm:pb-8" : "py-24 sm:py-32"}`}
    >
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={compactSpacing ? "mb-6 text-center sm:mb-8" : "mb-12 text-center sm:mb-16"}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Discover our Impact Across Industries
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 lg:gap-x-24"
        >
          <IndustryList items={industriesLeft} />
          <IndustryList items={industriesRight} />
        </motion.div>
      </div>
    </section>
  )
}
