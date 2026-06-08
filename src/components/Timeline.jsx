import { motion } from "framer-motion";
import timeline from "../data/timeline";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto">

        <div className="mb-12">

          <p className="text-green-400 uppercase tracking-widest text-sm">
            Journey
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Career Timeline
          </h2>

        </div>

        <div className="relative border-l border-slate-700 ml-4">

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 ml-8 relative"
            >

              <div className="absolute -left-[42px] w-4 h-4 rounded-full bg-green-500"></div>

              <span className="text-green-400 font-semibold">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}