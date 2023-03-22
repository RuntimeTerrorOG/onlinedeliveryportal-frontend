import React, {useEffect} from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"

const Order = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className='order-now mb'>
        <Back name='Order' title='select Your Items' cover={"../images/backgrounds/about-back.jpg"} />
        <div className='container recent'>
          <h1>Will add later</h1>
        </div>
      </section>
    </>
  )
}

export default Order
