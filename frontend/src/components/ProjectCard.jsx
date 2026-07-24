import { motion } from "framer-motion";
import {
  FaGithub,
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";

import {
  SiMysql,
  SiJavascript,
  SiTailwindcss,
  SiGooglecloud,
} from "react-icons/si";
import useIsMobile from "../hooks/useIsMobile";

/*import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";*/

const techIcons = {
  Java: <FaJava className="text-orange-500 text-lg" />,

  JavaFX: <FaJava className="text-orange-500 text-lg" />,

  MySQL: <SiMysql className="text-blue-500 text-lg" />,

  Docker: <FaDocker className="text-blue-400 text-lg" />,

  React: <FaReact className="text-cyan-400 text-lg" />,

  JavaScript: <SiJavascript className="text-yellow-400 text-lg" />,

  Git: <FaGitAlt className="text-orange-600 text-lg" />,

  AWS: <FaAws className="text-orange-400 text-lg" />,

  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-lg" />,

  "Google Cloud": <SiGooglecloud className="text-blue-500 text-lg" />,
};

function ProjectCard({
  title,
  subtitle,
  description,
  technologies,
  github,
  image,
  updatedAt,
}) {
  const isMobile = useIsMobile();
  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5001";

  const defaultImage = `${import.meta.env.BASE_URL}Projects/portfolio-ui.webp`;
  const imageSrc = image
    ? image.startsWith("/uploads")
      ? `${API_BASE}${image}${updatedAt ? `?v=${new Date(updatedAt).getTime()}` : ""}`
      : image
    : defaultImage;

  return (
    <motion.div
      whileHover={isMobile ? undefined : { y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-lg shadow-slate-200/60 backdrop-blur-lg transition-all hover:border-blue-500 hover:shadow-blue-200/70 dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]"
    >
      {/* Image */}

      <div className="relative h-48 overflow-hidden sm:h-56">
        <img
          src={imageSrc}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent dark:from-[#050816] dark:via-transparent"></div>
      </div>

      {/* Content */}

      <div className="p-5 sm:p-7">
        <h3 className="break-words text-xl font-bold sm:text-2xl">{title}</h3>

        <p className="text-blue-400 mt-2">{subtitle}</p>

        <p className="mt-5 leading-7 text-slate-600 dark:text-gray-400">
          {description}
        </p>

        {/* Technologies */}

        <div className="flex flex-wrap gap-3 mt-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 dark:border-white/10 dark:bg-white/10 dark:hover:bg-blue-500/20"
            >
              {techIcons[tech] || (
                <span className="text-blue-400 font-bold">
                  {tech.charAt(0)}
                </span>
              )}
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* GitHub */}

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-5 py-3 text-center text-white transition hover:bg-blue-700 sm:w-auto sm:px-6"
        >
          <FaGithub />
          View Source Code
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
