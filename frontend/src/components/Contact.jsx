import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";

function Contact() {
  const isMobile = useIsMobile();
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "milanharsha28@gmail.com",
      link: "mailto:milanharsha28@gmail.com",
      color: "text-red-400",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+94 72 4103409",
      link: "tel:+94724103409",
      color: "text-green-400",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Kelaniya, Sri Lanka",
      link: "#",
      color: "text-blue-400",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/MilanAlgama",
      link: "https://github.com/MilanAlgama",
      color: "text-slate-900 dark:text-white",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "Milan Harsha",
      link: "https://www.linkedin.com/in/milan-harsha-748ab6278/",
      color: "text-[#0A66C2]",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen px-4 py-20 bg-transparent sm:px-6 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 50 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.2 : 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[4px] text-blue-400 sm:text-base sm:tracking-[6px]">
            Contact
          </p>

          <h2 className="text-3xl font-bold mt-4 sm:text-4xl lg:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-600 dark:text-gray-400">
            I'm always open to discussing Cloud Computing,
            DevOps, Full Stack Development and exciting
            opportunities. Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left */}

          <div className="space-y-6">

            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                whileHover={isMobile ? undefined : { scale: 1.03 }}
                className="flex min-w-0 items-center gap-4 rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-xl transition hover:border-cyan-400 hover:shadow-cyan-200/70 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] sm:gap-5 sm:p-6"
              >
                <div className={`text-3xl ${item.color}`}>
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="break-words text-slate-600 dark:text-gray-400">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

          </div>

          {/* Right */}

          <motion.form
            action="mailto:milanharsha28@gmail.com"
            method="post"
            encType="text/plain"
            initial={isMobile ? false : { opacity: 0, x: 40 }}
            whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
            transition={{ duration: isMobile ? 0.2 : 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white/85 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-none sm:p-8"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-slate-200 bg-white/80 p-4 text-slate-950 outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-black/30 dark:text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-slate-200 bg-white/80 p-4 text-slate-950 outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-black/30 dark:text-white"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full resize-none rounded-xl border border-slate-200 bg-white/80 p-4 text-slate-950 outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-black/30 dark:text-white"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-semibold text-white shadow-lg shadow-blue-300/50 transition-all duration-300 hover:scale-[1.02] dark:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
