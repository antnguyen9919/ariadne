import React from 'react';
import Opening from '../Components/Opening';

function Home() {
  return <div>

        <Opening/>




        <div className = 'text'>
            <h1>Hello</h1>
            <p>Unlock the value of your data and multiply your returns! Ariadne is considered to be the Google Analytics of the physical world. Ariadne helps you to analyze your visitors behavior, it consults you on strategies, and provides you with recommendations for the future.</p>
        </div>


      {/* <video src = "/videos/home.mp4" width="100%"  /> */}
      <video controls width="100%" >
            <source src = "../Resources/videos/video-1.mp4" type = "video/mp4"/>
            Your browser does not support the video tag.

      </video>
  </div>;
}

export default Home;
