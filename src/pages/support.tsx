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
              href="mailto:techsupport@acmebiotech.example"
              className="text-indigo-600"
            >
              techsupport@mdxbiotech.example
            </a>{' '}
            or call +1 (555) 555-5555.
          </p>
        </div>
        <div>
          <h3 className="font-medium">Sales & Orders</h3>
          <p className="mt-2 text-slate-600">
            For quotes, pricing, and orders:{' '}
            <a
              href="mailto:sales@acmebiotech.example"
              className="text-indigo-600"
            >
              sales@mdxbiotech.example
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
