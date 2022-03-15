import React from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroBtnWrapper} from './HeroElements';

import Wall from '../Resources/Videos/Wall.mp4';
import Hero from '../Resources/Videos/Hero.mov';
import Button from './Button';
// import './hero.css'
import { Link } from 'react-router-dom';
import Home from '../Home';


const HeroSection = () => {
   


    return (
        <HeroContainer>
                <HeroBg>
                    
                        <VideoBg  autoPlay loop muted src = {Hero} type = 'video/mov' poster ='https://images.ctfassets.net/9mt55bm0937w/1VhXxVR2AP6jpbAaXKdr4I/6ba92dd0b690f2b59fc2caae3991504f/Key-Visual_Flexible-Office_Frankfurt_Wiesenh__ttenplatz.jpg' />
                        {/* <img src = "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80"/> */}
                </HeroBg>

                <HeroContent >
                    
                    
                    <div className='container px-3  text-light '>
                        
                        <div className="row align-items-center">
                            <div className=" col-md-5 col-sm-10">
                                <h1 style ={{fontFamily:'Poppins'}} className='mb-3 display-5'>People Flow To Actionable Insights</h1>
                        <p class='my-2' style ={{fontFamily:'Poppins'}}>Turn your existing customer traffic into an additional source of revenue</p>
                        <button type="button" class="btn btn-danger btn-md mt-3">Let's Talk</button>

                            </div>
                        </div>
                    
                    </div>
                    
                    
                  
                   
                </HeroContent>


in
        </HeroContainer>
        





    )



}

export default HeroSection