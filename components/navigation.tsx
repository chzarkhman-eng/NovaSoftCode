"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { ThemeToggle } from "@/components/theme-toggle"

const mainNavLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Contact Us", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const onHero = pathname === "/"
  const useSolidHeader = isScrolled || !onHero

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = useSolidHeader
    ? "text-muted-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
    : "text-white/85 hover:text-white transition-colors duration-200 text-sm font-medium drop-shadow-sm"

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidHeader
          ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border py-3"
          : "py-6"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between gap-4">
        <BrandLogo useSolidHeader={useSolidHeader} />

        <div className="hidden flex-1 items-center justify-end gap-5 lg:flex xl:gap-7">
          {mainNavLinks.map((link) => (
            <Link key={link.name} href={link.href} className={linkClass}>
              {link.name}
            </Link>
          ))}

          <ThemeToggle useSolidHeader={useSolidHeader} />
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle useSolidHeader={useSolidHeader} />
          <button
            className={`shrink-0 p-2 ${useSolidHeader ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 mt-2 overflow-hidden rounded-xl border border-border bg-card shadow-lg lg:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-3 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
