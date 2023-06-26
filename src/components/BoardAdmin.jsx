import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { registerAdmin } from "../slices/auth";



const BoardAdmin = () => {
  const [content, setContent] = useState("");

   // Use the 'useEffect' hook to fetch admin content from the server when the component mounts
   useEffect(() => {

    // Call the 'getAdminBoard' method from the 'UserService' module
    UserService.getAdminBoard()

      // If successful, update the 'content' state variable with the response data
      .then((response) => {
        setContent(response.data);
      })
      // If fails, update the 'content' state variable with the error message
      .catch((error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        // dispatch a 'logout' event if the status code is 401
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      });
  }, [])
    // Initialize state variables using the 'useState' hook
    const [successful, setSuccessful] = useState(false);
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      role:"",
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
      const { username, email, password, role } = formData;
  
      // Reset successful state variable to false
      setSuccessful(false);
  
  
  
      // Send 'register' action to Redux store using 'dispatch' function
      //if action success 'setSuccessful' set to 'true' else 'false'
      dispatch(registerAdmin({ username, email, password, role }))
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
    };;

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
      <form className="register-form" onSubmit={handleRegister}>
      <h4>Admin register</h4>
      <br></br>
          {!successful && (
            <div>
              
                <TextField type="text" className="textfields" name="username" id="outlined-basic" label="Username" variant="outlined" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
                <br></br>
                <br></br>
                
                <TextField type="email" className="textfields" name="email" id="outlined-basic" label="Email" variant="outlined" placeholder="youremail@example.com" value={formData.email} onChange={handleInputChange} required />
                <br></br>
                <br></br>

                <TextField type="text" className="textfields" name="role" id="outlined-basic" label="Role" variant="outlined" placeholder="Role" value={formData.role} onChange={handleInputChange} required />
                <br></br>
                <br></br>
              
                <TextField type="password" className="textfields" name="password" id="outlined-basic" label="Password" variant="outlined" placeholder="***********" value={formData.password} onChange={handleInputChange}  required />
                <br></br>
                <br></br>

                <TextField type="password" className="textfields" name="cpassword" id="outlined-basic" label="Confirm password" variant="outlined" placeholder="***********" value={formData.cpassword} onChange={handleInputChange}  required />
                {formData.password !== formData.cpassword && <p className="error-message"style={{color: "red"}}>New and Confirm Password do not match</p> }
                <br></br>
                <br></br>
                
                <div className="auth-form-container-button-admnregbtn">
                <Button variant="contained" type="submit" style={{ backgroundImage: "linear-gradient(79deg, #05c82f, #86df4f 48%, #c1dca7)" }} >
                  Sign Up
                </Button>
                <br></br>
                <br></br>
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

export default BoardAdmin;
