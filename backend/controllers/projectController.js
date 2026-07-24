import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Project from "../models/Project.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch projects", error: error.message });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch project", error: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const { title, description, technologies, githubLink } = req.body;
    let image = "";

    if (req.file) {
      image = `/uploads/${req.file.filename}`;
    } else if (req.body.image) {
      image = req.body.image;
    }

    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description are required" });
    }

    const project = await Project.create({
      title,
      description,
      technologies: technologies || [],
      githubLink,
      image: image || "",
    });

    res.status(201).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create project", error: error.message });
  }
};

const updateProject = async (req, res) => {
  try {
    const { title, description, technologies, githubLink, image } = req.body;

    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // If a new file was uploaded, prefer that
    if (req.file) {
      project.image = `/uploads/${req.file.filename}`;
    } else if (image !== undefined) {
      project.image = image || project.image;
    }

    project.title = title || project.title;
    project.description = description || project.description;

    // Normalize technologies: could be array (from multipart) or comma string
    if (technologies !== undefined) {
      if (Array.isArray(technologies)) {
        project.technologies = technologies;
      } else if (typeof technologies === "string") {
        try {
          const parsed = JSON.parse(technologies);
          if (Array.isArray(parsed)) project.technologies = parsed;
          else
            project.technologies = technologies
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean);
        } catch {
          project.technologies = technologies
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean);
        }
      }
    }

    project.githubLink =
      githubLink !== undefined ? githubLink : project.githubLink;

    const updatedProject = await project.save();
    res.status(200).json(updatedProject);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update project", error: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await project.deleteOne();
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete project", error: error.message });
  }
};

export {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
