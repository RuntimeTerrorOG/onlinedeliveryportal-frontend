import React, {useEffect} from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='All Our Services' cover={img} />
        <div className='featured container'>
       <br></br><h2> Welcome to our online laundry service!</h2><br></br>

<p>At LaundroMart, we offer a convenient and reliable solution for all your laundry needs. Whether you're a busy professional, a parent juggling multiple responsibilities, or simply looking to free up some time in your schedule, our online laundry service is here to help.</p>
<br></br>
<p>With our user-friendly platform, you can easily schedule laundry pick-ups and deliveries at your preferred location and time. We handle everything from wash and fold to dry cleaning, ensuring that your clothes receive the care they deserve. Our experienced team of professionals uses state-of-the-art equipment and high-quality detergents to deliver exceptional results.</p>
<br></br>
<h4>Why choose our online laundry service?</h4><br></br>
<ol><li>
Convenience: Say goodbye to the hassle of lugging heavy laundry bags or spending hours at the laundromat. With a few clicks, you can schedule a pick-up, and we'll take care of the rest.
</li><br></br>
<li>
Time-saving: Our service saves you valuable time that you can spend on things that matter most to you. Whether it's focusing on work, spending quality time with loved ones, or pursuing your hobbies, we've got your laundry covered.
</li><br></br>
<li>
Quality: We understand that your clothes are valuable to you. That's why we handle them with the utmost care, ensuring they are cleaned, dried, and folded professionally. Your garments will come back fresh, clean, and ready to wear.
</li><br></br><li>
Flexibility: Our service offers flexible options to suit your preferences. You can choose your preferred detergent, customize folding preferences, and even request special care for delicate items.
</li><br></br><li>
Reliable Customer Support: Our friendly and dedicated customer support team is always ready to assist you. If you have any questions or special requests, we're just a message or phone call away.
</li></ol><br></br>
Experience the convenience and quality of our online laundry service today. Sign up now and enjoy fresh, clean clothes without the hassle!
        </div>
      </section>
    </>
  )
}

export default Services
