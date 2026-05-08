"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SERVICES_PAGE_HERO_IMAGE } from "@/lib/services"

export function ServicesPageHero() {
  return (
    <section className="relative min-h-[52vh] sm:min-h-[58vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0">
        <Image
          src={SERVICES_PAGE_HERO_IMAGE}
          alt="NovaSoftCode services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Light scrim so the photo stays visible; darker at bottom for readable text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-4xl"
        >
          <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/95 backdrop-blur-sm sm:text-sm">
            What we deliver
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl text-balance">
            Engineering services that{" "}
            <span className="gradient-text drop-shadow-none">turn strategy into shipped software</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/90 sm:text-xl text-pretty max-w-2xl mx-auto [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            From intelligent automation and immersive products to resilient DevOps and customer-grade
            UX—NovaSoftCode pairs senior builders with your goals so every engagement lands with clarity,
            momentum, and measurable outcomes.
          </p>
          <p className="mt-4 text-sm font-medium text-white/85 sm:text-base [text-shadow:0_1px_2px_rgba(0,0,0,0.45)]">
            Explore our core capabilities below—each opens a detailed view of how we plan, build, and
            support delivery.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
