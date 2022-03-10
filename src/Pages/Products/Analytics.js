import '../../App.css';
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
  <div className="container-fluid bg-dark text-white">
    <div className="row align-items-center">
      <div className="col-md-6 align-self-center">
        <h1>Ariadne Analytics</h1>
        <h6>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it</h6>
        </div>
        <div className="col-md-6">
          <img src={Laptopwp} alt="" />
          </div>
      </div>
    </div>
  <main>
      <div className="container">
      <div className="row align-items-center ">
      <div className="col-md-6">
        <h3>Ariadne Analytics</h3>
        <p>Discover your own establishments people counting, customer Heatmaps, conversion rate, footfall rate and other insightful metrics.
You can monitor your performance in real time with Ariadne analytics.</p>
        </div>
      <div className="col-md-6">
        <img src={h1} alt="" width = '100%' />
        </div>
      </div>
        </div>


        <div className="container">
          <h1>Real-Time Analytics</h1>
          <p>When do your consumers prefer to shop during the day, and how many people are now in your store and where are they located? We provide answer to those questions with our intuitive dashboard.</p>
          <div className="row">
            <div className="col-md-4">
              <img src={Total} alt=""width={'100%'} />
              </div>
            <div className="col-md-4">
            <img src={Floor1} alt="" width={'100%'}/></div>
            <div className="col-md-4">
            <img src={Floor2} alt="" width={'100%'}/></div>
            
            </div>
            <div className="row">
            <img src={Daily} alt="" />
              </div>

          </div>
          <br />
          
          <div className="container">
            <div className="row">
            <h2>Basic Analytics</h2>
          <h6>Recognize the most visited areas of your establishment and tailor your services there to improve your customer´s experience. </h6>
              <div className="col-md-4">
              <img src={h1a} alt="" />
                </div>
              <div className="col-md-4"><img src={h2} alt="" width={'100%'}/></div>
              <div className="col-md-4"><img src={h3} alt="" width={'100%'}/></div>
              </div>
              <h6>Understand what interests your customers, and how much time do they spend to each section in your premises? Take advantage of and cater to your customers' needs.</h6>
            <div className="row">
            <div className="col-md-4"><img src={h4} alt="" width={'100%'}/></div>
            <div className="col-md-4"><img src={h5} alt="" width={'100%'}/></div>
            <div className="col-md-4"><img src={h6} alt="" width={'100%'}/></div>
            <h6>Employ our queue management system to get notified when client wait times near the cashier counter are getting longer and reduce the dwell time. </h6>
              
              </div>
            <div className="row">
            <div className="col-md-4"><img src={h7} alt="" width={'100%'}/></div>
            <div className="col-md-4"><img src={h8} alt="" width={'100%'}/></div>
            <div className="col-md-4"><img src={h9} alt="" width={'100%'}/></div>
              </div>

              <h2>Advanced Analytic</h2>
              <h6>Cool graphics and intuitive heat maps for your entire store that you may use to better manage your space.       </h6>
              <div className="row">
                <div className="col-md-6">
                <img src={h10} alt="" width={'100%'}/>
                  </div>
                  <div className="col-md-6">
                <img src={h11} alt="" width={'100%'}/>
                  </div>
                </div>
                <h5>Utilize our user-friendly graphs to plan practical activities and to improve your operational strategies.</h5>
                <div className="row">
                <div className="col-md-6">
                <img src={h12} alt="" width={'100%'}/>
                  </div>
                  <div className="col-md-6">
                <img src={h13} alt="" width={'100%'}/>
                  </div>
                </div>
                <h5>Study your store's customer flow patterns and concentrate on them to improve your customers Journey and boost your profits.</h5>
                <div className="row">
                <div className="col-md-6">
                <img src={h14} alt="" width={'100%'}/>
                  </div>
                  <div className="col-md-6">
                <img src={h15} alt="" width={'100%'}/>
                  </div>
                </div>
            </div>
            <div style = {{height:'200px'}} class="p-3 mb-2 bg-dark text-white text-center font-weight-bold justify-content-between">
            <div className="row">
            <h1>Work Together?</h1>

              </div>
            
            <button type="button" class="btn btn-success">Success</button>
            
            
          </div>
  
  {/* <iframe src="https://calendly.com/georgios-ariadnemaps/30min?month=2022-03" frameborder="0" width='100%' height='1000px' ></iframe> */}
  

 
  </main>
</div>;
}

export default Analytics;
