import "../css/style.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  // const history = useHistory();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="landing-container">
      <div className="landing-slider">
        <div className="landing-slides">
          <div className="landing-slide">
            <img src="/images/back.svg" alt="Image 1" />
            <h3>Posture Reminders</h3>
          </div>
          <div className="landing-slide">
            <img src="/images/ear.svg" alt="Image 2" />
            <h3>Ear Care Reminders</h3>
          </div>
          <div className="landing-slide">
            <img src="/images/eye.svg" alt="Image 3" />
            <h3>Eye Care Reminders</h3>
          </div>
          <div className="landing-slide">
            <img src="/images/stress.svg" alt="Image 4" />
            <h3>Distracting Videos</h3>
          </div>
          <div className="landing-slide">
            <img src="/images/battery.svg" alt="Image 5" />
            <h3>Charging Reminders</h3>
          </div>
          <div className="landing-slide">
            <img src="/images/water.svg" alt="Image 6" />
            <h3>Water Reminders</h3>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-text">
          <span id="first">GeekFixx:
          </span>
          <span id="second"> Your Wellness Fixx</span>
          <p>
            GeekFixx is your personal wellness companion, helping you to manage
            your physical and mental health with ease.
          </p>
          <p>
            Whether you're looking to reduce stress, or improve your experience
            while working on computers, GeekFixx has got you covered.
            <br />
            <br />
          </p>
        </div>
        <Link to={"/form"}>
          <div>
            <button className="btn">
              Get Started
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
