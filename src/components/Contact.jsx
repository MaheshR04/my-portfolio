import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#030712] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-blue-400"
        >
          Contact Me
        </motion.h2>

        <p className="text-center text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Feel free to reach out for software engineering opportunities, collaborations, or connections.
        </p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-10 sm:mt-16
            bg-[#0b1220]
            border border-slate-700
            rounded-2xl
            p-6 sm:p-10 md:p-12
            max-w-3xl
            mx-auto
            hover:border-blue-500
            hover:shadow-[0_20px_70px_rgba(59,130,246,0.35)]
            transition
          "
        >
          <div className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg">

            {/* EMAIL */}
            <p className="break-all sm:break-normal flex items-center gap-3">
              <span className="text-xl">📧</span>
              <span className="font-semibold text-gray-400 min-w-[80px]">Email:</span>
              <a
                href="mailto:rathodmahesh5605@gmail.com"
                className="text-white hover:text-blue-400 transition underline underline-offset-4 decoration-blue-500/50"
              >
                rathodmahesh5605@gmail.com
              </a>
            </p>

            {/* PHONE */}
            <p className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <span className="font-semibold text-gray-400 min-w-[80px]">Mobile:</span>
              <a
                href="tel:9380654453"
                className="text-white hover:text-blue-400 transition"
              >
                +91 93806 54453
              </a>
            </p>

            {/* WEBSITE */}
            <p className="break-all sm:break-normal flex items-center gap-3">
              <span className="text-xl">🌐</span>
              <span className="font-semibold text-gray-400 min-w-[80px]">Portfolio:</span>
              <a
                href="https://maheshrathod-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition underline underline-offset-4 decoration-blue-500/50"
              >
                maheshrathod-phi.vercel.app
              </a>
            </p>

            {/* GITHUB */}
            <p className="break-all sm:break-normal flex items-center gap-3">
              <span className="text-xl">🐙</span>
              <span className="font-semibold text-gray-400 min-w-[80px]">GitHub:</span>
              <a
                href="https://github.com/MaheshR04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition underline underline-offset-4 decoration-blue-500/50"
              >
                github.com/MaheshR04
              </a>
            </p>

            {/* LINKEDIN */}
            <p className="break-all sm:break-normal flex items-center gap-3">
              <span className="text-xl">💼</span>
              <span className="font-semibold text-gray-400 min-w-[80px]">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/mahesh-rathod565?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition underline underline-offset-4 decoration-blue-500/50"
              >
                linkedin.com/in/mahesh-rathod565
              </a>
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
