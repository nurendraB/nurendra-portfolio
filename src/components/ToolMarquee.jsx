import burp from "../assets/logos/burp.png";
import nmap from "../assets/logos/nmap.jpeg";
import nessus from "../assets/logos/nessus.jpeg";
import metasploit from "../assets/logos/metasploit.jpeg";
import wazuh from "../assets/logos/wazuh.png";
import snort from "../assets/logos/snort-ar21.svg";
import zap from "../assets/logos/zap.jpeg";
import ghidra from "../assets/logos/ghidra.svg";
import react from "../assets/logos/react.svg";
import java from "../assets/logos/java.jpeg";
import blackarch from "../assets/logos/blackarch.png";
import clamav from "../assets/logos/clamav.jpeg";
import sophos from "../assets/logos/sophos.jpeg";
import nikto from "../assets/logos/nikto.svg";

const tools = [
  { name: "Burp Suite", logo: burp },
  { name: "Nmap", logo: nmap },
  { name: "Nessus", logo: nessus },
  { name: "Metasploit", logo: metasploit },
  { name: "Wazuh", logo: wazuh },
  { name: "Snort", logo: snort },
  { name: "OWASP ZAP", logo: zap },
  { name: "Ghidra", logo: ghidra },
  { name: "React", logo: react },
  { name: "Java", logo: java },
  { name: "BlackArch", logo: blackarch },
  { name: "ClamAV", logo: clamav },
  { name: "Sophos", logo: sophos },
  { name: "Nikto", logo: nikto },
];

export default function ToolMarquee() {
  return (
    <section className="relative overflow-hidden py-8 border-y border-slate-800 bg-slate-950">

      {/* Left Fade */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-950 to-transparent" />

      {/* Right Fade */}
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-950 to-transparent" />

      {/* Header */}
      <div className="text-center mb-6">
        <p className="text-green-400 uppercase tracking-[5px] text-xs">
          Technology Arsenal
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-3">
          Security & Development Stack
        </h2>
      </div>

      {/* Marquee */}
      <div className="tool-marquee">

        {[...tools, ...tools].map((tool, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-3
              mx-4
              px-5
              py-3
              rounded-2xl
              bg-slate-900
              border
              border-slate-800
              hover:border-green-500
              hover:-translate-y-1
              transition-all
              duration-300
              shadow-lg
            "
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="
                w-12
                h-12
                object-contain
                rounded-lg
                bg-white
                p-1
              "
            />

            <span
              className="
                text-gray-300
                font-medium
                whitespace-nowrap
              "
            >
              {tool.name}
            </span>
          </div>
        ))}

      </div>
    </section>
  );
}