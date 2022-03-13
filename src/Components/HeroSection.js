import React from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroBtnWrapper} from './HeroElements';

import Wall from '../Resources/Videos/Wall.mp4';
import Button from './Button';
import './hero.css'
import { Link } from 'react-router-dom';
import Home from '../Home';


const HeroSection = () => {
   


    return (
        <HeroContainer>
                <HeroBg>
                    
                        <VideoBg  autoPlay loop muted src = {Wall} type = 'video/mp4' poster ='https://images.ctfassets.net/9mt55bm0937w/1VhXxVR2AP6jpbAaXKdr4I/6ba92dd0b690f2b59fc2caae3991504f/Key-Visual_Flexible-Office_Frankfurt_Wiesenh__ttenplatz.jpg' />
                        <img src = "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80" style = {{objectFit: 'cover'}}/>
                </HeroBg>

                <HeroContent >
                    <div className='container-fluid px-4 text-light'>
                        
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <h1 className='display-5 lh-md fw-bold mb-4'>Get
To Know
Your Customers!</h1>
                        <p class='fs-5 mb-4'>Turn your existing customer traffic into an additional source of revenue.</p>
                        <button type="button" class="btn btn-danger btn-lg">Let's Talk</button>

                            </div>
                        </div>
                    
                    </div>
                    
                  
                   
                </HeroContent>



        </HeroContainer>





    )



}

export default HeroSection