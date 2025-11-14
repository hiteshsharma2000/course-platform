// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-logo">
          <Link to="/">🎓 Course Builder</Link>
        </h2>

        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/add"
            className={location.pathname === "/add" ? "active" : ""}
          >
            Add Course
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
