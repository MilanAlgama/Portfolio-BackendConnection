import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import {
  createProject,
  deleteProject,
  getProjects,
  updateProject,
} from "../services/projectService";

const initialFormState = {
  title: "",
  description: "",
  technologies: "",
  githubLink: "",
  image: "",
  imageFile: null,
};

function AdminPage() {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const data = await getProjects();
      setProjects(data);
      setError("");
    } catch (error) {
      console.error(error);
      setError("Unable to load projects from the backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
        setError("");
      } catch (error) {
        console.error(error);
        setError("Unable to load projects from the backend.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      imageFile: file,
      image: file ? file.name : "",
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const payload = {
        title: formData.title,
        description: formData.description,
        technologies: formData.technologies
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        githubLink: formData.githubLink,
        image: formData.imageFile || formData.image,
      };

      if (editingId) {
        await updateProject(editingId, payload);
      } else {
        await createProject(payload);
      }

      resetForm();
      await fetchProjects();
    } catch (error) {
      console.error(error);
      setError("The project could not be saved.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title,
      description: project.description,
      technologies: project.technologies.join(", "),
      githubLink: project.githubLink || "",
      image: project.image || "",
      imageFile: null,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      await fetchProjects();
    } catch (error) {
      console.error(error);
      setError("The project could not be deleted.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-20 text-slate-900 transition-colors duration-300 dark:bg-[#050816] dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[4px] text-blue-400">
                Admin Panel
              </p>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                Manage Portfolio Projects
              </h1>
              <p className="mt-4 max-w-2xl text-slate-600 dark:text-gray-400">
                Add, edit, and remove projects. The public portfolio page will
                update automatically after each change.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-slate-900 transition hover:bg-slate-100 dark:border-white/10 dark:bg-transparent dark:text-white"
                aria-label="Go to home"
              >
                Home
              </a>

              <button
                type="button"
                onClick={resetForm}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
              >
                <FaPlus />
                {editingId ? "Cancel Edit" : "New Project"}
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <h2 className="text-2xl font-semibold">
              {editingId ? "Edit Project" : "Create New Project"}
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Project Title
                </label>
                <input
                  required
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none ring-0 transition focus:border-blue-500 dark:border-white/10 dark:bg-[#0B1120]"
                  placeholder="Project title"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Description
                </label>
                <textarea
                  required
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-white/10 dark:bg-[#0B1120]"
                  placeholder="Describe the project"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Technologies (comma separated)
                </label>
                <input
                  name="technologies"
                  value={formData.technologies}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-white/10 dark:bg-[#0B1120]"
                  placeholder="React, Tailwind CSS, Node.js"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  GitHub Link
                </label>
                <input
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-white/10 dark:bg-[#0B1120]"
                  placeholder="https://github.com/your-repo"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Project Image (optional)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-white/10 dark:bg-[#0B1120]"
                />
                <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">
                  Choose an image file to upload, or leave it blank to use the
                  default placeholder image.
                </p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <FaPlus />
                {submitting
                  ? "Saving..."
                  : editingId
                    ? "Update Project"
                    : "Save Project"}
              </button>
            </form>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur-lg dark:border-white/10 dark:bg-white/5 dark:shadow-none">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Existing Projects</h2>
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                {projects.length} items
              </span>
            </div>

            {loading && (
              <p className="mt-6 text-slate-600 dark:text-gray-400">
                Loading projects...
              </p>
            )}
            {error && <p className="mt-6 text-red-500">{error}</p>}

            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="rounded-2xl border border-slate-200 p-4 dark:border-white/10"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 dark:text-gray-400">
                        {project.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-white/10 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(project)}
                        className="rounded-lg bg-blue-600 p-2 text-white transition hover:bg-blue-700"
                        aria-label="Edit project"
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(project._id)}
                        className="rounded-lg bg-red-500 p-2 text-white transition hover:bg-red-600"
                        aria-label="Delete project"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
