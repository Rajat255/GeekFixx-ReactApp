import "../css/style.css";
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import PostureDetect from "./PostureDetect";

function Dashboard() {
  // Populate after Login
  let name = localStorage.getItem("name");
  let age = localStorage.getItem("age");
  let occupation = localStorage.getItem("occupation");
  let gender = localStorage.getItem("gender");

  // Logout
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/form");
  };

  //
  // Back Care/ Posture Detection...........................
  const [postureValue, setPostureValue] = useState(50);
  const handlePostureSliderChange = (event) => {
    setPostureValue(event.target.value);
  };

  const [capturedImage, setCapturedImage] = useState(null);
  const [postureStatus, setPostureStatus] = useState("Unknown");

  const handlePostureDetected = (status) => {
    setPostureStatus(status);
    if (status !== "Unknown") {
      showAlert(`Posture Status: ${status}`);
    }
  };

  const showAlert = (message) => {
    alert(message);
  };
  //
  // Ear Care...............................................
  const [earValue, setEarValue] = useState(50);
  const handleEarSliderChange = (event) => {
    setEarValue(event.target.value);
  };

  //
  // Eye Care...............................................
  const [eyeValue, setEyeValue] = useState(50);
  const [isEyeChecked, setIsEyeChecked] = useState(false);
  const handleEyeSliderChange = (event) => {
    setEyeValue(event.target.value);
  };
  const handleEyeChange = (event) => {
    setIsEyeChecked(event.target.checked);
  };

  useEffect(() => {
    let intervalId;
    if (isEyeChecked) {
      intervalId = setInterval(() => {
        const audio = new Audio("../audio/alert.mp3");
        audio.play();
        setTimeout(() => {
          let eyeConfirm = window.confirm(
            `It's been ${eyeValue} minutes! Time to look around`
          );
          if (eyeConfirm) {
            // User pressed OK
          } else {
            // User pressed Cancel
          }
        }, 100);
      }, eyeValue * 60 * 1000);
    }
    return () => clearInterval(intervalId);
  }, [isEyeChecked, eyeValue]);

  //
  // Device Health..........................................
  const [batteryLevel, setBatteryLevel] = useState(null);
  const [batteryValue, setBatteryValue] = useState(50);
  const [isDeviceChecked, setIsDeviceChecked] = useState(false);
  const handleDeviceChange = (event) => {
    setIsDeviceChecked(event.target.checked);
  };
  const handleChargingSliderChange = (event) => {
    setBatteryValue(event.target.value);
  };

  useEffect(() => {
    navigator.getBattery().then((battery) => {
      setBatteryLevel(Math.floor(battery.level * 100));
      battery.addEventListener("levelchange", () => {
        setBatteryLevel(Math.floor(battery.level * 100));
      });
    });
  }, []);

  useEffect(() => {
    let intervalId;
    if (isDeviceChecked) {
      intervalId = setInterval(() => {
        navigator.getBattery().then((battery) => {
          setBatteryLevel(Math.floor(battery.level * 100));
        });
      }, 120000);
    }
    return () => clearInterval(intervalId);
  }, [isDeviceChecked]);

  useEffect(() => {
    if (isDeviceChecked && batteryLevel !== null) {
      if (batteryLevel > batteryValue) {
        const audio = new Audio("/src/audio/alert.mp3");
        audio.play();
        setTimeout(() => {
          let batteryConfirm = window.confirm(
            `The battery level is ${batteryValue} time to switch off the charging`
          );
          if (batteryConfirm) {
            // User pressed OK
          } else {
            // User pressed Cancel
          }
        }, 100);
      }
    }
  }, [batteryLevel, batteryValue, isDeviceChecked]);

  //
  // Distracting Videos.....................................
  const [distractingVideosValue, setDistractingVideosValue] = useState(50);
  const handleDistractingVideosSliderChange = (event) => {
    setDistractingVideosValue(event.target.value);
  };

  //
  // Water Reminder.........................................
  const [isWaterChecked, setIsWaterChecked] = useState(false);
  const [waterValue, setWaterValue] = useState(50);
  const handleWaterSliderChange = (event) => {
    setWaterValue(event.target.value);
  };
  const handleWaterChange = (event) => {
    setIsWaterChecked(event.target.checked);
  };

  useEffect(() => {
    let intervalId;
    if (isWaterChecked) {
      intervalId = setInterval(() => {
        const audio = new Audio("../audio/alert.mp3");
        audio.play();
        setTimeout(() => {
          let waterConfirm = window.confirm(`It's been ${waterValue} minutes!`);
          if (waterConfirm) {
            // User pressed OK
          } else {
            // User pressed Cancel
          }
        }, 100);
      }, waterValue * 60 * 1000);
    }
    return () => clearInterval(intervalId);
  }, [isWaterChecked, waterValue]);

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

          {/* BackCare */}
          <div class="preference-item">
            <img
              src="/images/back.svg"
              alt="Posture icon"
              class="preference-icon"
            />
            <h2>Posture Reminders</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={postureValue}
              class="slider"
              onChange={handlePostureSliderChange}
            />
            <span class="slider-value">{postureValue}</span>

            <label class="toggle-switch">
              <input type="checkbox" />
              <span class="slide round"></span>
            </label>
          </div>

          {/* EarCare */}
          <div class="preference-item">
            <img src="/images/ear.svg" alt="Ear icon" class="preference-icon" />
            <h2> Ear Care Reminders</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={earValue}
              class="slider"
              onChange={handleEarSliderChange}
            />
            <span class="slider-value">{earValue}</span>
            <label class="toggle-switch">
              <input type="checkbox" />
              <span class="slide round"></span>
            </label>
          </div>

          {/* EyeCare */}
          <div class="preference-item">
            <img src="/images/eye.svg" alt="Ear icon" class="preference-icon" />
            <h2> Eye Care Reminders</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={eyeValue}
              class="slider"
              onChange={handleEyeSliderChange}
            />
            <span class="slider-value">{eyeValue}</span>
            <label class="toggle-switch">
              <input
                type="checkbox"
                checked={isEyeChecked}
                onChange={handleEyeChange}
              />
              <span class="slide round"></span>
            </label>
          </div>

          {/* DeviceCare */}
          <div class="preference-item">
            <img
              src="/images/battery.svg"
              alt="Battery icon"
              class="preference-icon"
            />
            <h2> Charging Reminders</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={batteryValue}
              class="slider"
              onChange={handleChargingSliderChange}
            />
            <span class="slider-value">{batteryValue}</span>
            <label class="toggle-switch">
              <input
                type="checkbox"
                checked={isDeviceChecked}
                onChange={handleDeviceChange}
              />
              <span class="slide round"></span>
            </label>
          </div>

          {/* StressCare */}
          <div class="preference-item">
            <img
              src="/images/stress.svg"
              alt="Stress icon"
              class="preference-icon"
            />
            <h2>Distracting Videos</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={distractingVideosValue}
              class="slider"
              onChange={handleDistractingVideosSliderChange}
            />
            <span class="slider-value">{distractingVideosValue}</span>
            <label class="toggle-switch">
              <input type="checkbox" />
              <span class="slide round"></span>
            </label>
          </div>

          {/* Water */}
          <div class="preference-item">
            <img
              src="/images/water.svg"
              alt="Water icon"
              class="preference-icon"
            />
            <h2> Water Reminders</h2>
            <input
              type="range"
              min="1"
              max="100"
              value={waterValue}
              class="slider"
              onChange={handleWaterSliderChange}
            />
            <span class="slider-value">{waterValue}</span>
            <label class="toggle-switch">
              <input
                type="checkbox"
                checked={isWaterChecked}
                onChange={handleWaterChange}
              />
              <span class="slide round"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
