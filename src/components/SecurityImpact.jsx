import { motion } from "framer-motion";

const metrics = [
  {
    value: "40+",
    label: "Validated Findings",
  },
  {
    value: "7+",
    label: "Disclosure Programs",
  },
  {
    value: "P2-P5",
    label: "Severity Coverage",
  },
  {
    value: "14",
    label: "Security Misconfigurations",
  },
];

const highlights = [
  "Hall of Fame Recognitions",
  "Rewarded Security Findings",
  "Responsible Vulnerability Disclosure",
  "P2 Cryptographic Failure – PNB Housing Finance",
  "P3 IDOR – Allcargo Group Red Teaming Program",
  "Sensitive Data Exposure Findings",
  "Accepted Reports on Multiple Disclosure Platforms",
  "Security Research Across Healthcare, Finance, Logistics & Technology",
];

export default function SecurityImpact() {
  return (
    <section
      id="security-impact"
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-14 text-center">

          <p className="text-green-400 uppercase tracking-[4px] text-sm">
            Security Research Impact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Real-World Security Findings
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Responsible disclosure of security vulnerabilities
            across healthcare, finance, logistics, and technology
            organizations through bug bounty and coordinated
            vulnerability disclosure programs.
          </p>

        </div>

        {/* Metrics */}

        <div className="grid md:grid-cols-4 gap-6 mb-12">

          {metrics.map((item, index) => (
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
              <h3 className="text-4xl font-bold text-green-400">
                {item.value}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Highlights */}

        <div
          className="
            bg-slate-900/60
            border
            border-slate-800
            rounded-3xl
            p-8
          "
        >

          <h3 className="text-2xl font-semibold mb-6">
            Research Highlights
          </h3>

          <div className="grid md:grid-cols-2 gap-4">

            {highlights.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-3
                  p-4
                  rounded-xl
                  bg-slate-950
                  border
                  border-slate-800
                "
              >
                <span className="text-green-400">
                  ✓
                </span>

                <span>
                  {item}
                </span>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}