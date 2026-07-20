import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-black via-[#050b18] to-[#050b18] pt-20 sm:pt-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="order-2 md:order-1">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Welcome to my portfolio!
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-white font-semibold">
            Full-Stack Developer & AI Solutions Enthusiast
          </p>

          <p className="mt-4 text-base sm:text-lg font-medium text-gray-300 max-w-lg leading-relaxed">
            Passionate about building scalable, high-performance web applications and enterprise AI microservices using MERN Stack, Python FastAPI, Docker, and cutting-edge LLMs.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition text-white font-semibold shadow-lg text-sm sm:text-base"
            >
              Get Resume
            </a>

            <a
              href="https://github.com/MaheshR04"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#0b1220] border border-slate-700 hover:border-white transition text-white font-semibold text-sm sm:text-base"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/mahesh-rathod565?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold text-sm sm:text-base"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex flex-col items-center order-1 md:order-2">

          {/* GLOW IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-purple-600 opacity-40"></div>

            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              <img
                src={profile}
                alt="Mahesh Rathod"
                className="w-full h-full rounded-full object-cover bg-[#050b18]"
              />
            </div>
          </div>

          {/* ABOUT ME TITLE */}
          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-400 text-center">
            Mahesh Rathod
          </h2>

          {/* ABOUT ME CONTENT */}
          <p className="mt-3 sm:mt-4 text-center text-base sm:text-lg text-gray-300 max-w-lg leading-relaxed px-2">
            Currently pursuing my <span className="text-white font-semibold">Bachelor of Engineering in Computer Science and Engineering (2023–2027)</span> at <span className="text-blue-300">New Horizon College of Engineering, Bengaluru</span>. I have hands-on experience building production-grade full-stack applications, AI microservices with RAG, and cloud-deployed web systems.
          </p>

        </div>
      </div>
    </section>
  );
}
