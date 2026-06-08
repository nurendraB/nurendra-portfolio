import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-green-400 uppercase tracking-widest text-sm">
            About Me
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Security Researcher & Builder
          </h2>

          <p className="text-gray-400 mt-6 leading-8 max-w-4xl">
            I am a Cybersecurity enthusiast with a strong interest in
            Web Application Security, Bug Bounty Hunting, VAPT,
            Digital Forensics, Threat Intelligence, and Security Monitoring.

            I enjoy identifying security vulnerabilities, building
            cybersecurity tools, and learning how attackers think in
            order to improve defensive security.

            My goal is to contribute to securing organizations through
            vulnerability research, secure development practices, and
            continuous learning.
          </p>

        </motion.div>

      </div>
    </section>
  );
}