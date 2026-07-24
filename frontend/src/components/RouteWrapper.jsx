import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import App from "../App";
import AdminPage from "./AdminPage";

function RouteWrapper() {
  useEffect(() => {
    // Apply persisted theme on initial load so direct admin routes respect it
    const darkMode = localStorage.getItem("theme") !== "light";
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteWrapper;
