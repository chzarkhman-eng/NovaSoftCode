import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { ServicesPageHero } from "@/components/services-page-hero"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Services | NovaSoftCode",
  description:
    "Explore NovaSoftCode services: AI, automation, DevOps, commerce, immersive experiences, UX, and custom engineering.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <ServicesPageHero />
      <ServicesSection variant="page" omitIntro />
      <Footer />
    </main>
  )
}
