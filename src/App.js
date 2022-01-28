
import './App.css';
import React, { useEffect } from 'react';
import Home from './Home';
import {Routes,Route, useLocation} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Company from './Pages/Company';
import Products from './Pages/Products';
import Industries from './Pages/Industries';
import WhyAriadne from './Pages/WhyAriadne';



import Analytics from './Pages/Products/Analytics';
import Mapping from './Pages/Products/Mapping';
import Engagement from './Pages/Products/Engagement';
import Navigation from './Pages/Products/Navigation';
// import Resources from './Pages/Products/Resources';

import Retail from './Pages/Industries/Retail';
import Mall from './Pages/Industries/Mall';
import Airport from './Pages/Industries/Airport';
import Transport from './Pages/Industries/Transport';
import Hospitality from './Pages/Industries/Hospitality';
import Cities from './Pages/Industries/Cities';

import About from './Pages/Company/About';
import Blog from './Pages/Company/Blog';
import Career from './Pages/Company/Career';
import Contact from './Pages/Company/Contact';
import BootNav from './Components/Bootstrap/BootNav';
import Privacy from './Pages/Privacy';


function App() {
  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return <>{props.children}</>
  };


  return (
    <div className="App">
      
      <ScrollToTop>
      <NavBar/>
      
      <BootNav class = 'bootnav'/> 
          
          <Routes>
            <Route exact path = "/"  element = {<Home/>}/>
          <Route exact path = "/products" element = {<Products/>}/>
          <Route exact path = "/industries" element = {<Industries/>}/>
          <Route exact path = "/why-ariadne" element = {<WhyAriadne/>}/>
          <Route exact path = "/company" element = {<Company/>}/>
          <Route exact path = "/ariadne-analytics" element = {<Analytics/>}/>
          <Route exact path = "/ariadne-mapping" element = {<Mapping/>}/>
          <Route exact path = "/ariadne-navigation" element = {<Navigation/>}/>
          <Route exact path = "/ariadne-engagement" element = {<Engagement/>}/>
          <Route exact path = "/retail-stores" element = {<Retail/>}/>

          <Route exact  path = "/shopping-centres" element = {<Mall/>}/>
          <Route exact  path = "/airports" element = {<Airport/>}/>
          <Route exact  path = "/transportation" element = {<Transport/>}/>
          <Route exact  path = "/cities" element = {<Cities/>}/>
          <Route exact  path = "/hospitality" element = {<Hospitality/>}/>

          <Route exact  path = "/about-us" element = {<About/>}/>
          <Route exact  path = "/blog" element = {<Blog/>}/>
          <Route exact  path = "/careers" element = {<Career/>}/>
          <Route exact  path = "/contact" element = {<Contact/>}/>
          <Route exact  path = "/privacy" element =  {<Privacy/>}/>
          </Routes>
          <Footer/>
          </ScrollToTop>
          
    </div>
  );
}

export default App;
