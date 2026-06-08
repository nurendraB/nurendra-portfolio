export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">
          Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-green-400">
              20+
            </h3>
            <p>Projects Built</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-green-400">
              6+
            </h3>
            <p>Certifications</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-4xl font-bold text-green-400">
              Top 7
            </h3>
            <p>EC-Council Challenge</p>
          </div>

        </div>
      </div>
    </section>
  );
}