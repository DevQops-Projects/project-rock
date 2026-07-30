import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#1f2937",
        color: "white",
      }}
    >
      <h2>🚀 Project Rock</h2>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>

        <Link
          to="/documentation"
          style={{ color: "white", textDecoration: "none" }}
        >
          Documentation
        </Link>
      </div>
    </nav>
  );
}
