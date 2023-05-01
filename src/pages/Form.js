import React, { useState } from 'react';
import "../css/form.css"
import { Link } from 'react-router-dom';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Age: ${age}, Occupation: ${occupation}`);
    }

    return (
        <>
            <header>
                <span style={{fontSize:"38px"}}>Welcome to Geekifixx -</span>
                <span style={{fontSize:"32px"}}> Your Wellness Fix</span>
            </header>
            <div class="form-container">
                <div class="form-image">
                    <img src="/images/boy.svg" alt="Illustration of a boy" id='boy-image' />
                </div>
                <form id="login-form" action="dashboard.html">
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" class="form-control" required />
                    </div>

                    <div class="form-group">
                        <label for="age">Age:</label>
                        <input type="number" id="age" name="age" class="form-control" placeholder="Enter your age (in years)" min="18" max="120" required />
                    </div>

                    <label for="gender">Gender:</label>
                    <div class="radio-options">
                        <div class="floatBlock">
                            <label for="male" id="male">Male</label>
                            <input type="radio" name="gender" value="male" />
                        </div>

                        <div class="floatBlock">
                            <label for="female" id="female">Female</label>
                            <input type="radio" name="gender" value="female" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="occupation">Occupation:</label>
                        <input type="text" id="occupation" name="occupation" placeholder="Enter your occupation" class="form-control" required />
                    </div>

                    <div class="form-group">
                        <Link to={"/dashboard"}>
                        <button type="submit" id="submit" alt="Submit">Submit</button>
                        </Link>
                    </div>
                </form>
                <div className='form-image'>
                    <img src="/images/girl.svg" alt="Illustration of a girl" id='girl-image' />
                </div>
            </div>
        </>
    );
}

export default Form;
