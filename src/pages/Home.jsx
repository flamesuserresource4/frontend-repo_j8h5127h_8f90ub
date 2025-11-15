import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  const projects = [
    { title: 'Interactive Dashboard', description: 'Analytics with micro-interactions and delightful transitions.', tags: ['React', 'D3', 'Framer Motion'] },
    { title: '3D Landing Page', description: 'Playful hero with 3D scenes and parallax motion.', tags: ['Spline', 'Three.js', 'Tailwind'] },
    { title: 'E-commerce UX', description: 'Checkout flows optimized for speed and clarity.', tags: ['Next.js', 'Stripe', 'A11y'] },
  ]

  return (
    <div className="min-h-screen bg-[#0b0f1a]">
      <Navbar />
      <Hero />

      {/* About */}
      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionHeader
          eyebrow="About Me"
          title="Designer‑developer obsessed with details"
          subtitle="I build immersive, performant interfaces with a focus on accessibility, animations, and delightful UX."
          align="left"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/70">
              <h3 className="text-white font-semibold">Capability #{i}</h3>
              <p className="mt-2 text-sm">From concept to production, I handle design systems, animations, and full-stack delivery.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="Selected Work" title="Projects" subtitle="A few favorites that showcase my style and approach." align="left" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="Work with me" title="Let’s build something great" subtitle="Tell me about your project and timeline." align="left" />
        <form className="mt-10 grid gap-4 sm:grid-cols-2">
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30 sm:col-span-1" placeholder="Name" />
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30 sm:col-span-1" placeholder="Email" type="email" />
          <textarea className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30 sm:col-span-2" placeholder="How can I help?" rows={5} />
          <button className="sm:col-span-2 rounded-xl bg-white text-[#0b0f1a] px-6 py-3 text-sm font-semibold shadow-xl transition hover:shadow-2xl hover:-translate-y-0.5">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  )
}
