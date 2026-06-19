import { navLinks } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl *:px-4 *:md:px-6">
      <div className="flex flex-col gap-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link className="text-lg font-bold text-primary" href="/">
              Scrappy.
            </Link>
          </div>
        </div>

        <nav>
          <ul className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground md:gap-6">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.label}
                className="hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center justify-between gap-4 border-t py-4 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Scrappy.</p>
      </div>
    </footer>
  )
}

export default Footer
