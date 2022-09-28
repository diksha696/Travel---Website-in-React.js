import React from 'react'
import "./Video.css";
import ReactPlayer from 'react-player/'

const Video = () => {
    // let file="https://www.youtube.com/watch?v=UXJA-7mQUmc";
  return (
    <>
    <section className='section-3'>
<div className='data'>
  <h4>Top Travel Destinations</h4>
  </div>

    <section className='myvideo'> 
    <div className="video-box">
    <ReactPlayer url={'https://www.youtube.com/watch?v=oHdecbMrcbI&feature=emb_rel_pause'} controls autoPlay muted loop/>
    </div>
    {/* <ReactPlayer url={'https://www.youtube.com/watch?v=FlRwssZYRM0'} controls autoPlay muted loop/> */}
    
    {/* <video src= "https://www.youtube.com/watch?v=UXJA-7mQUmc" autoplay loop muted/> */}
    {/* <h4>hello guys</h4>
    <h5>go for a trip now!!</h5> */}

    {/* <div className='btn-box'>
      <button className='btn2'>Get Started</button>
    </div> */}

<div className="video-box">
    <ReactPlayer url={'https://www.youtube.com/watch?v=CxwJrzEdw1U'} controls autoPlay muted loop/>
    </div>

    </section>
    
</section>




{/* <section class="dynamic-video-wrapper" data-overlay-dark="3">
        <video width="100%" height="100%" autoplay="autoplay" muted="" preload="auto" loop="loop">
            <source src="img/travel-video.mp4" type="video/mp4">
        </video>
        <div class="wrap-content v-middle">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <h1><a href="tour-details.html">Costa Victoria Cochin</a></h1>
                        <h4><i class="ti-location-pin"></i> Maldives &nbsp;&nbsp; <i class="ti-timer"></i> 4 Days + 3 Nights</h4>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    </>
    
  )
}

export default Video
