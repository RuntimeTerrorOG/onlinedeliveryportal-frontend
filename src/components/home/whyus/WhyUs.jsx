import React, { useEffect } from "react"
import Heading from "../../common/Heading"
import "./WhyUs.css"
import WhyUsCards from "./WhyUsCards"
import Aos from "aos";
import "aos/dist/aos.css";

const WhyUs = () => {
  useEffect(() =>{
    Aos.init({duration: 2000 });
  }, [])

  return (
    <>
    
      <section className='whyus-top background' style={{backgroundColor: '#e7ffe5'}}>
        <div data-aos="zoom-in-down" className='container'>
          <Heading title='Why Us? ' subtitle="Experience the Difference with Our Exceptional Services - Discover Why We're the Best Choice for Your Laundry Needs"/>
          <br></br>
          <br></br>
          <WhyUsCards />
        </div>
      </section>
     
    </>
  )
}

export default WhyUs
