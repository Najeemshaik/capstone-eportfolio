import { Nav } from "@/components/layout/nav"
import { Footer } from "@/components/layout/footer"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </>
  )
}
