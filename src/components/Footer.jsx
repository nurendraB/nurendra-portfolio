export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center text-gray-400">

      <p>
        © {new Date().getFullYear()} All Rights Reserved by Nurendra Bhandarigal
      </p>

      <p className="mt-2 text-sm">
        Cybersecurity Researcher • Bug Bounty Hunter • VAPT Enthusiast
      </p>

    </footer>
  );
}