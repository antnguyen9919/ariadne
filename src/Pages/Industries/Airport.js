import '../../App.css';
import React from 'react';
import './Airport.css';
function Airport() {
  return <div className ="all">
    <div className = "start">
      {/* <img src = "http://cdn.cnn.com/cnnnext/dam/assets/210421142251-01-worlds-busiest-airports-2020-restricted.jpg" alt = 'airport'/> */}
        <h1>AIRPORTS</h1>
        <p>Ariadne Maps helps airports understand and serve their passengers better,

            provide useful services, and do more targeted marketing campaigns</p>



    </div>

    <main>
      <h1>What is a Real-Time Location System?</h1>
      <p>Real-time location systems (RTLS) enable you to digitally track the real-time location and movements of physical things throughout large indoor facilities. As a type of indoor positioning system, RTLS primarily leverage radio-frequency (RF) technologies like UWB, BLE and Chirp, as well as wireless devices, such as tracking tags and smartphones, alongside other integrated components, to continuously determine the position of people and objects in areas GPS is not able to reach. This delivers actionable location data that can be used to visualize the location of key personnel, assets, vital equipment and more on a live, indoor map or integrated into automated workflows and systems such as IoT-enabled safety applications, asset & supply chain management solutions and more.

It’s been estimated that GPS technology has created over $1.4 trillion dollars (RTI International) in value for U.S. private sector industries since it was made accessible in the 1980s. RTLS seek to unlock the same location-aware value that GPS has created in our outdoor world for indoor spaces and localized areas where GPS isn’t effective. A key foundation of digital innovation, digital twin technology, IoT, and Industry 4.0, real-time location systems are helping organizations in healthcare, manufacturing, warehouses, and more transform physical operations by improving safety, boosting efficiency and driving business results.</p>
    </main>


  </div>;
}

export default Airport;
