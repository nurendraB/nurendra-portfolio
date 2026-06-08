import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkLabels = {
    home: "Home",
    about: "About",
    "security-impact": "Research Impact",
    skills: "Skills",
    projects: "Projects",
    certifications: "Certifications",
    labs: "Home Labs",
    contact: "Contact",
  };

  const links = [
    "home",
    "about",
    "security-impact",
    "skills",
    "projects",
    "certifications",
    "labs",
    "contact",
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        backdrop-blur-md
        bg-slate-950/80
        border-b
        border-slate-800
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <a
          href="#home"
          className="font-bold text-xl text-green-400 tracking-wider"
        >
          NURENDRA
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              className="
                text-gray-300
                hover:text-green-400
                transition
                text-sm
                font-medium
              "
            >
              {linkLabels[link]}
            </a>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl text-green-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {links.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setOpen(false)}
              className="
                block
                px-6
                py-4
                text-gray-300
                hover:bg-slate-800
                hover:text-green-400
                transition
              "
            >
              {linkLabels[link]}
            </a>
          ))}

        </div>
      )}
    </nav>
  );
}