import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Contact Us | NovaSoftCode",
  description: "Get in touch with NovaSoftCode for quotes, partnerships, and project inquiries.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <ContactSection />
      <Footer />
    </main>
  )
}
