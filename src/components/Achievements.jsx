import CountUp from "react-countup";
import { motion } from "framer-motion";

const achievements = [
  {
    value: 20,
    suffix: "+",
    label: "Projects Built",
  },
  {
    value: 6,
    suffix: "+",
    label: "Certifications",
  },
  {
    value: 7,
    suffix: "",
    label: "Top EC-Council Ranking",
  },
  {
    value: 84,
    suffix: "",
    label: "ComOlho Global Rank",
  },
];

export default function Achievements() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <p className="text-green-400 uppercase tracking-widest text-sm">
            Achievements
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Career Highlights
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-8
                text-center
                hover:border-green-500
                transition
              "
            >

              <h3 className="text-5xl font-bold text-green-400">
  {item.value}
  {item.suffix}
</h3>

              <p className="mt-4 text-gray-400">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}