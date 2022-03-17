import React from 'react';

import './Home.css';

import CheckIcon from '@mui/icons-material/Check';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import screens from './Resources/Photos/screens.png';

import h1 from './Resources/Photos/h1.gif';
import h2 from './Resources/Photos/h2.gif';
import h3 from './Resources/Photos/h3.gif';
import h4 from './Resources/Photos/h4.gif';

import ProductSection from './Components/ProductSection';

import Testimonials from './Components/Testimonials';
import Hero2 from './Components/Hero2';
import VideoCarousel from './Components/VideoCarousel';
import BrandCarousel from './Components/BrandCarousel';






function Home() {
  return <div className = 'home-all'>
      

<Hero2/>


  
   

<main >
  

    <BrandCarousel/>
  
    <div class = 'container text-align-center text-center mt-5 px-5'> 
    <h1 class='fw-bold' style ={{fontFamily:'Poppins'}}>Unlock the value of your data and<br/> multiply your returns!</h1>

    </div>

    
    {/* Intro section  */}
  <div className="container-fluid d-xxl-none mb-2 align-items-center py-5 shadow-sm mt-4">
    
      <div className="row align-items-center" >
        
          <div className="row justify-content-center">
          <div className="col-md-6">
        <img src={screens} class = 'img-fluid'/>
        </div>
        
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
        
    <div className="row justify-content-start">
      <div className="col-md-2 offset-md-3">
      <button type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
       <p class = 'fs-5'><AddCircleOutlineIcon style = {{fontSize:'100%',paddingBottom:'3px'}}/> Enlarge</p>
       
</button>
      </div>
    </div>

    </div>

    <div className="container-fluid d-none d-xxl-block mb-2 align-items-center py-5 shadow-sm mt-4">
    
      <div className="row align-items-center" >
        
          <div className="row justify-content-center">
          <div className="col-md-6">
        <img src={screens} class = 'img-fluid'/>
        </div>
        
          <div className="col-lg-4  text-md-start text-sm-center">
        
        <div >
        <h2 class = 'lh-lg mb-4'>Ariadne is considered to be the Google Analytics of the physical world. Ariadne helps you to analyze your visitors' behavior, it consults you on strategies, and provides you with recommendations for the future.
        </h2>
        
        
      <p className='fs-3'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Footfall (Total and by area)</p>
      <p className='fs-3'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Dwell Time(Total and by area)</p>
      <p className='fs-3'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Heatmap (2D and 3D)</p>
      <p className='fs-3'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      Transitions between areas)</p>
      <p className='fs-3'><span style = {{paddingRight: '25px'}}><CheckIcon /></span>      ERP, BI, POS Integration</p>
        
        <div>
        </div>

          </div>
          </div>
          
            </div>
            
        </div>
        
    <div className="row justify-content-start">
      <div className="col-md-2 offset-md-3">
        
      <button type="button" class="btn text-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
       <p class = 'fs-2'><AddCircleOutlineIcon style = {{fontSize:'100%',paddingBottom:'3px'}}/> Enlarge</p>
       
</button>
      </div>
    </div>

    </div>
    
{/* Vid Carousel  text */}
    <div className="container text-align-center text-center mt-5 px-5">
    <h1 class='fw-bold text-center' style ={{fontFamily:'Poppins'}}>See how our customers are succeeding<br/> with Ariadne</h1>
    </div>
    <VideoCarousel/>
  
     <hr />
{/* Ariadne Platform  */}
      <div class = 'text-center px-5 mt-5'> <h1 class='fw-bold' style ={{fontFamily:'Poppins'}}>The Ariadne Platform</h1> </div>
    
<div className="container-fluid flex-column">
    <div className="row align-items-center mt-5 py-2 justify-content-center   p-5 ">
      <div className="col-md-6  ">
        <h1 class = '  display-xxl-5'>Ariadne Analytics</h1>
        <p class = 'mt-4 fs-5'>Obtain people counting, heatmaps, loyalty rate and more!<br/>
        <br/>

With Ariadne analytics, you can review your performance in real time.</p>
        </div>
      <div className="col-md-4">
        <img src={h1} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
      
      <div className="row align-items-center mt-5 justify-content-center  p-5 " style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-md-6">
        <h1 >Ariadne Navigation</h1>

        <p class = 'mt-4 fs-5'>Navigate your visitors and guests for an enhanced experience!
<br/> <br/>
Present promotions in your map to engage and enhance your visitors satisfaction.</p>
        </div>
      <div className="col-md-4">
        <img src={h2} alt="" class="img-fluid rounded  shadow"  />
        </div>
      </div>

      <div className="row align-items-center mt-5 justify-content-center  p-5 ">
      <div className="col-md-6">
        <h1>Ariadne Engagement</h1>
        <p class = 'mt-4 fs-5'>Ariadne enables your visitors to opt-in to your loyalty program!
        <br/> <br/>
The opt-in feature enables you to push notifications to your visitors the right moment.</p>
        </div>
      <div className="col-md-4">
        <img src={h3} alt=""class="img-fluid rounded shadow"  />
        </div>

      </div>
      <div className="row align-items-center mt-5 mb-5 justify-content-center  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="col-md-6">
        <h1>Ariadne Mapping</h1>
        <p class = 'mt-4 fs-5'>Transform your physical business into a digital landscape.
        <br/> <br/>
By enabling you to map and localize your products, Ariadne increases your efficiency.</p>
        </div>
      <div className="col-md-4">
        <img src={h4} alt="" class="img-fluid rounded  shadow" />
        </div>
      </div>
  </div>
  {/* end  */}

      

      
  <div class = 'text-center px-5 my-5'> <h1 class='fw-bold' style ={{fontFamily:'Poppins'}}>Trusted by industry leaders</h1> </div>
<Testimonials/>
<hr />


{/* <Testimo/> */}
<ProductSection/>
{/* <div className="container-fluid text-center h-75 my-5">
  <h1>Spotlight</h1>
  
  </div> */}
  

{/* text  */}
<div className="container d-xxl-none text-center mb-5">
<h1 class='fw-bold mb-4' style ={{fontFamily:'Poppins'}}>Let's talk</h1>
<p class='fs-4 lead'>Schedule a free 30 minute demo call with an expert</p>
  </div>

  <div className="container d-none d-xxl-block text-center mb-5">
<h1 class='fw-bold mb-4 display-3' style ={{fontFamily:'Poppins'}}>Let's talk</h1>
<p class='fs-4 lead'>Schedule a free 30 minute demo call with an expert</p>
  </div>

<iframe src="https://calendly.com/georgios-ariadnemaps/30min?month=2022-03" frameborder="0" width='100%' height='800px' ></iframe>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl ">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="container">
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.nichepursuits.com/wp-content/uploads/2021/11/Screenshot-2021-11-30-at-13.00.06.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.nichepursuits.com/wp-content/uploads/2021/11/Screenshot-2021-11-30-at-13.00.06.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.nichepursuits.com/wp-content/uploads/2021/11/Screenshot-2021-11-30-at-13.00.06.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>



</main>






  </div>

}

export default Home;
