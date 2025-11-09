export default function Support() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Support</h1>

      <div className="bg-white p-6 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium">Technical Support</h3>
          <p className="mt-2 text-slate-600">
            For protocol help or troubleshooting, email{' '}
            <a
              href="mailto:techsupport@mdxbiotech.com"
              className="text-indigo-600"
            >
              techsupport@mdxbiotech.com
            </a>{' '}
            or call +60 (3) 7972-9002.
          </p>
        </div>
        <div>
          <h3 className="font-medium">Sales & Orders</h3>
          <p className="mt-2 text-slate-600">
            For quotes, pricing, and orders:{' '}
            <a
              href="mailto:info@mdxbiotech.com"
              className="text-indigo-600"
            >
              info@mdxbiotech.com
            </a>
            .
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="font-medium">Business hours</h3>
        <p className="mt-2 text-slate-600">Mon–Fri, 9:00–17:00 (local time)</p>
      </div>
    </div>
  );
}
