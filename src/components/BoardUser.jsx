import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerAdmin } from "../slices/auth";


const BoardUser = () => {
  const [content, setContent] = useState("");

  // Use the 'useEffect' hook to fetch admin content from the server when the component mounts
  useEffect(() => {

    // Call the 'getUserBoard' method from the 'UserService' module
    UserService.getUserBoard().then(

      // If successful, update the state with the response data
      (response) => {
        setContent(response.data);
      },

      // If fails, update the state with the error message
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        // If the error status code is 401 (unauthorized), dispatch an event to logout the user
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

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
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();

    // Extract username, email, and password from formData state variable
    const { username, email, password } = formData;

    if (!formData.cpassword) {
      setCpasswordError(true);
    } else if (formData.password !== formData.cpassword) {
      setCpasswordError(true);
    }
    // Set 'cPasswordError' to 'false' if confirm password matches password
    else {
      setCpasswordError(false);
    }

    const data = {
      email: email,
      username: username,
      password: password,
    };

    // Send a PUT request to the server
    fetch("http://localhost:8080/api/v1/user/updatePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Handle the success response
          console.log("Password updated successfully");
          setSuccessful(true);
        } else {
          // Handle the error response
          console.log("Failed to update password");
        }
      })
      .catch((error) => {
        // Handle any network errors
        console.log(error);
      });
  };;
   


  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
      <form className="register-form" onSubmit={handleForgotPassword}>
      <h4>Reset Password</h4>
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
                
                <div className="auth-form-container-button-resetbtn">
                <Button variant="contained" type="submit" style={{ backgroundImage: "linear-gradient(79deg, #2e2e2e, #868686 48%, #b2b2b2)" }} >
                 Reset Password
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
    </div>
  );
};

export default BoardUser;
