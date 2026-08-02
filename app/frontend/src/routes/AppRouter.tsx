import { BrowserRouter, Routes, Route } from "react-router-dom";
import HealthPage from "../features/health/pages/HealthPage";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../features/home/pages/HomePage";
import DocumentationPage from "../features/documentation/pages/DocumentationPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/documentation"
            element={<DocumentationPage />}
          />
	  <Route
            path="/health"
            element={<HealthPage />}
         />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
