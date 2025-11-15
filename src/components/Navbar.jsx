import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between p-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center shadow-md">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-white/90 font-semibold tracking-tight">My Portfolio</span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-xl text-sm transition-all duration-300 ${
                      isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <a
                href="#contact"
                className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-sm shadow hover:opacity-90 transition"
              >
                Hire Me
              </a>
            </nav>

            <button
              aria-label="Open Menu"
              onClick={() => setOpen(true)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/10 text-white"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/60" onClick={() => setOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 bg-[#0b0f1a] border-l border-white/10 shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="inline-flex items-center gap-2">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 grid place-items-center shadow-md">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span className="text-white/90 font-semibold tracking-tight">Menu</span>
              </div>
              <button onClick={() => setOpen(false)} className="h-10 w-10 grid place-items-center rounded-xl bg-white/10 text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-xl text-white/90 ${
                    location.pathname === item.to ? 'bg-white/10' : 'hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
