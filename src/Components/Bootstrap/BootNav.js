import React from 'react';
import './BootNav.css'
import white from '../../Resources/Photos/white.png';
import {Link} from 'react-router-dom';
const BootNav = () => {
  return <div class = "bnav">
      


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
  <Link to='/' > <img src={white} alt="Ariadne Logo" width="140x"/>
                            
                            </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <h6 class="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </h6>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link class="dropdown-item" to ="/ariadne-analytics">Ariadne Analytics</Link></li>
            <li><Link class="dropdown-item" to ="/ariadne-mapping">Ariadne Mapping</Link></li>
            <li><Link class="dropdown-item" to ="/ariadne-navigation">Ariadne Navigation</Link></li>
            <li><Link class="dropdown-item" to ="/ariadne-engagement">Ariadne Engagement</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
        <h6 class="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Industries
          </h6>
          
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
         
                        <li><Link class="dropdown-item" to ="/retail-stores">Retail Stores</Link></li>
                        <li><Link class="dropdown-item" to ="/shopping-centres">Shopping Centres</Link></li>
                        <li> <Link class="dropdown-item" to ="/airports">Airports </Link></li>
                        <li> <Link class="dropdown-item" to ="/transportation">Transportation</Link></li>
                        <li><Link class="dropdown-item" to ="/cities">Cities</Link></li>
                        <li><Link class="dropdown-item" to ="/hospitality">Hospitalities</Link></li>
          </ul>
        </li>
        <li class="nav-item">
         
          <Link class="nav-link active" aria-current="page"  to ='/why-ariadne' >
                                Why Ariadne?
                             </Link>
        </li>
        <li class="nav-item dropdown">
        <h6 class="nav-link dropdown-toggle"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </h6>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li>   <Link class="dropdown-item" to ="/about-us">About Us</Link>                                                 </li>
                  
            <li> <Link class="dropdown-item" to ="/careers">Careers</Link>                                                     </li>
            <li> <Link class="dropdown-item" to ="/blog">Blog</Link>                                               </li>
            <li> <Link class="dropdown-item" to ="/contact">Contact</Link>                                                       </li>
                       
                  
                        
          </ul>
        </li>
        <button className="normal-btn" type="button">LET'S TALK!</button>    
      </ul>
    </div>
  </div>
</nav>
  </div>;
};

export default BootNav;
