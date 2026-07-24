import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getProjects } from "../services/projectService";
import ProjectCard from "./ProjectCard";
import useIsMobile from "../hooks/useIsMobile";

function ProjectList() {
  const isMobile = useIsMobile();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load projects from the backend.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-white px-4 py-20 transition-colors duration-300 dark:bg-[#0B1120] sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 40 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[4px] text-blue-400 sm:text-base sm:tracking-[6px]">
            My Work
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 dark:text-gray-400">
            Some of the projects I've built while learning software engineering,
            Java development, databases, and full-stack technologies.
          </p>
        </motion.div>

        {loading && (
          <p className="mt-10 text-center text-slate-600 dark:text-gray-400">
            Loading projects...
          </p>
        )}
        {error && <p className="mt-10 text-center text-red-500">{error}</p>}

        {!loading && !error && (
          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10 lg:mt-20">
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  subtitle="Database-Driven Project"
                  description={project.description}
                  technologies={project.technologies}
                  github={project.githubLink}
                  image={`${import.meta.env.BASE_URL}Projects/portfolio-ui.webp`}
                />
              ))
            ) : (
              <p className="text-center text-slate-600 dark:text-gray-400 lg:col-span-2">
                No projects available yet. Add one from the admin page.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectList;
