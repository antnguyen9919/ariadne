import React from 'react'
import Wall2 from '../Resources/Videos/Wall2.mp4';
import WPPGIF from '../Resources/Photos/WPPGIF.gif';
const Hero2 = () => {
  return (
    
  

<div class="container-fluid col-xxl-8 px-4 py-5 text-light mb-5" style = {{backgroundColor:'rgba(47, 48, 58, 1)'}}>

	<div class="row flex-lg-row-reverse g-5 py-5">
		<div class="col-10 col-sm-10 col-lg-7 offset-1 align-self-end">
			
      <video src = {Wall2} class="d-block mx-lg-auto" autoPlay muted loop type = "videos/mp4" style = {{width: '100%', marginBottom:'-10px '}}/>
		</div>
		<div class="col-lg-4">
			<div class="lc-block mb-3">
				<div editable="rich">
					<h2 class="fw-bold display-5">Get To Know Your Customers!</h2>
				</div>
			</div>

			<div class="lc-block mb-3">
				<div editable="rich">
					<p class="lead">Turn your existing customer traffic into an additional source of revenue.
					</p>
				</div>
			</div>

			<div class="lc-block d-grid gap-2 d-md-flex justify-content-md-start"><a class="btn btn-danger px-4 me-md-2" href="#" role="button">Let's Talk</a>
      
			</div>

		</div>
	</div>
</div>
  )
}

export default Hero2