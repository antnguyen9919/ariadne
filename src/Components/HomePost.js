import React from 'react'
import './homepost.css'
const HomePost = ({title,texts, image, color}) => {
  return (
    <div id = {color} className = 'hp-main'>
        <div className="body">
                
            <div className="text">
                <h1>{title}</h1>
                {texts}</div>
                
            
            <img src = {image}  alt = "sas" />
        </div>
    </div>
  )
}

export default HomePost