import Navbar from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'

export default function Projects() {
  const projects = [
    { title: 'Fintech App', description: 'Wealth dashboard with smooth micro‑interactions.', tags: ['React', 'Framer Motion', 'Tailwind'] },
    { title: '3D Portfolio', description: 'Interactive 3D hero with Spline.', tags: ['Spline', 'Three.js'] },
    { title: 'SaaS Landing', description: 'Conversion‑focused with modern visuals.', tags: ['Next.js', 'A/B Testing'] },
    { title: 'Design System', description: 'Reusable components with accessibility baked in.', tags: ['Radix', 'Tailwind'] },
    { title: 'Chat App', description: 'Realtime messaging with delightful motion.', tags: ['WebSockets', 'Node.js'] },
    { title: 'E‑commerce', description: 'Fast checkout and product explorer.', tags: ['Stripe', 'Next.js'] },
  ]

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        <SectionHeader eyebrow="Work" title="Selected Projects" subtitle="A snapshot of what I love to build." align="left" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
