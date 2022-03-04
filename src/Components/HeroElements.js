


import styled from "styled-components";

export const HeroContainer = styled.div`
    background-color: black;
    margin-bottom: -100px;
    
    display: flex;
    top: -150px;
    justify-content: flex-start;
    align-items: center;
    padding: 0 30px;
    height: 125vh;
    position: relative;
    z-index: 1;
    
      

      @media screen and(max-width: 480px){
        display: flex;
    top: 0px;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    min-height: 110vh;
    position: relative;
    z-index: 1;

      }
    
`
export const HeroBg = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 125vh;
    overflow: hidden;
`
export const VideoBg = styled.video`
    
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #232a34;
    

    @media screen and (max-width: 760px){
        display: none;
    }
   

    `


export const HeroContent = styled.div`
    z-index:3;
    width: 40vw;
    height: 50vh;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    /* border: 1px red solid; */
`   
export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: start;
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
    text-align:start;
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
    
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* border:red solid 1px; */
    

`


