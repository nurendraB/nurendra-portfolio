import { motion } from "framer-motion";

const cards = [
  {
    title: "Threat Level",
    value: "MONITORING",
  },
  {
    title: "Security Research",
    value: "ACTIVE",
  },
  {
    title: "Projects",
    value: "20+",
  },
  {
    title: "Certifications",
    value: "6+",
  },
];

export default function Dashboard() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">

          <p className="text-green-400 uppercase tracking-widest text-sm">
            Dashboard
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Threat Intelligence Dashboard
          </h2>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                hover:border-green-500
                transition
              "
            >

              <p className="text-gray-400 text-sm">
                {card.title}
              </p>

              <h3 className="text-2xl font-bold text-green-400 mt-3">
                {card.value}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}