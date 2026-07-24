import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import portfolioData from "../data/portfolioData";
import useIsMobile from "../hooks/useIsMobile";

function Experience() {
  const isMobile = useIsMobile();

  return (
    <section
      id="experience"
      className="min-h-screen bg-slate-50 px-4 py-20 transition-colors duration-300 dark:bg-[#050816] sm:px-6 sm:py-24"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 40 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[4px] text-blue-400 sm:text-base sm:tracking-[6px]">
            Professional Journey
          </p>

          <h2 className="text-3xl font-bold mt-3 sm:text-4xl lg:text-5xl">
            Experience
          </h2>
        </motion.div>

        <div className="mt-14 sm:mt-20">

          {portfolioData.experience.map((job, index) => (

            <motion.div

              key={index}

              initial={isMobile ? false : { opacity: 0, y: 60 }}

              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}

              transition={{
                duration: isMobile ? .2 : .6,
                delay: isMobile ? 0 : index * .2
              }}

              viewport={{ once: true }}

              className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-lg transition-all duration-300 hover:border-blue-500 hover:shadow-blue-200/70 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] sm:p-8"

            >

              <div className="flex items-center gap-4">

                <div className="bg-blue-600 p-4 rounded-full">
                  <FaBriefcase size={25} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {job.position}
                  </h3>

                  <p className="text-blue-400 text-lg">
                    {job.company}
                  </p>
                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-slate-500 dark:text-gray-400">

                <div className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {job.duration}
                </div>

                <div className="flex items-center gap-2">
                  <FaLocationArrow />
                  {job.location}
                </div>

              </div>

              <p className="mt-8 leading-8 text-slate-700 dark:text-gray-300">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-4 mt-8">

                {job.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="rounded-full border border-blue-500 bg-blue-50 px-4 py-2 text-blue-700 transition hover:bg-blue-500 hover:text-white dark:bg-blue-500/20 dark:text-blue-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
