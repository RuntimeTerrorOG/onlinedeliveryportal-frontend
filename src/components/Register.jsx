import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";

const Register = () => {

  // Initialize state variables using the 'useState' hook
  const [successful, setSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [cPasswordError, setCpasswordError] = useState(false);

  //'useSelector' is used to retrieve data from the Redux store
  const { message } = useSelector((state) => state.message);
  
  // Get 'dispatch' function from Redux store using the 'useDispatch' hook
  const dispatch = useDispatch();

  // Function to update 'formData' state whenever a user types in an input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  // Function to handle form submission
  const handleRegister = (event) => {
    event.preventDefault();

    // Extract username, email, and password from formData state variable
    const { username, email, password } = formData;

    // Reset successful state variable to false
    setSuccessful(false);



    // Send 'register' action to Redux store using 'dispatch' function
    //if action success 'setSuccessful' set to 'true' else 'false'
    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });



    // Check if confirm password field is empty or does not match password field
    // if confirm password field empty or filelds does not match 'cPasswordError' set to 'true'
    if (!formData.cpassword) {
      setCpasswordError(true);
    } else if (formData.password !== formData.cpassword) {
      setCpasswordError(true);
    }
    // Set 'cPasswordError' to 'false' if confirm password matches password
    else {
      setCpasswordError(false);
    }
  };


  return (
   <div className="register-page bgimage signup-form" style={{backgroundImage: "url('../../background/backg5.jpg')"}}>
        <div className='overlay-register' />
        <Link className="linktoadmin-btn" to="/adminlogin">For office</Link>
         <div className="auth-form-container">

         <div className="logoheading"><img src='.\images\logo.png' alt='' />
          </div><br></br>
            <p className="miniheading">Hey, Enter Your Details To Get Registered To A <br></br>New Account</p>
            <br></br>
        <form className="register-form" onSubmit={handleRegister}>
          {!successful && (
            <div>
              
                <TextField type="text" className="textfields" name="username" id="outlined-basic" label="Username" variant="outlined" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
                <br></br>
                <br></br>
                
                <TextField type="email" className="textfields" name="email" id="outlined-basic" label="Email" variant="outlined" placeholder="youremail@example.com" value={formData.email} onChange={handleInputChange} required />
                <br></br>
                <br></br>
              
                <TextField type="password" className="textfields" name="password" id="outlined-basic" label="Password" variant="outlined" placeholder="***********" value={formData.password} onChange={handleInputChange}  required />
                <br></br>
                <br></br>

                <TextField type="password" className="textfields" name="cpassword" id="outlined-basic" label="Confirm password" variant="outlined" placeholder="***********" value={formData.cpassword} onChange={handleInputChange}  required />
                {formData.password !== formData.cpassword && <p className="error-message"style={{color: "red"}}>New and Confirm Password do not match</p> }
                <br></br>
                <br></br>
                
                <div className="auth-form-container-button">
                <Button variant="contained" type="submit" style={{ backgroundImage: "linear-gradient(79deg, #05c82f, #86df4f 48%, #c1dca7)" }} >
                  Sign Up
                </Button>
              </div>
            </div>
          )}
          
          {message && (
          <div
            className={successful ? "alert alert-success" : "alert alert-danger"}
            role="alert"
          >
            {message}
          </div>
      )}
        </form>
        <br></br>
        <p className="paragraph">Already have an account? <Link className="linkbtn" to="/login">Login here</Link></p>
      </div>
      
    </div>
  );
};

export default Register;
