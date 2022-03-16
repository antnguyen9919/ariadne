import "./vidCarousel.css";
import { useState } from "react";
import Slider from "react-slick";
import vid1 from './ResComp/vid1.png'
import vid2 from './ResComp/vid2.png'
import vid3 from './ResComp/vid3.png'
import vid4 from './ResComp/vid4.png'
import video1 from '../Resources/Videos/VidCaro/video1.mp4'
import video2 from '../Resources/Videos/VidCaro/video2.mp4'
import video3 from '../Resources/Videos/VidCaro/video3.mp4'
import video4 from '../Resources/Videos/VidCaro/video4.mp4'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [vid1,vid2,vid3,vid4];

function VideoCarousel({click}) {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="container my-5 py-5">
      <Slider {...settings}>
        {images.map((img, idx) => (
            
<div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            
            
            <img id ='vid-img' src={img} alt={img} 
            type="button" data-bs-toggle="modal" data-bs-target= {`#vid${idx}`} />
            
          </div>
            
          
          
        ))}
      </Slider>
    </div>
  );
}

export default VideoCarousel;