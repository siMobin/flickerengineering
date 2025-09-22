import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full">
      <div className="top-info-bar px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-2">
          <div className="text-sm">
            +880-XXX-XXXXXX &nbsp; | &nbsp; info@flickerengineering.com
          </div>
          <div className="text-sm">Professional Engineering Services</div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-1 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Flicker Engineering" className="h-20" />
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="nav-link active">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/contact" className="ml-4">
              <button className="btn-primary">Get Quote</button>
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              aria-label="Open menu"
              className="px-3 py-2 border rounded"
              style={{ borderColor: "rgba(0,0,0,0.06)" }}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
