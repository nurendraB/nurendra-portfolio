export default function ThreatFeed() {
  const feed = [
    "[ACTIVE] Security Research Ongoing",
    "[ONLINE] Threat Monitoring Enabled",
    "[INFO] spiderNetscan Development Active",
    "[ALERT] Hall of Fame Recognition Achieved",
    "[READY] Open To Work",
    "[INFO] VAPT & Network Security Focus",
    "[SUCCESS] CEH, CAP, CNSP Certified",
  ];

  return (
    <section className="border-y border-slate-800 bg-slate-950 overflow-hidden">
      <div className="py-3 whitespace-nowrap animate-marquee">

        {feed.map((item, index) => (
          <span
            key={index}
            className="mx-10 text-green-400 font-mono"
          >
            {item}
          </span>
        ))}

        {feed.map((item, index) => (
          <span
            key={`duplicate-${index}`}
            className="mx-10 text-green-400 font-mono"
          >
            {item}
          </span>
        ))}

      </div>
    </section>
  );
}