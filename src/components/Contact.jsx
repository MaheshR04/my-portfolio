import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGlobe, FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "rathodmahesh5605@gmail.com",
    href: "mailto:rathodmahesh5605@gmail.com",
    external: false,
    color: "#ef4444",
    glowColor: "rgba(239,68,68,0.2)",
  },
  {
    icon: <FaPhone />,
    label: "Mobile",
    value: "+91 93806 54453",
    href: "tel:9380654453",
    external: false,
    color: "#10b981",
    glowColor: "rgba(16,185,129,0.2)",
  },
  {
    icon: <FaGlobe />,
    label: "Portfolio",
    value: "maheshrathod-phi.vercel.app",
    href: "https://maheshrathod-phi.vercel.app/",
    external: true,
    color: "#3b82f6",
    glowColor: "rgba(59,130,246,0.2)",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/MaheshR04",
    href: "https://github.com/MaheshR04",
    external: true,
    color: "#94a3b8",
    glowColor: "rgba(148,163,184,0.2)",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/mahesh-rathod565",
    href: "https://www.linkedin.com/in/mahesh-rathod565?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    external: true,
    color: "#0ea5e9",
    glowColor: "rgba(14,165,233,0.2)",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #030712 0%, #06091a 50%, #030712 100%)",
      }}
    >
      {/* Background orbs */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-pink-400 bg-pink-500/10
                           px-4 py-1.5 rounded-full border border-pink-500/20 inline-block mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold shimmer-text">
            Contact Me
          </h2>
          <p className="text-center text-gray-400 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Feel free to reach out for software engineering opportunities, collaborations, or connections.
          </p>
        </motion.div>

        {/* CTA sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center mt-5 text-xl sm:text-2xl font-bold text-transparent bg-clip-text
                     bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        >
          Let&apos;s Build Something Amazing Together ✨
        </motion.p>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-10 sm:mt-12 glass-card border border-slate-700/60 rounded-2xl
                     p-6 sm:p-10 md:p-12 max-w-3xl mx-auto
                     hover:border-blue-500/30
                     hover:shadow-[0_20px_70px_rgba(59,130,246,0.12)]
                     transition-all duration-500 group overflow-hidden"
        >
          {/* Animated rainbow top border */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl gradient-border-animate"
          />

          {/* Corner glow accents */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-4 sm:space-y-5 relative z-10">
            {contacts.map((contact, i) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-4 group/item"
              >
                {/* Icon bubble */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                             transition-all duration-300 group-hover/item:scale-110"
                  style={{
                    background: `${contact.color}18`,
                    border: `1px solid ${contact.color}35`,
                    color: contact.color,
                    boxShadow: `0 0 0px ${contact.glowColor}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 14px ${contact.glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0px ${contact.glowColor}`;
                  }}
                >
                  <span className="text-base">{contact.icon}</span>
                </div>

                {/* Label + Link */}
                <div className="flex items-center gap-2 flex-wrap min-w-0">
                  <span className="font-semibold text-gray-400 text-sm min-w-[72px]">
                    {contact.label}:
                  </span>
                  <a
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="text-gray-200 hover:text-white text-sm sm:text-base break-all
                               transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {contact.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 sm:mt-20 text-center"
        >
          <div
            className="h-px max-w-xs mx-auto mb-5"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(59,130,246,0.45), rgba(139,92,246,0.45), transparent)",
            }}
          />
          <p className="text-gray-500 text-sm">
            © 2025&nbsp;
            <span className="text-blue-400 font-medium">Mahesh Rathod</span>
            &nbsp;·&nbsp;Built with React &amp; TailwindCSS
          </p>
        </motion.div>

      </div>
    </section>
  );
}
