import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="text-caption text-[var(--color-accent)] mb-4">404</p>
      <h1 className="text-display-lg text-[var(--color-foreground)] mb-6 text-center">
        Page not found.
      </h1>
      <Link
        href="/"
        className="text-caption text-[var(--color-muted-foreground)] hover:text-[var(--color-accent)] transition-colors duration-200 link-underline"
      >
        Back to home
      </Link>
    </div>
  )
}
