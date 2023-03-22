import React, {useEffect} from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import "./about.css"

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='Who We Are?' cover={"../images/backgrounds/about-back2.jpg"} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Why You Should choose Us'/>

            <p>We are a locally grown sri Lankan - based brand inspired by the constant digitisation and convenience-craving culture that has cultivated over recent years. Connection Hub Portal is happy to have launched Laundry Portal, a new uniquely styled web page that enables users to browse and schedule their laundry services from a wide selection of high-quality and trusted dry cleaning service providers. We offer a simple and seamless user experience aimed at modernising the existing approach, eliminating miscommunication and providing unquestionable customer satisfaction.</p>
            <p>We don not just provide a simple mechanism for scheduling nearby laundry services, we overlay the entire experience with world class customer service. And by revitalizing an industry that traditionally suffers from wide-spread miscommunication and non-existent customer service, we afford you the freedoms to kick back and enjoy the stress-free nature of it all.</p>
            <br></br><button className='btn3'>Our vision & mission</button>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default About
