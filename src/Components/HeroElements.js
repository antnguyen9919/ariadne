


import styled from "styled-components";

export const HeroContainer = styled.div`
    background-color: rgba(47, 48, 58, 1);
    margin-bottom: -40px;
    
    
    top: -50px;
    justify-content: flex-start;
    
    
    height: 95vh;
    position: relative;
    z-index: 1;
    /* margin-bottom:100px; */
    overflow: hidden;
    
      

      @media screen and(max-width: 760px){
        display: flex;
    top: 0px;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 150vh;
    position: relative;
    z-index: 1;
    margin-bottom: 200px;

      }
    
`
export const HeroBg = styled.div`

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`
export const VideoBg = styled.video`
    
    width: 100%;
    height: 100%;
    object-fit:cover ;
    background: rgba(47, 48, 58, 1);
    

    @media screen and (max-width: 760px){
        display: none;
    }
   

    `


export const HeroContent = styled.div`
    z-index:3;
    padding-top: 10px;
    width: 100%;
    height:100%;
    position: absolute;
     display: flex;
     align-items: center;
   
    
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
    @media screen and (min-width: 1920px){
        font-size: 75px;
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
    @media screen and (min-width: 1920px){
        font-size: 40px;
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


