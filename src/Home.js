import React from 'react';
// import backgroundvid from './Resources/Videos/backgroundvid.mp4';
import home from './Resources/Videos/home.mp4';
import './Home.css';
import HeroSection from './Components/HeroSection';


function Home() {
  return <div class = "cov">
      
<HeroSection/>

   

<main>
  <div className="intro-area">
    <h1>Unlock the value of your data and multiply your returns!</h1>
  <p>Ariadne is considered to be the Google Analytics of the physical world. Ariadne helps you to analyze your visitors behavior, it consults you on strategies, and provides you with recommendations for the future.</p>
  </div>
  

  <video id="intro-video" src = {home} controls/>


      <div className="testimonials">
      <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  
    
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <div className="caro-card long">
     

    <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/Grabert.png"  alt="..."/>
    
      <p> <b>"</b> When they said "We are the Google Analytics of the physical world", they were not kidding! Thanks to Ariadne Maps, I have now reliable data and numbers about the visitors on my shopping centre. We can now use this information to make better decisions and optimize the customer experience<b>"</b> <br/><br/>
      <b>Thomas Grabert</b><br/>
      Ö-Center Mall, Managing Director
      </p>
     
    

      </div>
    </div>
    <div class="carousel-item" >
    <div className="caro-card"> 
    <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/Atlantis.png"  alt="..."/>
   
    <p><b>"</b>Your devices are like beacons on steroids<b>"</b> <br/><br/>
      <b>Anthony Lynsdale</b><br/>
      Atlantis The Palm, VP Information Technology
    </p>
    
     

    </div>
    </div>
    <div class="carousel-item" >
      <div className="caro-card">

    <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/DB.png"  alt="..."/>
    
    <p><b>"</b>You presented to us what we were expecting to see in at least 7 years<b>"</b>
    <br/><br/><b>Janis Diekmann</b> <br/>Deutsche Bahn, Innovation Manager
    </p>
    
     
      

      </div>
    </div>
    <div class="carousel-item">
        <div className="caro-card">

    <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/Glasgow.png"  alt="..."/>
   
    <p>
      <b>"</b>I cannot think of anyone who does not need your devices  <b>" </b>
    <br/><br/>
     <b>Gordon Bain</b><br/>
    Glasgow Airport, Head of Project Delivery
    </p>
    
      

        </div>
    </div>
  </div>

  

    
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  
</div>




 

</div>


</main>






  </div>

}

export default Home;
