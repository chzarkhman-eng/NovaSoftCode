export type Service = {
  slug: string
  title: string
  image: string
  pitch: string
  /** Use blank lines (`\\n\\n`) between paragraphs for the detail page. */
  overview: string
  capabilities: string[]
  outcomes: string[]
}

/** Hero image for the /services page (`public/services/service.jpeg`). */
export const SERVICES_PAGE_HERO_IMAGE = "/services/service.jpeg"

/** Local assets under `public/services/` (filenames match your uploaded files). */
function serviceAsset(filename: string): string {
  return `/services/${encodeURIComponent(filename)}`
}

export const SERVICES: Service[] = [
  {
    slug: "ai-intelligent-automation",
    title: "AI & Intelligent Automation",
    image: serviceAsset("AI & Intelligent Automation.jpg"),
    pitch:
      "Ship AI that survives real users and real audits—not slide decks. We design copilots, workflow automation, and decision-support systems that are grounded in your data, observable in production, and economical at scale.",
    overview:
      "Most organizations do not fail on model choice—they fail on workflow fit, data hygiene, and operating discipline. NovaSoftCode starts with the job-to-be-done: which decisions should be faster, which tasks should disappear, and what evidence stakeholders need when AI is in the loop. From there we prototype quickly, measure quality with domain-appropriate evaluations, and harden integrations so outputs are traceable and reversible where required.\n\nWe build retrieval and agent patterns that respect permissions, redact sensitive fields, and degrade gracefully when sources conflict. Our engineers pair MLOps fundamentals—versioning, monitoring, cost controls, and rollback—with product sense so experiences feel helpful, not brittle. Whether you need document intelligence, customer support augmentation, sales ops assistance, or internal knowledge copilots, we align roadmaps to outcomes: throughput, accuracy, compliance, and total cost of ownership.\n\nDelivery is collaborative: your domain experts stay in the loop for labeling, policy, and acceptance criteria, while we bring the scaffolding for safe rollout across environments. The result is not a one-off demo but a maintainable capability—prompt systems, evaluation harnesses, dashboards, and runbooks your teams can evolve.\n\nIf you are early, we help you prioritize the highest-ROI use cases and avoid overbuilding. If you are scaling, we help you standardize patterns, consolidate tools, and keep latency and spend predictable as traffic grows.",
    capabilities: [
      "Discovery workshops, ROI framing, and responsible-AI policies aligned to your risk profile",
      "Data readiness: PII handling, access controls, chunking strategies, and source-of-truth mapping",
      "RAG, tool-using agents, structured outputs, and human-in-the-loop review where needed",
      "Evaluations: golden sets, regression suites, hallucination checks, and business KPI tie-ins",
      "Production integration with CRM, ERP, ticketing, data warehouses, and internal portals",
      "MLOps and observability: tracing, quality drift alerts, cost dashboards, and safe rollouts",
    ],
    outcomes: [
      "Measurable reduction in manual effort on high-volume workflows",
      "Faster, more consistent decisions with audit-friendly trails where required",
      "Lower incident risk through guardrails, monitoring, and clear escalation paths",
      "A roadmap that scales from pilot teams to enterprise adoption without rework",
    ],
  },
  {
    slug: "devops",
    title: "DevOps",
    image: "/services/devops.png",
    pitch:
      "Turn deployments into a competitive advantage. We implement CI/CD, infrastructure as code, and SRE practices that increase speed while shrinking blast radius—so your teams ship often without living in fear of Fridays.",
    overview:
      "DevOps is not a tool purchase; it is a set of habits that connect development and operations through fast feedback. We start by mapping your delivery path: environments, approvals, testing gaps, and where failures actually hurt. Then we automate the repetitive, standardize the golden path, and instrument everything that informs reliability.\n\nInfrastructure as code, policy-as-code, and secrets hygiene reduce drift between staging and production. Pipelines support trunk-based workflows, feature flags, and progressive delivery where appropriate. Observability—logs, metrics, traces—is wired to SLOs and actionable alerts, not noisy dashboards nobody trusts.\n\nWe also help with cost and scale: right-sizing, autoscaling policies, and FinOps visibility so growth does not become surprise bills. For regulated contexts, we align change management and audit trails without suffocating developer autonomy.\n\nNovaSoftCode can augment your platform team or stand up the foundation from scratch—either way, the outcome is calmer releases, faster recovery, and developers who spend more time building product.",
    capabilities: [
      "CI/CD design: branching strategy, build caches, artifact promotion, and rollback patterns",
      "IaC landing zones, networking, identity, and guardrails across cloud providers",
      "Kubernetes, serverless, and hybrid patterns matched to your workloads",
      "Observability stacks, SLOs, error budgets, and incident response playbooks",
      "Security in pipelines: signing, SBOMs, dependency policies, and environment protections",
      "Cost visibility, autoscaling tuning, and capacity planning for peak events",
    ],
    outcomes: [
      "Higher deployment frequency with smaller, safer change batches",
      "Reduced MTTR through better signals, ownership, and runbooks",
      "More predictable cloud spend and fewer emergency scale incidents",
      "Audit-friendly change history without blocking team momentum",
    ],
  },
  {
    slug: "e-commerce-digital-transformation",
    title: "E-commerce & Digital Transformation",
    image: "/services/E-commerce-Digital-Transformation.jpeg",
    pitch:
      "Win on the full journey—from first click to fulfilled order—then modernize the systems behind it. We build fast storefronts, resilient checkout, and connected operations so digital programs deliver revenue, not rework.",
    overview:
      "E-commerce is judged in milliseconds and measured in conversion, AOV, and repeat purchase. We engineer performance budgets, SEO-friendly structure, and checkout flows that reduce friction while integrating fraud, tax, and payments responsibly. Peak events get caching, queueing, and operational readiness—not hope.\n\nBeyond the storefront, transformation means connecting merchandising, inventory, customer service, and finance so teams stop reconciling spreadsheets. We integrate OMS/WMS, ERP, CRM, and marketing stacks with clear data contracts and monitoring at the boundaries—where silent failures usually hide.\n\nFor broader digital transformation, we align initiatives to KPIs and adoption: process redesign, change management, and phased rollouts that prove value before scaling. Technology choices are made for your roadmap—composable commerce when flexibility matters, platform depth when speed-to-market wins.\n\nNovaSoftCode partners as builders and integrators, translating business language into technical delivery with transparent milestones and measurable outcomes.",
    capabilities: [
      "Storefront engineering: performance, Core Web Vitals, SEO, and internationalization",
      "Checkout optimization, subscriptions, loyalty, and payment provider integration",
      "Search, merchandising, personalization, and experimentation hooks",
      "OMS/WMS/ERP integrations, inventory accuracy, and fulfillment visibility",
      "Peak readiness: load testing, caching, CDN strategy, and incident playbooks",
      "Analytics, attribution models, and executive dashboards tied to operations",
    ],
    outcomes: [
      "Stronger conversion and revenue on high-intent journeys",
      "Fewer stockouts, cancellations, and post-purchase support escalations",
      "Merchandising and ops teams empowered with trustworthy data",
      "A technical foundation that supports the next channel or market expansion",
    ],
  },
  {
    slug: "web-mobile-custom-software-development",
    title: "Web, Mobile & Custom Software Development",
    image: serviceAsset("Web, Mobile & Custom Software Development.jpg"),
    pitch:
      "From customer-facing apps to internal platforms, we engineer products that are fast, secure, and ready to grow. Web, mobile, and custom backends—one accountable team focused on your outcomes.",
    overview:
      "Software projects stall when architecture guesses at future requirements or copies trends that do not fit. We begin with constraints and outcomes: users, compliance, integrations, performance, and how your team will operate the system. That clarity drives API design, data modeling, and a sensible split between monolith, modular services, or event-driven pieces—chosen for your stage, not ours.\n\nOn the web, we prioritize performance, security headers, and maintainable frameworks. On mobile, we align on native vs cross-platform based on UX needs, release cadence, and device capabilities. Custom backends emphasize observability, idempotent workflows, and clear boundaries so features add cleanly over time.\n\nQuality is continuous: code review, automated tests where they matter, and documentation that helps onboarding. We support handover models that fit you—embedded squads, milestone delivery, or phased staff augmentation—without losing accountability.\n\nNovaSoftCode ships like a product partner: transparent roadmaps, demos that prove progress, and engineering honesty about risk.",
    capabilities: [
      "Full-stack product delivery: web apps, APIs, admin tools, and integrations",
      "Mobile: iOS/Android and cross-platform options with store readiness and analytics",
      "Cloud-native deployment, auth patterns (SSO, RBAC), and secrets hygiene",
      "Data modeling, migrations, and performance tuning for real workloads",
      "Observability, alerting, and on-call readiness for production systems",
      "Documentation, knowledge transfer, and maintainability reviews",
    ],
    outcomes: [
      "Products that feel credible and fast to real users on day one",
      "Architectures that support roadmap velocity without constant rewrites",
      "Lower operational risk through monitoring, testing, and clear ownership",
      "Flexible engagement models aligned to your internal capacity",
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug)
}
