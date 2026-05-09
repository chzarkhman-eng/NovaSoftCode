"use client"

import { motion } from "framer-motion"
import { Zap, Lock, Globe } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Fast & On-Time Delivery",
    description: "94% of projects delivered on or before deadline"
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description: "GDPR, HIPAA & SOC2 compliant engineering practices"
  },
  {
    icon: Globe,
    title: "Serving Clients Globally",
    description: "USA · UK · UAE · Canada · Germany · Australia"
  }
]

type HeroSectionProps = {
  /** Tighter hero height & padding for home (less gap before next section). */
  compact?: boolean
}

export function HeroSection({ compact = false }: HeroSectionProps) {
  return (

    <section
      id="home"
      className={
        compact
          ? "relative flex min-h-[88svh] items-center justify-center overflow-hidden pt-20 pb-10 sm:min-h-[90svh] sm:pb-12"
          : "relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-20"
      }
    >
      {/* Background image + strong dark overlay for text visibility */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-slate-900/90 to-blue-950/90" />
        <div className="absolute top-0 -right-1/4 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      {/* Dot pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-white/95">
                Grow your local business with us
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-sm"
            >
              We Build{" "}
              <span className="text-sky-400">Scalable Digital</span>
              <br />
              Solutions for Future
              <br />
              Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-slate-200 max-w-xl mb-8 leading-relaxed"
            >
              From custom web platforms to AI-powered applications — NovaSoftCode engineers 
              products that drive growth, user trust, and competitive advantage for startups 
              and enterprises.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-4 gap-6"
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">20+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">98%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">30+</div>
                <div className="text-sm text-gray-300">Expert Engineers</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                WHY CLIENTS CHOOSE NOVASOFTCODE
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 mt-8 p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-sm text-gray-300">Projects</div>
              </div>
              <div className="text-center border-l border-r border-white/10">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-300">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5★</div>
                <div className="text-sm text-gray-300">Avg Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
