import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import { login } from "../slices/auth";

const Login = () => {
  let navigate = useNavigate();

  //'useState' used to declare and initialize three state variables
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  //'useSelector' is used to retrieve data from the Redux store
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  // Get 'dispatch' function from Redux store using the 'useDispatch' hook
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };



  // called when the user submits the login form
  const handleLogin = (event) => {

    // first sets loading to true
    event.preventDefault();
    setLoading(true);
    setErrors({});

    const { username, password } = formData;

    // checks whether the 'username' and 'password' fields are empty
    // if either fields empty gives an error message and sets 'loading' back to false
    if (!username) {
      setErrors({ ...errors, username: "This username is required!" });
      setLoading(false);
      return;
    }

    if (!password) {
      setErrors({ ...errors, password: "This password is required!" });
      setLoading(false);
      return;
    }

    // if both filled out dispatches the login action with the 'username' and 'password'
    dispatch(login({ username, password }))
      .unwrap()

      // if login success redirected to the '/profile' page and refresh the page
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      // if login failed 'loading' is set back to false
      .catch(() => {
        setLoading(false);
      });
  };


  // if user already looged in user is redirected to the '/profile' page using the 'Navigate' component.
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }

  return (
    <div className="login-page bgimage login-form" style={{backgroundImage: "url('../../background/backg5.jpg')"}}>
      
      <div className="overlay-login" />
      <Link className="linktoadmin-btn" to="/adminlogin">For office</Link>
      
      <div className="auth-form-container">
      
      <Link to={"/"} className="navbar-brand">
      <div className="logoheading"><img src='.\images\logoblue.png' alt='' />
      </div>
      </Link>
      <br></br>
      
            <p className="miniheading">Hey, Enter Your Details To Get Sign In To Your <br></br>Account</p>
            <br></br>
            <br></br>
           
          <form className="login-form" onSubmit={handleLogin}>
            
              <TextField name="username" variant="outlined" id="outlined-basic" label="Username" placeholder="username" type="text" className="form-control" value={formData.username} onChange={handleInputChange} error={!!errors.username} helperText={errors.username} />
              <br></br>
              <br></br>
              <TextField name="password" variant="outlined" id="outlined-basic" label="Password"  placeholder="*********" type="password" className="form-control" value={formData.password} onChange={handleInputChange} error={!!errors.password} helperText={errors.password} />
              <br></br>
              <br></br>
              <Link className="linkforgotbtn" to="/forgotpassword" >Forgot Password</Link>
              <br></br>

            
              <div className="auth-form-container-button">
              <Button variant="contained" type="submit" style={{ backgroundImage: "linear-gradient(79deg, #100073, #487dc4 48%, #7bb2f0)" }} disabled={loading}>Login</Button>
              </div>
            <br></br>
            
          </form>

          <p className="paragraph">Don't have an account? <Link className="linkbtn" to="/register">Register here</Link></p>
          
          {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
      )}
      </div>
    </div>
  )
}

export default Login;
