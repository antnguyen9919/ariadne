import React from 'react';
import './Sidebar.css';

export default function Sidebar() {
  return <div className='sidebar'>
      <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img src = "https://media.gq-magazin.de/photos/60ec0e9411aa062eef6d7b19/3:4/w_1500,h_2000,c_limit/Ronaldo-GettyImages-1325777568.jpg" width="120px" alt = ''/>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cumque debitis, recusandae illo numquam dicta rem delectus facere facilis ratione blanditiis illum, ad totam quisquam maxime in laboriosam esse itaque ipsa eius vitae! Et corrupti dolorem numquam praesentium maxime. Assumenda, voluptates beatae at quo enim ab corporis nesciunt dolorum possimus.</p>
      </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Mapping</li>
            <li className="sidebarListItem">Smart Office</li>
            <li className="sidebarListItem">Data</li>
            <li className="sidebarListItem">Navigation</li>
            <li className="sidebarListItem">Something</li>
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
