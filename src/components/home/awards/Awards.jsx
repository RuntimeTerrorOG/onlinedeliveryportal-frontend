import React from "react"
import Heading from "../../common/Heading"
import { awards } from "../../data/Data"
import "./awards.css"

const Awards = () => {
  return (
    <>
      <section className='awards padding'>
        
        <div className='containerv'>
        <video src="../../videos/video3.mp4" autoPlay loop muted></video>
          <Heading title='Company Achivements' subtitle='Company achivement and customer feedbacks can be added here ' />
        </div>
      </section>
    </>
  )
}

export default Awards
