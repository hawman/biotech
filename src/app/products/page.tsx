import Link from 'next/link';
import { products } from '../data/products';

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Products</h1>
        <p className="text-sm text-slate-600">Browse our kit catalog</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <article
            key={p.id}
            className="bg-white rounded-lg shadow overflow-hidden"
          >
            <Link href={`/products/${p.id}`} className="block hover:opacity-95">
              <div className="h-48 w-full relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-medium">{p.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.shortDesc}</p>
                <div className="mt-4">
                  <span className="text-indigo-600 text-sm">
                    View details →
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
