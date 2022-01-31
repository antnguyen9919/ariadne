


import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #222;
    
    
    display: flex;
    
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    background: url("https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80") no-repeat;
      background-size: cover;
    
`
export const HeroBg = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    
    width: 100%;
    height: 100%;
    object-fit: cover; 
    background: #232a34;
    

    @media screen and (max-width: 480px){
        display: none;
    }
   

    `


export const HeroContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    } 

`
export const HeroH2 = styled.h2`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    text-shadow:
		-1px -1px 0 #000,
		1px -1px 0 #000,
		-1px 1px 0 #000,
		1px 1px 0 #000;
    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    } 
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

