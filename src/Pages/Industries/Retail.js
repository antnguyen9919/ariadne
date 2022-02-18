import '../../App.css';
import React from 'react';
import retail from '../../Resources/Photos/Pages/retail.jpg';
import './Retail.css';
function Retail() {
  return <div>
  <img src = {retail} width="100%" height="800vh"  alt = "retail"/>
  <main>
  <h1>Retail Stores</h1>
  <h3>Are you a retailer who wants to understand your customer journey, provide the best store experience to your customers and optimize your product Placement in store? 
                                                 We help you achieve that! <br/>
</h3>
<h4>We, Ariadne Maps are a high technology company who expertise in providing location-based services for you to increase your conversion rates, calculate the footfall of your store, provide customer heat maps and much more.   Find out what you can do with Ariadne below! <br/><br/></h4>

<h5>Optimize the staff scheduling</h5>
<p>With the data we provide, allocate your staffs strategically empowering them to work as productively as possible and increase your customer satisfaction rates.</p>

<h5>Analyze the footfall rate</h5>
<p>We help you to monitor how many people enter your store in the given time for you to take actions to increase the footfall rate of your store.</p>

<h5>Find the best product placement </h5>
<p>With our precise data, analyze how many visitors have bought the product at different positions in your store and find the best position for your product.</p>

<h5>Increase your Space efficiency </h5>
<p>With the heatmaps of the customer journey we provide, analyze the areas where your customers are most likely to shop and utilize the space effectively.</p>

<h5>Increase your customer experience </h5>
<p>We help you to provide the best possible customer experience in your store for your customers. We help you to understand the touchpoints of your customer´s journey so that you can increase your customer engagement and spending.</p>

<h5>Provide precise dynamic promotions and discounts</h5>
<p>We found that 93% of the consumers use promotions and discounts, we help you to strategize your marketing budget and use it in most effective possible way so that you can provide dynamic offers to your beloved customers.</p>
  </main>
</div>;
}

export default Retail;
