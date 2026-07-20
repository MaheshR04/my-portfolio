import { motion } from "framer-motion";
import { FaCheckCircle, FaBriefcase } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Kacklewalls Nutrition Pvt Ltd Online",
      duration: "4 Months",
      points: [
        "Web Application Development: Built and maintained a scalable web application using React.js and JavaScript.",
        "Backend Database Management: Developed RESTful APIs and integrated Firebase for authentication, storage, and real-time database functionalities.",
        "Deployment: Deployed applications using Vercel, ensuring smooth workflows via GitHub.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-16 sm:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #030712 0%, #06091a 50%, #030712 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="absolute top-10 right-16 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 bg-emerald-500/10
                           px-4 py-1.5 rounded-full border border-emerald-500/20 inline-block mb-4">
            Professional Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold shimmer-text">
            Work Experience
          </h2>
          <p className="text-center text-gray-400 mt-3 text-base sm:text-lg max-w-3xl mx-auto">
            My professional industry experience and technical achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mt-10 sm:mt-16 relative">

          {/* Animated gradient vertical line */}
          <div
            className="absolute left-[7px] sm:left-[11px] top-2 bottom-0 w-0.5 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #3b82f6, #8b5cf6, #ec4899, transparent)",
            }}
          />

          <div className="space-y-8 sm:space-y-12 pl-9 sm:pl-14 ml-2 sm:ml-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative"
              >
                {/* Pulsing dot */}
                <div className="absolute -left-[31px] sm:-left-[46px] top-6 flex items-center justify-center">
                  <span
                    className="absolute w-9 h-9 rounded-full opacity-25 animate-ping pointer-events-none"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
                  />
                  <span
                    className="relative w-5 h-5 rounded-full border-2 border-[#030712] flex items-center justify-center z-10"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                      boxShadow: "0 0 16px rgba(59,130,246,0.65)",
                    }}
                  >
                    <FaBriefcase className="text-white" style={{ fontSize: "8px" }} />
                  </span>
                </div>

                {/* Experience Card */}
                <div
                  className="relative glass-card border border-slate-700/60 rounded-2xl
                              p-5 sm:p-8 md:p-10
                              hover:border-blue-500/35
                              hover:shadow-[0_0_44px_rgba(59,130,246,0.14)]
                              transition-all duration-300 group overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                    style={{
                      background: "linear-gradient(to bottom, #3b82f6, #8b5cf6)",
                    }}
                  />

                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px opacity-40
                                group-hover:opacity-80 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, transparent 100%)",
                    }}
                  />

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4 pl-2">
                    <div>
                      <h3
                        className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text"
                        style={{
                          backgroundImage: "linear-gradient(135deg, #ffffff, #93c5fd)",
                        }}
                      >
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base text-blue-400 mt-1 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-xs font-semibold bg-blue-500/10 border border-blue-500/25
                                     text-blue-300 px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-4 sm:mt-5 space-y-3 sm:space-y-4 pl-2">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 text-sm sm:text-base text-gray-300"
                      >
                        <FaCheckCircle className="text-blue-400 mt-0.5 flex-shrink-0 text-sm" />
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
