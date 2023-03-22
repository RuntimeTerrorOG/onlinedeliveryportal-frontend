import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Process from "./process/Process"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import WhyUs from "./whyus/WhyUs"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <WhyUs />
      <Awards />
      <Recent />
      <Process />
      <Team />
    </>
  )
}

export default Home
