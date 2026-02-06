import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-black via-[#050b18] to-[#050b18] pt-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Heyyyy..... 
            </span>
            <br />
            <span className="text-blue-400">Wel Come</span>
          </h1>

          <p className="mt-4 text-xl text-white">
            I'm <span className="font-semibold">Mahesh Rathod</span>
          </p>

          <p className="mt-4 text-lg font-medium text-gray-300 max-w-lg">
            Frontend / Full Stack Developer with a passion for building modern,
            scalable, and user-friendly web applications using React, Tailwind
            CSS, and Firebase.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="/Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition text-white font-semibold shadow-lg"
            >
              Get Resume
            </a>

            <a
              href="https://github.com/MaheshR04"
              target="_blank"
              className="px-6 py-3 rounded-full bg-[#0b1220] border border-slate-700 hover:border-white transition text-white font-semibold"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center">

          {/* GLOW IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-purple-600 opacity-40"></div>

            <div className="relative w-80 h-80 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <img
                src={profile}
                alt="Mahesh Rathod"
                className="w-full h-full rounded-full object-cover bg-[#050b18]"
              />
            </div>
          </div>

          {/* ABOUT ME TITLE (SAME STYLE AS HEYYY) */}
<h2 className="mt-8 text-4xl md:text-5xl font-extrabold text-blue-400 text-center">
  About Mee
</h2>

{/* ABOUT ME CONTENT */}
<p className="mt-4 text-center text-lg text-gray-300 max-w-lg leading-relaxed">
  I am a Computer Science Engineering student at New Horizon College of
  Engineering, Bengaluru (2023–2027). I specialize in building responsive
  and user-friendly web applications using React.js and Tailwind CSS.
  I have hands-on experience with Firebase, REST APIs, and deployment
  using Vercel.
</p>

        </div>
      </div>
    </section>
  );
}
