import React from 'react'
import Button from '../components/NavBar/Button';
// import '../App.css';
// import './Home.css';
import { Player } from 'video-react';

function VideoSection() {
    return (
        <div className = 'hero-container'>
            <video src = "/videos/home.mp4" autoPlay loop muted/>
            <h1>Get
To Know
Your Customers!</h1>
            <p>Ariadne. Smart Decisions. Better returns.</p>

            <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
            
        </div>
    )
}

export default VideoSection
