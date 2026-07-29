import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../features/home/pages/HomePage";
import HealthPage from "../features/health/pages/HealthPage";
import DocumentationPage from "../features/documentation/pages/DocumentationPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/health" element={<HealthPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
