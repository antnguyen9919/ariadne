import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src = "https://i.pinimg.com/originals/4a/f1/c5/4af1c50c8c0538ede7ad9d3d88406ca1.png" width="120px" alt = ''/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cumque debitis, recusandae illo numquam dicta rem delectus facere facilis ratione blanditiis illum, ad totam quisquam maxime in laboriosam esse itaque ipsa eius vitae! Et corrupti dolorem numquam praesentium maxime. Assumenda, voluptates beatae at quo enim ab corporis nesciunt dolorum possimus.</p>
      </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        
        <ul className="sidebarList">
            <div className = "cat-col">
            <li className="sidebarListItem">Mapping</li>
            <li className="sidebarListItem">Smart Office</li>
            <li className="sidebarListItem">Data</li>
            </div>
            <div className = "cat-col">
            <li className="sidebarListItem">Navigation</li>
            <li className="sidebarListItem">Something</li>
            <li className="sidebarListItem">Something</li>
            </div>
            
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-facebook-square"></i>
            <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
        </div>
  </div>;
}
