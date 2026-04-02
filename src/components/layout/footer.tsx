import Link from "next/link"
import { siteConfig } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-32">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-[var(--color-foreground)] text-base mb-1">
            Najeem Shaik
          </p>
          <p className="text-caption text-[var(--color-muted-foreground)]">
            Engineering & Design
          </p>
        </div>

        <nav className="flex items-center gap-6">
          {siteConfig.social.map((s) => (
            <Link
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-caption text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              {s.platform}
            </Link>
          ))}
        </nav>

        <p className="text-caption text-[var(--color-muted-foreground)]">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
