import React from 'react';

import './Home.css';
import HeroSection from './Components/HeroSection';

import Button from './Components/Button';
import screens from './Resources/Photos/screens.png';
import s1 from './Resources/Photos/inf/s1.png';
import s2 from './Resources/Photos/inf/s2.png';
import s3 from './Resources/Photos/inf/s3.png';
import s4 from './Resources/Photos/inf/s4.png';
import s5 from './Resources/Photos/inf/s5.png';
import s6 from './Resources/Photos/inf/s6.png';
import s7 from './Resources/Photos/inf/s7.png';
import s8 from './Resources/Photos/inf/s8.png';
import s9 from './Resources/Photos/inf/s9.png';
import s10 from './Resources/Photos/inf/s10.png';
import s11 from './Resources/Photos/inf/s11.png';
import s12 from './Resources/Photos/inf/s12.png';
import s13 from './Resources/Photos/inf/s13.png';
import h1 from './Resources/Photos/h1.gif';
import h2 from './Resources/Photos/h2.gif';
import h3 from './Resources/Photos/h3.gif';
import h4 from './Resources/Photos/h4.gif';
import HomePost from './Components/HomePost';
import ProductSection from './Components/ProductSection';


function Home() {
  return <div >
      
<HeroSection/>


   

<main>

  <div className="slider-mine">
    <div className="slider-track-mine">
        <div className="slide-mine"><img src ={s1} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s2} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s3} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s4} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s5} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s6} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s7} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s8} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s9} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s10} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s11} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s12} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s13} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s1} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s2} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s3} alt = "slider-img"/></div>
        <div className="slide-mine"><img src ={s4} alt = "slider-img"/></div>

    </div>
    
  
  </div>
  

  <div className = 'intro-1'>
  <h1>Unlock the value of your data and multiply your returns!</h1>
      <div className="block-1">
        <img src={screens}  width='50%'  />

        <p>Create a Free Account now to see our Demo
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda odio iusto veritatis esse dolore eligendi aperiam consequatur, pariatur sit. Qui aliquid tenetur numquam odio quod molestiae quae doloribus. Dignissimos.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eveniet cupiditate quisquam amet, culpa laborum deleniti in cumque magnam. Quasi maiores consequuntur vero veniam tempora id sequi corrupti, vitae ipsum! Fugit recusandae quas aliquam praesentium quam reprehenderit fuga dolor ex odio est rem, repellat neque aperiam maiores nulla aut provident.
        </p>
      </div>
  </div>

  
  <div className="small-divider">
      <h4>Get more from your traffic</h4>
      <h4>Learn how Ariadne can transform your business</h4>
      <Button buttonStyle='btn--primary'>Discover the industries</Button>
  </div>

  <div className="vid-section">

  </div>
    
  <div className="home-article">
          <h1>What is Ariadne Maps all about?</h1>
          <p>Ariadne Maps is the physical world's Google Analytics. Ariadne Maps expertise lies in Indoor and Outdoor analytics and Indoor Positioning services.
How does Ariadne add value to you?
Ariadne analyzes your customers journey and behavior and assists you in developing data-driven initiatives, operating and marketing strategies. 
Who can benefit from Ariadne´s Services?
We have a solution for every industry right from Retail establishments to Airport Terminals.
          </p>


      </div>

    <HomePost title = "Ariadne Analytics" texts="Discover your own establishments people counting, customer Heatmaps, conversion rate, footfall rate and other insightful metrics.
You can monitor your performance in real time with Ariadne analytics.
" image = {h1}/>
    <HomePost title = "Ariadne Navigation" texts="Enhance your visitors, guests and customer´s experience by navigating them! 
Present dynamic and localized promotions to boost the satisfaction level of your visitors.
" image = {h2} color = "gray"/>
    <HomePost title = "Ariadne Engagement" texts="Ariadne enables your visitors to opt-in to your loyalty program! 
The opt-in feature enables you to push notifications to your visitors the right moment.
" image = {h3}/>
    <HomePost title = "Ariadne Mapping" texts="Transform your physical business into a digital landscape.
By enabling you to map and localize your products, Ariadne increases your efficiency.
" image = {h4} color = "gray"/>
  

      <hr/>

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
    <br/><br/>
      <b>Anthony Lynsdale</b><br/>
      Atlantis The Palm, VP Information Technology
    </p>
    
     

    </div>
    </div>
    <div class="carousel-item" >
      <div className="caro-card">

    <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/DB.png"  alt="..."/>
    
    <p><b>"</b>You presented to us what we were expecting to see in at least 7 years<b>"</b>
    <br/><br/><br/><br/><b>Janis Diekmann</b> <br/>Deutsche Bahn, Innovation Manager
    </p>
    
     
      

      </div>
    </div>
    <div class="carousel-item">
        <div className="caro-card">

    <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/Glasgow.png"  alt="..."/>
   
    <p>
      <b>"</b>I cannot think of anyone who does not need your devices  <b>" </b>
    <br/><br/><br/><br/>
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
<ProductSection/>


</main>






  </div>

}

export default Home;
