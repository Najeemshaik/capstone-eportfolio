"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/reflection", label: "Reflection" },
  { href: "/contact", label: "Contact" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="w-8 h-8 flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
      >
        <Menu size={18} strokeWidth={1.5} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[var(--color-background)]"
          >
            <div className="flex flex-col h-full px-6 pt-6 pb-12">
              <div className="flex items-center justify-between mb-16">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="font-display text-[var(--color-foreground)] text-lg"
                >
                  Najeem Shaik
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="w-8 h-8 flex items-center justify-center text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block text-display-md py-3 border-b border-[var(--color-border)] transition-colors ${
                        pathname === link.href
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-foreground)] hover:text-[var(--color-accent)]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto">
                <p className="text-caption text-[var(--color-muted-foreground)]">
                  najeemshaik.eng@gmail.com
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
