import React from 'react';
import Header from '../../Components/Blog/Header';
import Posts from '../../Components/Blog/Posts';
import Sidebar from '../../Components/Blog/Sidebar';
import './Blog.css';
// import Single from './Single';

function Blog() {
  return <>
    <Header/>
    <div className="home">
      <Posts/>
      <Sidebar/>
      {/* <Single/> */}
    </div>
  </>;
}

export default Blog;
