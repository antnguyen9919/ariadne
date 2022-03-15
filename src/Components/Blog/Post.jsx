import React from 'react';
import './Post.css';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import {marked} from 'marked';
import { Link } from 'react-router-dom';
export default function Post({article}) {
  const {title, body,slug} = article.fields
  const postDescription = marked(body)


  return <div className='post'>
      <img className='postImg' src ="https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"  alt = ""/>

    <div className="postInfo">
        <div className="postCats">
            {/* <span className="postCat">Music</span>
            <span className="postCat">Life</span> */}
        </div>
        <span className="postTitle">
            
            <Link to = {"/blog/"+ slug} >{title}</Link>
        </span>
        <hr/>
        {/* <span className="postDate">1 hour ago</span> */}
    </div>
    <section dangerouslySetInnerHTML={{__html: postDescription}} className='postDesc'/>

    
  </div>;
}
