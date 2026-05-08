import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms & Conditions | NovaSoftCode",
  description:
    "Terms and conditions for using the NovaSoftCode website and engaging with our services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />
      <article className="border-b border-border bg-muted/20">
        <div className="container mx-auto max-w-3xl px-6 pb-20 pt-32">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">Legal</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-balance">Terms & Conditions</h1>
          <p className="mb-10 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Agreement</h2>
              <p>
                These Terms & Conditions (“Terms”) govern your access to and use of the NovaSoftCode website
                and any contact you initiate with us through it. By using the site, you agree to these Terms.
                If you do not agree, please discontinue use of the site.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Services</h2>
              <p>
                Descriptions of services on this website are illustrative. A formal statement of work,
                proposal, or master services agreement (if any) governs the scope, fees, timelines, and
                deliverables for paid engagements. In case of conflict, the signed agreement prevails over
                general marketing content on the site.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Intellectual property</h2>
              <p>
                All content on this site—including text, graphics, logos, and layout—is owned by NovaSoftCode
                or its licensors unless otherwise noted. You may not copy, modify, or distribute site content
                for commercial use without our prior written permission. Client deliverables are addressed in
                individual contracts.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Acceptable use</h2>
              <p>You agree not to:</p>
              <ul className="mt-4 list-inside list-disc space-y-2">
                <li>Use the site in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems, accounts, or data</li>
                <li>Transmit malware, spam, or harmful code through forms or integrations</li>
                <li>Scrape or automate access to the site in a manner that impairs performance or security</li>
              </ul>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Disclaimers</h2>
              <p>
                The site is provided “as is” and “as available.” We strive for accuracy but do not warrant
                that content is complete, current, or error-free. To the fullest extent permitted by law,
                NovaSoftCode disclaims implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement with respect to the site.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, NovaSoftCode and its team shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from your use of
                the site. Our total liability for any claim relating to the site alone (outside a signed
                services contract) shall not exceed the amount you paid us in the twelve months preceding the
                claim, or one hundred U.S. dollars if no such payments occurred.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Governing law</h2>
              <p>
                These Terms are governed by the laws applicable in the jurisdiction of NovaSoftCode’s
                principal place of business, without regard to conflict-of-law principles. Courts in that
                jurisdiction shall have exclusive venue for disputes arising solely from use of the website,
                subject to any different agreement for formal service contracts.
              </p>
            </section>

            <section className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <h2 className="mb-3 text-xl font-semibold text-foreground">Changes</h2>
              <p>
                We may update these Terms periodically. The updated date will be revised at the top of this
                page. Continued use of the site after changes constitutes acceptance of the revised Terms.
              </p>
            </section>

            <p className="text-sm text-muted-foreground">
              These Terms are a general website policy. Your executed agreements for development or consulting
              work may include additional terms regarding confidentiality, IP, and liability.
            </p>

            <p>
              Questions?{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
