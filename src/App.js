
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
          
          <Routes>
            <Route path = "/" element = {<Home/>}/>
          <Route path = "/products" element = {<Products/>}/>
          <Route path = "/industries" element = {<Industries/>}/>
          <Route path = "/why-ariadne" element = {<WhyAriadne/>}/>
          <Route path = "/company" element = {<Company/>}/>
          <Route path = "/ariadne-analytics" element = {<Analytics/>}/>
          <Route path = "/ariadne-mapping" element = {<Mapping/>}/>
          <Route path = "/ariadne-navigation" element = {<Navigation/>}/>
          <Route path = "/ariadne-engagement" element = {<Engagement/>}/>
          <Route path = "/retail-stores" element = {<Retail/>}/>

          <Route path = "/shopping-centres" element = {<Mall/>}/>
          <Route path = "/ariadne-test/airports" exact element = {<Airport/>}/>
          <Route path = "/transportation" element = {<Transport/>}/>
          <Route path = "/cities" element = {<Cities/>}/>
          <Route path = "/hospitality" element = {<Hospitality/>}/>

          <Route path = "/about-us" element = {<About/>}/>
          <Route path = "/blog" element = {<Blog/>}/>
          <Route path = "/careers" element = {<Career/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          </Routes>
          <Footer/>
          </ScrollToTop>
          
    </div>
  );
}

export default App;
