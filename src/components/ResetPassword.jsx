import { TextField, Button } from "@mui/material";
import React, {useState} from "react";
import { Link } from "react-router-dom";


export const ResetPassword = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [opass, setOpass] = useState('');
    const [npass, setNpass] = useState('');
    const [cpass, setCpass] = useState('');

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [opassError, setOpassError] = useState("");
    const [npassError, setNpassError] = useState(false);
    const [cpassError, setCpassError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
          setEmailError("Name can't be empty");
        } else {
          setEmailError("");
        }
        if (!email) {
            setEmailError("Email can't be empty");
          } else {
            setEmailError("");
          }
        if (!opass) {
            setOpassError("Old Password can't be empty");
          } else {
            setOpassError("");
          }
        if (!npass) {
            setNpassError(true);
          } else {
            setNpassError(false);
          }
        if (!cpass) {
            setCpassError(true);
          } else if (npass !== cpass) {
            setCpassError(true);
          }
          else {
            setCpassError(false);
          }
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const resetpassword={name, email, pass: cpass }
        console.log(resetpassword)
        fetch("http://localhost:8080/api/v1/user/updateUser",{
          method:"PUT",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(resetpassword)
        }).then(()=>{
          console.log("Details updated")
        });
        setName("");
        setEmail("");
        setOpass("");
        setNpass("");
        setCpass("");
      }

      const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
      };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
      };
    const handleOldpasswordChange = (e) => {
        setOpass(e.target.value);
        setOpassError(false);
      };
    const handleNewpasswordChange = (e) => {
        setNpass(e.target.value);
        setNpassError(false);
      };
    const handleConfirmPasswordChange = (e) => {
        setCpass(e.target.value);
        setCpassError(false);
      };

    return (
      <div  className="resetpassword-page">
        <div className="auth-form-container">
           
        <div className="logoheading"><img src='.\images\logo.png' alt='' />
          </div>

            <p className="miniheading">Your New Password Must Be Different From <br></br>Previous Used Passwords</p>
            <br></br>
        <form className="resetpassword-form" onSubmit={handleSubmit}>
            
            <TextField value={name} onChange={handleNameChange}type="name" placeholder="Full Name" id="outlined-basic" label="Full Name" variant="outlined" name="name" />
            {nameError && <p style={{color: "red"}}>{nameError}</p> || <br></br>}

            <TextField value={email} onChange={handleEmailChange}type="email" placeholder="youremail@gmail.com" id="outlined-basic" label="Email" variant="outlined" name="email" />
            {emailError && <p style={{color: "red"}}>{emailError}</p> || <br></br>}
            
            <TextField value={opass} onChange={handleOldpasswordChange}type="password" placeholder="*********" id="outlined-basic" label="Old Password" variant="outlined" name="password" />
            {opassError && <p style={{color: "red"}}>{opassError}</p> || <br></br>}

            <TextField value={npass} onChange={handleNewpasswordChange} type="password" placeholder="*********" id="outlined-basic" label="New Password" variant="outlined" name="password" />
            {npassError && <p style={{color: "red"}}>New password can't be empty</p> || <br></br>}

            <TextField value={cpass} onChange={handleConfirmPasswordChange} type="password" placeholder="*********" id="outlined-basic" label="Confirm Password" variant="outlined" name="password" />
            {cpassError && <p style={{color: "red"}}>Confirm password can't be empty</p>}
            {npass !== cpass && <p style={{color: "red"}}>New and Confirm Password do not match</p> || <br></br>}

            <br></br>

            <div className="auth-form-container-button">
            <Button variant="contained"  type="submit" style={{ backgroundImage: "linear-gradient(79deg, #2e2e2e, #868686 48%, #b2b2b2)" }} onClick={handleClick}>Reset Password</Button>
            </div>
        </form>
        <br></br>
       <Link className="linkbtn" to="/">Back to login</Link>
    </div></div>
    )
}

export default ResetPassword;