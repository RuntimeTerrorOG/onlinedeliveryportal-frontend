import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
      <div className='bg-image'  style={{backgroundImage: "url('../../images/backgrounds/img-b.jpg')"}}>
          <div className='overlay' />
        </div>
        <div data-aos="zoom-in-down" className='container'>
          <Heading title='What clients say about us!' />
          </div>
          <div className="container cards">
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
