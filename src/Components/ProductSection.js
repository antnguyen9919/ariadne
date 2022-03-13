import React from 'react'
import './productsection.css'
import device2 from '../Resources/Photos/device2.png'
import floor from '../Resources/Photos/floor.png'
import screen from '../Resources/Photos/screen.png'
const ProductSection = () => {
  return (
    <div className = 'product-main '>
        
        <div className="container text-center m-5">
            <div className="align-item-center">
            <h3 class = 'display-6 fw-bold'>Get Started</h3>
            <p class = 'mt-4 fs-4'>Ariadne solution can be deployed on the premises just by plugging the devices in and requires no additional infrastructure.</p>
                </div>
            </div>


        
    <div className="container mb-5">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-12">
          <img src={floor} alt="" className="img-fluid" />
          <h4 class = 'pt-5'>Configuration</h4>
          <p>Let our team design a project based on your floor plan and industry.</p>
        </div>
        <div className="col-md-4">
          <img src={device2} alt="" className="img-fluid" />
          <h4 class = 'pt-5'>Installation</h4>
          <p>Simply plug the devices in the predetermined sockets.</p>
        </div>
        <div className="col-md-4">
          <img src={screen} alt="" className="img-fluid" />
          <h4 class = 'pt-5'>The Dashboard</h4>
          <p>Voila! Now you can make the most out of your existing traffic.</p>
        </div>
      </div>
    </div>


    </div>
  )
}



export default ProductSection