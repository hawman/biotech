export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">
          © {new Date().getFullYear()} Acme Biotech. All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-sm">
          <a href="/support">Support</a>
          <a href="/company">Company</a>
        </div>
      </div>
    </footer>
  );
}
