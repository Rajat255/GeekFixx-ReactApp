import "../css/style.css";
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./PostureDetect.js"

function Dashboard() {
  const navigate = useNavigate();

  let name = localStorage.getItem("name");
  let age = localStorage.getItem("age");
  let occupation = localStorage.getItem("occupation");
  let gender = localStorage.getItem("gender");

  const [postureValue, setPostureValue] = useState(50);
  const [eyeValue, setEyeValue] = useState(50);
  const [earValue, setEarValue] = useState(50);
  const [distractingVideosValue, setDistractingVideosValue] = useState(50);
  const [chargingValue, setChargingValue] = useState(50);
  const [waterValue, setWaterValue] = useState(50);


  const handlePostureSliderChange = (event) => {
    setPostureValue(event.target.value);
  };

  const handleEyeSliderChange = (event) => {
    setEyeValue(event.target.value);
  };

  const handleEarSliderChange = (event) => {
    setEarValue(event.target.value);
  };

  const handleDistractingVideosSliderChange = (event) => {
    setDistractingVideosValue(event.target.value);
  };

  const handleChargingSliderChange = (event) => {
    setChargingValue(event.target.value);
  };

  const handleWaterSliderChange = (event) => {
    setWaterValue(event.target.value);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/form");
  };

  // Water Reminder.........................................
  const [isWaterChecked, setIsWaterChecked] = useState(false);

  const handleWaterChange = (event) => {
    setIsWaterChecked(event.target.checked);
  };

  useEffect(() => {
    let intervalId;
    if (isWaterChecked) {
      intervalId = setInterval(() => {
        waterConfirm = window.confirm(`It's been ${waterValue} minutes!`);
        if (waterConfirm) {
          // User pressed OK
        } else {
          // User pressed Cancel
        }
      }, waterValue * 60 * 1000);
    }
    return () => clearInterval(intervalId);
  }, [isWaterChecked, waterValue]);

  // Eyecare Reminder ..........................
  const [isEyeChecked, setIsEyeChecked] = useState(false);

  const handleEyeChange = (event) => {
    setIsEyeChecked(event.target.checked);
  };

  useEffect(() => {
    let intervalId;
    if (isEyeChecked) {
      intervalId = setInterval(() => {
        eyeConfirm = window.confirm(`It's been ${eyeValue} minutes! Time to look around`);
        if (eyeConfirm) {
          // User pressed OK
        } else {
          // User pressed Cancel
        }
      }, eyeValue * 60 * 1000);
    }
    return () => clearInterval(intervalId);
  }, [isEyeChecked, eyeValue]);

  // Device Health ............................
    const [batteryLevel, setBatteryLevel] = useState(null);
    const [batteryValue, setBatteryValue] = useState(50);
    const [isDeviceChecked, setIsDeviceChecked] = useState(false);

    useEffect(() => {
      navigator.getBattery().then((battery) => {
        setBatteryLevel(Math.floor(battery.level * 100));
        battery.addEventListener("levelchange", () => {
          setBatteryLevel(Math.floor(battery.level * 100));
        });
      });
    }, []);

    const handleDeviceChange = (event) => {
      setIsDeviceChecked(event.target.checked);
    };

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
            alert("Plug off");
          }
      }
    }, [batteryLevel, sliderValue, isCheckboxChecked]);

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

            <div class="preference-item">
              <img src="/images/eye.svg" alt="Ear icon" class="preference-icon" />
              <h2> Eye Care Reminders</h2>
              <input
                type="range"
                min="0"
                max="100"
                value={eyeValue}
                class="slider"
                onChange={handleEyeSliderChange}
              />
              <span class="slider-value">{eyeValue}</span>
              <label class="toggle-switch">
                <input type="checkbox"
                  checked={isEyeChecked}
                  onChange={handleEyeChange} />
                <span class="slide round"></span>
              </label>
            </div>

            <div class="preference-item">
              <img src="/images/ear.svg" alt="Ear icon" class="preference-icon" />
              <h2> Ear Care Reminders</h2>
              <input
                type="range"
                min="0"
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

            <div class="preference-item">
              <img
                src="/images/stress.svg"
                alt="Ear icon"
                class="preference-icon"
              />
              <h2>Distracting Videos</h2>
              <input
                type="range"
                min="0"
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

            <div class="preference-item">
              <img
                src="/images/battery.svg"
                alt="Ear icon"
                class="preference-icon"
              />
              <h2> Charging Reminders</h2>
              <input
                type="range"
                min="0"
                max="100"
                value={chargingValue}
                class="slider"
                onChange={handleChargingSliderChange}
              />
              <span class="slider-value">{chargingValue}</span>
              <label class="toggle-switch">
                <input type="checkbox" />
                <span class="slide round"></span>
              </label>
            </div>

            <div class="preference-item">
              <img
                src="/images/water.svg"
                alt="Ear icon"
                class="preference-icon"
              />
              <h2> Water Reminders</h2>
              <input
                type="range"
                min="0"
                max="100"
                value={waterValue}
                class="slider"
                onChange={handleWaterSliderChange}
              />
              <span class="slider-value">{waterValue}</span>
              <label class="toggle-switch">
                <input type="checkbox"
                  checked={isWaterChecked}
                  onChange={handleWaterChange} />
                <span class="slide round"></span>
              </label>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default Dashboard;
