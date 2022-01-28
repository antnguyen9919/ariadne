import React from 'react';
import './Header.css';
function Header() {
  return <div className='header'>
      <div className="headerTitles">
          <span className='headerTitleSm'>React and Node</span>
          <span className='headerTitleLg'>Blog</span>
      </div>
      <img className='headerImg' src = 'https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg' alt = 'blog' width='100%'/>
  </div>;
}

export default Header;
