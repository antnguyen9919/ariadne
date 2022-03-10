import '../../App.css';
import React from 'react';
import MunichOffice from '../../Resources/Photos/Pages/Navigation/MunichOffice.png';
import navigate from '../../Resources/Photos/Pages/Navigation/navigate.png';
import phone3 from '../../Resources/Photos/Pages/Navigation/phone3.png';
import h1 from '../../Resources/Photos/h1.gif';
function Navigation() {
  return <div>
  <div className="container-fluid bg-dark text-white">
    <div className="row align-items-center">
      <div className="col-md-6 align-self-center">
        <h1>Ariadne Analytics</h1>
        <h6>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it</h6>
        </div>
        <div className="col-md-6">
          <img src={MunichOffice} alt="" height={'500px'} width = '80%' />
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
        <img src={h1} alt="" width = '90%' />
        </div>
      </div>
        </div>
        <hr />
        <div className="container">
      <div className="row align-items-center justify-content-center">
      <div className="col-md-6">
      <h2>Indoor Positioning Services (IPS)</h2>
            <p>We offer Indoor GPS, which assists customers and users in determining the most efficient route to their destination. Customers can also customize their routes by adding stops for more efficient planning.
</p>
            <h2>Efficient Ad Placement</h2>
            <p>Targeted marketing campaigns connected to customers’ destination location are achievable using Ariadne Navigation.
We enable and lead you to hyperlocal marketing.</p>
        </div>
      <div className="col-md-6">
        <img src={navigate} alt="" width = '400px' height = "300px" />
        </div>
      </div>
        </div>
        <hr />
        <div className="container">
      <div className="row align-items-center justify-content-center">
      <div className="col-md-6">
        <img src={phone3} alt="" width = '400px' height = "300px" />
        </div>
      <div className="col-md-6">
      <h2>Seamless Customer Experience</h2>
            <p>Ariadne Navigation allows you to provide seamless customer experience right from visitors’ entry in your premises. We give the opportunity to learn about your customers' navigation patterns, which you can utilize to optimise your business strategies.

</p>
            
        </div>
      
      </div>
        </div>
        
        
  </main>
</div>;
}

export default Navigation;
