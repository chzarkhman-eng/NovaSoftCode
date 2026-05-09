import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About Us | NovaSoftCode",
  description:
    "Learn about NovaSoftCode: our mission, values, leadership team, and how we deliver software for global clients.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <AboutSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
