import React,{useState, useEffect} from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'

import white from '../Resources/Photos/white.png'






function NavBar() {
  
  
  
    
 

    return (
        <>
            <nav  className = 'navbarr'>
                    <div className = 'navbar--container'>
                               
                       <div className='navbar-logo' > 
                        <Link to='/' >
                            
                            <img id = 'ariadne-logo' src={white} alt="Ariadne Logo" />
                            
                        </Link>
                        </div>
                           

                        

            
                    
                    <div className="navnav">
                    <ul className='nav--menu'>
                        <div class="dropdown">
                        <li className='nav--item'>
                            <Link to ='/products' className='nav--links' >
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
                            <Link to ='/industries' className='nav--links'>
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
                            <Link to ='/why-ariadne' className='nav--links'>
                                Why Ariadne?
                             </Link>
                        </li>

                        <div class="dropdown">
                        <li className='nav--item'>
                            <Link to ='/company' className='nav--links'>
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
                    <div>
                    <Link to ='/contact' ><button class='normal-btn' type="button">LET'S TALK!</button></Link>
                    </div>
                   
                    
                    
                    </div>



            </nav>
            
        
        
        </>
    )
}

export default NavBar
