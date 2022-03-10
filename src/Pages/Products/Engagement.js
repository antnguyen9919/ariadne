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
    <div className="row">
      <div className="col-md-6 align-self-center">
        <h1>Ariadne Analytics</h1>
        <h6>Discover the potential of Ariadne Analytics for your business. Get to know your customers and explore the value behind it</h6>
        </div>
        <div className="col-md-6">
          <img src={phonewp} alt="" />
          </div>
      </div>
    </div>
  <main>
  
  <div className="container">
      <div className="row align-items-center justify-content-between ">
      <div className="col-md-6">
        
        <p>The relationship between the business and its customers is elevated through engagement.

Ariadne Engagement allows you to give personalized offers and valuable product information to your customers in real time when they need it the most.
</p>
        </div>
      <div className="col-md-6">
        <img src={h1} alt="" width = '70%' />
        </div>
      </div>

        <hr />

        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <img src={Phone} alt="" width={'80%'}/>
            </div>

           
          <div className="col-md-6">
            <h2>Unlock Hyperlocal Marketing</h2>
            <p>We offer businesses the ability to send visitors dynamic and customised promotions based on their location and previous interests.</p>
            <h2>Enable Real-Time Recommendations</h2>
            <p>Do you have a sweet spot in your business that you'd like to introduce to your customers? We assist you in sending real-time customised recommendations to customers.</p>
            <h2>Reviews Make The Deal</h2>
            <p>New Customers make their purchase decision based on reviews and ratings. We enable and encourage customers to provide feedbacks and surveys.</p>
            </div>
            
          </div>



        </div>
        <div style = {{height:'200px'}} class="p-3 mb-2 bg-dark text-white text-center font-weight-bold">
            <h1>Here is an example</h1>
            <p>A customer walks into the store and spends the most time in the shirts section. In the end, she walks away without buying an item. About the exit, she receives a text saying “Get a 20% discount on shirts with the code DISC20, today only!” and walks back in to make a discounted purchase, which benefits both the customer and the business.</p>
          </div>

          <div className="container">
            <div className="row align-items-center justify-content-between">
             
              <div className="col-md-6">
                <h4>All-in-One Platform</h4>
                <p>Ariadne connects the data from your store to your CRM system, allowing you to run targeted marketing campaigns. Ariadne also assists for a complete perspective of consumer behavior that includes both online and on-premises activity.</p>

                <h4>Design Efficient Campaigns </h4>
                <p>Measure the success of your campaigns, e.g., a temporary theme park, and compare results</p>
                </div>
                <div className="col-md-6">

                  <img src={somescreen} width = '100%' alt="" /> 
                  </div>
              </div>
            </div>
            <div style = {{height:'200px'}} class="p-3 mb-2 bg-dark text-white text-center font-weight-bold">
            <h1>Privacy First!</h1>
            <p>Our experience shows that most customers are happy to opt-in and share information to benefit from the promotions and the additional services. At Ariadne Maps, we put the privacy of customers first and establish a reliable relationship between the customers and the businesses.</p>
            
          </div>
          <div className="container text-center">
              <h2>With a simple tap</h2>
              <div className="row">
                <div className="col-md-4">
                  <img src={scan} alt="" width = '100%'/>
                  <h6>Let your customers simply tap their phones or scan a QR code</h6>
                  </div>
                  <div className="col-md-4">
                  <img src={somescreen} alt=""  width = '100%'/>
                  <h6>View them automatically added to your customized CRM tool</h6>
                  </div>
                  <div className="col-md-4">
                  <img src={phone2} alt=""  width = '100%'/>
                  <h6>Notify your customers of promotions etc. based on their location behaviour (visit frequency, nearby location, dwell time) with SMS, push notifications, email or even social media</h6>
                  </div>
                </div>
              </div>
              <div style = {{height:'200px'}} class="p-3 mb-2 bg-dark text-white text-center font-weight-bold justify-content-between">
            <div className="row">
            <h1>Work Together?</h1>

              </div>
            
            <button type="button" class="btn btn-success">Success</button>
            
            
          </div>
  </main>
</div>;
}

export default Engagement;
