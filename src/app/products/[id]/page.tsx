import { products } from '../../data/products';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

type Props = { params: Promise<{ id: string }> };

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return notFound();

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="mt-3 text-slate-600">{product.longDesc}</p>

          {product.specs && (
            <div className="mt-4">
              <h3 className="font-medium">Specifications</h3>
              <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between border rounded p-2 bg-slate-50"
                  >
                    <dt className="font-medium">{k}</dt>
                    <dd className="ml-2">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md">
              Request Quote
            </a>
            <a
              href="mailto:sales@acmebiotech.example"
              className="inline-block px-4 py-2 border rounded-md"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-lg shadow p-4">
        <h3 className="font-medium">Documentation</h3>
        <p className="text-sm text-slate-600 mt-2">
          Download protocol sheets and certificates of analysis on request —
          contact support for files.
        </p>
      </section>
    </div>
  );
}
