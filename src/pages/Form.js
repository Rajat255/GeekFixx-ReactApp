import React, { useState } from 'react';
import "../css/form.css";
import { Link, useHistory } from 'react-router-dom';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [occupation, setOccupation] = useState('');
    const [gender, setGender] = useState('');

    const inputHandler = (e) => {
        const { name, value } = e.target;
        localStorage.setItem(name, value);
        if (name === "name") {
            setName(value);
        } else if (name === "age") {
            setAge(value);
        } else if (name === "occupation") {
            setOccupation(value);
        } else if (name === "gender") {
            setGender(value);
        }
    };

    const clickHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <header>
                <span style={{ fontSize: "38px" }}>Welcome to Geekfixx -</span>
                <span style={{ fontSize: "32px" }}> Your Wellness Fix</span>
            </header>
            <div class="form-container">
                <div class="form-image">
                    <img src="/images/boy.svg" alt="Illustration of a boy" id='boy-image' />
                </div>
                <form id="login-form" action="dashboard.html" name="formData" onSubmit={clickHandler}>
                    <div class="form-group">
                        <label htmlFor="name">Name: </label>
                        <input type="text" 
                        name='name' 
                        placeholder="Enter your name" 
                        class="form-control" 
                        onChange={inputHandler} 
                        required />
                    </div>

                    <div class="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type="number" 
                        name = 'age' 
                        class="form-control" 
                        placeholder="Enter your age (in years)" 
                        min="18" max="120" 
                        value={age} 
                        onChange={inputHandler} 
                        required />
                    </div>

                    <label for="gender">Gender:</label>
                    <div class="radio-options">
                        <div class="floatBlock">
                            <label htmlFor="male">Male</label>
                            <input type="radio" 
                            name ='gender' 
                            value="Male" 
                            onChange={inputHandler} />
                        </div>

                        <div class="floatBlock">
                            <label htmlFor="female">Female</label>
                            <input 
                            type="radio" 
                            name = 'gender' 
                            value="Female" 
                            onChange={inputHandler} />
                        </div>
                    </div>

                    <div class="form-group">
                        <label htmlFor="occupation">Occupation:</label>
                        <input 
                        type="text" 
                        name='occupation' 
                        placeholder="Enter your occupation" 
                        class="form-control" 
                        value={occupation} 
                        onChange={inputHandler} 
                        required />
                    </div>

                    <div class="form-group">
                        <Link to={"/dashboard"}>
                            <button 
                            type="submit" 
                            id="submit" 
                            alt="Submit">
                                Submit
                            </button>
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
