import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaBriefcase, FaBrain, FaShoppingBag, FaGraduationCap } from "react-icons/fa";

export default function Projects() {
  const prefersReducedMotion = useReducedMotion();

  const projects = [
    {
      title: "Poultry Management Dashboard",
      badge: "Full Stack Internship",
      badgeIcon: <FaBriefcase className="text-emerald-400" />,
      subtitle: "Digitized Production & Rate Tracking System",
      description:
        "A web-based application developed to streamline daily poultry operations by digitizing production data such as daily damage records and NECC rate updates. Built with React and Tailwind CSS for a responsive, user-friendly interface. Integrated Firebase for authentication and real-time data storage, enabling secure access, accurate data management, and operational efficiency by replacing manual record-keeping.",
      tech: ["React.js", "Tailwind CSS", "Firebase Auth", "Realtime Database", "JavaScript"],
      github: "https://github.com/MaheshR04",
      live: "",
      color: "from-emerald-500/20 to-teal-500/10",
      accent: "text-emerald-400",
      borderHover: "hover:border-emerald-500/60 hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]",
    },
    {
      title: "AI Smart Commerce – Full-Stack",
      badge: "Featured AI Project",
      badgeIcon: <FaShoppingBag className="text-purple-400" />,
      subtitle: "E-Commerce Platform with Gemini & OpenAI",
      description:
        "Developed a premium e-commerce platform using the MERN stack integrated with Google Gemini and OpenAI APIs. Features an AI Goal-Based Shopping Planner to generate custom product bundles, an AI comparison engine, real-time review summarizer, Razorpay payment integration, dynamic coupon system, print invoices, and recursive input sanitization middleware.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Gemini API", "OpenAI API", "Razorpay"],
      github: "https://github.com/MaheshR04",
      live: "",
      color: "from-purple-500/20 to-pink-500/10",
      accent: "text-purple-400",
      borderHover: "hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]",
    },
    {
      title: "AI-Microservice Platform",
      badge: "Enterprise AI Architecture",
      badgeIcon: <FaBrain className="text-cyan-400" />,
      subtitle: "Scalable AI Capabilities via REST APIs",
      description:
        "Developed an enterprise-grade AI microservices platform delivering secure, reusable AI capabilities. Decoupled architecture featuring a React frontend, Node.js API Gateway, and Python FastAPI AI Engine with Groq LLM, Retrieval-Augmented Generation (RAG), conversation memory, tool calling, RBAC authentication, ChromaDB, and Docker deployment.",
      tech: ["React.js", "Node.js Gateway", "FastAPI", "Groq LLM", "RAG", "ChromaDB", "Docker"],
      github: "https://github.com/MaheshR04",
      live: "",
      color: "from-cyan-500/20 to-blue-500/10",
      accent: "text-cyan-400",
      borderHover: "hover:border-cyan-500/60 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]",
    },
    {
      title: "Quiz Master Platform",
      badge: "Full-Stack Web App",
      badgeIcon: <FaGraduationCap className="text-amber-400" />,
      subtitle: "MERN Quiz System with Real-Time Score Evaluation",
      description:
        "Developed a full-stack quiz management system using the MERN stack allowing users to securely register, log in, and attempt quizzes with instant score evaluation. Includes an admin dashboard for quiz management, RESTful APIs, JWT authentication, OTP password recovery, and user quiz history tracking.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "OTP Recovery", "Tailwind CSS"],
      github: "https://github.com/MaheshR04",
      live: "",
      color: "from-amber-500/20 to-orange-500/10",
      accent: "text-amber-400",
      borderHover: "hover:border-amber-500/60 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]",
    },
  ];

  // Detect touch device for disabling hover scale
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  return (
    <section id="projects" className="min-h-screen bg-[#030712] py-20 sm:py-28 relative overflow-hidden">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 inline-block mb-3">
            Portfolio Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Production-grade web applications, internship projects, and enterprise AI microservices built with clean architecture and modern technology.
          </p>
        </motion.div>

        {/* 2x2 Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-14 sm:mt-20">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={
                isTouchDevice || prefersReducedMotion
                  ? {}
                  : { y: -6 }
              }
              className={`
                relative
                flex flex-col justify-between
                bg-gradient-to-b ${project.color} to-[#0b1220]
                backdrop-blur-xl
                border border-slate-800
                rounded-2xl p-6 sm:p-8
                transition-all duration-300 ease-out
                ${project.borderHover}
              `}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="flex items-center gap-2 text-xs font-semibold bg-slate-900/80 border border-slate-700/80 px-3 py-1 rounded-full text-gray-300">
                    {project.badgeIcon}
                    {project.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className={`text-xs font-semibold ${project.accent} mt-1`}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm mt-4 leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2.5">
                    Technologies & Tools
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium bg-[#050b18] border border-slate-700/60 text-slate-300 px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 mt-6 pt-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-slate-900 border border-slate-700 text-gray-200 hover:text-white hover:border-slate-400 transition"
                    >
                      <FaGithub className="text-sm" />
                      GitHub Repo
                    </a>
                  )}

                  {project.live && project.live !== "#" && project.live !== "" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-blue-600 hover:bg-blue-500 transition text-white shadow-lg shadow-blue-500/20"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
