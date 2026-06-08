import { motion } from "framer-motion";

const skills = [
  {
    category: "Web and Mobile Application Security",
    tools: [
      "Burp Suite",
      "OWASP Top 10",
      "Metasploit",
      "API Security",
      "MobSF",
      "NoSQL injection",
      "Nuclei",
      "Nessus",
      "OpenVAS",
      "Qualys",
      "More"
    ]
  },
  {
    category: "Networking",
    tools: [
      
      "TCP/IP",
      "OSI Model",
      "Network Protocols",
      "VPN",
      "HTTP/HTTPS",
      "OSPF",
      "EIGRP",
      "BGP",
      "Routing & Switching",
      "Nmap",
      "WireShark"
    ]
  },
  {
    category: "Security Monitoring and Malware Analysis",
    tools: [
      "Wazuh",
      "Security Onion",
      "Snort",
      "WireShark",
      "SIEM",
      "Enpoint Security",
      "OSINT",
      "Cyber Threat Inteligence",
      "Email Security",
      "REMnux",
      "Sandbox"
    ]
  },
  {
    category: "Development",
    tools: [
      "React",
      "MongoDB",
      "Java",
      "Python",
      "Bash Scripting",
      "Go",
      "Git",
      "Github",
      "Docker",
      "Postman",
      "Linux System Administration",
      "Windows OS"
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <p className="text-green-400 uppercase tracking-widest text-sm">
            Skills
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Technical Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-green-500 transition"
            >

              <h3 className="text-xl font-semibold mb-5">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-3">

                {skill.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-2 bg-slate-800 rounded-lg text-sm"
                  >
                    {tool}
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