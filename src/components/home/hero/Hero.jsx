import React, { useState } from "react"
import Heading from "../../common/Heading"
import "./hero.css"
import "../../common/header/header.css"
import { nav2 } from "../../data/Data"
import { Link } from "react-router-dom"

const Hero = () => {
  const [nav2List, setNav2List] = useState(false)
  return (
    <>
      <section className='hero'>
      <button className='btn4 herobtn'>
              <i className='fa fa-sign-out'></i> Log In
            </button>
        <div className='container'>
          <img src='./images/logo3.png' alt='' />
          <p>Get clean clothes hassle-free with our doorstep laundry services!</p>
          <Heading title=''/>


          <div className="services-container nav2">
          <ul className={nav2List ? "small" : "flex"}>
          {nav2.map((list, index) => (
            <div className="service-box"  key={index}>
                
                  <Link className={list.cName} to={list.path}><i className={list.icon}></i><span class="service-text">{list.text}</span></Link>
                
                </div>
              ))}
              </ul>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
