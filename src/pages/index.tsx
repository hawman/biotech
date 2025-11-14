import { products } from '@/data/products';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="rounded-lg bg-white shadow p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold">MDx BIOTECHNOLOGY</h1>
            <p className="mt-3 text-slate-600">
              Quality PCR kits and reagents for research and diagnostics. Simple
              workflows, reliable performance.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="/products"
                className="inline-block rounded-md px-4 py-2 bg-indigo-600 text-white font-medium"
              >
                View Products
              </Link>
              <Link
                href="/company"
                className="inline-block rounded-md px-4 py-2 border border-slate-200"
              >
                About Us
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <img
              src="/images/lab-hero.jpg"
              alt="laboratory"
              className="w-full rounded-lg object-cover shadow h-48 sm:h-56 lg:h-48"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-medium">Trusted Performance</h3>
          <p className="mt-2 text-slate-600">
            Rigourously validated kits with consistent sensitivity and
            specificity.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-medium">Easy Protocols</h3>
          <p className="mt-2 text-slate-600">
            Clear step-by-step instructions to get you up and running quickly.
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-lg font-medium">Responsive Support</h3>
          <p className="mt-2 text-slate-600">
            Technical support for assay setup, troubleshooting, and regulatory
            questions.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold">Featured Products</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.slice(0, 3).map((product) => (
            <article className="border rounded p-4">
              <h4 className="font-medium">{product.name}</h4>
              <p className="text-sm text-slate-600 mt-2">{product.shortDesc}</p>
              <div className="mt-3">
                <Link
                  href={`/products/${product.id}`}
                  className="text-indigo-600 text-sm"
                >
                  View product →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
