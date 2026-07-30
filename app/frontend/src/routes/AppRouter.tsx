import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import DocumentationPage from "../pages/DocumentationPage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
