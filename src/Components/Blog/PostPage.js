import React,{useEffect,useState} from 'react'
import {marked} from 'marked';
import './Post.css'

function PostPage({article}) {
    const {title, body,slug} = article.fields
    const postDescription = marked(body)
    
    
    return (
    <div className="container-fluid my-5 py-4 border rounded" id='papa'>
        <img src="https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg" alt="" className='img-fluid' />
        <h3 class = 'my-5 text-center'>{title}</h3>
        <section id='in' className='fs-6' dangerouslySetInnerHTML={{__html: postDescription}}/>
        <hr />
    </div>
  )
}

export default PostPage