import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import portfolioData from "../data/portfolioData";
import useIsMobile from "../hooks/useIsMobile";

function Education() {
  const isMobile = useIsMobile();

  return (
    <section
      id="education"
      className="min-h-screen bg-slate-50 px-4 py-20 transition-colors duration-300 dark:bg-[#050816] sm:px-6 sm:py-24"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 40 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[4px] text-blue-400 sm:text-base sm:tracking-[6px]">
            My Journey
          </p>

          <h2 className="text-3xl font-bold mt-3 sm:text-4xl lg:text-5xl">
            Education
          </h2>
        </motion.div>

        <div className="relative mt-14 sm:mt-20">

          {/* Timeline Line */}

          <div className="absolute left-5 top-0 h-full w-1 bg-blue-500"></div>

          {portfolioData.education.map((item, index) => (

            <motion.div
              key={index}
              initial={isMobile ? false : { opacity: 0, x: -80 }}
              whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
              transition={{
                duration: isMobile ? 0.2 : 0.5,
                delay: isMobile ? 0 : index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative pl-12 mb-10 sm:pl-16 sm:mb-14"
            >

              <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">

                <FaGraduationCap />

              </div>

              <div className="rounded-xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-md transition hover:border-blue-500 dark:border-white/10 dark:bg-white/5 dark:shadow-none sm:p-6">

                <h3 className="break-words text-xl font-semibold sm:text-2xl">
                  {item.title}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.institute}
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-gray-500">
                  {item.period}
                </p>

                <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;
