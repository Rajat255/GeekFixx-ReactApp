import "../css/style.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    // check if required data is present in local storage
    const name = localStorage.getItem("name");
    const age = localStorage.getItem("age");
    const occupation = localStorage.getItem("occupation");
    const gender = localStorage.getItem("gender");

    if (name && age && occupation && gender) {
      // if data is present, redirect to dashboard page
      navigate("/dashboard");
    }
  }, [navigate]);

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
    navigate("/dashboard");
  };

  return (
    <>
      <header>
        <h1>Welcome to GeekFixx</h1>
        <p>Your wellness fix!</p>
      </header>
      <div className="form-container">
        <div className="form-image">
          <img
            src="/images/boy.svg"
            alt="Illustration of a boy"
            id="boy-image"
          />
        </div>
        <form id="login-form" onSubmit={clickHandler}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="form-control"
              onChange={inputHandler}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              className="form-control"
              placeholder="Enter your age (in years)"
              min="18"
              max="120"
              value={age}
              onChange={inputHandler}
              required
            />
          </div>

          <label htmlFor="gender">Gender:</label>
          <div className="radio-options">
            <div className="floatBlock">
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={inputHandler}
              />
            </div>

            <div className="floatBlock">
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={inputHandler}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="occupation">Occupation:</label>
            <input
              type="text"
              name="occupation"
              placeholder="Enter your occupation"
              className="form-control"
              value={occupation}
              onChange={inputHandler}
              required
            />
          </div>

          <div className="form-group">
            <button type="submit" id="submit" alt="Submit">
              Submit
            </button>
          </div>
        </form>

        <div className="form-image">
          <img
            src="/images/girl.svg"
            alt="Illustration of a girl"
            id="girl-image"
          />
        </div>
      </div>
    </>
  );
}

export default Form;
