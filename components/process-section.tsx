// "use client"

// import { motion } from "framer-motion"
// import { 
//   MessageSquare, 
//   Lightbulb, 
//   Code2, 
//   TestTube, 
//   Rocket,
//   ArrowRight
// } from "lucide-react"

// const steps = [
//   {
//     number: "01",
//     icon: MessageSquare,
//     title: "Requirement Gathering",
//     description: "We begin with in-depth consultations to understand your business goals, technical requirements, and project scope."
//   },
//   {
//     number: "02",
//     icon: Lightbulb,
//     title: "Planning & Design",
//     description: "Our architects craft detailed technical specifications, wireframes, and prototypes aligned with your vision."
//   },
//   {
//     number: "03",
//     icon: Code2,
//     title: "Development",
//     description: "Using agile methodology, our team brings your project to life with regular sprints and continuous integration."
//   },
//   {
//     number: "04",
//     icon: TestTube,
//     title: "Testing & QA",
//     description: "Rigorous testing across all platforms. We perform functional, performance, and security testing."
//   },
//   {
//     number: "05",
//     icon: Rocket,
//     title: "Deployment & Support",
//     description: "Seamless deployment with zero downtime. We provide ongoing maintenance and support for success."
//   }
// ]

// type ProcessSectionProps = {
//   compactSpacing?: boolean
// }

// export function ProcessSection({ compactSpacing = false }: ProcessSectionProps) {
//   return (
//     <section
//       id="process"
//       className={`relative scroll-mt-24 bg-secondary/30 ${compactSpacing ? "pt-6 sm:pt-8 pb-16 sm:pb-20" : "py-24 sm:py-32"}`}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 pattern-dots opacity-30" />

//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className={`text-center ${compactSpacing ? "mb-6 sm:mb-8" : "mb-16"}`}
//         >
//           <span className="inline-block bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase px-4 py-2 rounded-full mb-4">
//             Our Process
//           </span>
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance text-foreground">
//             How We Deliver Excellence
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
//             Our proven development process ensures transparency, efficiency, and 
//             exceptional results at every stage.
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Connection Line - Desktop */}
//           <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

//           <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={step.number}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="relative"
//               >
//                 {/* Step card */}
//                 <div className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full card-hover">
//                   {/* Number badge */}
//                   <div className="relative mb-6">
//                     <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg glow-primary">
//                       <step.icon className="w-7 h-7 text-primary-foreground" />
//                     </div>
//                     <span className="absolute -top-2 -right-2 text-5xl font-bold text-primary/10">
//                       {step.number}
//                     </span>
//                   </div>

//                   <h3 className="text-lg font-semibold text-foreground mb-3">
//                     {step.title}
//                   </h3>
//                   <p className="text-sm text-muted-foreground leading-relaxed">
//                     {step.description}
//                   </p>
//                 </div>

//                 {/* Arrow for desktop */}
//                 {index < steps.length - 1 && (
//                   <div className="hidden lg:flex absolute top-20 -right-4 w-8 h-8 items-center justify-center z-10">
//                     <ArrowRight className="w-5 h-5 text-primary/40" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
