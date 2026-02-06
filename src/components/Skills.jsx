
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", level: 85, icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", level: 80, icon: <FaJs className="text-yellow-400" /> },
    { name: "React", level: 85, icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", level: 90, icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Firebase", level: 75, icon: <SiFirebase className="text-amber-400" /> },
    { name: "Git", level: 70, icon: <FaGitAlt className="text-red-500" /> },
    { name: "Vercel", level: 70, icon: <SiVercel className="text-white" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#020617] py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-400">
          Skills
        </h2>
        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Technologies I use to build fast, scalable, and modern web applications.
        </p>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Skill Card */}
                <div className="w-full md:w-5/12 bg-[#0b1220] border border-slate-700 rounded-2xl p-6
                  hover:scale-105 transition duration-300
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{skill.icon}</div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-sm text-gray-400 mt-1">
                      {skill.level}%
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center shadow-lg">
                  <div className="w-4 h-4 bg-[#020617] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
