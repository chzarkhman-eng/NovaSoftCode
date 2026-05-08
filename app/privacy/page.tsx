import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | NovaSoftCode",
  description:
    "How NovaSoftCode collects, uses, and protects your information when you use our website and services.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />
      <article className="border-b border-border bg-muted/20">
        <div className="container mx-auto max-w-3xl px-6 pb-20 pt-32">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance">Privacy Policy</h1>
          <p className="mb-10 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Introduction</h2>
              <p>
                NovaSoftCode (“we,” “our,” or “us”) respects your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard information when you visit our website, contact us, or
                engage our services. By using our site, you agree to the practices described here.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Information we collect</h2>
              <ul className="mt-4 list-inside list-disc space-y-2">
                <li>
                  <strong className="text-foreground">Contact details</strong> you provide (name, email, phone,
                  company) when you submit forms, subscribe to updates, or request a quote.
                </li>
                <li>
                  <strong className="text-foreground">Usage data</strong> such as pages visited, approximate
                  region, device type, and referrer—typically collected through analytics tools in aggregated
                  form.
                </li>
                <li>
                  <strong className="text-foreground">Project-related information</strong> shared during
                  scoping and delivery under a separate agreement or statement of work.
                </li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">How we use information</h2>
              <p>We use the information we collect to:</p>
              <ul className="mt-4 list-inside list-disc space-y-2">
                <li>Respond to inquiries and provide proposals or support</li>
                <li>Operate, maintain, and improve our website and communications</li>
                <li>Send service-related messages or updates you have opted into</li>
                <li>Comply with legal obligations and protect our legitimate business interests</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Sharing and retention</h2>
              <p>
                We do not sell your personal information. We may share data with trusted service providers
                (e.g., hosting, email, analytics) who process it on our instructions, or when required by law.
                We retain information only as long as needed for the purposes above or as required by contract
                or law.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Your choices</h2>
              <p>
                You may request access, correction, or deletion of your personal information where applicable,
                or opt out of marketing emails by using the unsubscribe link or contacting us at{" "}
                <Link href="mailto:info.novasoftcode@gmail.com" className="font-medium text-primary hover:underline">
                  info.novasoftcode@gmail.com
                </Link>
                .
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Security</h2>
              <p>
                We implement reasonable technical and organizational measures to protect information. No method
                of transmission over the Internet is completely secure; we encourage you to use strong
                passwords and secure channels when sharing sensitive project data.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Changes</h2>
              <p>
                We may update this policy from time to time. The “Last updated” date at the top will change
                when we do. Continued use of the site after changes constitutes acceptance of the revised
                policy.
              </p>
            </section>

            <p className="text-sm text-muted-foreground">
              This page is provided for general information and does not constitute legal advice. For
              project-specific data handling, your contract or NDA may apply.
            </p>

            <p>
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Contact us
              </Link>{" "}
              with privacy-related questions.
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
