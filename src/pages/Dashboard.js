import "../css/style.css";
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const navigate = useNavigate();

  let name = localStorage.getItem("name");
  let age = localStorage.getItem("age");
  let occupation = localStorage.getItem("occupation");
  let gender = localStorage.getItem("gender");

  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/form");
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="dashboard-container">
        <div class="user-details">
          <img src="/images/id.svg" alt="user-image" class="user-image" />
          <div id="user-info">
            <h2>Welcome {name}!</h2>
            <h3>Age: {age}</h3>
            <h3>Gender: {gender}</h3>
            <h3>Occupation: {occupation}</h3>
            <div class="form-group">
              <button
                type="button"
                id="logout"
                alt="Logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        <div class="preferences">
          <h1>Preferences</h1>

          <div class="preference-item">
            <img
              src="/images/back.svg"
              alt="Posture icon"
              class="preference-icon"
            />
            <h2>Posture Reminders</h2>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              class="slider"
              onChange={handleSliderChange}
            />
            <span class="slider-value">{sliderValue}</span>

            <label class="toggle-switch">
              <input type="checkbox" />
              <span class="slide round"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
