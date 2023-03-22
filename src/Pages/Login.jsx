import { TextField, Button } from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";


export const Login = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email) {
            setEmailError("Email can't be empty");
          } else {
            setEmailError("");
          }
          if (!pass) {
            setPassError("Password can't be empty");
          } else {
            setPassError("");
          }
    }


    
    return (
       <div  className="login-page bgimage" style={{backgroundImage: "url('../../background/backg5.jpg')"}}>
        <div className='overlay-login' />
        <Link className="linktoadmin-btn" to="/admin">For office</Link>
        <div className="auth-form-container">
        
        <div className="logoheading"><img src='.\images\logoblue.png' alt='' />
          </div>
            <p className="miniheading">Hey, Enter Your Details To Get Sign In To Your <br></br>Account</p>
            <br></br>
        
        <form className="login-form" onSubmit={handleSubmit}>
            
            <TextField value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="outlined-basic" label="Email" variant="outlined" name="email" />
            {emailError && <p style={{color: "red"}}>{emailError}</p> || <br></br>}
                        
            <TextField value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*********" id="outlined-basic" label="Password" variant="outlined" name="password" />
            {passError && <p style={{color: "red"}}>{passError}</p> || <br></br>}
            
            <Link className="linkforgotbtn" to="/forgotpassword" >Forgot Password</Link>

            <br></br>
            <div className="auth-form-container-button">
            <Button variant="contained"  type="submit"  style={{ backgroundImage: "linear-gradient(79deg, #100073, #487dc4 48%, #7bb2f0)" }}>Log In</Button>
            </div>
            <br></br>
        </form>
        
       <p className="paragraph">Don't have an account? <Link className="linkbtn" to="/register">Register here</Link></p>
    </div></div>

    )
    
}