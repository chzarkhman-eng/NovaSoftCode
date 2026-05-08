import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Leadership | NovaSoftCode",
  description: "Meet the NovaSoftCode leadership team driving delivery and client success.",
}

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <TeamSection />
      <Footer />
    </main>
  )
}
