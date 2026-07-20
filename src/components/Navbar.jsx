import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = ["Home", "Skills", "Projects", "Experience", "Contact"];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Detect scroll for navbar frosted-glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex gap-1 sm:gap-2 font-bold text-white">
          {["M", "A", "H", "E", "S", "H"].map((l, i) => (
            <span
              key={i}
              className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full text-xs sm:text-sm
                         transition-all duration-200 hover:scale-110 hover:shadow-lg cursor-default select-none"
              style={{
                background: `linear-gradient(135deg, hsl(${i * 50}, 80%, 55%), hsl(${i * 50 + 30}, 90%, 70%))`,
                boxShadow: `0 2px 10px hsl(${i * 50}, 80%, 55%, 0.4)`,
              }}
            >
              {l}
            </span>
          ))}
        </div>

        {/* HAMBURGER BUTTON — visible on small screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden flex flex-col gap-[6px] z-50 p-1 ${isOpen ? "hamburger-open" : ""}`}
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
                  className="nav-link text-gray-300 text-sm font-medium hover:text-white transition-colors duration-300"
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
            className="relative ml-2 px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden
                       transition-all duration-300 hover:scale-105 group"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              boxShadow: "0 0 20px rgba(59,130,246,0.35)",
            }}
          >
            <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, #60a5fa, #a78bfa)" }}
            />
            <span className="relative z-10">See Resume</span>
          </a>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`
            fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden
            transition-all duration-500
            ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
          style={{ background: "rgba(3,7,18,0.97)", backdropFilter: "blur(24px)" }}
        >
          {/* Decorative glow orbs */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <ul className="flex flex-col items-center gap-7 relative z-10">
            {menu.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-200 text-2xl font-semibold hover:text-white transition-all duration-300
                             hover:tracking-wide"
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
            className="relative mt-2 px-8 py-3 rounded-full text-lg font-semibold text-white overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              boxShadow: "0 0 30px rgba(139,92,246,0.45)",
            }}
          >
            See Resume
          </a>
        </div>

      </div>
    </nav>
  );
}