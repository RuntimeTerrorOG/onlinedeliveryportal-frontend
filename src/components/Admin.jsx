import TextField  from "@mui/material/TextField";
import React, {useState} from "react";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';


export const Admin = () => {

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
      <div  className="admin-page bgimage" style={{backgroundImage: "url('../../background/backg6.jpg')"}}>
      <div className='overlay-admin' />
        <div className="auth-form-container" >
           
            
              <div className="logoheading"><img src='.\images\logoyellow.png' alt='' />
            </div>
            <br></br>

            <p className="miniheading">Hey, Enter Your Details To Get Sign In To Your <br></br>Admin Account</p>
            <br></br>
            <br></br>
        <form className="admin-form" onSubmit={handleSubmit}>
            
            <TextField value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="outlined-basic" label="Email" variant="outlined" name="email" />
            {emailError && <p style={{color: "red"}}>{emailError}</p> || <br></br>}
            
            <TextField value={pass} onChange={(e) => setPass(e.target.value)}type="password" placeholder="*********" id="outlined-basic" label="Password" variant="outlined" name="password" />
            {passError && <p style={{color: "red"}}>{passError}</p> || <br></br>}
            
            <br></br>

            <div className="auth-form-container-button">
            <Button variant="contained"  type="submit" style={{ backgroundImage: "linear-gradient(79deg, #d8df08, #e3d873 48%, #ffffbd)" }}>Log In</Button>
            </div>
        </form>
        <br></br>
        <br></br>
       <Link className="linkbtn" to="/login">Back to login</Link>
    </div></div>
    )
}

export default Admin;