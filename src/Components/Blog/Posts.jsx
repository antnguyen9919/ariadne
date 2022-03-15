import React from 'react';
import Post from './Post';
import './Posts.css';

function Posts({posts}) {
  return <div className='posts'> 
      {/* <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/> */}
      {posts.map((article,index) => <Post article= {article}   key = {index}/>)}
      
  </div>;
}

export default Posts;
