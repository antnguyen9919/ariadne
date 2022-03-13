import '../../App.css';
import './analytics.css'
import React from 'react';
import analytics from '../../Resources/Photos/Pages/analytics.jpg';
import h1 from '../../Resources/Photos/h1.gif';
import Floor1 from '../../Resources/Photos/Pages/Analytics/Floor1.png';
import Floor2 from '../../Resources/Photos/Pages/Analytics/Floor2.png';
import Total from '../../Resources/Photos/Pages/Analytics/Total.png';
import Daily from '../../Resources/Photos/Pages/Analytics/Daily.png';
import Laptopwp from '../../Resources/Photos/Pages/Analytics/Laptopwp.png';
import h1a from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h1a.png'
import h2 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h2.png'
import h3 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h3.png'
import h4 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h4.png'
import h5 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h5.png'
import h6 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h6.png'
import h7 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h7.png'
import h8 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h8.png'
import h9 from '../../Resources/Photos/Pages/Analytics/BasicAnalytics/h9.png'
import h10 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h10.png'
import h11 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h11.png'
import h12 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h12.png'
import h13 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h13.png'
import h14 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h14.png'
import h15 from '../../Resources/Photos/Pages/Analytics/AdvancedAnalytics/h15.png'


function Analytics() {
  return <div>
  <div className="container-fluid bg-dark text-white" >
    <div className="row align-items-center">
      <div className="col-md-4 align-self-center offset-1 col-sm-12">
        <h1 class = 'lh-md'>Ariadne <br/> Analytics</h1>
        <p>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={Laptopwp} alt="" id = 'lap_wp'/>
          </div>
      </div>
    </div>

  <main>
      <div className="container-fluid" id = 'open' style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row p-5 align-items-center">
      <div className="col-md-5 offset-1">
        
        <h6>Ariadne Analytics is the heart of the Ariadne Platform, and it can be used for people counting, determine retail conversion rates , reduce dwell timesand other useful customer success metrics. We place a high importance on privacy and employ anonymous tracking systems.</h6>
        </div>
      <div className="col-md-5 col-sm-12">
        <img src={h1} alt="" width = '100%' />
        </div>
      </div>
        </div>

        <div className="analytics-whole">
        <div className="container text-center m-5 px-4" id = 'analytics-whole'>
          <h1>Real-Time Analytics</h1>
          <p>When do your consumers prefer to shop during the day, and how many people are now in your store and where are they located? We provide answer to those questions with our intuitive dashboard.</p>
          <div className="row mt-5 justify-content-between mb-3">
            <div className="col-md-3">
              <img src={Total} alt="" class = 'img-fluid' />
              </div>
            <div className="col-md-3">
            <img src={Floor1} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3">
            <img src={Floor2} alt="" class = 'img-fluid'/></div>
            
            </div>
            <div className="row mt-3">
            <img src={Daily} alt="" />
              </div>

          </div>
         
          
          <div className="container mt-5 text-center mb-5 px-4" >
          <h2 class = 'display-5 fw-bold mb-5'>Basic Analytics</h2>
          <h6>Recognize the most visited areas of your establishment and tailor your services there to improve your customer´s experience. </h6>
            <div className="row mt-5 justify-content-between mb-5">
            

         
              <div className="col-md-3">
              <img src={h1a} alt="" />
                </div>
              <div className="col-md-3"><img src={h2} alt="" class = 'img-fluid'/></div>
              <div className="col-md-3"><img src={h3} alt="" class = 'img-fluid'/></div>
              </div>
              <h6>Understand what interests your customers, and how much time do they spend to each section in your premises? Take advantage of and cater to your customers' needs.</h6>

            <div className="row mt-5 justify-content-between mb-5">
            <div className="col-md-3"><img src={h4} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3"><img src={h5} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3"><img src={h6} alt="" class = 'img-fluid'/></div>
            
              
              </div>
              <h6>Employ our queue management system to get notified when client wait times near the cashier counter are getting longer and reduce the dwell time. </h6>
            <div className="row mt-5 justify-content-between mb-5">
            <div className="col-md-3"><img src={h7} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3"><img src={h8} alt="" class = 'img-fluid'/></div>
            <div className="col-md-3"><img src={h9} alt="" class = 'img-fluid'/></div>
              </div>

              <h2 class = 'display-5 fw-bold mb-5'>Advanced Analytic</h2>

              <h6>Cool graphics and intuitive heat maps for your entire store that you may use to better manage your space.       </h6>

              <div className="row mt-5 justify-content-around mb-5">
                <div className="col-md-5">
                <img src={h10} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-md-5">
                <img src={h11} alt="" class = 'img-fluid'/>
                  </div>
                </div>
                <h5>Utilize our user-friendly graphs to plan practical activities and to improve your operational strategies.</h5>

                <div className="row mt-5 justify-content-around mb-5">
                <div className="col-md-5">
                <img src={h12} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-md-5">
                <img src={h13} alt="" class = 'img-fluid'/>
                  </div>
                </div>
                <h5>Study your store's customer flow patterns and concentrate on them to improve your customers Journey and boost your profits.</h5>
                <div className="row mt-5 justify-content-around mb-5">
                <div className="col-md-5">
                <img src={h14} alt="" class = 'img-fluid'/>
                  </div>
                  <div className="col-md-5">
                <img src={h15} alt="" class = 'img-fluid'/>
                  </div>
                </div>
            </div>
            <div style = {{height:'200px'}} class="p-3 mb-2 bg-dark text-white text-center font-weight-bold justify-content-between">
            <div className="row">
            <h1>Work Together?</h1>

              </div>
            
            <button type="button" class="btn btn-success">Success</button>
            
            
          </div>
          
          
          
          </div>

        
  
  
  

 
  </main>
</div>;
}

export default Analytics;
