"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SERVICES } from "@/lib/services"

const PREVIEW_COUNT = 4

type ServicesSectionProps = {
  variant?: "home" | "page"
  /** When true, only the service grid (and optional View All) is shown—use with a page-level hero. */
  omitIntro?: boolean
  /** Tighter vertical padding (e.g. home page). */
  compactSpacing?: boolean
}

export function ServicesSection({
  variant = "page",
  omitIntro = false,
  compactSpacing = false,
}: ServicesSectionProps) {
  const isHome = variant === "home"
  const services = isHome ? SERVICES.slice(0, PREVIEW_COUNT) : SERVICES
  const showViewAll = isHome && SERVICES.length > PREVIEW_COUNT
  const showHeading = !omitIntro

  const sectionPad = omitIntro
    ? compactSpacing
      ? "pt-10 sm:pt-12 pb-16 sm:pb-20"
      : "pt-14 sm:pt-16 pb-24 sm:pb-32"
    : isHome && compactSpacing
      ? "pt-14 sm:pt-16 pb-2 sm:pb-3"
    : compactSpacing
      ? "py-14 sm:py-16"
      : "py-24 sm:py-32"

  return (
    <section id="services" className={`relative scroll-mt-24 ${sectionPad}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-center ${compactSpacing ? "mb-10" : "mb-16"}`}
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance text-foreground">
              Solutions that move your business forward
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
              End-to-end expertise across AI, cloud, product engineering, and enterprise platforms.
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="group"
            >
              <Link
                href={`/services/${service.slug}`}
                className="relative block min-h-[200px] sm:min-h-[220px] rounded-2xl overflow-hidden border border-border/60 shadow-md hover:shadow-xl transition-shadow duration-300 isolate outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 group-hover:from-black/70 group-hover:via-black/40 transition-colors duration-300" />
                <div className="relative h-full min-h-[200px] sm:min-h-[220px] p-5 flex items-start">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug text-pretty drop-shadow-md max-w-[95%]">
                    {service.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={`flex justify-center ${compactSpacing ? "mt-5" : "mt-12"}`}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Link href="/services">View All</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
