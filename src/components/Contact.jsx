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
          Contact
        </motion.h2>

        <p className="text-center text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Feel free to reach out for opportunities, collaborations, or just to connect.
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
            <p className="break-all sm:break-normal">
              📧{" "}
              <a
                href="mailto:rathodmahesh5605@gmail.com"
                className="text-white hover:text-blue-400 transition"
              >
                rathodmahesh5605@gmail.com
              </a>
            </p>

            {/* PHONE */}
            <p>
              📞{" "}
              <a
                href="tel:9380654453"
                className="text-white hover:text-blue-400 transition"
              >
                +91 93806 54453
              </a>
            </p>

            {/* GITHUB */}
            <p className="break-all sm:break-normal">
              🐙{" "}
              <a
                href="https://github.com/MaheshR04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                github.com/MaheshR04
              </a>
            </p>

            {/* LINKEDIN */}
            <p className="break-all sm:break-normal">
              💼{" "}
              <a
                href="https://www.linkedin.com/in/MaheshRathod04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                linkedin.com/in/MaheshRathod04
              </a>
            </p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
