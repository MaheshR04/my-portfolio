export default function Navbar() {
  
  const menu = ["Home", "Skills", "Projects", "Experience", "Contact"];

  const colors = [
    "bg-blue-500",     // Home
    "bg-pink-500",     // Skills
    "bg-purple-500",   // Projects
    "bg-green-500",    // Experience
    "bg-yellow-500",   // Contact
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex gap-2 font-bold text-white">
          {["M", "A", "H", "E", "S", "H"].map((l, i) => (
            <span
              key={i}
              className="w-8 h-8 flex items-center justify-center rounded-full text-sm"
              style={{ backgroundColor: `hsl(${i * 50}, 80%, 60%)` }}
            >
              {l}
            </span>
          ))}
        </div>

        {/* MENU */}
        <div className="flex items-center gap-4">
          <ul className="flex gap-4">
            {menu.map((item, i) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`
                    ${colors[i]}
                    px-4 py-2 rounded-full
                    text-white text-sm font-semibold
                    flex items-center justify-center
                    hover:scale-110 hover:shadow-lg
                    transition duration-300
                  `}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* GET RESUME BUTTON */}
          <a
            href="/Resume.pdf"
            download
            className="
              ml-2
              px-5 py-2
              rounded-full
              bg-blue-500
              hover:bg-blue-600
              text-white
              text-sm
              font-semibold
              transition
            "
          >
            Get Resume
          </a>
        </div>

      </div>
    </nav>
  );
}
