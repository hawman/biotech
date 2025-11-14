import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between px-4 h-16">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="MDx Biotechnology"
              width={250}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm">
              Home
            </Link>
            <Link href="/products" className="text-sm">
              Products
            </Link>
            <Link href="/services" className="text-sm">
              Services
            </Link>
            <Link href="/company" className="text-sm">
              Company
            </Link>
            <Link href="/support" className="text-sm">
              Support
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`h-0.5 w-6 bg-black`} />
            <span className={`h-0.5 w-6 bg-black`} />
            <span className={`h-0.5 w-6 bg-black`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-4 p-4 border-t">
            <Link
              href="/"
              className="text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/services"
              className="text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/company"
              className="text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Company
            </Link>
            <Link
              href="/support"
              className="text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Support
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
