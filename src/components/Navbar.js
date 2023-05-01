import React from 'react'
import { Link } from 'react-router-dom'
import "../css/navbar.css"

function Navbar() {
    return (
        <div>    <div class="navbar">
            <ul class="nav-links">
                <li>
                    <Link to={"/"}>
                        <i class="fas fa-home"></i>
                        <img src="/images/favicon-32x32.png" alt="logo-img" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/statistics"}>
                        <i class="fas fa-chart-simple"></i>
                        <img src="/images/favicon-32x32.png" alt="logo-img" />
                        <span>Statistics</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/achievements"}>
                        <i class="fas fa-trophy"></i>
                        <img src="/images/favicon-32x32.png" alt="logo-img" />
                        <span>Achievements</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/aboutus"}>
                        <i class="fas fa-circle-question"></i>
                        <img src="/images/favicon-32x32.png" alt="logo-img" />
                        <span>About Us</span>
                    </Link>
                </li>
            </ul>
        </div></div>
    )
}

export default Navbar