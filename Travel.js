import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Travel.css";

const Travel = () => {
    let pic1= require('./Image/travel.jpg');
    // let pic1="https://images.unsplash.com/photo-1626606076701-cf4ae64b2b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
    
    const[isMobile,setisMobile]= useState("false");
      
      return (
        <>
        {/* navbar code */}
         <nav className='navbar'>
    
            {/* this is the logo */}
            {/* <h3 className='logo'>LOGO</h3> */}
            <div className='logobox'>
            <img src={pic1} alt='sorry' className='logo1'/>
            </div>
           
    
            {/* menu link code starts*/}
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
            onClick={() => setisMobile(false)}>
    
                <Link to="/" className='home'>
                    <li>Home</li>
                </Link>
                
                <Link to="/about" className='about'>
                    <li>About</li>
                </Link>
    
                <Link to="/blogs" className='blogs'>
                    <li>Blogs</li>
                </Link>
    
                <Link to="/contact" className='contact'>
                    <li>Contact</li>
                </Link>
    
                {/* <Link to="/signup" className='signup'>
                    <li>Sign-Up</li>
                </Link>
    
                <Link to="/login" className='login'>
                    <li>Log-In</li>
                </Link> */}
    
            </ul>
    
             {/* button for mobile setup */}
    
             <button className='mobile-menu-icon'
               onClick={() => setisMobile(!isMobile)}>
                {isMobile ? (
                    <i className='fas fa-times'></i>
                ) : (
                    <i className='fas fa-bars'></i>
                )}
             </button>
    
         </nav>
    
            {/* hero section  */}
          
           <section className="hero-section">
           <div class="container">
           <div className='content'>
           <h5>Welcome to Travel.com</h5>
           <br/>
            {/* <p>Travel across different countries with us</p> */}
            </div>

            <div className='content1'>
           <p>Travel across different countries with us</p>
            </div>

            <div className='content3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                , eos neque porro minima 
                incidunt cumque, voluptatum, ex
            hic soluta quam dolores fuga! Recusandae.</p>
            </div>

            <div className='content2'>
           <button className='btn'>Show more</button>
            </div>

           </div>
          </section>  
        </>
      )
    }
    
    
export default Travel;