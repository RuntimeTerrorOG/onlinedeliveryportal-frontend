import React, { useEffect } from "react"
import { list } from "../../data/Data"
import Aos from "aos";
import "aos/dist/aos.css";

const RecentCard = () => {
  useEffect(() =>{
    Aos.init({duration: 1000 });
  }, [])
  return (
    <>
      <div className='content grid5 mtop recent-grid'>
        {list.map((val, index) => {
          const { cover, name, user, start1, start2, start3, start4, start5, comment} = val
          return (
            <div data-aos="fade-up-right" className='testimonial-box-container'>
              <div className='testimonial-box' key={index}>
                <div className="box-top">
                  <div className="profile">
                    <div className='profile-img'>
                        <img src={cover} alt='' />
                    </div>
                    <div className="name-user">
                        <strong>{name}</strong>
                        <span>{user}</span>
                    </div>
                  </div>
                  <div className="reviews">
                      <i class={start1}></i>
                      <i class={start2}></i>
                      <i class={start3}></i>
                      <i class={start4}></i>
                      <i class={start5}></i>
                  </div>
                </div>
              <div className="client-comment">
                <p>{comment}</p>
              </div>
            </div>
            </div>
            
          )
          
        })}
      </div>
    </>
  )
}

export default RecentCard
