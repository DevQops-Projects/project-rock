import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "220px",
        backgroundColor: "#f4f4f4",
        padding: "1rem",
        minHeight: "100%",
      }}
    >
      <h3>Navigation</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li> 
	  <Link to="/health">❤️ Health</Link>
	</li>  
        <li>
          <Link to="/documentation">📚 Documentation</Link>
        </li>
      </ul>
    </aside>
  );
}
