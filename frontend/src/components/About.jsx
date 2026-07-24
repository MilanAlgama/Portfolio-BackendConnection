import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaCloud,
  FaBriefcase,
} from "react-icons/fa";
import useIsMobile from "../hooks/useIsMobile";

function About() {
  const isMobile = useIsMobile();
  const cards = [
    {
      icon: <FaUserGraduate size={35} />,
      title: "Education",
      description:
        "BSc ICT Undergraduate at the University of Sri Jayewardenepura and HND in Network Engineering & Cyber Security at ICBT Campus.",
    },
    {
      icon: <FaLaptopCode size={35} />,
      title: "Development",
      description:
        "Learning Java, Python, React, MySQL, Full Stack Development and Object-Oriented Programming.",
    },
    {
      icon: <FaCloud size={35} />,
      title: "Cloud & DevOps",
      description:
        "Currently learning AWS, Docker, CI/CD, Azure and Google Cloud Platform while expanding my cloud engineering knowledge.",
    },
    {
      icon: <FaBriefcase size={35} />,
      title: "Experience",
      description:
        "Worked as an Assistant Production at Innodata Lanka Pvt Ltd, gaining industry experience in a professional environment.",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-white px-4 py-20 transition-colors duration-300 dark:bg-[#0B1120] flex items-center sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 40 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[4px] text-blue-400 sm:text-base sm:tracking-[6px]">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold mt-3 sm:text-4xl lg:text-5xl">
            About Me
          </h2>

          <p className="mt-6 text-slate-600 max-w-4xl mx-auto leading-8 text-base dark:text-gray-400 sm:mt-8 sm:text-lg">
            I'm Milan Harsha, an ICT undergraduate passionate about Cloud
            Computing, DevOps, Full Stack Development, and modern software
            engineering. I enjoy learning emerging technologies and building
            practical software solutions while continuously improving my
            technical skills.
          </p>
        </motion.div>

        <div className="grid gap-6 mt-12 md:grid-cols-2 md:gap-8 md:mt-16">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={isMobile ? false : { opacity: 0, y: 60 }}
              whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: isMobile ? 0.2 : 0.5,
                delay: isMobile ? 0 : index * 0.2,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-200/60 backdrop-blur-md transition duration-300 hover:scale-105 hover:border-blue-500 dark:border-white/10 dark:bg-white/5 dark:shadow-none sm:p-8"
            >

              <div className="text-blue-400">
                {card.icon}
              </div>

              <h3 className="text-xl font-semibold mt-5 sm:text-2xl">
                {card.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600 dark:text-gray-400">
                {card.description}
              </p>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default About;
