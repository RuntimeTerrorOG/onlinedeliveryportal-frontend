import React, { useState,useEffect } from "react"
import Back from "../common/Back"
import "./FAQStyles.css"

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [clickedQuestion, setClickedQuestion] = useState(null)

  const handleQuestionClick = (index) => {
    setClickedQuestion(clickedQuestion === index ? null : index)
  }

  return (
    <>
      <section className='pricing mb'>
        <Back name='FAQ' title='Any doubts?' cover={"../images/backgrounds/faq-back.jpg"}/>
        <div className='question'>
          <br/><br/>
          <h1 style={{fontSize: "2.5rem"}}>Frequently Asked Questions from us</h1>
          <br></br>
          <ul className="questions">
            <li onClick={() => handleQuestionClick(0)}>How does online laundry delivery work?</li>
            {clickedQuestion === 0 && (
              <p>Online laundry delivery works by allowing customers to schedule a pickup for their laundry online, and then having the laundry cleaned and delivered to their doorstep. </p>
            )}
            <li onClick={() => handleQuestionClick(1)}>How long does it take for laundry to be cleaned and delivered?</li>
            {clickedQuestion === 1 && (
              <p>The time it takes for laundry to be cleaned and delivered depends on the specific service and location. Typically, it can take anywhere from a few hours to a few days. </p>
            )}
            <li onClick={() => handleQuestionClick(2)}>What types of laundry can be sent for cleaning?</li>
            {clickedQuestion === 2 && (
              <p>Most laundry cleaning services accept a wide variety of clothing items, including shirts, pants, dresses, and more. Some services may also accept specialty items like suits, blankets, and linens. </p>
            )}
            <li onClick={() => handleQuestionClick(3)}>Is the laundry cleaning done in-house or outsourced?</li>
            {clickedQuestion === 3 && (
              <p>The laundry cleaning process can be done either in-house or outsourced to a third-party cleaning service. The specifics may vary depending on the service and location. </p>
            )}
            <li onClick={() => handleQuestionClick(4)}>What kind of detergents and cleaning agents are used for laundry cleaning?</li>
            {clickedQuestion === 4 && (
              <p>The specific detergents and cleaning agents used for laundry cleaning can vary depending on the service and location. Most services use high-quality and environmentally-friendly cleaning products to ensure the best results. </p>
            )}
            <li onClick={() => handleQuestionClick(5)}>How can I schedule a pickup for my laundry?</li>
            {clickedQuestion === 5 && (
              <p>To schedule a pickup for your laundry, you can typically do so through the service's website or mobile app. Simply select a pickup time and location that works for you, and the service will take care of the rest. </p>
            )}
            <li onClick={() => handleQuestionClick(6)}>What payment options are available for online laundry delivery?</li>
            {clickedQuestion === 6 && (
              <p>The specific payment options available for online laundry delivery can vary depending on the service and location. Most services accept major credit cards and some may also accept PayPal or other online payment options. </p>
            )}
            <li onClick={() => handleQuestionClick(7)}>How can I track the status of my laundry delivery?</li>
            {clickedQuestion === 7 && (
              <p>To track the status of your laundry delivery, you can typically do so through the service's website or mobile app. Simply log in to your account and check the delivery status </p>
            )}
             <li onClick={() => handleQuestionClick(8)}>What happens if there is a problem with my laundry order?</li>
             {clickedQuestion === 8 && (
              <p>If there is a problem with your laundry order, you should contact the service's customer support team as soon as possible to report the issue and seek a resolution. </p>
            )}
            <li onClick={() => handleQuestionClick(9)}>Is there a minimum order amount for laundry delivery?</li>
            {clickedQuestion === 9 && (
              <p>The minimum order amount for laundry delivery can vary depending on the service and location. It's best to check with the service directly to find out their specific requirements. </p>
            )}
          </ul>
        </div>
      </section>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to clarify your Questions.</p>
            </div>
            <button className='btn5'>Contact Us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
