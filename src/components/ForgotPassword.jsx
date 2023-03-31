import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Email can't be empty");
    } else {
      setEmailError("");
    }
  };

  return (
    <div  className="forgotpassword-page bgimage" style={{backgroundImage: "url('../../background/backg5.jpg')"}}>
    <div className='overlay-forgotpassword' />
    <div className="auth-form-container">
      <div className="logoheading"><img src='.\images\logored.png' alt='' />
      </div>
      <br></br>
      <p className="miniheading">
        Enter Your Email To Send A Reset Link <br />
        To Your Account
      </p>
      <br></br>

      <form className="login-form" onSubmit={handleSubmit}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
        />
        {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        <br />
        <div className="auth-form-container-button">
        <Button variant="contained" type="submit" style={{ backgroundImage: "linear-gradient(79deg, #db2c2c, #e26868 48%, #edb9b9)" }}>
            Send Mail
        </Button>
        </div>
        <br />
        <Link className="linkbtn" to="/login">Back to Login</Link>
      </form>
    </div></div>
  );
};

export default ForgotPassword;
