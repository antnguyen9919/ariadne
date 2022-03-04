import React from 'react'
import './productsection.css'
import device from '../Resources/Photos/device.png'
import floor from '../Resources/Photos/floor.png'
import screen from '../Resources/Photos/screen.png'
const ProductSection = () => {
  return (
    <div className = 'product-main' style = {{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', }}>
        <div className="ps-titel" style = {{textAlign: 'center'}}>
            <h3>Get Started</h3>
            <p style = {{fontSize: '0.6em'}}>Ariadne solution can be deployed on the premises just by plugging the devices in and requires no additional infrastructure.</p>
        </div>
           <div className="cards-section" style = {{display: 'flex', alignItems:'space-between', justifyContent:'center'}}>
               
               <div><Karte
                image = {floor}
                title = 'Configuration' text = 'Let our team design a project based on your floor plan and industry.'/></div>
               <div><Karte 
               image = {device}
               title = 'Installation' text = 'Simply plug the devices in the predetermined sockets.'/></div>
               <div><Karte 
               image = {screen}
               title = 'The Dashboard' text = 'Voila! Now you can make the most out of your existing traffic.'/></div>
               
               
               
               </div> 
    </div>
  )
}

const Karte = ({image, title, text})=>{
    return (
        <div style = {{width:'15rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',justifyContent : 'space-between'}}>
            <img src = {image} width= {'180px'} height = {'120px'} />
            <h4>{title}</h4>
            <p style = {{fontSize:'0.5em'}}>{text}</p>
        </div>
    )

}

export default ProductSection