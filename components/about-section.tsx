"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"
import { ValuesSection } from "@/components/values-section"

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80"

export function AboutSection() {
  return (
    <>
    <section id="about" className="pt-24 sm:pt-32 pb-4 sm:pb-6 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance text-foreground">
              Building the Future of <span className="gradient-text">Digital Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              Founded with a vision to bridge the gap between business needs and technological 
              possibilities, NovaSoftCode has grown into a trusted partner for companies worldwide. 
              We combine technical expertise with creative thinking to deliver solutions that 
              drive real business results.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground text-sm">
                    To empower businesses with innovative technology solutions that accelerate 
                    growth and create lasting competitive advantages.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground text-sm">
                    To be the global leader in digital transformation, setting new standards 
                    for innovation, quality, and client success.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl h-[380px] sm:h-[440px] lg:h-[480px]">
              <Image
                src={ABOUT_IMAGE}
                alt="NovaSoftCode team collaborating in a modern office"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/15 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <ValuesSection compactSpacing joinPrevious />
    </>
  )
}
