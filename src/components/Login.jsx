import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";

import { login } from "../slices/auth";

const Login = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true);
    setErrors({});

    const { username, password } = formData;

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

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

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
