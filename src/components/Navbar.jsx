import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = ["Home", "Skills", "Projects", "Experience", "Contact"];

  const colors = [
    "bg-blue-500",     // Home
    "bg-pink-500",     // Skills
    "bg-purple-500",   // Projects
    "bg-green-500",    // Experience
    "bg-yellow-500",   // Contact
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex gap-1 sm:gap-2 font-bold text-white">
          {["M", "A", "H", "E", "S", "H"].map((l, i) => (
            <span
              key={i}
              className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm"
              style={{ backgroundColor: `hsl(${i * 50}, 80%, 60%)` }}
            >
              {l}
            </span>
          ))}
        </div>

        {/* HAMBURGER BUTTON — visible on small screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex flex-col gap-[6px] z-50 ${isOpen ? "hamburger-open" : ""}`}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* DESKTOP MENU — hidden on small screens */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6">
            {menu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                    text-gray-300 text-sm font-medium
                    hover:text-blue-400
                    transition-colors duration-300
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* SEE RESUME BUTTON */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              ml-2
              px-5 py-2
              rounded-full
              bg-blue-600
              hover:bg-blue-500
              text-white
              text-sm
              font-semibold
              transition-all
              hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            "
          >
            See Resume
          </a>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`
            fixed inset-0 bg-[#030712]/95 backdrop-blur-md z-40
            flex flex-col items-center justify-center gap-8
            transition-all duration-300 md:hidden
            ${isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
            }
          `}
        >
          <ul className="flex flex-col items-center gap-6">
            {menu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-gray-300 text-2xl font-medium
                    hover:text-blue-400
                    transition-colors duration-300
                  "
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="
              mt-4
              px-8 py-3
              rounded-full
              bg-blue-600
              hover:bg-blue-500
              text-white
              text-lg
              font-semibold
              transition-all
              hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]
            "
          >
            See Resume
          </a>
        </div>

      </div>
    </nav>
  );
}