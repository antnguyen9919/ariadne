import React,{useState, useEffect} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

import white from '../Resources/Photos/white.png'
import black from '../Resources/Photos/black.png'





function NavBar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    
    const [navscroll, setNavbar] = useState(false);
    const [navbarLogo, setNavbarLogo] = useState(white);

 

    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 10) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
      
      useEffect(() => {
        changeLogo()
        // adding the event when scroll change Logo
        window.addEventListener("scroll", changeLogo)
      })
      const changeLogo = () => {
        if (window.scrollY >= 10) {
          setNavbarLogo(black)
        } else {
          setNavbarLogo(white)
        }
      }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
      })
      
      


    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(()=> {
        showButton();
    },[]);



    window.addEventListener('resize', showButton);


    

    return (
        <>
            <nav  className = {navscroll? 'nav-scroll':'navbarr'}>
                    <div className = 'navbar--container'>
                               
                       <div className='navbar-logo' > 
                        <Link to='/' >
                            
                            <img id = {navscroll?'logo-scroll' :'ariadne-logo'} src={navbarLogo} alt="Ariadne Logo" />
                            
                        </Link>
                        </div>
                           

                        

            
                    
                    <div className="navnav">
                    <ul className={click? 'nav--menu active': 'nav--menu' }>
                        <div class="dropdown">
                        <li className='nav--item'>
                            <Link to ='/products' className={navscroll?'nav-links-s':'nav--links'} >
                                Products <i class="fas fa-caret-down"></i>
                             </Link>
                            
                                                
    
                        </li>
                        <div class="dropdown-content"> 
                                
                                <Link to ="/ariadne-analytics">Ariadne Analytics</Link>
                                <Link to ="/ariadne-mapping">Ariadne Mapping</Link>
                                <Link to ="/ariadne-navigation">Ariadne Navigation</Link>
                                <Link to ="/ariadne-engagement">Ariadne Engagement</Link>
                                
                                                </div>
                        </div>
                        <div class="dropdown">
                        <li className='nav--item'>
                            <Link to ='/industries' className={navscroll?'nav-links-s':'nav--links'}>
                                Industries <i class="fas fa-caret-down"></i>
                             </Link>
                             
                                                
    
                        </li>
                        <div class="dropdown-content"> 
                        <Link to ="/retail-stores">Retail Stores</Link>
                        <Link to ="/shopping-centres">Shopping Centres</Link>
                        <Link to ="/airports">Airports </Link>
                        <Link to ="/transportation">Transportation</Link>
                        <Link to ="/cities">Cities</Link>
                        <Link to ="/hospitality">Hospitalities</Link>
                            
                                                </div>
                        </div>
                        <li className='nav--item'>
                            <Link to ='/why-ariadne' className={navscroll?'nav-links-s':'nav--links'}>
                                Why Ariadne?
                             </Link>
                        </li>

                        <div class="dropdown">
                        <li className='nav--item'>
                            <Link to ='/company' className={navscroll?'nav-links-s':'nav--links'}>
                                Company <i class="fas fa-caret-down"></i>
                             </Link>
                             
                                                
    
                        </li>
                        <div class="dropdown-content-c"> 
                        <Link to ="/about-us">About Us</Link>
                        <Link to ="/careers">Careers</Link>
                        <Link to ="/blog">Blog</Link>
                        <Link to ="/contact">Contact</Link>
                                
                               
                                                </div>
                        </div>

                        

                        
                    </ul>

                    </div>
                    
                    {button && <Link to ='/contact' ><button class={navscroll?"glow-on-hover":'normal-btn' } type="button">LET'S TALK!</button></Link>}
                    
                    
                    </div>



            </nav>
            
        
        
        </>
    )
}

export default NavBar
