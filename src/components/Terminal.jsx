import { useEffect, useState } from "react";

const lines = [
  "> Initializing Security Profile...",
  "> Loading Projects...",
  "> Loading Certifications...",
  "> Loading Threat Intelligence Data...",
  "> Loading Security Labs...",
  "> Threat Monitoring Active...",
  "> Welcome Recruiter",
];

export default function Terminal() {
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < lines.length) {
        setDisplayedLines((prev) => [
          ...prev,
          lines[index],
        ]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">

          <p className="text-green-400 uppercase tracking-widest text-sm">
            Threat Intelligence
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Security Operations Console
          </h2>

        </div>

        <div
          className="
            bg-black
            border
            border-green-500/30
            rounded-2xl
            overflow-hidden
            shadow-[0_0_30px_rgba(34,197,94,0.15)]
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              px-4
              py-3
              border-b
              border-green-500/20
            "
          >
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="text-gray-400 text-sm ml-4">
              SOC-CONSOLE
            </span>
          </div>

          <div className="p-6 font-mono text-green-400 min-h-[280px]">

            {displayedLines.map((line, index) => (
              <div
                key={index}
                className="mb-3"
              >
                {line}
              </div>
            ))}

            <span className="animate-pulse">
              █
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}