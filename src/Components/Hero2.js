import React from 'react'
import './hero.css'
import backgroundvid from '../Resources/Videos/backgroundvid.mp4';
import ug from '../Resources/Photos/ug.gif'
import apple from '../Resources/Photos/apple.png';
import Button from './Button';

const Hero2 = () => {
  return (

    <div className = 'hero-sec'>
      
      <div className="bg">
      {/* <video id = 'bgvid' src = {backgroundvid} autoPlay loop muted type = 'video/mp4' poster ='https://images.ctfassets.net/9mt55bm0937w/1VhXxVR2AP6jpbAaXKdr4I/6ba92dd0b690f2b59fc2caae3991504f/Key-Visual_Flexible-Office_Frankfurt_Wiesenh__ttenplatz.jpg'/> */}
      <img src = 'https://www.xmple.com/wallpaper/gradient-black-linear-grey-2560x1440-c2-d3d3d3-000000-a-90-f-14.svg' width='100%'/>
    </div>

    <div className="float">
    <div className="content">
      <h1>Ariadne. Smart Decisions. Better returns.</h1>
      <Button buttonStyle='btn--outline' buttonSize='btn--medium'> 
                                Get started
                        </Button>
    </div>

    <div className="ima" >
        <img src = {ug} alt = "monitor" no-repeat />
        
    </div>
    </div>
    
      </div>
      
  )
}

export default Hero2