import React, {useEffect} from "react"
import TextField  from "@mui/material/TextField";
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='contact mb'>
        <Back name='Contact Us' title='Get Support From Us ' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br/>
            <div className='form-fields'>
              <TextField type='name' placeholder='Name'  id="outlined-basic" label="Name" variant="outlined"/>
            
              <TextField type='email' placeholder='youremail@gmail.com' id="outlined-basic" label="Email" variant="outlined" />
           
              <TextField type='subject' placeholder='Subject' id="outlined-basic" label="Subject" variant="outlined"/>
              <div className="descriptiontext">
              <TextField type='description'id="outlined-basic" label="Description" variant="outlined"/>
              
              </div>
              <button>Send</button>
            </div>
       
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
