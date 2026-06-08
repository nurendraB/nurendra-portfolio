export default function Radar() {
  return (
    <section className="py-20 flex justify-center">
      <div className="relative w-80 h-80">

        <div className="absolute inset-0 rounded-full border border-green-500/30"></div>
        <div className="absolute inset-8 rounded-full border border-green-500/30"></div>
        <div className="absolute inset-16 rounded-full border border-green-500/30"></div>
        <div className="absolute inset-24 rounded-full border border-green-500/30"></div>

        <div
          className="
            absolute
            top-1/2
            left-1/2
            w-[2px]
            h-40
            bg-green-400
            origin-bottom
            animate-spin
          "
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-green-400 font-mono">
            THREAT RADAR
          </span>
        </div>

      </div>
    </section>
  );
}