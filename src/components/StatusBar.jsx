export default function StatusBar() {
  return (
    <div
      className="
        fixed
        bottom-5
        right-5
        bg-slate-900
        border
        border-green-500
        rounded-xl
        px-4
        py-3
        z-50
      "
    >
      <div className="flex items-center gap-3">

        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>

        <span className="text-green-400 text-sm">
          Security Monitoring Active
        </span>

      </div>
    </div>
  );
}