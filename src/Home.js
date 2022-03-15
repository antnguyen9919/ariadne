import React from 'react';

import './Home.css';
import HeroSection from './Components/HeroSection';
import CheckIcon from '@mui/icons-material/Check';

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
import VidCaro from './Components/VidCaro';
import Testimonials from './Components/Testimonials';
import Hero2 from './Components/Hero2';


function Home() {
  return <div className = 'home-all'>
      
<HeroSection/>


  
   

<main >
  <div className="container-fluid mb-5 shadow-sm py-2">
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
    
    </div>
  
    <div class = 'container text-align-center text-center mt-5 px-5'> 
    <h1 class='display-4 fw-bold' style ={{fontFamily:'Poppins'}}>Unlock the value of your data and multiply your returns!</h1>

    </div>

    
    
  <div className="container-fluid mb-2 align-items-center py-5 shadow-sm">
      <div className="row align-items-center" >
        
          <div className="row justify-content-around">
          <div className="col-md-7">
        <img src={screens} class = 'img-fluid'/></div>

        <div className="col-lg-4  text-md-start text-sm-center">
        
        <div >
        <h6 class = 'lh-lg mb-4'>Ariadne is considered to be the Google Analytics of the physical world. Ariadne helps you to analyze your visitors’ behavior, it consults you on strategies, and provides you with recommendations for the future.
        </h6>
        
        
      <p><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Footfall (Total and by area)</p>
      <p><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Dwell Time(Total and by area)</p>
      <p><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Heatmap (2D and 3D)</p>
      <p><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Transitions between areas)</p>
      <p><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      ERP, BI, POS Integration</p>
        
        <div>

      
       



        </div>

          </div>
          </div>
            </div>
        </div>
    </div>
      

     
  
 

    {/* <VidCaro/> */}

  <div className="vid-section">

  </div>
    
  
      <div className="container p-5">
        <div class = 'text-center'> <h1>What is Ariadne Maps all about?</h1> </div>
        <div class ='fs-1 pt-4' >
        <p class = 'lh-lg fs-5'>Ariadne Maps is the physical world's Google Analytics. Ariadne Maps expertise lies in Indoor and Outdoor analytics and Indoor Positioning services.
How does Ariadne add value to you?
Ariadne analyzes your customers journey and behavior and assists you in developing data-driven initiatives, operating and marketing strategies. 
Who can benefit from Ariadne´s Services?
We have a solution for every industry right from Retail establishments to Airport Terminals.
          </p>
        </div>
      </div>

      <div class = 'text-center px-5'> <h1>The Ariadne Platform</h1> </div>
    
<div className="container-fluid flex-column">
    <div className="row align-items-center mt-5 py-2 justify-content-center p-5 ">
      <div className="col-md-6  ">
        <h1 class = '  display-xxl-5'>Ariadne Analytics</h1>
        <p class = 'mt-4 fs-5'>Obtain people counting, heatmaps, loyalty rate and more!<br/>
        <br/>

With Ariadne analytics, you can review your performance in real time.</p>
        </div>
      <div className="col-md-5">
        <img src={h1} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>

      <div className="row align-items-center mt-5 justify-content-around p-5 " style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-md-6">
        <h1 >Ariadne Navigation</h1>

        <p class = 'mt-4 fs-5'>Navigate your visitors and guests for an enhanced experience!
<br/> <br/>
Present promotions in your map to engage and enhance your visitors satisfaction.</p>
        </div>
      <div className="col-md-5">
        <img src={h2} alt="" class="img-fluid rounded  shadow"  />
        </div>
      </div>
      <div className="row align-items-center mt-5 justify-content-around p-5 ">
      <div className="col-md-6">
        <h1>Ariadne Engagement</h1>
        <p class = 'mt-4 fs-5'>Ariadne enables your visitors to opt-in to your loyalty program!
        <br/> <br/>
The opt-in feature enables you to push notifications to your visitors the right moment.</p>
        </div>
      <div className="col-md-5">
        <img src={h3} alt=""class="img-fluid rounded shadow"  />
        </div>
      </div>
      <div className="row align-items-center mt-5 mb-5 justify-content-around p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-md-6">
        <h1>Ariadne Mapping</h1>
        <p class = 'mt-4 fs-5'>Transform your physical business into a digital landscape.
        <br/> <br/>
By enabling you to map and localize your products, Ariadne increases your efficiency.</p>
        </div>
      <div className="col-md-5">
        <img src={h4} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
  </div>
  

      

      
<Testimonials/>
<ProductSection/>
{/* <div className="container-fluid text-center h-75 my-5">
  <h1>Spotlight</h1>
  
  </div> */}


<div className="container text-center mb-5">
<h1>LET'S TALK</h1>
<h5>Schedule a free 30 minute demo call with an expert</h5>
  </div>
<iframe src="https://calendly.com/georgios-ariadnemaps/30min?month=2022-03" frameborder="0" width='100%' height='800px' ></iframe>


</main>






  </div>

}

export default Home;
