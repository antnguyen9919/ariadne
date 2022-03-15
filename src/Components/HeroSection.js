import React from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroBtnWrapper} from './HeroElements';

import Wall from '../Resources/Videos/Wall.mp4';
import Hero from '../Resources/Videos/Hero.mov';
import Button from './Button';
import './hero2.css'
import { Link } from 'react-router-dom';
import Home from '../Home';


const HeroSection = () => {
   


    return (
        <HeroContainer id = 'hcc'>
                <HeroBg>
                    
                        <VideoBg  autoPlay loop muted src = {Hero} type = 'video/mov' poster ='https://images.ctfassets.net/9mt55bm0937w/1VhXxVR2AP6jpbAaXKdr4I/6ba92dd0b690f2b59fc2caae3991504f/Key-Visual_Flexible-Office_Frankfurt_Wiesenh__ttenplatz.jpg' />
                        {/* <img src = "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80"/> */}
                </HeroBg>

                <HeroContent >
                    
                    
                    <div className='container d-xxl-none px-3 mt-5 text-light' id = 'sasa'>
                        
                        <div className="row align-items-center justify-content-start">
                            <div className="col-md-5 col-sm-10 mt-1">
                                <h1 style ={{fontFamily:'Poppins'}} className='mb-3 lh-sm fw-bold text-left'>People Flow To<br/> Actionable Insights</h1>
                        <p class='my-2 lh-md ' style ={{fontFamily:'Poppins'}}>Turn your existing customer traffic into an additional<br/> source of revenue</p>
                        <button type="button" class="hero-button mt-3"><p class='my-1 mx-3     lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button>

                            </div>
                        </div>
                    
                    </div>
                    <div className='container-fluid d-none d-xxl-block px-3 mt-5 text-light' id = 'sasa'>
                        
                        <div className="row align-items-center justify-content-start">
                            <div className="col-md-5 col-sm-10 offset-1">
                                <h2 style ={{fontFamily:'Poppins'}} className='mb-3 display-3 fw-bold lh-sm text-left'>People Flow To<br/> Actionable Insights</h2>
                        <p class='my-2 lh-md fs-5' style ={{fontFamily:'Poppins'}}>Turn your existing customer traffic into an additional<br/> source of revenue</p>
                        <button type="button" class="hero-button mt-3"><p class='my-1 mx-3     lh-md' style ={{fontFamily:'Poppins'}}>Let's Talk</p></button>

                            </div>
                        </div>
                    
                    </div>
                    
                    
                  
                   
                </HeroContent>


in
        </HeroContainer>
        





    )



}

export default HeroSection