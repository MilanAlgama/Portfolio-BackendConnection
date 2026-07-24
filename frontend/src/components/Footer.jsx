import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6">

        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div className="text-center lg:text-left">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <h2 className="text-3xl font-bold text-blue-500">
                Milan Harsha<span className="text-slate-950 dark:text-white">.</span>
              </h2>
            </Link>

            <p className="mt-2 text-slate-600 dark:text-gray-400">
              Cloud • DevOps • Full Stack
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-slate-600 dark:text-gray-400">

            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>

            <a href="#education" className="hover:text-blue-400 transition">
              Education
            </a>

            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>

            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a
              href="https://github.com/MilanAlgama"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 shadow-sm shadow-slate-200/70 transition-all hover:scale-110 hover:border-cyan-400 hover:shadow-cyan-200/80 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <FaGithub className="text-xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/milan-harsha-748ab6278/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 shadow-sm shadow-slate-200/70 transition-all hover:scale-110 hover:border-blue-500 hover:shadow-blue-200/80 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <FaLinkedin className="text-xl text-[#0A66C2]" />
            </a>

            <a
              href="https://x.com/Milan_HarshaX"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 shadow-sm shadow-slate-200/70 transition-all hover:scale-110 hover:border-slate-900 hover:shadow-slate-300/80 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-white dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <FaXTwitter className="text-xl" />
            </a>

            <a
              href="mailto:milanharsha28@gmail.com"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 shadow-sm shadow-slate-200/70 transition-all hover:scale-110 hover:border-red-500 hover:shadow-red-200/80 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
            >
              <FaEnvelope className="text-xl text-red-400" />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="my-8 border-t border-slate-200 dark:border-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-slate-500 dark:text-gray-500 md:flex-row">

          <p>
            © {year} Milan Harsha. All Rights Reserved.
          </p>

          <p>
            Built with using React, Tailwind CSS & Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
