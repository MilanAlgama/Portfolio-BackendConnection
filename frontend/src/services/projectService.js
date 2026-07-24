import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5001";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProjects = async () => {
  const response = await api.get("/projects");
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/projects/${id}`);
  return response.data;
};

export const createProject = async (projectData) => {
  const formData = new FormData();

  Object.entries(projectData).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (key === "technologies" && Array.isArray(value)) {
        value.forEach((item) => formData.append("technologies", item));
      } else if (key === "image" && value instanceof File) {
        formData.append("image", value);
      } else {
        formData.append(key, value);
      }
    }
  });

  const response = await api.post("/projects", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const updateProject = async (id, projectData) => {
  const formData = new FormData();

  Object.entries(projectData).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      if (key === "technologies" && Array.isArray(value)) {
        value.forEach((item) => formData.append("technologies", item));
      } else if (key === "image" && value instanceof File) {
        formData.append("image", value);
      } else {
        formData.append(key, value);
      }
    }
  });

  const response = await api.put(`/projects/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/projects/${id}`);
  return response.data;
};
