import React from 'react';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroBtnWrapper} from './HeroElements';
import backgroundvid from '../Resources/Videos/backgroundvid.mp4';
import Button from './Button';


const HeroSection = () => {
   


    return (
        <HeroContainer>
                <HeroBg>
                        <VideoBg id = "bgvid" autoPlay loop muted src = {backgroundvid} type = 'video/mp4' poster ='https://images.ctfassets.net/9mt55bm0937w/1VhXxVR2AP6jpbAaXKdr4I/6ba92dd0b690f2b59fc2caae3991504f/Key-Visual_Flexible-Office_Frankfurt_Wiesenh__ttenplatz.jpg' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Get
To Know
Your Customers!</HeroH1>
                    <HeroH2>
                    Ariadne. Smart Decisions. Better returns.
                    </HeroH2>
                    <HeroBtnWrapper>
                        <Button buttonStyle='btn--outline' buttonSize='btn--medium'> 
                                Get started
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>



        </HeroContainer>





    )



}

export default HeroSection