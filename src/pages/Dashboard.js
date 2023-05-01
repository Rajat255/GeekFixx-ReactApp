import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import "../css/dashboard.css"

function Dashboard() {
    return (
        <>
            <Header />
            <Navbar />
            
            <div className="dashboard-container">
                <div class="user-details">

                    <img src="/images/id.svg" alt="user-image" class="user-image"/>
                    <div id="user-info">
                        <h2>Welcome <span id="name"></span>!</h2>
                        <h3>Age: <span id="age"></span></h3>
                        <h3>Gender: <span id="gender"></span></h3>
                        <h3>Occupation: <span id="occupation"></span></h3>
                        <div class="form-group">
                            <button type="button" id="logout" alt="Logout">Logout</button>
                        </div>
                    </div>
                </div>

                <div class="preferences">
                    <h1>Preferences</h1>
                    <div class="preference-item">
                        <img src="/images/back.svg" alt="Posture icon" class="preference-icon"/>
                            <h2 style={{width: "30%"}}>Posture Reminders</h2>
                            <input type="range" min="1" max="60" value="1" class="slider" id="myRange1" oninput="updateValue1()"/>
                            <span id="slider-value1" class="slider-value">1</span>
                            <label class="toggle-switch">
                                <input type="checkbox"/>
                                <span class="slide round"></span>
                            </label>

                    </div>

                    <div class="preference-item">
                        <img src="/images/ear.svg" alt="Ear icon" class="preference-icon"/>
                        <h2 style={{width: "30%"}}>Ear Care Reminders</h2>
                        <input type="range" min="1" max="60" value="1" class="slider" id="myRange2" oninput="updateValue2()"/>                                    
                        <span id="slider-value2" class="slider-value">1</span>
                        <label class="toggle-switch">
                            <input type="checkbox" id="earphonesToggle" onchange="setEarphoneReminder()"/>
                            <span class="slide round"></span>
                        </label>
                    </div>

                    <div class="preference-item">
                        <img src="/images/eye.svg" alt="Eye icon" class="preference-icon"/>
                        <h2 style={{width: "30%"}}>Eye Care Reminders</h2>
                        <input type="range" min="1" max="60" value="1" class="slider" id="myRange3" oninput="updateValue3()"/>
                        <span id="slider-value3" class="slider-value">1</span>
                        <label class="toggle-switch">
                            <input type="checkbox" id="eyeToggle" onclick="setEyeReminder()"/>
                            <span class="slide round"></span>
                        </label>
                    </div>

                    <div class="preference-item">
                        <img src="/images/stress.svg" alt="Video icon" class="preference-icon"/>
                        <h2 style={{width: "30%"}}>Distracting Videos</h2>
                        <input type="range" min="1" max="60" value="1" class="slider" id="myRange4" oninput="updateValue4()"/>
                        <span id="slider-value4" class="slider-value">1</span>
                        <label class="toggle-switch">
                            <input type="checkbox" id="videoToggle" onchange="distractingVideo()"/>
                            <span class="slide round"></span>
                        </label>
                    </div>

                    <div class="preference-item">
                        <img src="/images/battery.svg" alt="battery icon" class="preference-icon"/>
                        <h2 style={{width: "30%"}}>Charging Reminders</h2>
                        <input type="range" min="1" max="100" value="1" class="slider" id="myRange5" oninput="updateValue5()"/>
                        <span id="slider-value5" class="slider-value">1</span>
                        <label class="toggle-switch">
                            <input type="checkbox" id="chargeToggle" onchange="checkBatteryStatus()"/>
                            <span class="slide round"></span>
                        </label>
                    </div>

                    <div class="preference-item">
                        <img src="/images/water.svg" alt="Video icon" class="preference-icon"/>
                        <h2 style={{width: "30%"}}>Water Reminders</h2>
                        <input type="range" min="1" max="100" value="1" class="slider" id="myRange6" oninput="updateValue6()"/>
                        <span id="slider-value6" class="slider-value">1</span>
                        <label class="toggle-switch">
                            <input type="checkbox" id="waterToggle" onclick="setWaterReminder()"/>
                            <span class="slide round"></span>
                        </label>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard