import HeroOrbit from "./HeroOrbit";
import FloatingParticles from "./FloatingParticles";
import ScrollIndicator from "./ScrollIndicator";
import { TypeAnimation } from "react-type-animation";
/*import { Typewriter } from "react-simple-typewriter";*/
import { motion } from "framer-motion";
import useIsMobile from "../hooks/useIsMobile";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa6";
import profile from "../assets/portfolio-img.webp";

function Hero() {
  const isMobile = useIsMobile();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 sm:px-6 lg:pt-20 lg:pb-0"
    >
      <div className="max-w-7xl w-full grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left */}

        <motion.div
          initial={isMobile ? { opacity: 0 } : { opacity: 0, x: -80 }}
          animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: isMobile ? 0.35 : 0.8 }}
        >
          <p className="text-sm text-blue-400 uppercase tracking-[4px] sm:text-base">//Welcome</p>

          <h1 className="text-4xl font-bold mt-4 leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hi,
            <br />
            I'm
            <span className="text-blue-500"> Milan Harsha</span>
          </h1>

          <h2 className="mt-6 min-h-[2.25rem] text-xl text-slate-700 dark:text-gray-300 sm:mt-8 sm:min-h-[2.5rem] sm:text-2xl">
            {isMobile ? (
              <span className="text-xl font-semibold text-cyan-400">
                Aspiring Cloud Engineer
              </span>
            ) : (
              <TypeAnimation
                sequence={[
                  "Aspiring Cloud Engineer",
                  2000,
                  "DevOps Enthusiast",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Lifelong Learner",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl font-semibold text-cyan-400 sm:text-2xl"
              />
            )}
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-slate-600 dark:text-gray-400 sm:mt-8">
            Passionate ICT undergraduate interested in Cloud Computing, DevOps,
            Full Stack Development, Docker, AWS and modern software engineering.
          </p>

          <div className="mt-8 space-y-6 sm:mt-10">
            <div className="flex flex-wrap gap-4 sm:gap-5">
              <a
                href="https://github.com/MilanAlgama"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 shadow-md shadow-slate-200/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-cyan-200/80 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              >
                <FaGithub className="text-2xl text-slate-900 dark:text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/milan-harsha-748ab6278/"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 shadow-md shadow-slate-200/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-blue-200/80 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                <FaLinkedin className="text-2xl text-[#0A66C2]" />
              </a>

              <a
                href="https://x.com/Milan_HarshaX"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 shadow-md shadow-slate-200/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:shadow-slate-300/80 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:border-white dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                <FaXTwitter className="text-2xl text-slate-900 dark:text-white" />
              </a>

              <a
                href="mailto:milanharsha28@gmail.com"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 shadow-md shadow-slate-200/60 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-red-200/80 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]"
              >
                <FaEnvelope className="text-2xl text-red-400" />
              </a>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-5">
              <a
                href="/resume.pdf"
                download
                className="group flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3.5 text-sm font-semibold shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all duration-500 hover:scale-105 hover:from-cyan-500 hover:to-blue-600 sm:px-7 sm:py-4 sm:text-base"
              >
                <FaDownload />
                Download Resume
              </a>

              <a
                href="mailto:milanharsha28@gmail.com?subject=Portfolio%20Contact&body=Hi%20Milan%2C%0D%0A%0D%0A"
                className="group flex items-center justify-center gap-3 rounded-xl border border-cyan-500 px-5 py-3.5 text-sm text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-black dark:text-white sm:px-7 sm:py-4 sm:text-base"
              >
                <FaEnvelope />
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right */}

        <motion.div
          initial={isMobile ? { opacity: 0 } : { opacity: 0, x: 80 }}
          animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
          transition={{ duration: isMobile ? 0.35 : 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative mx-auto flex aspect-square w-[clamp(18rem,88vw,32.5rem)] items-center justify-center overflow-visible lg:mx-0">
            {" "}
            <HeroOrbit />
            <FloatingParticles />
            <>
              <div className="absolute h-60 w-60 rounded-full bg-blue-500/20 blur-3xl motion-safe:animate-pulse sm:h-80 sm:w-80 md:h-96 md:w-96"></div>

              <div className="absolute h-52 w-52 rounded-full bg-cyan-500/20 blur-2xl motion-safe:animate-ping opacity-20 sm:h-72 sm:w-72 md:h-80 md:w-80"></div>
            </>
            <img
              src={profile}
              alt="Milan Harsha"
              fetchPriority="high"
              decoding="async"
              className="
              relative
              z-10
              w-52
              h-52
              sm:w-72
              sm:h-72
              md:w-80
              md:h-80
              lg:w-96
              lg:h-96
              rounded-full
              object-cover
              border-4
              border-blue-500
              shadow-[0_0_60px_rgba(59,130,246,0.7)]
              "
            />
          </div>
        </motion.div>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
