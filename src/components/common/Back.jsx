import React from "react"
import "./Backstyles.css"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back' >
        <div className='container' >
          <span style={{fontSize: "2rem"}}>{name}</span>
          <h1 style={{fontSize: "6rem"}}>{title}</h1>
        </div>
        <div className="cover">
        <img src={cover} alt='' />
        </div>
      </div>
    </>
  )
}

export default Back
