import React from 'react'
import "./Video.css"
// import "./Video/Travel.mp4"
import ReactPlayer from 'react-player'
// import Image from "./Image/Travel.mp4";

const You = () => {
  // let pic="https://images.unsplash.com/photo-1539523459016-4e7e20f887d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  // let pic1= require("./Image/Capture.PNG");
  // let pic2= require("./Video/Travel.mp4");
  return (

    <>
    <section className='bro'>
    <div className='hero'>
  
    <ReactPlayer url='https://www.youtube.com/watch?v=linlz7-Pnvw' controls autoPlay muted loop/>
    {/* <img src={pic1} alt="" /> */}
    {/* <video controls >
    <source src= {"./Video/Travel.mp4"} type="video/mp4" />
    </video> */}

    </div>
    </section>
    </>
  )
}

export default You