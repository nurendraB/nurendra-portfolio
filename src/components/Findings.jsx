import { motion } from "framer-motion";
import findings from "../data/findings";

export default function Findings() {
  return (
    <section
      id="findings"
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">

          <p className="text-green-400 uppercase tracking-widest text-sm">
            Bug Bounty
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Security Findings & Research
          </h2>

        </div>

        <div className="space-y-8">

          {findings.map((finding, index) => (
            <motion.div
              key={finding.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-green-500 transition"
            >

              <div className="flex flex-wrap gap-4 justify-between">

                <h3 className="text-2xl font-semibold">
                  {finding.title}
                </h3>

                <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
                  {finding.severity}
                </span>

              </div>

              <p className="text-gray-400 mt-4">
                {finding.impact}
              </p>

              <div className="mt-6 grid md:grid-cols-2 gap-6">

                <div>
                  <p className="text-gray-500 text-sm">
                    Reward
                  </p>

                  <p className="text-xl font-semibold">
                    {finding.reward}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Achievement
                  </p>

                  <p className="text-xl font-semibold">
                    {finding.achievement}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}