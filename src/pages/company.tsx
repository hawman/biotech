export default function Company() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">About MDx Biotechnology</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-slate-700">
          MDx Biotechnology specializes in molecular diagnostic solutions. Our
          mission is to deliver high-quality products for researchers,
          clinicians, and diagnostic labs.
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <h4 className="font-medium">Mission</h4>
            <p className="text-sm text-slate-600 mt-2">
              Deliver reliable, validated assay kits that simplify workflows.
            </p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-medium">Quality</h4>
            <p className="text-sm text-slate-600 mt-2">
              ISO-style processes and thorough QC for every batch.
            </p>
          </div>
          <div className="p-4 border rounded">
            <h4 className="font-medium">Contact</h4>
            <p className="text-sm text-slate-600 mt-2">
              Head office: 123 BioTech Ave, Science City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
