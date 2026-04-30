import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Kacklewalls Nutrition Pvt Ltd",
      duration: "4 Months – Present",
      points: [
        "Web Application Development: Built and maintained a scalable web application using React.js and JavaScript",
        "Backend & Database Management: Developed RESTful APIs and integrated Firebase for authentication, storage, and real-time database functionalities",
        "Deployment: Deployed applications using Vercel, ensuring smooth workflows via GitHub",
      ],
    },
  ];

  return (
    <section id="experience" className="bg-[#030712] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-400"
        >
          Experience
        </motion.h2>

        <p className="text-center text-gray-400 mt-3 text-base sm:text-lg max-w-3xl mx-auto">
          My professional journey and hands-on project experience.
        </p>

        {/* Timeline */}
        <div className="mt-10 sm:mt-16 space-y-8 sm:space-y-12 relative border-l-2 border-slate-700 pl-6 sm:pl-12 ml-2 sm:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Dot */}
              <span className="absolute -left-[9px] sm:-left-[13px] top-3 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.9)]"></span>

              {/* Card */}
              <div className="
                bg-[#0b1220]
                border border-slate-700
                rounded-2xl
                p-5 sm:p-8 md:p-10
                hover:border-blue-500
                hover:shadow-xl
                transition
              ">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {exp.role}
                </h3>

                <p className="text-sm sm:text-base text-blue-400 mt-2">
                  {exp.company} • {exp.duration}
                </p>

                <ul className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-300 list-disc list-outside pl-4 space-y-2 sm:space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
