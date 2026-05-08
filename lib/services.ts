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
    slug: "blockchain-emerging-technologies",
    title: "Blockchain & Emerging Technologies",
    image: "/services/Blockchain-Emerging-Technologies.jpeg",
    pitch:
      "Build trust architectures that are sober about risk: custody, contracts, and operations—not buzzwords. We help you choose when distributed ledgers add real value, then engineer for security, compliance, and long-term maintainability.",
    overview:
      "Emerging technology should reduce uncertainty, not create it. We work with leadership, legal, and engineering to clarify the problem: provenance, settlement, programmable incentives, partner ecosystems, or digital credentials. From that clarity we define an architecture that is proportionate—what belongs on-chain, what belongs off-chain, and how upgrades and incidents are handled when real money and reputation are involved.\n\nOur engineering emphasizes key management, contract testing, indexing, and operational monitoring. We plan for chain reorgs, oracle failure modes, and user onboarding friction, because launches succeed when the boring parts are done well. Whether you are validating an MVP or hardening a production network, we focus on auditability, least privilege, and runbooks your team can execute.\n\nWe also help you communicate credibly: security packs for enterprise buyers, threat models for internal risk teams, and pragmatic roadmaps that separate experiments from commitments.\n\nNovaSoftCode treats Web3 and adjacent stacks as software delivery problems—shipping, support, and continuous improvement—not one-time events.",
    capabilities: [
      "Architecture and threat modeling: custody models, signing flows, and recovery planning",
      "Smart-contract development, test coverage, upgrade patterns, and formal review support",
      "Off-chain services: APIs, indexers, event pipelines, and reconciliation jobs",
      "Wallet UX, gas abstraction strategies, and fraud/abuse considerations",
      "Operational readiness: monitoring, alerting, incident response, and change management",
    ],
    outcomes: [
      "Launch decisions your security and legal stakeholders can defend",
      "Reduced exploit and operational surprise through disciplined engineering habits",
      "Clear separation between proof-of-value and platform-scale investment",
      "Documentation and playbooks that keep delivery sustainable after go-live",
    ],
  },
  {
    slug: "cybersecurity-quality-assurance",
    title: "Cybersecurity & Quality Assurance",
    image: "/services/Cybersecurity-Quality-Assurance.jpeg",
    pitch:
      "Make security and QA part of velocity—not a late surprise. NovaSoftCode embeds secure design, automated testing, and release evidence into the way your product is built, so stakeholders can sign off with confidence.",
    overview:
      "Fast teams break when quality and security are treated as final gates. We shift risk left with lightweight threat modeling, secure defaults in frameworks, and dependency hygiene that scales. Security findings become actionable backlog items with owners, not ambiguous “fix later” notes.\n\nOn the QA side, we align test strategy to business risk: what must never break, what can degrade gracefully, and where automation pays off first. We combine API and UI automation, performance and resilience checks, and exploratory testing where human judgment finds edge cases machines miss. Accessibility and privacy-sensitive flows get the same rigor as revenue paths.\n\nFor releases, we emphasize traceability—requirements to tests to deployments—so audits and customer questionnaires become faster to answer. When incidents happen, telemetry and runbooks shorten time to recovery and prevent repeat classes of failure.\n\nWhether you are preparing for enterprise procurement, hardening a consumer app, or stabilizing a legacy modernization, we help you build a credible narrative backed by evidence, not promises.",
    capabilities: [
      "Secure SDLC: design reviews, STRIDE-style threat modeling, and secure coding guidance",
      "Application security testing alignment: SAST/DAST, dependency scanning, secret detection",
      "IAM patterns, least privilege, secrets management, and environment segregation",
      "Test strategy, risk-based coverage, CI automation, and flake reduction",
      "Performance, load, and chaos-informed testing for critical paths",
      "Release governance: quality gates, evidence packs, and defect analytics",
    ],
    outcomes: [
      "Fewer critical vulnerabilities escaping to production over time",
      "More predictable releases with clearer accountability and metrics",
      "Shorter enterprise security reviews with substantiated controls",
      "Lower customer-impacting defects on the journeys that matter most",
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
    slug: "gaming-metaverse-immersive-experiences",
    title: "Gaming, Metaverse & Immersive Experiences",
    image: "/services/Gaming-Metaverse-Immersive-Experiences.jpeg",
    pitch:
      "Players feel quality in frame time, netcode, and polish. We build immersive experiences and game-tech with production discipline—profiling, networking tradeoffs, and pipelines that keep art and engineering aligned.",
    overview:
      "Immersive products fail when ambition outruns performance budgets. We work early to define targets: devices, session length, networking model, and content throughput. Engineering choices follow—rendering paths, LOD strategies, asset formats, and multiplayer authority models that match your player expectations.\n\nFor live experiences, telemetry and moderation hooks are part of the architecture, not bolt-ons. We help instrument funnels, detect abuse patterns, and support live ops with tooling that designers and producers can actually use.\n\nWhether you are shipping a competitive multiplayer mode, a spatial training experience, or a brand metaverse activation, we emphasize shippable increments: prototypes that answer real questions, milestones with visible risk reduction, and performance passes that land before marketing beats.\n\nNovaSoftCode collaborates closely with art and design so visuals survive optimization, and with product so scope stays honest as deadlines approach.",
    capabilities: [
      "Gameplay and systems programming with platform-specific performance tuning",
      "Multiplayer backends, matchmaking, replication strategies, and latency mitigation",
      "3D pipelines, optimization passes, and device-tier scaling",
      "AR/VR comfort settings, interaction design support, and profiling",
      "Live ops foundations: events, economy tooling, telemetry, and anti-abuse hooks",
      "Build automation, crash analytics, and release management for continuous delivery",
    ],
    outcomes: [
      "Sessions that feel responsive and fair across target hardware",
      "Earlier visibility into schedule risk through measurable milestones",
      "Better retention signals from stability, polish, and networking quality",
      "Production pipelines that keep content flowing without engineering bottlenecks",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    image: "/services/ui-ux-designer.jpeg",
    pitch:
      "Design that converts and scales: research-backed flows, accessible interfaces, and a system your developers can ship without ambiguity. We make the handoff as strong as the mockups.",
    overview:
      "Great UX is measured in completion rates, time-on-task, and support tickets—not opinions alone. We combine qualitative insight with analytics where available, then iterate in prototypes before engineering pays the cost of rework. Every screen ties back to a decision: what the user needs next, what the business needs to validate, and what edge cases cannot be ignored.\n\nWe build design systems with tokens, components, and documentation so visual consistency holds across teams and releases. Motion and content are treated as part of the experience, not decoration. Accessibility and responsive behavior are embedded from the start, reducing late-stage surprises and legal risk.\n\nDeveloper handoff includes specs, states, and QA checklists so implementation matches intent. We can embed with engineering for UX QA during build, catching mismatches early when fixes are cheap.\n\nNovaSoftCode helps startups establish a credible product face and helps enterprises modernize fragmented UIs without losing brand coherence.",
    capabilities: [
      "Discovery: interviews, journey maps, jobs-to-be-done, and competitive benchmarking",
      "Wireframes and high-fidelity UI with iterative usability validation",
      "Design systems: components, tokens, accessibility notes, and usage guidelines",
      "Prototyping for complex flows: onboarding, payments, admin tools, and dashboards",
      "Developer handoff packages and collaborative refinement during implementation",
      "Heuristic audits and post-launch optimization based on data and feedback",
    ],
    outcomes: [
      "Higher completion and conversion on critical user paths",
      "Consistent brand and interaction patterns across surfaces",
      "Faster engineering cycles with fewer back-and-forth clarifications",
      "Lower accessibility and usability risk before you scale traffic",
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
