import React from 'react';
import './Footer.css';
// import  Button from './Button';
import './NavBar.css';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>


    
      
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h3>Technology</h3>
            <Link to='/ariadne-mapping'>Ariadne Mapping</Link>
            <Link to='/ariadne-navigation'>Ariadne Navigation</Link>
            <Link to='/ariadne-analytics'>Ariadne Analytics</Link>
            <Link to='/ariadne-engagement'>Ariadne Engagement</Link>
            <Link to='/industries'>Industries</Link>
            <Link to='/data-lifecycle'>Data Lifecycle</Link>
          </div>
          <div class='footer-link-items'>
            <h3>Company</h3>
            <Link to='/about-us'>About Us</Link>
            <Link to='/why-ariadne'>Why Ariadne</Link>
            <Link to='/resources'>Resources</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/careers'>Careers</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          
          <div class='footer-link-items'>
            <h3>Social Media</h3>
            {/* <Link to='/'>Instagram <i class='fab fa-instagram' /></Link> */}
            
            <a href='https://www.facebook.com/ariadnemaps/'>Facebook <i class='fab fa-facebook-f' /></a>
            <a href='https://www.youtube.com/channel/UCetG3dxFlJrFno0ChaJ5VXQ'>Youtube <i class='fab fa-youtube' /></a>
            <a href='https://twitter.com/ariadne_maps'>Twitter <i class='fab fa-twitter' /></a>
            <a href='https://www.linkedin.com/company/ariadne-maps'>LinkedIn <i class='fab fa-linkedin' /></a>
          
           
            
          </div>
          <div class='footer-link-items'>
          <button className ='normal-btn-footer' type="button"><Link to ='/contact'>LET'S TALK!</Link></button>
            <p>Ariadne Maps GmbH

                Brecherspitzstraße 8

                  81541 München
                  </p>

                  <p>

                  +49 174 4079675

                  contact@ariadnemaps.com</p>
                  </div>


        </div>
      </div>
      <hr className = 'divider'/>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Ariadne Maps
             
            </Link>
          </div>
          <small class='website-rights'>© 2019 – 2021 Ariadne Maps GmbH. All rights reserved.</small>
          
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              Privacy Policy
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              Impressum
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;