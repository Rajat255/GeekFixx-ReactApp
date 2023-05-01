import React from 'react';
import '../css/landing.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Landing = () => {
    // const history = useHistory();
    const [hovered, setHovered] = useState(false);


    return (
        <div class="landing-container">
            <div class="landing-slider">
                <div class="landing-slides">
                    <div class="landing-slide">
                        <img src="/images/back.svg" alt="Image 1" />
                            <h3>Posture Reminders</h3>
                    </div>
                    <div class="landing-slide">
                        <img src="/images/ear.svg" alt="Image 2" />
                            <h3>Ear Care Reminders</h3>
                    </div>
                    <div class="landing-slide">
                        <img src="/images/eye.svg" alt="Image 3" />
                            <h3>Eye Care Reminders</h3>
                    </div>
                    <div class="landing-slide">
                        <img src="/images/stress.svg" alt="Image 4" />
                            <h3>Distracting Videos</h3>
                    </div>
                    <div class="landing-slide">
                        <img src="/images/battery.svg" alt="Image 5" />
                            <h3>Charging Reminders</h3>
                    </div>
                    <div class="landing-slide">
                        <img src="/images/water.svg" alt="Image 6" />
                            <h3>Water Reminders</h3>
                    </div>
                </div>
            </div>
            <div class="info">
                <div class="info-text">
                    <span id='first'><strong>GeekFixx: </strong></span>
                    <span id='second'> Your Wellness Fixx</span>
                    <p>GeekFixx is your personal wellness companion, helping you to manage your physical and mental health with ease.</p>
                    <p>
                        Whether you're looking to reduce stress, or improve your experience while working on computers, GeekFixx has got you covered.<br/><br/>
                    </p>
                    </div>
                        <Link to={"/form"}>
                        <div>
                            <a href="/source/form.html" class="btn">Get Started</a>
                        </div>
                        </Link>
                </div>
            </div>
        );
}

export default Landing;
