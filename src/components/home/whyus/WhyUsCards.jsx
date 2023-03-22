import React, { useEffect } from "react"
import { whyus } from "../../data/Data"
import Aos from "aos";
import "aos/dist/aos.css";


const WhyUsCards = () => {
useEffect(() =>{
  Aos.init({duration: 2000 });
}, [])

  return (
    <>
      <div className='whyus'>

        {whyus.map((items, index) => (
          <div data-aos="zoom-in" className='whybox' key={index} style={{ backgroundImage: `url(${items.cover})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
           
            <h4 className="whyush4"><strong>{items.name}</strong></h4>
            <label className="whyuslabel">{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default WhyUsCards
