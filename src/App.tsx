import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import Preloader from "./components/Preloader";

function RouteTransition() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Trigger the preloader every time the route changes
  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0); // Ensure the new page starts at the top
  }, [location.pathname]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      
      {/* Main App Content - Fades in after preloader */}
      <div 
        className={`transition-opacity duration-700 ease-out min-h-screen ${
          loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'
        }`}
      >
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteTransition />
    </BrowserRouter>
  );
}
