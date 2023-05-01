import React from 'react'
import "../css/about.css"
import Navbar from '../components/Navbar'
import Header from '../components/Header'

function About() {
    return (
        <>
        <Header/>
        <Navbar/>
        <div class="about-container">
            <div class="content">
                <h1>About Us</h1>
                <p>
                    With the rise of the digital world, the amount of time people spend
                    sitting in-front of the computer screen has also increased greatly.
                    This sedentary lifestyle is the cause of many health issues. These
                    people who are coined as ’geeks’ face health issues of all types be it
                    mental or physical. Therefore the need to monitor screen-time,
                    maintain correct posture, retain hydration and to avoid hearing loss
                    due excessive use of headphones with high volumes and most importantly
                    to look around and have a short break is very high.
                    <strong>GeekFixx</strong> does just that. It is a wellness application
                    that takes care of you when you are busy working on the computer. It
                    does this by correcting your posture using image recognition methods
                    and historical data, it counts the amount of time you have been
                    actively using the computer and asks you to take breaks, lower the
                    brightness, to take off your earphones, remind you to look away and
                    much more. Think of it as your personal wellness assistant.
                </p>

                <h2>How to use the app?</h2>
                <div class="steps-container">
                    <p>You can follow the steps below to get started with GeekFixx!</p>
                    <h3>Dashboard</h3>
                    <div class="steps">
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>

                    <h3>Statistics</h3>
                    <div class="steps">
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>

                    <h3>Achievements</h3>
                    <div class="steps">
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About