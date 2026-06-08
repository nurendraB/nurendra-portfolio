import { motion } from "framer-motion";
import labs from "../data/labs";

export default function Labs() {
  return (
    <section
      id="labs"
      className="py-24 px-6 md:px-12 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-widest text-sm">
            Security Labs
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Security Labs & Research
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl">
            Hands-on security labs covering threat detection,
            network security, malware analysis, digital forensics,
            and security monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {labs.map((lab, index) => (
            <motion.div
              key={lab.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition"
            >
              <span className="text-green-400 text-sm">
                {lab.category}
              </span>

              <h3 className="text-2xl font-semibold mt-3 mb-4">
                {lab.title}
              </h3>

              <p className="text-gray-400 mb-5">
                {lab.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {lab.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-slate-800 px-3 py-1 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}