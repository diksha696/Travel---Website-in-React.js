import React from 'react'
import "./Footer.css"

const Footer = () => {
    let pic2 = require("./Image/travelme.jpg");
  return (
    <>
    <section className='section-3'>
   <div className='data'>
  <h4>Footer</h4>
  </div>
  </section>


<footer class="footer-distributed">

			<div class="footer-left">

				{/* <h3>Company<span>logo</span></h3> */}

                <div className='mylogo'>
            <img src={pic2} alt='' className='logme'/>
            </div>

				{/* <p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">Blog</a>
				
					<a href="#">Pricing</a>
				
					<a href="#">About</a>
					
					<a href="#">Faq</a>
					
					<a href="#">Contact</a>
				</p> */}

				<p class="footer-company-name"> © Copyright All rights reserved , Travel 2022</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>S.C.O-23, Sector-34, 2nd Floor</span> Chandigarh, India</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+917565890432</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="customercare@travel.com">customercare@travel.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About travel</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
                     euismod convallis velit, eu auctor lacus vehicula sit amet.
                     Quas, eos neque porro minima 
                incidunt cumque, voluptatum, ex
            hic soluta quam dolores fuga! Recusandae.
				</p>

				{/* <div class="footer-icons">

					<a href="#facebook"><i class="fa fa-facebook"></i></a>
					<a href="#twitter"><i class="fa fa-twitter"></i></a>
					<a href="#linkdin"><i class="fa fa-linkedin"></i></a>
					<a href="#github"><i class="fa fa-github"></i></a>

				</div> */}

			</div>

		</footer>
    </>
   
  )
}

export default Footer