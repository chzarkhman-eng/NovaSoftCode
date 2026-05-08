"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  PORTFOLIO_PROJECTS,
  PORTFOLIO_CATEGORY_FILTERS,
  encodePublicPath,
  type PortfolioProject,
  type PortfolioCategoryId,
} from "@/lib/portfolio-media"

export function PortfolioSection() {
  const [active, setActive] = useState<PortfolioProject | null>(null)
  const [filter, setFilter] = useState<"all" | PortfolioCategoryId>("all")
  const videoRef = useRef<HTMLVideoElement>(null)

  const filteredProjects =
    filter === "all"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter)

  useEffect(() => {
    if (active?.video && videoRef.current) {
      videoRef.current.currentTime = 0
      void videoRef.current.play().catch(() => {})
    }
  }, [active])

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 scroll-mt-24">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium tracking-wider text-primary uppercase">
            Portfolio
          </span>
          <h2 className="mt-4 mb-6 text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Real projects we&apos;ve shipped
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Tap a thumbnail to watch the project video (or open the full image for guides without a
            video).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
          {PORTFOLIO_CATEGORY_FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                filter === id
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5"
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.button
              type="button"
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              onClick={() => setActive(project)}
              className="group text-left outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300">
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  <Image
                    src={encodePublicPath(project.poster)}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {project.video ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Play className="ml-0.5 h-6 w-6 fill-current" />
                      </span>
                    </div>
                  ) : (
                    <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      Image
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Dialog
        open={active !== null}
        onOpenChange={(open) => {
          if (!open) setActive(null)
        }}
      >
        <DialogContent className="max-w-4xl gap-0 overflow-hidden border-border p-0 sm:max-w-4xl">
          {active && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{active.title}</DialogTitle>
              </DialogHeader>
              <div className="border-b border-border bg-muted/40 px-4 py-3 sm:px-6">
                <p className="text-sm font-semibold text-foreground">{active.title}</p>
                <p className="text-xs text-muted-foreground">{active.description}</p>
              </div>
              <div className="bg-black">
                {active.video ? (
                  <video
                    key={active.id}
                    ref={videoRef}
                    className="max-h-[70vh] w-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    poster={encodePublicPath(active.poster)}
                  >
                    <source src={encodePublicPath(active.video)} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="relative aspect-video w-full max-h-[70vh]">
                    <Image
                      src={encodePublicPath(active.poster)}
                      alt={active.title}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
