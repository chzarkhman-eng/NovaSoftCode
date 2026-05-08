"use client"

import { motion } from "framer-motion"

const categories = [
  "Learning",
  "Cybersecurity",
  "Data Science",
  "Cloud & DevOps",
  "UI/UX Design",
  "Web Development",
  "Mobile Apps",
  "AI & Machine Learning",
  "Cybersecurity",
]

export function ServiceCategories() {
  return (
    <section className="py-16 sm:py-20 relative bg-black text-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Our Service Expertise
          </h2>
        </motion.div>

        {/* Animated scrolling categories */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -1000 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...categories, ...categories].map((category, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 px-6 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition-colors duration-300 cursor-pointer backdrop-blur-sm min-w-fit"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  {category}
                </span>
                <span className="w-1.5 h-1.5 bg-white rounded-full opacity-50" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />
      </div>
    </section>
  )
}
