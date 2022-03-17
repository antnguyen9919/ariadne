// import React, { Component } from "react";
// import Slider from "react-slick";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import './testimonials.css'


// export default class Testimo extends Component {
    
//   render() {
//     const NextArrow = ({ onClick }) => {
//         return (
//           <div className="arrow next" onClick={onClick}>
//             <FaArrowRight />
//           </div>
//         );
//       };
    
//       const PrevArrow = ({ onClick }) => {
//         return (
//           <div className="arrow prev" onClick={onClick}>
//             <FaArrowLeft />
//           </div>
//         );
//       };


//     const settings = {
//         infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
    
//     centerPadding: 0,
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ],nextArrow: <NextArrow />,
//       prevArrow: <PrevArrow />,
      
//     };
//     return (
//       <div className="container px-5 text-center align-items-center">
        
//         <Slider {...settings}>
//           <div className="border align-items-center justify-content-center" style ={{height:'300px'}}>

//           <div className="border"><img src="https://ariadnemaps.com/wp-content/uploads/2021/04/Grabert.png"   alt="..." width='50%' className=" border mx-auto"/></div>
//           <h1 className="text-center">sas</h1>
//           <p>Lorem ipsum dolor sit amet.</p>
//           </div>
//           <div className="border" style ={{height:'300px'}}>
//           <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/Atlantis.png" width='50%' className=" mx-auto border"  alt="..."/>
//           <h1>sas</h1>
//           <p>Lorem ipsum dolor sit amet.</p>
//           </div>
//           <div className="border" style ={{minHeight:'300vh'}}>
//           <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/DB.png" width='50%' className="mx-auto border"  alt="..."/>
//           <h1>sas</h1>
//           <p>Lorem ipsum dolor sit amet.</p>
//           </div>
//           <div className="border" style ={{height:'300px'}}>
//           <img src="https://ariadnemaps.com/wp-content/uploads/2021/04/Glasgow.png" width='50%' className="mx-auto border"  alt="..."/>
//           <h1>sas</h1>
//           <p>Lorem ipsum dolor sit amet.</p>
//           </div>
          
//         </Slider>
//       </div>
//     );
//   }
// }