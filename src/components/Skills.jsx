import {
  FaJava,
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaDocker,
  FaNodeJs,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFastapi,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      gradient: "from-orange-500/15 to-yellow-500/5",
      borderHover:
        "hover:border-orange-500/50 hover:shadow-[0_0_32px_rgba(249,115,22,0.18)]",
      accentColor: "#f97316",
      skills: [
        { name: "Java",       icon: <FaJava  className="text-orange-500" /> },
        { name: "Python",     icon: <FaPython className="text-yellow-400" /> },
        { name: "JavaScript", icon: <FaJs    className="text-yellow-300" /> },
      ],
    },
    {
      category: "Web Technologies",
      gradient: "from-cyan-500/15 to-blue-500/5",
      borderHover:
        "hover:border-cyan-500/50 hover:shadow-[0_0_32px_rgba(6,182,212,0.18)]",
      accentColor: "#06b6d4",
      skills: [
        { name: "HTML",         icon: <FaHtml5       className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss  className="text-sky-400"   /> },
        { name: "React.js",     icon: <FaReact       className="text-cyan-400"  /> },
        { name: "Node.js",      icon: <FaNodeJs      className="text-green-500" /> },
        { name: "Express.js",   icon: <SiExpress     className="text-gray-300"  /> },
      ],
    },
    {
      category: "Databases & Tools",
      gradient: "from-blue-500/15 to-purple-500/5",
      borderHover:
        "hover:border-blue-500/50 hover:shadow-[0_0_32px_rgba(59,130,246,0.18)]",
      accentColor: "#3b82f6",
      skills: [
        { name: "SQL",          icon: <FaDatabase className="text-blue-400"  /> },
        { name: "MongoDB",      icon: <SiMongodb  className="text-green-400" /> },
        { name: "FastAPI / RAG",icon: <SiFastapi  className="text-teal-400"  /> },
        { name: "Docker",       icon: <FaDocker   className="text-blue-500"  /> },
        { name: "Git",          icon: <FaGitAlt   className="text-red-500"   /> },
        { name: "GitHub",       icon: <FaGithub   className="text-white"     /> },
      ],
    },
    {
      category: "Soft Skills",
      gradient: "from-purple-500/15 to-pink-500/5",
      borderHover:
        "hover:border-purple-500/50 hover:shadow-[0_0_32px_rgba(168,85,247,0.18)]",
      accentColor: "#a855f7",
      skills: [
        { name: "Problem Solving",  icon: <FaCheckCircle className="text-emerald-400" /> },
        { name: "Leadership",       icon: <FaCheckCircle className="text-purple-400"  /> },
        { name: "Time Management",  icon: <FaCheckCircle className="text-blue-400"    /> },
        { name: "Teamwork",         icon: <FaCheckCircle className="text-pink-400"    /> },
        { name: "Quick Learner",    icon: <FaCheckCircle className="text-yellow-400"  /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen relative py-16 sm:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #020617 0%, #06091a 50%, #020617 100%)",
      }}
    >
      {/* ── Background decorations ── */}
      <div className="absolute top-20 right-8 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-8 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10
                           px-4 py-1.5 rounded-full border border-purple-500/20 inline-block mb-4">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold shimmer-text">
            Skills &amp; Expertise
          </h2>
          <p className="text-center text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Core technical competencies and soft skills highlighted in my professional resume.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`
                relative glass-card bg-gradient-to-b ${cat.gradient}
                border border-slate-700/60 rounded-2xl p-6
                transition-all duration-300 ${cat.borderHover}
                group
              `}
            >
              {/* Animated accent top border */}
              <div
                className="absolute top-0 left-8 right-8 h-px rounded-full opacity-50
                            group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${cat.accentColor}, transparent)`,
                }}
              />

              {/* Card header */}
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-3 flex items-center gap-2.5">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{
                    backgroundColor: cat.accentColor,
                    boxShadow: `0 0 10px ${cat.accentColor}`,
                  }}
                />
                {cat.category}
              </h3>

              {/* Skills grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-[#050b18]/80 border border-slate-800
                               rounded-xl p-3 hover:border-slate-500 hover:scale-[1.04]
                               hover:shadow-lg transition-all duration-200 group/skill cursor-default"
                  >
                    <div className="text-2xl group-hover/skill:scale-110 transition-transform duration-200 flex-shrink-0">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-200 leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
