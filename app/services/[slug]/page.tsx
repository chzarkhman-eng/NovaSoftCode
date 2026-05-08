import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service | NovaSoftCode" }
  return {
    title: `${service.title} | NovaSoftCode`,
    description: service.pitch,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const overviewParagraphs = service.overview.split("\n\n").filter(Boolean)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground pt-24">
        <section className="relative min-h-[min(70vh,720px)] overflow-hidden border-b border-border">
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
            {/* Dark scrim from the left so the image stays visible on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/55 to-slate-950/15 sm:via-slate-950/45 sm:to-slate-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/25" />
          </div>

          <div className="container relative z-10 mx-auto flex min-h-[min(70vh,720px)] items-center px-6 py-16 sm:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                NovaSoftCode
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl text-balance">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/90 text-pretty sm:text-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]">
                {service.pitch}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="text-base shadow-lg">
                  <Link href="/contact">Start a project</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/70 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white"
                >
                  <Link href="/contact">Talk to our team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="lg:col-span-2 space-y-8">
              <h2 className="text-2xl font-bold tracking-tight">Overview</h2>
              <div className="space-y-6">
                {overviewParagraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-lg text-muted-foreground leading-relaxed text-pretty"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <aside className="space-y-8">
              <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">What we deliver</h3>
                <ul className="space-y-3">
                  {service.capabilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <h3 className="text-lg font-semibold mb-4">Outcomes clients care about</h3>
                <ul className="space-y-3">
                  {service.outcomes.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground/90">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Ready to explore {service.title} with NovaSoftCode?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Share your goals—we&apos;ll respond with a clear plan, timeline, and team fit.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </section>

        <div className="border-t border-border bg-background py-12">
          <div className="container mx-auto px-6 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary/40 hover:bg-muted/50 hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to services
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
