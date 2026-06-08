import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import certifications from "../data/certifications";

export default function Certifications() {
  const roadmap = [
    "Red Team Operations",
    "Active Directory Exploitation",
    "Cloud Security",
    "Threat Hunting",
    "Detection Engineering",
    "Purple Teaming",
    "Malware Analysis",
    "Security Research",
    "Exploit Development",
  ];

  return (
    <section
      id="certifications"
      className="py-24 px-6 md:px-12 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-14">

          <p className="text-green-400 uppercase tracking-[4px] text-sm">
            Learning & Certifications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Certifications & Continuous Learning
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl">
            Industry-recognized certifications and practical learning
            across offensive security, application security,
            incident response, network security, and cybersecurity research.
          </p>

        </div>

        {/* Certification Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              className="
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                p-6
                hover:border-green-500
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >

              <div className="flex items-center gap-4">

                <img
                  src={cert.logo}
                  alt={cert.title}
                  className="
                    w-16
                    h-16
                    object-contain
                    rounded-lg
                    bg-white
                    p-1
                  "
                />

                <div>

                  <h3 className="font-semibold leading-tight">
                    {cert.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1">
                    {cert.issuer}
                  </p>

                </div>

              </div>

              {cert.featured && (
                <span
                  className="
                    inline-block
                    mt-4
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    bg-green-500/20
                    text-green-400
                  "
                >
                  Featured Certification
                </span>
              )}

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-5
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-lg
                  bg-green-500
                  hover:bg-green-600
                  transition
                "
              >
                View Credential
                <FaExternalLinkAlt size={12} />
              </a>

            </motion.div>
          ))}

        </div>

        {/* Learning Roadmap */}

        <div className="mt-24">

          <h3 className="text-3xl font-semibold mb-10">
            Current Learning Roadmap
          </h3>

          <div className="grid md:grid-cols-3 gap-6">

            {roadmap.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-xl
                  p-5
                  hover:border-green-500
                  transition
                "
              >
                <span className="text-green-400 mr-2">
                  ▶
                </span>

                {item}
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}