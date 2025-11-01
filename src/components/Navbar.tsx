import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded bg-indigo-600 flex items-center justify-center text-white font-bold">
                AB
              </div>
              <span className="font-semibold">Acme Biotech</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <Link href="/" className="text-sm">
              Home
            </Link>
            <Link href="/products" className="text-sm">
              Products
            </Link>
            <Link href="/company" className="text-sm">
              Company
            </Link>
            <Link href="/support" className="text-sm">
              Support
            </Link>
          </nav>

          <div className="md:hidden">
            {/* Simple mobile menu: show a link to products (keeps it accessible). For a full mobile menu, you'd add state & a dropdown. */}
            <Link href="/products" className="text-sm">
              Products
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
