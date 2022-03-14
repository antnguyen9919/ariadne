import '../../App.css';
import React from 'react';
import MunichOffice from '../../Resources/Photos/Pages/Navigation/MunichOffice.png';
import navigate from '../../Resources/Photos/Pages/Navigation/navigate.png';
import phone3 from '../../Resources/Photos/Pages/Navigation/phone3.png';
import h2 from '../../Resources/Photos/h2.gif';
function Navigation() {
  return <div>
  <div className="container-fluid bg-dark text-white px-5">

    <div className="row align-items-center">
      <div className="col-md-6 align-self-center">
        <h1 className='display-2 fw-bold'>Ariadne Navigation</h1>
        <p className='fs-3'>Engage with your visitors at the right time and the right place. Develop strategies targeted to specific clusters of customers</p>
        </div>
        <div className="col-md-6">
          <img src={MunichOffice} alt="" height={'500px'} width = '80%' />
          </div>
      </div>
    </div>
  <main>
  <div className="container-fluid  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row align-items-center justify-content-around ">
      <div className="col-md-6">
        
        <p className='lh-lg fs-4'>Ariadne Navigation performs the indoor navigation and indoor positioning for your business, making it simple for users to locate their destination.<br/>

Ariadne Navigation also provides the user with information about his surroundings and reduces the time he invests in searching.
</p>
        </div>
      <div className="col-md-5">
        <img src={h2} alt="" className='img-fluid rounded shadow' />
        </div>
      </div>
        </div>
        
        <div className="container my-5" >
      <div className="row align-items-center justify-content-around">
      <div className="col-md-5">
      <h3>Indoor Positioning Services (IPS)</h3>
            <p>We offer Indoor GPS, which assists customers and users in determining the most efficient route to their destination. Customers can also customize their routes by adding stops for more efficient planning.
</p>
            <h3 className='mt-5'>Efficient Ad Placement</h3>
            <p>Targeted marketing campaigns connected to customers’ destination location are achievable using Ariadne Navigation.
We enable and lead you to hyperlocal marketing.</p>
        </div>
      <div className="col-md-5" >
        <img src={navigate} alt="" className='img-fluid rounded' />
        </div>
      </div>
        </div>
        
        <div className="container py-5">
      <div className="row align-items-center justify-content-around">
      <div className="col-md-5">
        <img src={phone3} alt="" className='img-fluid' />
        </div>
      <div className="col-md-6">
      <h2>Seamless Customer Experience</h2>
            <p>Ariadne Navigation allows you to provide seamless customer experience right from visitors’ entry in your premises. We give the opportunity to learn about your customers' navigation patterns, which you can utilize to optimise your business strategies.

</p>
            
        </div>
      
      </div>
        </div>
        <div className="container-fluid bg-black text-light text-center my-5 py-5">
          <h1 className='mb-5'>Why Ariadne?</h1>
          <div className="row justify-content-around">
            <div className="col-md-2">
              <p className='fs-4'>Browser-based Navigation</p>
            </div>
            <div className="col-md-2">
            <p className='fs-4'>Award Winning Accuracy</p>
            </div>
            <div className="col-md-2">
            <p className='fs-4'>No Infrastructure Needed</p>
            </div>
            <div className="col-md-2">
            <p className='fs-4'>Multi Storey Differentiation</p>
            </div>
          </div>
        </div>
          <div class = 'text-center'>
            <h1>Discover Use Cases</h1>
          </div>

        <div className="container mt-5 py-5">

        <div class="row justify-content-around" >
  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Mall.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Shopping</a>
        <p class="card-text mt-3 mt-3">Structure the layout and decide on the tenant mix that brings you the most returns</p>
       
      </div>
      
    </div>
  </div>

  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Airport.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Airports</a>
        <p class="card-text mt-3 mt-3">Optimize the revenues of commercial duty free area and minimize the queue times</p>
        
      </div>
      
    </div>
  </div>

  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Train.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Transportation</a>
        <p class="card-text mt-3 mt-3">

Engage with passengers, optimize train scheduling and make better use of your spaces</p>
        
      </div>
      
    </div>
  </div>

  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/City.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Cities</a>
        <p class="card-text mt-3 mt-3">Measure the performance of your shopping streets, increase the visitor satisfaction at government buildings</p>
        
      </div>
      
    </div>
  </div>
  <div class="col-md-2">
    <div class="card border-light">
      <img src="https://ariadnemaps.com/wp-content/uploads/2021/03/Hotel.svg" class="card-img-top" alt="..."/>
      <div class="card-body">
      <a href="#" class="btn btn-primary">Hospitality</a>
        <p class="card-text  mt-3">Provide the best service to your guests, increase their spending and deliver unique experiences</p>
        
      </div>
      
    </div>
  </div>
  
</div>
        </div>
        
        
  </main>
</div>;
}

export default Navigation;
