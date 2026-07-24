import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import useIsMobile from "../hooks/useIsMobile";
import { getProjects } from "../services/projectService";

function Projects() {
  const isMobile = useIsMobile();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const backendProjects = await getProjects();

        const dynamicProjects = (backendProjects || []).map((project) => ({
          id: project._id || project.id,
          title: project.title,
          //subtitle: "Database-Driven Project",
          description: project.description,
          technologies: project.technologies || [],
          github: project.githubLink || "",
          image:
            project.image ||
            `${import.meta.env.BASE_URL}Projects/portfolio-ui.webp`,
          updatedAt: project.updatedAt,
        }));

        setProjects(dynamicProjects);
      } catch (error) {
        setProjects([]);
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
      <div className="max-w-7xl mx-auto">
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

          <h2 className="text-3xl font-bold mt-3 sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-slate-600 dark:text-gray-400">
            Some of the projects I've built while learning software engineering,
            Java development, databases, and full-stack technologies.
          </p>
        </motion.div>

        {loading ? (
          <p className="mt-10 text-center text-slate-600 dark:text-gray-400">
            Loading projects...
          </p>
        ) : (
          <div className="grid gap-8 mt-14 lg:grid-cols-2 lg:gap-10 lg:mt-20">
            {projects.map((project) => (
              <ProjectCard key={project.id || project.title} {...project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
