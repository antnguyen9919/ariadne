import '../../App.css';
import React from 'react';
import career from '../../Resources/Photos/Pages/career.jpg';
function Career() {
  return <div>
  <img src = {career} width="100%" alt = "career"/>
  <main>
  <div className="container p-5 m-5">
  <h1>Join Us</h1>
  <h4>Do you want to extend your boundaries? Do you enjoy working in international teams? Ariadne Maps

offers a dynamic environment for talented individuals who are excited to innovate and disrupt a huge industry!</h4>
  </div>

  <div className="container">
    <h1>Open Positions</h1>
    <p>Ariadne Maps is a rapidly growing company on its way to disrupt a huge industry. We have a vision to be the Google Analytics of physical world, and the new GPS of indoor spaces. On our journey, we need talented members just like you. Check out the positions below and apply now! We are looking forward to meet you!</p>
  </div>
  <div className="container m-5 p-4">
    <div className="row mt-3">
      <h1>Technology</h1>
      
      <button class="btn btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><h3>Data Science</h3></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h3 id="offcanvasRightLabel">Data Scientist</h3>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  Munich, Germany <br/>
  Ariadne Maps is a Munich based high tech company that provides detailed indoor analytics and customer analytics with its cutting edge artificial intelligence approach. We make use of advanced artificial intelligence algorithms for precise and anonymous tracking of passengers and customers, to help companies optimize their infrastructure. <br/>

At Ariadne Maps, we value innovative ideas, personality, ambition and an open mind. We do appreciate different lifestyles and cultural backgrounds. Ariadne’s team comes from different nationalities, all working together inclusively and respectfully. <br/>

We are currently looking for: Data Scientist who could join the technology team at Ariadne Maps and improve disruptive technology powered by state-of-the-art techniques.
  </div>
</div>
      <p>Contribute end-to-end for data science projects, from data processing, to training, evaluating, to deploying and monitoring, understand business objectives and translate them into solutions that leverage machine learning…</p>
    </div>
    <div className="row mt-3">
      <h1>Business</h1>
      <h3>Social Media</h3>
      <p>Strategize and enable our growth: Ideate, create and launch content related to building our brand and reach. Keep constant track of data and adapt the content in order to improve performance, make organic social a channel for growth…</p>
      <h3>Business Development Representative</h3>
      <p>

Generate and nurture leads through digital/mailing/phone, lead opportunities of change as they relate to campaign and lead generation gaps, partner with the Sales and Marketing team to enhance opportunities to deliver incremental revenue…</p>
    </div>
  </div>
  
  
    
  
  </main>
</div>;
}

export default Career;
