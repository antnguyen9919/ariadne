import '../../App.css';
import React from 'react';
import h1 from '../../Resources/Photos/h1.gif';
import Phone from '../../Resources/Photos/Pages/Engagement/Phone.png'
import somescreen from '../../Resources/Photos/Pages/Engagement/somescreen.png'
import phone2 from '../../Resources/Photos/Pages/Engagement/phone2.jpg'
import phonewp from '../../Resources/Photos/Pages/Engagement/phonewp.png'
import scan from '../../Resources/Photos/Pages/Engagement/scan.png'

function Engagement() {
  return <div>
  
          <div className="container-fluid bg-dark text-white">
    <div className="row justify-content-around">
      <div className="col-md-5 align-self-center">
        <h1 className='display-2 fw-bold'>Ariadne Analytics</h1>
        <p className='fs-3'>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it</p>
        </div>
        <div className="col-md-5 align-self-end">
          <img src={phonewp} alt="" class = 'img-fluid' />
          </div>
      </div>
    </div>
  <main>
  
  <div className="container-fluid  p-5" style = {{backgroundColor: '#f2f2f2'}}>
      <div className="row align-items-center justify-content-between ">
      <div className="col-md-6">
        
        <p className='lh-lg fs-4'>The relationship between the business and its customers is elevated through engagement.<br/>

Ariadne Engagement allows you to give personalized offers and valuable product information to your customers in real time when they need it the most.
</p>
        </div>
      <div className="col-md-5">
        <img src={h1} alt="" className='img-fluid rounded shadow'/>
        </div>
      </div>

        

        



        </div>
        <div className="container">
        <div className="row align-items-center justify-content-between m-5 py-5">
          <div className="col-md-6">
            <img src={Phone} alt="" className='img-fluid'/>
            </div>

           
          <div className="col-md-5">
            <h3>Unlock Hyperlocal Marketing</h3>
            <p>We offer businesses the ability to send visitors dynamic and customised promotions based on their location and previous interests.</p>
            <h3>Enable Real-Time Recommendations</h3>
            <p>Do you have a sweet spot in your business that you'd like to introduce to your customers? We assist you in sending real-time customised recommendations to customers.</p>
            <h3>Reviews Make The Deal</h3>
            <p>New Customers make their purchase decision based on reviews and ratings. We enable and encourage customers to provide feedbacks and surveys.</p>
            </div>
            
          </div>
        </div>
        <div class=" container-fluid p-5 mb-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-3'>Here is an example</h1>
            <p className='lh-lg fs-5'>A customer walks into the store and spends the most time in the shirts section. In the end, she walks away without buying an item. About the exit, she receives a text saying “Get a 20% discount on shirts with the code DISC20, today only!” and walks back in to make a discounted purchase, which benefits both the customer and the business.</p>
              </div>
            
            </div>
          </div>

          <div className="container my-4">
            <div className="row align-items-center justify-content-between">
             
              <div className="col-md-5">
                <h3 className='mb-3'>All-in-One Platform</h3>
                <p className=' fs-5'>Ariadne connects the data from your store to your CRM system, allowing you to run targeted marketing campaigns. Ariadne also assists for a complete perspective of consumer behavior that includes both online and on-premises activity.</p>

                <h3 className='mb-3'>Design Efficient Campaigns </h3>
                <p className=' fs-5'>Measure the success of your campaigns, e.g., a temporary theme park, and compare results</p>
                </div>
                <div className="col-md-6">

                  <img src={somescreen} className='img-fluid' alt="" /> 
                  </div>
              </div>
            </div>
            <div class="container-fluid p-5 mb-5 bg-black text-white text-center font-weight-bold align-items-center">
           
           
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-3'>Privacy First!</h1>
            <p className='lh-lg fs-5'>Our experience shows that most customers are happy to opt-in and share information to benefit from the promotions and the additional services. At Ariadne Maps, we put the privacy of customers first and establish a reliable relationship between the customers and the businesses.</p>
              </div>
            
            </div>
            
          </div>
          <div className="container text-center m-5 p-3">
              <h1 class='mb-5'>With a simple tap</h1>
              <div className="row mt-5 justify-content-between">
                <div className="col-md-3">
                  <img src={scan} alt="" className='img-fluid'/>
                  <h6 className='mt-5'>Let your customers simply tap their phones or scan a QR code</h6>
                  </div>
                  <div className="col-md-3">
                  <img src={somescreen} alt=""  className='img-fluid'/>
                  <h6 className='mt-5'>View them automatically added to your customized CRM tool</h6>
                  </div>
                  <div className="col-md-3">
                  <img src={phone2} alt=""  className='img-fluid'/>
                  <h6 className='mt-5'>Notify your customers of promotions etc. based on their location behaviour (visit frequency, nearby location, dwell time) with SMS, push notifications, email or even social media</h6>
                  </div>
                </div>
              </div>


              <div class="container-fluid p-5 mt-5 bg-black text-white text-center font-weight-bold align-items-center">
           
            
            
            <div className="row align-items-center justify-content-center">
              <div className="col-8">
              <h1 class='mb-5'>Work Together?</h1>
              <button type="button" class="btn btn-success">Let's Talk</button>
              </div>
            
            </div>
            
            
          </div>
  </main>
</div>;
}

export default Engagement;
