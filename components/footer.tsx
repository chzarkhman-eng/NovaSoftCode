"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Linkedin,
  Twitter,
  Github,
  Instagram,
  ArrowUp,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"
import { QUICK_LINKS } from "@/lib/quick-links"

const CONTACT = {
  address: "New York, United States",
  phoneDisplay: "+1 (657) 465-0308",
  phoneTel: "+16574650308",
  email: "info.novasoftcode@gmail.com",
}

const footerCompany = [
  { name: "About ", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
]

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/nova-soft-code-ltd-805286409/" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/novasoftcodeltd/" },
]

export function Footer() {
  const [subscribeEmail, setSubscribeEmail] = useState("")
  const [subscribeSent, setSubscribeSent] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!subscribeEmail.trim()) return
    setSubscribeSent(true)
    setSubscribeEmail("")
  }

  return (
    <footer className="relative pt-20 pb-8 bg-foreground text-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-12 xl:gap-x-10">
          {/* Brand */}
          <div className="lg:col-span-3">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-lg ring-2 ring-background/20">
                <Image
                  src="/favicon.png"
                  alt="NovaSoftCode"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </span>
              <span className="text-xl font-bold text-background">
                Nova<span className="text-primary">SoftCode</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed text-background/70">
              Building the future of digital innovation. We transform ideas into powerful software
              solutions that drive business growth.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/10 text-background/70 transition-colors hover:bg-background/20 hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links — equal width with Company & Get in Touch (3+3+3+3 = 12) */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 font-semibold text-background">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 font-semibold text-background">Company</h4>
            <ul className="space-y-3">
              {footerCompany.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch — right column, same width as Quick Links & Company */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 font-serif text-xl font-bold leading-tight text-background">
              <span className="inline-block border-b-4 border-[#e8c547] pb-1">Get</span>
              <span> In Touch</span>
            </h4>
            <ul className="mb-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#e8c547]" aria-hidden />
                <span className="leading-relaxed text-background/80">{CONTACT.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#e8c547]" aria-hidden />
                <a
                  href={`tel:${CONTACT.phoneTel}`}
                  className="leading-relaxed text-background/80 transition-colors hover:text-[#e8c547]"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#e8c547]" aria-hidden />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="min-w-0 flex-1 text-sm font-medium leading-relaxed text-background/90 transition-colors hover:text-[#e8c547] lg:whitespace-nowrap"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <div className="max-w-[280px]">
              <p className="mb-2 text-xs text-background/75">Subscribe for updates:</p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  name="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="Your email"
                  className="h-9 w-full rounded-lg border border-background/20 bg-background/10 px-3 text-xs text-background placeholder:text-background/45 outline-none focus-visible:border-[#e8c547]/60 focus-visible:ring-1 focus-visible:ring-[#e8c547]/40 sm:text-sm"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="h-9 w-full rounded-lg bg-[#c4a035] text-xs font-semibold text-[#0f1a2e] transition-opacity hover:opacity-90 sm:text-sm"
                >
                  Subscribe
                </button>
              </form>
              {subscribeSent && (
                <p className="mt-2 text-xs text-[#e8c547]">Thanks — you&apos;re on the list.</p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-8 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-6">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} NovaSoftCode. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-background/60">
              <Link href="/privacy" className="transition-colors hover:text-primary">
                Privacy Policy
              </Link>
              <span className="text-background/30" aria-hidden>
                |
              </span>
              <Link href="/terms" className="transition-colors hover:text-primary">
                Terms & Conditions
              </Link>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-background/60 transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
