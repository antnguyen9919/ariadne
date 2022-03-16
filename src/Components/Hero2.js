import React from 'react'
// import Wall2 from '../Resources/Videos/Wall2.mp4';
import Hero2vid from '../Resources/Videos/Hero2vid.mp4'
import WPPGIF from '../Resources/Photos/WPPGIF.gif';
const Hero2 = () => {
  return (
    
	
	<div style = {{backgroundColor:'#2F303A'}}>
<div className = ' container-fluid   d-xxl-none align-items-end text-light mt-5 pt-3' >
		
		<div className="row align-items-center justify-content-center">
				<div className="col-md-4 mb-5 p-0 px-1 offset-1">
					
				<h1 style ={{fontFamily:'Poppins',fontSize:'43px'}} className='mb-3 lh-sm fw-bold text-left'>People Flow To<br/> Actionable Insights</h1>
				<p class='my-2 lh-md ' style ={{fontFamily:'Poppins'}}>Turn your existing customer traffic into an additional<br/> source of revenue</p>
                        <button type="button" class="hero-button mt-3"><p class='my-1 mx-3     lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button>
					
				</div>

				<div className="col-md-7 mt-5">
				<video src = {Hero2vid} class="d-block mx-lg-auto" autoPlay muted loop type = "videos/mp4" style = {{width: '103%'}}/>
				</div>
			</div>
		
			
	</div>
	<div className = 'container d-none d-xxl-block align-items-end text-light mt-5 pt-3' >
		
		<div className="row align-items-center ">
				<div className="col-md-4 offset-1 col-sm-10">
					
				<h1 style ={{fontFamily:'Poppins'}} className='mb-3 lh-sm fw-bold text-left'>People Flow To<br/> Actionable Insights</h1>
				<p class='my-2 lh-md ' style ={{fontFamily:'Poppins'}}>Turn your existing customer traffic into an additional<br/> source of revenue</p>
                        <button type="button" class="hero-button mt-3"><p class='my-1 mx-3     lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button>
					
				</div>
				<div className="col-md-7 mt-5">
				<video src = {Hero2vid} class="d-block mx-lg-auto" autoPlay muted loop type = "videos/mp4" style = {{width: '100%'}}/>
				</div>
			</div>
		
			
	</div>
	
	</div>


	
  )
}

export default Hero2