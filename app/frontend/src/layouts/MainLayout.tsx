import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "2rem",
          }}
        >
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
}
