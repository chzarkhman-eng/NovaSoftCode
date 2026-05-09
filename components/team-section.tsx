"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const leaders = [
  {
    name: "Sharaiz Sajjad",
    role: "Chief Executive Officer & Founder",
    image: "/leadership/pic1.jpg",
    bio: 'Sharaiz Sajjad founded NovaSoftCode in 2025 with a clear mission: to give international clients access to world-class engineering talent.\nBefore NovaSoftCode, Sharaiz led engineering teams at two Lahore-based tech startups and worked as a senior consultant for clients in the UK and USA.\n"We don\'t just write code , we solve real business problems. Every project we take on is a long-term relationship, not a transaction."',
    expertise: ["Engineering Leadership", "Global Delivery", "Product Strategy"],
    email: "sharaiznovasoftcode12@gmail.com",
  },
  {
    name: "Raahim Qureshi",
    role: "Sales Manager",
    image: "/leadership/pic2.jpg",
    bio: "Raahim Qureshi leads the sales and business development function at NovaSoftCode. With a strong background in technology consulting and international client management, he bridges the gap between client needs and technical delivery — ensuring every engagement starts with clarity and confidence.",
    expertise: ["Business Development", "Client Success", "Consulting"],
    email: "rahim.novasoftcode@gmail.com",
  },
  {
    name: "Zarkhman Rasheed",
    role: "Chief Operating Officer",
    image: "/leadership/pic3.jpg",
    bio: "As Chief Operating Officer, Zarkhman ensures NovaSoftCode runs like a precision engine: predictable delivery, disciplined execution, and teams that scale without losing quality. He aligns people, process, and technology so every client engagement ships with transparency, momentum, and measurable outcomes from first sprint to long-term support.",
    expertise: ["Operations Excellence", "Delivery Leadership", "Scale & Quality"],
    email: "zarkhmannovasoftcode@gmail.com",
  },
]

export function TeamSection() {
  return (
    <section id="leadership" className="py-24 sm:py-32 relative bg-secondary/30 scroll-mt-24">
      {/* Background */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full mb-4">
            Our Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance text-foreground">
            Meet the <span className="gradient-text">Visionaries</span> Behind NovaSoftCode
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Our leadership team combines decades of experience in technology, business, 
            and innovation to drive our mission forward.
          </p>
        </motion.div>

        {/* Leaders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-card rounded-3xl overflow-hidden border border-border transition-colors duration-300 group"
            >
              <div className="flex flex-col">
                {/* Image */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-medium">
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 whitespace-pre-line">
                    {leader.bio}
                  </p>
                  <a
                    href={`mailto:${leader.email}`}
                    className="mb-6 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    {leader.email}
                  </a>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {leader.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}
