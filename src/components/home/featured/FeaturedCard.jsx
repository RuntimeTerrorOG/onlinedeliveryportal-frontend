import React, { useEffect } from "react"
import { featured } from "../../data/Data"
import Aos from "aos";
import "aos/dist/aos.css";


const FeaturedCard = () => {
useEffect(() =>{
  Aos.init({duration: 1000 });
}, [])

  return (
    <>
      <div className='content grid5 mtop featured-grid'>

        {featured.map((items, index) => (
          <div data-aos="fade-up" className='box' key={index}>
            <img src={items.cover} alt='' />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  )
}

export default FeaturedCard
