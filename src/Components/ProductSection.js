import React from 'react'
import './productsection.css'
import device2 from '../Resources/Photos/device2.png'
import floor from '../Resources/Photos/floor.png'
import screen from '../Resources/Photos/screen.png'
const ProductSection = () => {
  return (
    <div className = 'product-main '>
        
        <div className="container text-center">
            <div className="row align-item-center">
            <h3>Get Started</h3>
            <p >Ariadne solution can be deployed on the premises just by plugging the devices in and requires no additional infrastructure.</p>
                </div>
            </div>


        <div className="container justify-content-center align-items-center">
        <div class="card-group justify-content-center">
  <div class="card border-light justify-content-center">
    <img src={floor} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Configuration</h5>
      <p class="card-text">Let our team design a project based on your floor plan and industry.</p>
    </div>
    
  </div>
  <div class="card border-light">
    <img src={device2} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Installation</h5>
      <p class="card-text">Simply plug the devices in the predetermined sockets.</p>
    </div>
    
  </div>
  <div class="card border-light">
    <img src={screen} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">The Dashboard</h5>
      <p class="card-text">Voila! Now you can make the most out of your existing traffic.</p>
    </div>
    
  </div>
</div>
            </div>
    </div>
  )
}



export default ProductSection