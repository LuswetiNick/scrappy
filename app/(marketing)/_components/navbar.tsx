"use client"
import { MobileNav } from "@/app/(marketing)/_components/mobile-nav"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/constants"
import { useScroll } from "@/hooks/use-scroll"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Navbar = () => {
  const scrolled = useScroll(10)

  return (
    <header
      className={cn("sticky top-0 z-50 w-full border-b border-transparent", {
        "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50":
          scrolled,
      })}
    >
      <nav className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4">
        <Link className="text-lg font-bold text-primary" href="/">
          Scrappy.
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Button asChild key={link.label} size="sm" variant="ghost">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button size="sm" variant="outline">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
        <MobileNav />
      </nav>
    </header>
  )
}

export default Navbar
