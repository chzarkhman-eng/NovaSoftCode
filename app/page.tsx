import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { IndustriesSection } from "@/components/industries-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ValuesSection } from "@/components/values-section"
import { ProcessSection } from "@/components/process-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection compact />
      <ServicesSection variant="home" compactSpacing />
      <IndustriesSection compactSpacing />
      <TechnologiesSection compactSpacing />
      <ValuesSection compactSpacing />
      <ProcessSection compactSpacing />
      <Footer />
    </main>
  )
}
