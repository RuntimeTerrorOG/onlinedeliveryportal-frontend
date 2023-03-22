import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>


      <footer>
        <div class ="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, Promotions, discounts sent straignt in your inbox every day</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Laundry Portal. Web supported by Vave software solution.</span>
      </div>
    </>
  )
}

export default Footer
