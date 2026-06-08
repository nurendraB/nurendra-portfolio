import profile from "../assets/profile-portfolio.webp";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBug,
  FaEnvelope,
} from "react-icons/fa";

export default function Hero() {
 const skills = [
  "VAPT",
  "Bug Bounty",
  "Red Teaming",
  "OSINT",
  "Threat Intelligence",
  "Digital Forensics",
  "OWASP Top 10",
  "React",
  "OSPF, EIGRP, BGP Routing Protocols",
  "VPN",
  "MPLS",
];

  return (
    <section
  id="home"
  className="min-h-screen flex items-center pt-20 px-6 md:px-12 grid-pattern"
>
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-green-400 uppercase tracking-[4px] text-sm">
              Cybersecurity Researcher
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-4 leading-tight">
              Nurendra
              <br />
              Bhandarigal
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-xl">
              Cybersecurity Researcher • Bug Bounty Hunter •
              VAPT Enthusiast • Network Engineer •
              Threat Intelligence Enthusiast • React Developer 
            </p>
            <p className="text-green-400 text-sm mt-4">
  Building secure systems, researching vulnerabilities,
  and defending enterprise environments.
</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-xl font-medium"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-green-500 hover:bg-green-500/10 transition px-6 py-3 rounded-xl"
              >
                Request Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-3 mt-10">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm hover:border-green-500 transition"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex gap-6 mt-10 text-2xl">
              <a
                href="https://github.com/nurendraB"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/nurendra-bhandarigal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="#findings"
                className="hover:text-green-400 transition"
              >
                <FaBug />
              </a>

              <a
                href="#contact"
                className="hover:text-green-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
         {/* Right Side */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative"
>

  {/* Profile Image */}

  <div className="flex justify-center mb-8">

    <div className="relative">

      <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>

      <img
  src={profile}
  alt="Nurendra Bhandarigal"
  className="
    relative
    w-80
    h-96
    object-cover
    object-top
    rounded-3xl
    border
    border-green-500/30
    shadow-[0_0_40px_rgba(34,197,94,0.25)]
    hover:scale-105
    transition
    duration-500
  "
/>

      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
  <span className="text-green-400 text-sm font-medium">
    Open To Work
  </span>
</div>

    </div>

  </div>

  {/* Security Profile */}

  <div className="max-w-xl mx-auto bg-slate-900/70 backdrop-blur-lg border border-slate-800 rounded-3xl p-8">

    <div className="mb-6">
  <span className="text-xs px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
    Cyber Threat Intelligence Command Center
  </span>
</div>

    <div className="space-y-5">

      <div className="flex justify-between">
        <span className="text-gray-400">
          Focus Areas
        </span>

        <span>
          VAPT • Network Security
        </span>
      </div>

       <div className="flex justify-between">
        <span className="text-gray-400">
          Education
        </span>

        <span>
          B.Tech CSE
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">
          Experience Level
        </span>

        <span>
          Cybersecurity Fresher
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">
          Projects Built
        </span>

        <span>
          20+
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">
          Security Research
        </span>

        <span>
          Active
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">
          Certifications
        </span>

        <span>
          CEH • CAP • CNSP • QUALYS VMDR
        </span>
      </div>

    </div>

    <div className="border-t border-slate-800 mt-8 pt-6">

      <h4 className="font-semibold mb-4">
        Highlights
      </h4>

      <div className="space-y-4">

        <div className="flex items-center gap-3">
          <span>🏆</span>
          <span>Hall of Fame Recognition</span>
        </div>

        <div className="flex items-center gap-3">
          <span>💰</span>
          <span>Bug Bounty Rewards Received</span>
        </div>

        <div className="flex items-center gap-3">
          <span>🛠</span>
          <span>Built spiderNetscan Vulnerability Scanner</span>
        </div>

        <div className="flex items-center gap-3">
          <span>🌐</span>
          <span>Enterprise Security Monitoring Lab</span>
        </div>

        <div className="flex items-center gap-3">
          <span>🧠</span>
          <span>Digital Forensics & Malware Analysis</span>
        </div>

        <div className="flex items-center gap-3">
          <span>🚦</span>
          <span>Top 7 - EC-Council Global Challenge</span>
        </div>

        <div className="flex items-center gap-3">
          <span>🌍</span>
          <span>Top 84 - ComOlho Leaderboard</span>
        </div>

        <div className="flex items-center gap-3">
          <span>🎓</span>
          <span>CEH, CAP, CNSP & Qualys VMDR</span>
        </div>

      </div>

    </div>

  </div>

</motion.div>
        </div>
      </div>
    </section>
  );
}