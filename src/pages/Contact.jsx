import Navbar from '../components/Navbar'
import SectionHeader from '../components/SectionHeader'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <Navbar />

      <section className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <SectionHeader eyebrow="Contact" title="Let’s collaborate" subtitle="Tell me about your project and how I can help." align="left" />

        <form className="mt-10 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" placeholder="Name" />
            <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" placeholder="Email" type="email" />
          </div>
          <input className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" placeholder="Subject" />
          <textarea className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-white/30" placeholder="Message" rows={6} />
          <button className="rounded-xl bg-white text-[#0b0f1a] px-6 py-3 text-sm font-semibold shadow-xl transition hover:shadow-2xl hover:-translate-y-0.5">Send Message</button>
        </form>
      </section>

      <Footer />
    </div>
  )
}
