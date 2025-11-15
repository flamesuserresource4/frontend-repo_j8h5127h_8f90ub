export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0f1a]">
      <div className="mx-auto max-w-7xl px-6 py-10 text-white/60 text-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">Twitter</a>
            <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
