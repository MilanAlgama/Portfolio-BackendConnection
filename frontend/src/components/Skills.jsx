import { motion } from "framer-motion";
import portfolioData from "../data/portfolioData";
import useIsMobile from "../hooks/useIsMobile";

import {
  FaJava,
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaAws
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiGithubactions,
  SiGooglecloud,
  SiC,
} from "react-icons/si";

const icons = {
  Java: <FaJava className="text-[#f89820] text-3xl" />,
  Python: <FaPython className="text-[#3776AB] text-3xl" />,
  C: <SiC className="text-[#00599C] text-3xl" />,
  JavaScript: <SiJavascript className="text-[#F7DF1E] text-3xl" />,
  React: <FaReact className="text-[#61DAFB] text-3xl" />,
  HTML: <FaHtml5 className="text-[#E34F26] text-3xl" />,
  CSS: <FaCss3Alt className="text-[#1572B6] text-3xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4] text-3xl" />,
  Docker: <FaDocker className="text-[#2496ED] text-3xl" />,
  Git: <FaGitAlt className="text-[#F05032] text-3xl" />,
  AWS: <FaAws className="text-[#FF9900] text-3xl" />,
  Azure: "☁️",
  "Google Cloud": <SiGooglecloud className="text-[#4285F4] text-3xl" />,
  MySQL: <SiMysql className="text-[#4479A1] text-3xl" />,
  "GitHub Actions": (
    <SiGithubactions className="text-[#2088FF] text-3xl" />
  ),
  "CI/CD": <SiGithubactions className="text-[#2088FF] text-3xl" />,
};

function Skills() {
  const isMobile = useIsMobile();

  return (
    <section
      id="skills"
      className="min-h-screen bg-white px-4 py-20 transition-colors duration-300 dark:bg-[#0B1120] sm:px-6 sm:py-24"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={isMobile ? false : { opacity: 0 }}
          whileInView={isMobile ? undefined : { opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-sm uppercase tracking-[4px] text-blue-400 sm:text-base sm:tracking-[6px]">
            What I Know
          </p>

          <h2 className="text-3xl font-bold mt-3 sm:text-4xl lg:text-5xl">
            Skills
          </h2>

        </motion.div>

        <div className="grid gap-6 mt-12 lg:grid-cols-2 lg:gap-8 lg:mt-16">

          {portfolioData.skills.map((group,index)=>(

            <motion.div

              key={index}

              initial={isMobile ? false : {opacity:0,y:50}}

              whileInView={isMobile ? undefined : {opacity:1,y:0}}

              transition={{
                duration: isMobile ? .2 : .5,
                delay: isMobile ? 0 : index*.15
              }}

              viewport={{once:true}}

              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none sm:p-8"

            >

              <h3 className="text-xl font-semibold text-blue-400 mb-6 sm:text-2xl">
                {group.category}
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">

                {group.technologies.map((tech)=>(

                  <div

                    key={tech}

                    className="flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:bg-blue-600 hover:text-white dark:border-transparent dark:bg-[#111827]"

                  >

                    <span className="text-2xl">
                      {icons[tech]}
                    </span>

                    <span className="min-w-0 break-words">{tech}</span>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;
