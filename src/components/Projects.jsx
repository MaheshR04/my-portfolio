import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Poultry Operations Management Dashboard ",
      description:
        "web-based application developed to streamline daily poultry operations by digitizing production data such as daily damage records and NECC rate updates. Built with React and Tailwind CSS, it offers a responsive, reusable, and user-friendly interface. ",
      tech: "React, Tailwind CSS, Firebase",
      github: "#",
      live: "#",
    },
    {
      title: "Secure login analyzer ",
      description:
        " Provides safe user authentication using React, Java Spring Boot, and MongoDB.The system encrypts Passwords, uses JWT tokens, and tracks login patterns to identify suspicious activities. It ensures protected access through role-based permissions and secure API communication.",
      tech: "React, JavaScript, Tailwind CSS ,Python, Mongo DB",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio ",
      description:
        "A modern responsive portfolio website to showcase skills and projects.",
      tech: "React, Tailwind CSS, Vercel",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-[#030712] py-28">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-blue-400"
        >
          Projects
        </motion.h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Some of the projects I’ve worked on using modern technologies.
        </p>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 overflow-visible">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}

              /* 🔥 REAL forward hover */
              whileHover={{
                scale: 1.25,
                y: -12,
              }}

              className="
                relative
                z-10
                transform-gpu
                bg-[#0b1220]
                border border-slate-700
                rounded-2xl p-6
                transition-all duration-300 ease-out
                hover:border-blue-500
                hover:shadow-[0_25px_80px_rgba(59,130,246,0.45)]
              "
            >
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mt-3">
                {project.description}
              </p>

              <p className="text-sm text-blue-400 mt-4">
                {project.tech}
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  className="px-4 py-2 text-sm rounded-full border border-slate-600 text-white hover:border-white transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="px-4 py-2 text-sm rounded-full bg-blue-500 hover:bg-blue-600 transition text-white"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
