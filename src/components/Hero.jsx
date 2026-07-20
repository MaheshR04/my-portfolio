import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

// Generate floating particles once (stable reference)
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 2,
  left: Math.random() * 100,
  animDelay: Math.random() * 10,
  animDuration: Math.random() * 10 + 10,
  opacity: Math.random() * 0.35 + 0.1,
  color: ["#3b82f6", "#8b5cf6", "#06b6d4", "#f472b6", "#34d399"][i % 5],
}));

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden pt-20 sm:pt-28"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #0d1b3e 0%, #030712 45%), radial-gradient(ellipse at 80% 20%, #1a0b2e 0%, transparent 50%)",
      }}
    >
      {/* ── Floating ambient orbs ── */}
      <div
        className="absolute top-16 left-8 w-80 h-80 rounded-full blur-3xl pointer-events-none glow-ring"
        style={{ background: "rgba(59,130,246,0.12)" }}
      />
      <div
        className="absolute bottom-16 right-8 w-96 h-96 rounded-full blur-3xl pointer-events-none float-anim"
        style={{ background: "rgba(139,92,246,0.10)" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "rgba(6,182,212,0.04)" }}
      />

      {/* ── Dot grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── Floating particles ── */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width:  p.size,
            height: p.size,
            left:   `${p.left}%`,
            bottom: "-8px",
            background: p.color,
            opacity: p.opacity,
            animation: `particle-float ${p.animDuration}s ${p.animDelay}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* ── Main grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10 pb-16">

        {/* ───── LEFT CONTENT ───── */}
        <motion.div
          className="order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest
                             text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-full
                             border border-emerald-500/25 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight shimmer-text"
          >
            Welcome to my portfolio!
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg sm:text-xl text-white font-semibold"
          >
            Full-Stack Developer &amp; AI Solutions Enthusiast
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-base sm:text-lg font-medium text-gray-400 max-w-lg leading-relaxed"
          >
            Passionate about building scalable, high-performance web applications and enterprise AI
            microservices using MERN Stack, Python FastAPI, Docker, and cutting-edge LLMs.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="mt-6 sm:mt-8 flex gap-3 sm:gap-4 flex-wrap"
          >
            {/* Get Resume */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full
                         text-white font-semibold text-sm sm:text-base overflow-hidden group
                         transition-transform duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #ec4899, #f97316)",
                boxShadow: "0 0 28px rgba(236,72,153,0.4)",
              }}
            >
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, #f472b6, #fb923c)" }}
              />
              <span className="relative z-10">Get Resume</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/MaheshR04"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full glass-card border border-slate-700
                         hover:border-white/40 transition-all duration-300 text-white font-semibold
                         text-sm sm:text-base hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:scale-105"
            >
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mahesh-rathod565?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base
                         text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
                boxShadow: "0 0 20px rgba(29,78,216,0.35)",
              }}
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* ───── RIGHT CONTENT ───── */}
        <motion.div
          className="flex flex-col items-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Profile Image with animated rings */}
          <div className="relative">
            {/* Outer pulsing glow */}
            <div
              className="absolute -inset-6 rounded-full blur-2xl glow-ring pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.2), rgba(236,72,153,0.15))" }}
            />

            {/* Spinning gradient ring */}
            <div
              className="absolute -inset-1.5 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4, #3b82f6)",
                backgroundSize: "300% 300%",
                animation: "spin-slow 6s linear infinite, gradient-shift 4s ease infinite",
              }}
            />

            {/* Photo */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-[#050b18]">
              <img
                src={profile}
                alt="Mahesh Rathod"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* ABOUT ME TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-center shimmer-text"
          >
            Mahesh Rathod
          </motion.h2>

          {/* ABOUT ME CONTENT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-3 sm:mt-4 text-center text-base sm:text-lg text-gray-400 max-w-lg leading-relaxed px-2"
          >
            Currently pursuing my{" "}
            <span className="text-white font-semibold">
              Bachelor of Engineering in Computer Science and Engineering (2023–2027)
            </span>{" "}
            at{" "}
            <span className="text-blue-300">
              New Horizon College of Engineering, Bengaluru
            </span>
            . I have hands-on experience building production-grade full-stack applications,
            AI microservices with RAG, and cloud-deployed web systems.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}
