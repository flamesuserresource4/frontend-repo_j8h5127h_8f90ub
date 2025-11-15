import Navbar from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        <SectionHeader eyebrow="About" title="A little more about me" subtitle="I love crafting interactive, modern experiences that feel alive." align="left" />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Philosophy</h3>
            <p className="mt-3 text-white/70">Design is how it works. I obsess over micro-interactions, motion, and clarity. My stack includes React, Tailwind, Framer Motion, and FastAPI.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Toolbox</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-white/70">
              {['React', 'Tailwind', 'Framer Motion', 'Spline', 'Node', 'FastAPI'].map((t) => (
                <li key={t} className="rounded-lg bg-white/5 px-3 py-2">{t}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
