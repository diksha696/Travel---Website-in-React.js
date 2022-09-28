import React from 'react'
import "./Header.css"

const Header = () => {
let pic1= require("./Image/greece.avif");
let pic2= require("./Image/maldives.avif");
let pic3= require("./Image/italy.avif");
let pic4= require("./Image/switzerland.avif");
  
  return (
    <>
    <section className='py'>
        <div className='data'> 
       <p>Travel Diaries</p>
        </div>
    </section>

    <section className='my'>

<div className='box'>
    <div class="card">
    <img src={pic1} alt="Avatar"/>
  <div class="container">
    <h4><b>Santorini</b></h4> 
    <p>Greece</p> 
  </div>
   </div>

   <div class="card">
    <img src={pic2} alt="Avatar"/>
  <div class="container">
    <h4><b>Maafushi Island</b></h4> 
    <p>Maldives</p> 
  </div>
   </div>

   <div class="card">
    <img src={pic3} alt="Avatar"/>
  <div class="container">
    <h4><b>Cinque Terre</b></h4> 
    <p>Italy</p> 
  </div>
   </div>

   <div class="card">
    <img src={pic4} alt="Avatar"/>
  <div class="container">
    <h4><b>Zurich</b></h4> 
    <p>Switzerland</p> 
  </div>
   </div>

   </div>
    </section>

    {/* <section className='py'>
        <div className='data'> 
       <h4>Contact us</h4>
        </div>
    </section>

<section className='my'>


    <div class="row g-3">
  <div class="col">
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
<div class="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>

<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Email address</label>
</div>

</section> */}
    
    </>
  )
}

export default Header