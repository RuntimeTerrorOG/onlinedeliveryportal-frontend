import { TextField, Button } from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");

   
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleClick=(e)=>{
        e.preventDefault()
              
        if (!name) {
          setNameError("Name can't be empty");
        } else {
          setNameError("");
        }
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
                
        const register={name, email, pass }
        console.log(register)
        fetch("http://localhost:8090/api/v1/user/saveUser",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(register)
        }).then(()=>{
            console.log("New Student added")
        });
    
        setName("");
        setEmail("");
        setPass("");
    }

      
    return (
        <div className="register-page bgimage" style={{backgroundImage: "url('../../background/backg5.jpg')"}}>
        <div className='overlay-register' />
        <Link className="linktoadmin-btn" to="/admin">For office</Link>
         <div className="auth-form-container">

         <div className="logoheading"><img src='.\images\logo.png' alt='' />
          </div>
            <p className="miniheading">Hey, Enter Your Details To Get Registered To A <br></br>New Account</p>

            <form className="register-form" onSubmit={handleSubmit}>
            
            <TextField value={name} onChange={(e)=>setName(e.target.value)} name="name" id="outlined-basic" label="Full Name" variant="outlined" placeholder="Full Name" />
            {nameError && <p style={{color: "red"}}>{nameError}</p> || <br></br>}
           
            
            <TextField value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="outlined-basic" label="Email" variant="outlined" name="email" />
            {emailError && <p style={{color: "red"}}>{emailError}</p> || <br></br>}
            
            
            <TextField value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="outlined-basic" label="Password" variant="outlined" name="password" />
            {passError && <p style={{color: "red"}}>{passError}</p> || <br></br>}
            

            <div className="auth-form-container-button">
            <Button variant="contained" type="submit" style={{ backgroundImage: "linear-gradient(79deg, #05c82f, #86df4f 48%, #c1dca7)" }} onClick={handleClick}>Register In</Button>
            </div>
        </form>
        <br></br>
        <p className="paragraph">Already have an account? <Link className="linkbtn" to="/">Login here</Link></p>
    </div></div>
    )
}