import React from 'react';
import './BootNav.css'
import white from '../../Resources/Photos/white.png';
import Asset15 from '../../Resources/Photos/Asset15.png';
import Asset16 from '../../Resources/Photos/Asset16.png';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import {Link} from 'react-router-dom';

const BootNav = () => {
  return <div class = "bnav">
      


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
  <Link to='/' > <img src={Asset16} alt="Ariadne Logo" width="140x"/>
                            
                            </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">

      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">

      <ul class="navbar-nav ms-auto">

        <li class="nav-item dropdown" id= 'roro'>

          <h5 class="nav-link dropdown active"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </h5>
          <ul id='kaka' class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link class="dropdown-item" to ="/ariadne-analytics">Ariadne Analytics</Link></li>
            <li><Link class="dropdown-item" to ="/ariadne-mapping">Ariadne Mapping</Link></li>
            <li><Link class="dropdown-item" to ="/ariadne-navigation">Ariadne Navigation</Link></li>
            <li><Link class="dropdown-item" to ="/ariadne-engagement">Ariadne Engagement</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown" id= 'roro'>
        <h5 class="nav-link dropdown active"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Industries
          </h5>
          
          <ul id='kaka' class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
         
                        <li><Link class="dropdown-item " to ="/retail-stores">Retail Stores</Link></li>
                        <li><Link class="dropdown-item" to ="/shopping-centres">Shopping Centres</Link></li>
                        <li> <Link class="dropdown-item" to ="/airports">Airports </Link></li>
                        <li> <Link class="dropdown-item" to ="/transportation">Transportation</Link></li>
                        <li><Link class="dropdown-item" to ="/cities">Cities</Link></li>
                        <li><Link class="dropdown-item" to ="/hospitality">Hospitalities</Link></li>
          </ul>
        </li>
        <li class="nav-item">
         
          <Link class="nav-link active" aria-current="page"  to ='/why-ariadne' >
                                <h5>Why Ariadne?</h5>
                             </Link>
        </li>
        <li class="nav-item dropdown" id = 'roro'>
        <h5 class="nav-link dropdown active"  id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </h5>
          <ul id = 'kaka' class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li>   <Link class="dropdown-item" to ="/about-us">About Us</Link>                                                 </li>
                  
            <li> <Link class="dropdown-item" to ="/careers">Careers</Link>                                                     </li>
            <li> <Link class="dropdown-item" to ="/blog">Blog</Link>                                               </li>
            <li> <Link class="dropdown-item" to ="/contact">Contact</Link>                                                       </li>
                       
                  
                        
          </ul>
        </li>
          
      </ul>
      <ul class="navbar-nav ms-auto">
      <li class="nav-item">
         
         <Link class="nav-link active" aria-current="page"  to ='/why-ariadne' >
                               <h5>Let's talk</h5>
                            </Link>
       </li>
        <li class="nav-item">
         
         <Link class="nav-link active" aria-current="page"  to ='/why-ariadne' >
                               <PersonOutlineIcon style = {{width: '100%'    }  } />
                               
                            </Link>
       </li>
       <li class="nav-item">
         
         <Link class="nav-link active" aria-current="page"  to ='/why-ariadne' >
                              <img src ='https://cdn-icons-png.flaticon.com/512/330/330523.png' alt='de'height='30px'/>
                            </Link>
       </li>
      </ul>
    </div>
  </div>
</nav>
  </div>;
};

export default BootNav;
