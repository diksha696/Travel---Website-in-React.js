import React from 'react'
import "./Cardsection.css"
const Cardsection = () => {
    let pic= require("./Image/Capture1.PNG")
  return (
    <>
    <section className='section-3'>
   <div className='data'>
  <p>Our Services</p>
  </div>
  <div className='image'>
  <img src={pic} alt="" className='pic'/>
  </div>
    </section>
    </>
    
  )
}

export default Cardsection