import React, { useState } from 'react';
import "../css/form.css"

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}, Age: ${age}, Occupation: ${occupation}`);
    }

    return (
        <div class="form-container">
            <div class="form-image">
                <img src="/images/boy.svg" alt="Illustration of a boy" />
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

                <p><label for="gender">Gender:</label></p>
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
                    <button type="submit" id="submit" alt="Submit">Submit</button>
                </div>
            </form>
            <div class="form-image">
                <img src="/images/girl.svg" alt="Illustration of a girl" />
            </div>
        </div>
    );
}

export default Form;
