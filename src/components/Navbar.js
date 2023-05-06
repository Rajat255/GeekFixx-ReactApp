import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const activeClass = (routeName) =>
    window.location.pathname === routeName ? "active" : "";

  return (
    <div>
      <div className="navbar">
        <ul className="nav-links">
          <li>
            <Link to={"/dashboard"} className={activeClass("/dashboard")}>
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to={"/statistics"} className={activeClass("/statistics")}>
              <i className="fas fa-chart-simple"></i>
              <span>Statistics</span>
            </Link>
          </li>
          <li>
            <Link to={"/achievements"} className={activeClass("/achievements")}>
              <i className="fas fa-trophy"></i>
              <span>Achievements</span>
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={activeClass("/about")}>
              <i className="fas fa-circle-question"></i>
              <span>About Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
