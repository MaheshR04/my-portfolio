
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
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-600" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
      ],
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      ],
    },
    {
      category: "Databases & Tools",
      skills: [
        { name: "SQL", icon: <FaDatabase className="text-blue-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "FastAPI / RAG", icon: <SiFastapi className="text-teal-400" /> },
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> },
      ],
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Problem Solving", icon: <FaCheckCircle className="text-emerald-400" /> },
        { name: "Leadership", icon: <FaCheckCircle className="text-purple-400" /> },
        { name: "Time Management", icon: <FaCheckCircle className="text-blue-400" /> },
        { name: "Teamwork", icon: <FaCheckCircle className="text-pink-400" /> },
        { name: "Quick Learner", icon: <FaCheckCircle className="text-yellow-400" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#020617] py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-400"
        >
          Skills & Expertise
        </motion.h2>

        <p className="text-center text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Core technical competencies and soft skills highlighted in my professional resume.
        </p>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0b1220] border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700/60 pb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {cat.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 bg-[#050b18] border border-slate-800 rounded-xl p-3 hover:border-slate-600 transition"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-200">
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
